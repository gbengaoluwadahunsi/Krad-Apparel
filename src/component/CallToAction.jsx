import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  

const CallToAction = () => {
  return (
    
   
     <div className=" w-full  flex flex-col items-start md:items-center justify-center text-gray-200 bg-slate-700 py-16 px-4   ">
       <motion.h2 
         className="text-2xl md:text-4xl font-bold mb-4"
         {...fadeIn}
       >
         Ready to Elevate Your Style?
       </motion.h2>
       <motion.p 
         className="text-base md:text-xl mb-8"
         {...fadeIn}
       >
         Reach out Krad Apparel today and experience fashion tailored just for you.
       </motion.p>
       
       <Link to='/contact'
         className="bg-yellow-400 text-blue-900 px-4 md:px-8 py-3  rounded-full text-lg font-bold hover:bg-yellow-300 transition duration-300"
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
       >
         Get In Touch
       </Link>
     </div>
  
  )
}

export default CallToAction