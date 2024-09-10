import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronRight, ChevronLeft } from 'lucide-react'

// Import all images for each category
import s1 from '../assets/images/Krad/Smarts/s1.webp'
import s2 from '../assets/images/krad/Smarts/s2.webp'
import s3 from '../assets/images/Krad/Smarts/s3.webp'
import s4 from '../assets/images/Krad/Smarts/s4.webp'
import s5 from '../assets/images/Krad/Smarts/s5.webp'
import s6 from '../assets/images/Krad/Smarts/s6.webp'
import s7 from '../assets/images/Krad/Smarts/s7.webp'
import s8 from '../assets/images/Krad/Smarts/s8.webp'
import s9 from '../assets/images/Krad/Smarts/s9.webp'
import s10 from '../assets/images/Krad/Smarts/s10.webp'
import s11 from '../assets/images/Krad/Smarts/s11.webp'
import s12 from '../assets/images/Krad/Smarts/s12.webp'
import s13 from '../assets/images/Krad/Smarts/s13.webp'
import s14 from '../assets/images/Krad/Smarts/s14.webp'
import s15 from '../assets/images/Krad/Smarts/s15.webp'
import s16 from '../assets/images/Krad/Smarts/s16.webp'
import s17 from '../assets/images/Krad/Smarts/s17.webp'
import s18 from '../assets/images/Krad/Smarts/s18.webp'
import s19 from '../assets/images/Krad/Smarts/s19.webp'
import s20 from '../assets/images/Krad/Smarts/s20.webp'
import s21 from '../assets/images/Krad/Smarts/s21.webp'
import s22 from '../assets/images/Krad/Smarts/s22.webp'
import s23 from '../assets/images/Krad/Smarts/s23.webp'
import s24 from '../assets/images/Krad/Smarts/s24.webp'
import s25 from '../assets/images/Krad/Smarts/s25.webp'
import s26 from '../assets/images/Krad/Smarts/s26.webp'
import s27 from '../assets/images/Krad/Smarts/s27.webp'
import s28 from '../assets/images/Krad/Smarts/s28.webp'

import c1 from '../assets/images/Krad/Corporate/c1.webp'
import c2 from '../assets/images/Krad/Corporate/c2.webp'
import c3 from '../assets/images/Krad/Corporate/c3.webp'
import c4 from '../assets/images/Krad/Corporate/c4.webp'
import c5 from '../assets/images/Krad/Corporate/c5.webp'
import c6 from '../assets/images/Krad/Corporate/c6.webp'
import c7 from '../assets/images/Krad/Corporate/c7.webp'
import c8 from '../assets/images/Krad/Corporate/c8.webp'
import c9 from '../assets/images/Krad/Corporate/c9.webp'
import c10 from '../assets/images/Krad/Corporate/c10.webp'




import g1 from '../assets/images/Krad/Children/g1.webp'
import g2 from '../assets/images/Krad/Children/g2.webp'
import g3 from '../assets/images/Krad/Children/g3.webp'
import g4 from '../assets/images/Krad/Children/g4.webp'
import g5 from '../assets/images/Krad/Children/g5.webp'
import g6  from '../assets/images/Krad/Children/g6.webp'
import g7  from '../assets/images/Krad/Children/g7.webp'
import g8  from '../assets/images/Krad/Children/g8.webp'
import g9  from '../assets/images/Krad/Children/g9.webp'
import g10  from '../assets/images/Krad/Children/g10.webp'
import g11  from '../assets/images/Krad/Children/g11.webp'
import g12  from '../assets/images/Krad/Children/g12.webp'
import g13  from '../assets/images/Krad/Children/g13.webp'
import g14  from '../assets/images/Krad/Children/g14.webp'
import g15 from '../assets/images/Krad/Children/g15.webp'
import g16 from '../assets/images/Krad/Children/g16.webp'
import g17 from '../assets/images/Krad/Children/g17.webp'
import g18 from '../assets/images/Krad/Children/g18.webp'
import g19  from '../assets/images/Krad/Children/g19.webp'
import g20  from '../assets/images/Krad/Children/g20.webp'
import g21 from '../assets/images/Krad/Children/g21.webp'


// Create arrays of imported images
const traditionalImages = [s1, s2, s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,s23,s24,s25,s26,s27,s28]
const formalImages = [c1, c2, c3,c4,c5,c6,c7,c8,c9,c10]

const childrenImages = [g1, g2, g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,g21]

// Update categories array to use imported images
const categories = [
  { 
    name: 'Smarts', 
    items: traditionalImages.map((src, i) => ({ 
      id: i + 1, 
      src, 
      alt: `Traditional Wear ${i + 1}` 
    }))
  },
  { 
    name: 'Corporate', 
    items: formalImages.map((src, i) => ({ 
      id: i + 33, 
      src, 
      alt: `Formal Wear ${i + 1}` 
    }))
  },
 
  { 
    name: 'Children', 
    items: childrenImages.map((src, i) => ({ 
      id: i + 97, 
      src, 
      alt: `Children Wear ${i + 1}` 
    }))
  },
]

const Catalogue = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name)
  const [visibleItems, setVisibleItems] = useState(12)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const loadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 12)
  }

  const currentCategory = categories.find(cat => cat.name === selectedCategory)

  return (
    <div className="min-h-screen py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-center text-blue-900 mb-10">Our Catalogue</h1>
        
        {/* Category Navigation */}
        <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 mx-2 rounded-full whitespace-nowrap text-lg ${
                selectedCategory === category.name
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-200'
              }`}
              onClick={() => {
                setSelectedCategory(category.name)
                setVisibleItems(12)
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentCategory.items.slice(0, visibleItems).map((item) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-60 lg:h-96 rounded-lg shadow-md object-cover"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <ZoomIn className="text-white w-8 h-8" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < currentCategory.items.length && (
          <div className="mt-8 text-center">
            <button
              className="px-6 py-2 mb-2 rounded-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold transition-colors duration-300"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-600 bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-3xl h-[90%] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white bg-blue-900 rounded-full p-2 hover:bg-blue-800 transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              {!isMobile && (
                <>
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-slate-400 rounded-full p-2 hover:bg-blue-800 transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      const currentIndex = currentCategory.items.findIndex(item => item.id === selectedImage.id)
                      const prevIndex = (currentIndex - 1 + currentCategory.items.length) % currentCategory.items.length
                      setSelectedImage(currentCategory.items[prevIndex])
                    }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-slate-400 rounded-full p-2 hover:bg-blue-800 transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      const currentIndex = currentCategory.items.findIndex(item => item.id === selectedImage.id)
                      const nextIndex = (currentIndex + 1) % currentCategory.items.length
                      setSelectedImage(currentCategory.items[nextIndex])
                    }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Catalogue