import { motion } from "framer-motion";
import { Gem, Users, Leaf, Lightbulb, Heart } from "lucide-react";
import founder from '../assets/images/Krad/founder.webp'
import shop from '../assets/images/Krad/shop.webp'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen px-8 lg:px-32 py-16  bg-slate-100 drop-shadow-sm text-lg ">
      <main className="container mx-auto py-8">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-center mb-8 text-blue-900"
          {...fadeIn}
        >
          About Krad Apparel
        </motion.h1>

        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full md:w-1/2 px-4 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Our Story
            </h2>
            <p className="mb-4">
              Founded in 2024, Krad Apparel was born out of a passion for
              combining timeless elegance with modern fashion. Our journey began
              when our founder, a seasoned tailor, recognized the need for
              high-quality, custom-fitted clothing in a world of fast fashion.
            </p>
            <p className="mb-4">
              What started as a small atelier has grown into a renowned fashion
              house, serving clients who appreciate the art of tailoring and the
              luxury of personalized style. Our commitment to quality
              craftsmanship and customer satisfaction has remained unwavering
              throughout our growth.
            </p>
            <p>
              Today, Krad Apparel stands as a symbol of sophistication and
              individuality in the fashion world, continuing to dress our
              clients in garments that are as unique as they are.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 px-4 mb-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={shop}
              alt="Krad Apparel Atelier"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Our Mission
          </h2>
          <p>
            At Krad Apparel, our mission is to empower individuals through
            personalized fashion. We believe that every person deserves clothing
            that not only fits perfectly but also reflects their unique
            personality and style. Our goal is to combine traditional tailoring
            techniques with modern design sensibilities to create garments that
            make our clients feel confident, comfortable, and truly themselves.
          </p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Values</h2>
          <motion.ul
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.li
              className="flex items-center"
              variants={listItemVariants}
            >
              <Gem className="w-6 h-6 mr-2 text-blue-900" />
              <span>
                Quality Craftsmanship: We take pride in the meticulous attention
                to detail in every garment we create.
              </span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={listItemVariants}
            >
              <Users className="w-6 h-6 mr-2 text-blue-900" />
              <span>
                Personalization: We celebrate individuality by offering truly
                customized fashion experiences.
              </span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={listItemVariants}
            >
              <Leaf className="w-6 h-6 mr-2 text-blue-900" />
              <span>
                Sustainability: We are committed to ethical and environmentally
                friendly practices in our production process.
              </span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={listItemVariants}
            >
              <Lightbulb className="w-6 h-6 mr-2 text-blue-900" />
              <span>
                Innovation: We continuously explore new techniques and
                technologies to enhance our craft.
              </span>
            </motion.li>
            <motion.li
              className="flex items-center"
              variants={listItemVariants}
            >
              <Heart className="w-6 h-6 mr-2 text-blue-900" />
              <span>
                Customer Satisfaction: We strive to exceed expectations and
                build lasting relationships with our clients.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="mb-8 bg-slate-200 rounded p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Our Founder
          </h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={founder}
                alt="Krad Apparel Founder"
                width={300}
                height={300}
                className=" shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h3 className="text-3xl font-bold  mb-2 text-blue-900">Kemi Adekolu</h3>
              <p className="mb-4">
               She is the visionary behind Krad Apparel, who brings over two
                decades of experience in haute couture and bespoke tailoring to
                our brand. Her journey in fashion began in the ateliers of
                Paris, where she honed her skills under the tutelage of
                world-renowned designers.
              </p>
              <p>
                Jane&apos;s philosophy is simple yet profound: Clothing should
                be a perfect harmony between the wearer&apos;s personality and
                impeccable craftsmanship&quot;. This belief is the driving force
                behind Krad Apparel&apos;s commitment to personalized,
                high-quality fashion.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Join Our Journey
          </h2>
          <p>
            We invite you to experience the Krad Apparel difference. Whether
            you`&apos;re looking for a perfectly tailored suit, a stunning
            evening gown, or everyday wear that feels extraordinary, we`&apos;re
            here to bring your fashion vision to life. Join us in celebrating
            the art of personalized fashion and discover clothing that`&apos;s
            as unique as you are.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
