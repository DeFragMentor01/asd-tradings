import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-[#2B2D61] to-[#1B1D51]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Global Surplus Inventory
            <br />
            <span className="text-[#C82D4D]">Solutions Provider</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Connecting businesses worldwide with premium surplus inventory solutions. 
            We specialize in efficient distribution and strategic asset management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C82D4D] hover:bg-[#C82D4D]/90 transition-colors duration-300"
            >
              Our Services
              <HiArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#1B1D51] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {[
              { label: 'Global Partners', value: '50+' },
              { label: 'Countries Served', value: '25+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Successful Deals', value: '1000+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1.5 h-3 bg-white rounded-full mx-auto" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
