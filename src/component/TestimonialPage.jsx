

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import test1 from '../assets/images/Krad/testy1.webp' 
import test2 from '../assets/images/Krad/testy2.webp'
import test3 from '../assets/images/Krad/test3.webp'
import test4 from '../assets/images/Krad/testy4.webp'



const testimonials = [
  { name: 'Damilola O.', text: 'Krad Apparel transformed my wardrobe. Their attention to detail is unmatched!', image: test3 },
  { name: 'Gift T.', text: 'From consultation to delivery, everything was seamless, exceeding my expectations.', image: test4 },
  { name: 'Anabelle J.', text: 'The attention to detail in my tailored outfit was amazing! , matched exactly what I wanted.', image: test2 },
  { name: 'Atinuke A.', text: 'I love how my custom suit fits. It\'s perfect for both work and special occasions.', image: test1},
]

const TestimonialPage = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 768)
    }
    
    // Set initial state
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobileOrTablet) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isMobileOrTablet])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-slate-100 px-4 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center mb-12 text-3xl md:text-5xl font-extrabold text-blue-900">
          What Our Clients Say
        </h2>

        <div className={`relative ${!isMobileOrTablet ? 'overflow-hidden' : 'flex items-center justify-center'}`}>
          {isMobileOrTablet ? (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-1 font-semibold text-2xl text-ash z-10 hover:text-blue-600"
              >
                <AiOutlineLeft />
              </button>

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800 w-96 p-6 gap-4 lg:gap-0 rounded-lg border shadow-lg flex flex-col lg:flex-row items-center justify-center space-x-4"
              >
                <img 
                  src={testimonials[currentIndex].image}
                  width={80}
                  height={80}
                  className='rounded-full'
                  alt={`${testimonials[currentIndex].name}'s portrait`}
                />

                <div>
                  <p className="mb-2 text-white italic">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
                  <div className="flex pb-2 gap-1 text-royalBlue text-xs">
                    {[...Array(5)].map((_, i) => <Star key={i}  size={12}/>)}
                  </div>
                  <p className="font-semibold text-royalBlue">{testimonials[currentIndex].name}</p>
                </div>
              </motion.div>

              <button
                onClick={nextSlide}
                className="absolute right-1 font-semibold text-2xl space-x-2 text-ash z-10 hover:text-blue-600"
              >
                <AiOutlineRight />
              </button>
            </>
          ) : (
            <motion.div
              className="flex space-x-8 w-max"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                ease: 'linear',
                duration: 20,
                repeat: Infinity,
              }}
            >
              {[...Array(2)].map((_, repeatIndex) => (
                <div key={repeatIndex} className="flex space-x-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="bg-slate-800 w-96 p-6 h-60 rounded-lg border shadow-lg flex items-center justify-center space-x-4"
                    >
                      <img
                        src={testimonial.image}
                        width={80}
                        height={80}
                        className='rounded-full'
                        alt={`${testimonial.name}'s portrait`}
                      />

                      <div>
                        <p className="mb-2 text-white italic">&ldquo;{testimonial.text}&rdquo;</p>
                        <div className="flex pb-2 gap-1 text-royalBlue text-sm">
                          {[...Array(5)].map((_, i) => <Star key={i}  size={16}/>)}
                        </div>
                        <p className="font-semibold text-royalBlue">{testimonial.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TestimonialPage