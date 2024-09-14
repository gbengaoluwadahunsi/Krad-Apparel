import  { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import CallToAction from "../component/CallToAction"
import FeaturedDesigns from "../component/FeaturedDesigns"
import HeroSection from "../component/HeroSection"
import OurServices from "../component/OurServices"
import TailorDesignSection from "../component/TailorDesignSection"
import TestimonialPage from "../component/TestimonialPage"
import { Link, Element } from 'react-scroll';


// eslint-disable-next-line react/prop-types
const AnimatedSection = ({ children, direction = 'left' }) => {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">

      <HeroSection Link = {Link} />

      <AnimatedSection direction="right">
      <Element name="section1" className="element">
       <FeaturedDesigns />  
      </Element>
       
      </AnimatedSection>

      <AnimatedSection direction="left">
        <OurServices />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <TailorDesignSection />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <TestimonialPage />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <CallToAction />
      </AnimatedSection>
    </div>
  )
}

export default Home