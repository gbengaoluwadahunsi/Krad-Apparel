
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import feature from '../assets/images/gown.jpg';
import suit from '../assets/images/Krad/suit3.webp'
import pants from '../assets/images/Krad/pants.webp'
import dinner from '../assets/images/Krad/dinner.webp'
import silk from '../assets/images/Krad/silk.webp'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const FeaturedDesigns = () => {
  return (
    <section name="feature-design"  className="px-4 py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-center mb-12 text-3xl md:text-5xl font-extrabold text-blue-900"
          {...fadeIn}
        >
          Featured Designs
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-1">
          <div className="md:w-2/3 order-2 md:order-1">
            <div
              className="relative w-full h-80 md:h-full bg-cover bg-center rounded-lg shadow-lg hover:border-4 cursor-pointer border-blue-900"
              style={{ backgroundImage: `url(${feature})` }}
            >
              <Link
                to="/catalogue"
                className="bg-yellow-400 absolute bottom-4 left-4 text-blue-900 px-6 py-3 md:px-10 md:py-4 rounded font-bold shadow-xl hover:bg-yellow-300 transition-all duration-300 text-sm md:text-base"
              >
                Check Our Catalogue
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 lg:px-4 lg:p-8 lg:bg-slate-800 grid grid-cols-2 md:grid-cols-2 gap-4">
            {[
              { name: 'Elegant Suit', image: suit },
              { name: 'Summer Dress', image: silk },
              { name: 'Tailored pants', image: pants },
              { name: 'Evening Gown', image: dinner },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 md:bg-[#F0F0F0] text-slate-100 md:text-black p-4 rounded-lg shadow-md lg:hover:text-slate-100 lg:hover:bg-slate-800 cursor-pointer ease-out duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 md:h-80 object-cover mb-2 rounded"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-50 md:text-gray-600 lg:hover:text-gray-100">Exquisite design for your style</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesigns;