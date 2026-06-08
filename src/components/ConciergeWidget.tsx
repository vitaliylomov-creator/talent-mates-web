'use client'

// ═══════════════════════════════════════════════════════════════════
// TALENT MATES CONCIERGE WIDGET (React / Next.js App Router)
// ═══════════════════════════════════════════════════════════════════
// Drop-in client component. Renders a floating chat button bottom-right
// and a 380×600 panel that talks to the Supabase Edge Function.
//
// Mount once in src/app/layout.tsx inside <body>.
//
// Required env vars (Vercel + .env.local):
//   NEXT_PUBLIC_CONCIERGE_ENDPOINT
//   NEXT_PUBLIC_CONCIERGE_ANON_KEY
// ═══════════════════════════════════════════════════════════════════

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const ENDPOINT =
  process.env.NEXT_PUBLIC_CONCIERGE_ENDPOINT ||
  'https://kqvkyxwwflnturtwxlit.supabase.co/functions/v1/talent-mates-concierge'

const ANON_KEY =
  process.env.NEXT_PUBLIC_CONCIERGE_ANON_KEY ||
  'sb_publishable_JA7rS10M7Bg47zIJRosoXQ_G1h1Rjd_'

const QUICK_CHIPS = [
  "I'm a footballer",
  'My son or daughter plays football',
  'I represent a club',
  'Tell me about your products',
] as const

type Role = 'user' | 'assistant'
type Msg = { role: Role; text: string }

function newSessionId() {
  return 'web_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
}

