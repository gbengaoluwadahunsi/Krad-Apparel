
// src/components/HeroSection.jsx

import { gsap } from 'gsap';
import { useEffect } from 'react';
import { motion } from 'framer-motion'




// eslint-disable-next-line react/prop-types
const HeroSection = ({Link}) => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: -80 },
      { opacity: 1, y: 0, duration: 3, ease: 'power3.out' }
    );
  }, []);

  return (
    <section >
      <div className=" inset-0 bg-center h-screen flex z-0 w-screen items-center justify-center" style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('/krad.jpg')" 
      }}>

      <div className="   p-4  flex  flex-col items-center  text-center">
        <h1 className=" hero-text inter text-4xl md:text-5xl lg:text-[5rem] border-b-8   border-dashed drop-shadow-lg drop border-blue-600 p-4 font-extrabold  text-yellow-400 z-10 ">Tailored Elegance</h1>
        <p className="hero-text fasthand-regular  text-xl md:text-2xl py-4 lg:text-4xl text-shadow-lg   text-white">Custom Female Fashion Design at Your Fingertips</p>
       
        <motion.button 
                className="bg-yellow-400 text-blue-900 px-4 lg:px-8 py-3 rounded-full  text-md md:text-lg font-bold hover:bg-yellow-300 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               <Link  to="feature-design" smooth={true} duration={500}> Get Started Now
               </Link>
              </motion.button>
       
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
