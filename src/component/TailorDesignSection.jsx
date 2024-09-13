import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sketch from '../assets/images/sketchwebp.webp'

const TailorDesignSection = () => {
  return (
    <section
    className="py-16 px-8 h-[90vh] bg-cover lg:bg-contain"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 20, 0.8),  rgba(0, 0, 20, 0.4)), url(${sketch})`,
      
      backgroundPosition: 'center',
    }}
  >
      <div className="container mx-auto text-center ">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Design Your Dream Outfit
        </motion.h2>
        <p className="mb-8 text-white drop-shadow-lg text-xl lg:text-2xl font-medium px-4 w-full lg:w-2/3 flex justify-center mx-auto">
          Fill in your body measurements and/or Upload your full-body picture and get stunning custom-tailored designs
          
        </p>

        <motion.div className=" hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
        </motion.div>

        <motion.div
          className="inline-block mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/tailor-design"
            className="bg-yellow-400 text-blue-900 px-4 lg:px-10 py-4 rounded-full font-bold shadow-xl hover:bg-yellow-300 transition-all duration-300"
          >
            Start Your Custom Design
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TailorDesignSection;
