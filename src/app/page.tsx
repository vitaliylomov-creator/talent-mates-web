'use client'

import { useState, useEffect } from 'react'
import Topbar  from '@/components/ui/Topbar'
import HomeNav from '@/components/ui/HomeNav'

export default function HomePage() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <div className="bg-noise" aria-hidden />
      <Topbar visible={ready} />
      <HomeNav visible={ready} />
    </>
  )
}