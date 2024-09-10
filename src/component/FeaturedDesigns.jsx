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
    <section className="px-4 py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-center mb-12 text-5xl font-extrabold text-blue-900"
          {...fadeIn}
        >
          Featured Designs
        </motion.h2>
        <div className="flex flex-col-reverse md:flex-row gap-1">
          <div
            className=" relative md:w-2/3 bg-cover bg-center rounded-lg shadow-lg hover:border-4 cursor-pointer border-blue-900"
            style={{ backgroundImage: `url(${feature})` }}
          >
            <Link
            to="/catalogue"
            className="bg-yellow-400   my-2 lg:my-0 lg:bottom-2 left-2 absolute text-blue-900 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-yellow-300 transition-all duration-300"
          >
            Check Our Catalogue
          </Link>
          </div>
          <div className="md:w-1/2  lg:px-4 lg:p-8 lg:bg-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Elegant Suit', image : suit },
              { name: 'Summer Dress', image : silk },
              { name: 'Tailored pants', image : pants },
              { name: 'Evening Gown', image : dinner },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 md:bg-[#F0F0F0]  text-slate-100 md:text-black p-4 rounded-lg shadow-md lg:hover:text-slate-100 lg:hover:bg-slate-800 cursor-pointer ease-out duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item}
                  className="w-full h-80 object-cover  mb-2 rounded"
                />
                <h3 className="text-lg font-semibold ">{item.name}</h3>
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
