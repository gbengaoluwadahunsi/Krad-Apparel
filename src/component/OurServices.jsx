import { TbNeedleThread } from "react-icons/tb";
import { GiSewingMachine } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";
import { motion } from 'framer-motion'

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }


const OurServices = () => {
  return (
    <div>
        
        <section className="py-8  lg:pb-20 px-4  w-screen bg-slate-100 text-white">
          <div className="container mx-auto">
            <motion.h2 
              className=" text-center  mb-12 text-5xl font-extrabold text-blue-900"
              {...fadeIn}
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {[
                { icon:  GiSewingMachine, title: 'Custom Tailoring', description: 'Get perfectly fitted garments tailored to your exact measurements and style preferences.' },
                { icon: FaPeopleArrows, title: 'Style Consultation', description: 'Our expert stylists will help you curate a wardrobe that perfectly suits your lifestyle and personal taste.' },
                { icon:  TbNeedleThread, title: 'Alterations', description: 'We offer professional alterations to ensure your existing clothes fit you perfectly.' }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="text-center bg-royalBlue rounded-lg p-6 shadow-lg cursor-pointer shadow-slate-500 hover:shadow-slate-800 transition duration-300"
                  variants={serviceVariants}
                >
                  <motion.div 
                    className="w-20 h-20  rounded-full mx-auto mb-4 flex  items-center justify-center"
                    whilehover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="  text-yellow-400"  size={200}/>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
    </div>
  )
}

export default OurServices