export default function ConciergeWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [waiting, setWaiting] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)

  const messagesRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Initialise session ID on mount (client-only, avoids SSR mismatch)
  useEffect(() => {
    let id = window.localStorage.getItem('tm_session_id')
    if (!id) {
      id = newSessionId()
      window.localStorage.setItem('tm_session_id', id)
    }
    setSessionId(id)
  }, [])

  // Autoscroll on new message
  useEffect(() => {
    const el = messagesRef.current
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight
    })
  }, [messages, waiting])

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => textareaRef.current?.focus(), 280)
      return () => clearTimeout(t)
    }
  }, [open])

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 110) + 'px'
  }, [input])

  const canSend = useMemo(
    () => input.trim().length > 0 && !waiting,
    [input, waiting]
  )

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || waiting || !sessionId) return

      setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
      setInput('')
      setWaiting(true)

      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ANON_KEY}`,
            apikey: ANON_KEY,
          },
          body: JSON.stringify({
            session_id: sessionId,
            message: trimmed,
            user_metadata: {
              page_url: window.location.href,
              referrer: document.referrer,
              user_agent: navigator.userAgent,
            },
          }),
        })

        if (!res.ok) {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              text: "I'm having a technical issue right now. Please try again in a moment, or email talentmates@gmail.com.",
            },
          ])
          return
        }

        const data = (await res.json()) as { response?: string }
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: data.response ?? "I'll get back to you on that.",
          },
        ])
      } catch (err) {
        console.error('Concierge fetch error:', err)
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: "Something didn't go through. Please try again, or email talentmates@gmail.com.",
          },
        ])
      } finally {
        setWaiting(false)
      }
    },
    [sessionId, waiting]
  )

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (canSend) void sendMessage(input)
    }
  }

  const showGreeting = messages.length === 0

  return (
    <div id="tm-concierge" aria-live="polite">
      <button
        type="button"
        className={`tm-launcher${open ? ' is-open' : ''}`}
        aria-label={open ? 'Close Talent Mates chat' : 'Open Talent Mates chat'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="tm-close-x" aria-hidden="true">
          ×
        </span>
      </button>

      <div
        className={`tm-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-label="Talent Mates chat"
        aria-hidden={!open}
      >
        <div className="tm-header">
          <div className="tm-header-brand">
            <strong>Talent</strong> <span>Mates</span>
          </div>
          <div className="tm-header-status">
            <span className="tm-status-dot" />
            <span>Live</span>
          </div>
        </div>

        <div className="tm-messages" ref={messagesRef}>
          {showGreeting && (
            <>
              <div className="tm-greeting">
                <h2 className="tm-greeting-title">
                  Hi. I'm <em>Talent Mates</em>.
                </h2>
                <p className="tm-greeting-sub">
                  What brings you here today? I can introduce you to our
                  products or take a message for the team.
                </p>
              </div>

              <div className="tm-chips">
                {QUICK_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    className="tm-chip"
                    onClick={() => void sendMessage(chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`tm-msg ${
                m.role === 'user' ? 'tm-msg-user' : 'tm-msg-assistant'
              }`}
            >
              {m.text}
            </div>
          ))}

          {waiting && (
            <div className="tm-typing" aria-label="Talent Mates is typing">
              <span className="tm-typing-dot" />
              <span className="tm-typing-dot" />
              <span className="tm-typing-dot" />
            </div>
          )}
        </div>

        <div className="tm-input-wrap">
          <div className="tm-input-row">
            <textarea
              ref={textareaRef}
              className="tm-input"
              placeholder="Write a message…"
              rows={1}
              aria-label="Your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={waiting}
            />
            <button
              type="button"
              className="tm-send"
              aria-label="Send message"
              disabled={!canSend}
              onClick={() => void sendMessage(input)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <p className="tm-footer-note">
            Powered by Talent Mates ·{' '}
            <a href="/privacy">Privacy</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        #tm-concierge,
        #tm-concierge :global(*) {
          box-sizing: border-box;
        }

        .tm-launcher {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #794dc6;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(121, 77, 198, 0.42);
          z-index: 999998;
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          font-family: var(--font-dm-sans), system-ui, sans-serif;
        }
        .tm-launcher:hover {
          transform: scale(1.06);
          box-shadow: 0 12px 36px rgba(121, 77, 198, 0.55);
        }
        .tm-launcher:active {
          transform: scale(0.96);
        }
        .tm-launcher :global(svg) {
          width: 26px;
          height: 26px;
          stroke: #fff;
        }
        .tm-launcher.is-open :global(svg) {
          display: none;
        }
        .tm-close-x {
          display: none;
          color: #fff;
          font-size: 24px;
          font-weight: 300;
          line-height: 1;
        }
        .tm-launcher.is-open .tm-close-x {
          display: block;
        }
        .tm-launcher::before {
          content: '';
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6dffb3;
          box-shadow: 0 0 0 0 rgba(109, 255, 179, 0.7);
          animation: tm-pulse 2.4s ease-in-out infinite;
        }
        .tm-launcher.is-open::before {
          display: none;
        }
        @keyframes tm-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(109, 255, 179, 0.55);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(109, 255, 179, 0);
          }
        }

        .tm-panel {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 380px;
          height: 600px;
          max-height: calc(100vh - 130px);
          background: #794dc6;
          border-radius: 20px;
          box-shadow: 0 24px 60px rgba(20, 10, 40, 0.35);
          z-index: 999999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px) scale(0.96);
          pointer-events: none;
          transition:
            opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
          font-family: var(--font-dm-sans), system-ui, sans-serif;
        }
        .tm-panel.is-open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .tm-header {
          padding: 22px 24px 18px;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .tm-header-brand {
          flex: 1;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fff;
        }
        .tm-header-brand strong {
          font-weight: 500;
        }
        .tm-header-brand span {
          color: rgba(255, 255, 255, 0.55);
          font-weight: 400;
        }
        .tm-header-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
        }
        .tm-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6dffb3;
          animation: tm-pulse-soft 2s ease-in-out infinite;
        }
        @keyframes tm-pulse-soft {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        .tm-messages {
          flex: 1;
          overflow-y: auto;
          padding: 22px 20px 8px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.18) transparent;
        }
        .tm-messages::-webkit-scrollbar {
          width: 4px;
        }
        .tm-messages::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.18);
          border-radius: 2px;
        }

        .tm-greeting {
          padding: 4px 6px 18px;
        }
        .tm-greeting-title {
          font-family: var(--font-dm-serif), Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          line-height: 1.15;
          color: #fff;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .tm-greeting-title em {
          color: rgba(255, 255, 255, 0.35);
          font-style: italic;
        }
        .tm-greeting-sub {
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 300;
          margin: 0;
        }

        .tm-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 4px 4px 8px;
        }
        .tm-chip {
          background: rgba(255, 255, 255, 0.06);
          border: 0.5px solid rgba(255, 255, 255, 0.2);
          border-radius: 100px;
          padding: 7px 13px;
          font-size: 12px;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          font-weight: 400;
          color: #fff;
          cursor: pointer;
          transition:
            background 0.18s,
            border-color 0.18s,
            transform 0.15s cubic-bezier(0.22, 1, 0.36, 1);
          letter-spacing: 0.01em;
        }
        .tm-chip:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .tm-chip:active {
          transform: scale(0.97);
        }

        .tm-msg {
          max-width: 88%;
        }
        .tm-msg-user {
          align-self: flex-end;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 14px 14px 4px 14px;
          padding: 11px 15px;
          font-size: 14px;
          line-height: 1.5;
          color: #fff;
          font-weight: 300;
        }
        .tm-msg-assistant {
          align-self: flex-start;
          background: #6b42b5;
          border-radius: 4px 14px 14px 14px;
          padding: 12px 16px;
          font-size: 14px;
          line-height: 1.55;
          color: #fff;
          font-weight: 300;
          border: 0.5px solid rgba(255, 255, 255, 0.1);
          white-space: pre-wrap;
        }

        .tm-typing {
          align-self: flex-start;
          background: #6b42b5;
          border-radius: 4px 14px 14px 14px;
          padding: 14px 18px;
          display: flex;
          gap: 4px;
          border: 0.5px solid rgba(255, 255, 255, 0.1);
        }
        .tm-typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          animation: tm-bounce 1.3s infinite ease-in-out;
        }
        .tm-typing-dot:nth-child(2) {
          animation-delay: 0.15s;
        }
        .tm-typing-dot:nth-child(3) {
          animation-delay: 0.3s;
        }
        @keyframes tm-bounce {
          0%,
          80%,
          100% {
            transform: scale(0.7);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .tm-input-wrap {
          padding: 14px 16px 18px;
          border-top: 0.5px solid rgba(255, 255, 255, 0.1);
          background: #794dc6;
        }
        .tm-input-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          background: rgba(255, 255, 255, 0.06);
          border: 0.5px solid rgba(255, 255, 255, 0.2);
          border-radius: 14px;
          padding: 8px 8px 8px 14px;
          transition:
            border-color 0.18s,
            background 0.18s;
        }
        .tm-input-row:focus-within {
          border-color: rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.09);
        }
        .tm-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #fff;
          resize: none;
          min-height: 24px;
          max-height: 110px;
          padding: 4px 0;
          line-height: 1.4;
        }
        .tm-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
        .tm-send {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            opacity 0.18s,
            transform 0.15s;
          flex-shrink: 0;
        }
        .tm-send:hover {
          opacity: 0.85;
          transform: scale(1.04);
        }
        .tm-send:active {
          transform: scale(0.95);
        }
        .tm-send:disabled {
          opacity: 0.35;
          cursor: not-allowed;
          transform: none;
        }
        .tm-send :global(svg) {
          width: 16px;
          height: 16px;
          stroke: #794dc6;
        }

        .tm-footer-note {
          margin-top: 10px;
          font-size: 10px;
          letter-spacing: 0.06em;
          color: rgba(255, 255, 255, 0.35);
          text-align: center;
          font-weight: 300;
        }
        .tm-footer-note a {
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 600px) {
          .tm-panel {
            bottom: 0;
            right: 0;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            max-height: 100%;
            border-radius: 0;
          }
          .tm-launcher {
            bottom: 18px;
            right: 18px;
          }
        }
      `}</style>
    </div>
  )
}
