import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BrowseByType from '@/components/BrowseByType'
import DualCTA from '@/components/DualCTA'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import MostSearchedCars from '@/components/MostSearchedCars'
import LatestCars from '@/components/LatestCar'
import BoxCar from '@/components/BoxCar'
import OurTeam from '@/components/ourTeam'
import OurBlogs from '@/components/ourBlogs'
import Explore from '@/components/Explore'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BrowseByType />
      <DualCTA />
      <MostSearchedCars/>
      <WhyChooseUs />
      <LatestCars/>
      <BoxCar/>
      <OurTeam/>
      <OurBlogs/>
      <Explore/>
      <Footer />
    </main>
  )
}
