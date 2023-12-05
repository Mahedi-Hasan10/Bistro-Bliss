import HeroAboutUs from '@/components/about/HeroAboutUs'
import HeroBlog from '@/components/blog/HeroBlog'
import ClintSay from '@/components/clintSay/ClintSay'
import FoodDelevery from '@/components/foodDelevery/FoodDelevery'
import HeroSection from '@/components/hero/hero'
import HeroMenuCards from '@/components/menu/HeroMenuCards'
import HeroServices from '@/components/services/HeroServices'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[white]">
      <HeroSection/>
      <HeroMenuCards/>
      <HeroAboutUs/>
      <HeroServices/>
      <FoodDelevery/>
      <ClintSay/>
      <HeroBlog/>
    </main>
  )
}
