'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Topbar  from '@/components/ui/Topbar'
import HomeNav from '@/components/ui/HomeNav'

const Splash = dynamic(() => import('@/components/ui/Splash'), { ssr: false })

export default function HomePage() {
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashComplete = useCallback(() => setSplashDone(true), [])
  return (
    <>
      <div className="bg-noise" aria-hidden />
      {!splashDone && <Splash onComplete={handleSplashComplete} />}
      <Topbar visible={splashDone} />
      <HomeNav visible={splashDone} />
    </>
  )
}