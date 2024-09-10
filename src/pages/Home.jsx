
import CallToAction from "../component/CallToAction"
import FeaturedDesigns from "../component/FeaturedDesigns"
import HeroSection from "../component/HeroSection"
import OurServices from "../component/OurServices"
import TailorDesignSection from "../component/TailorDesignSection"
import TestimonialPage from "../component/TestimonialPage"

const Home = () => {
  return (
    <div className=" w-screen ">

        <HeroSection/>
        <FeaturedDesigns/>
        <OurServices/>
        <TailorDesignSection/>
        <TestimonialPage/>
        <CallToAction/>
       
    </div>
  )
}

export default Home