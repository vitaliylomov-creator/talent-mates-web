'use client'

import { useState, useCallback } from 'react'
import Splash   from '@/components/ui/Splash'
import Topbar   from '@/components/ui/Topbar'
import HomeNav  from '@/components/ui/HomeNav'

export default function HomePage() {
  // splashDone → triggers entrance animations on all other elements
  const [splashDone, setSplashDone] = useState(false)

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true)
  }, [])

  return (
    <>
      {/* Noise texture — purely decorative */}
      <div className="bg-noise" aria-hidden />

      {/* Splash — only rendered until it calls onComplete */}
      {!splashDone && <Splash onComplete={handleSplashComplete} />}

      {/* Top bar — fades in after splash */}
      <Topbar visible={splashDone} />

      {/* Main navigation */}
      <HomeNav visible={splashDone} />
    </>
  )
}
