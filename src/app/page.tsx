import Topbar  from '@/components/ui/Topbar'
import HomeNav from '@/components/ui/HomeNav'

export default function HomePage() {
  return (
    <>
      <div className="bg-noise" aria-hidden />
      <Topbar />
      <HomeNav />
    </>
  )
}
