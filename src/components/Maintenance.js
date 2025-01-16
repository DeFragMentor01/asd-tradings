import { motion } from 'framer-motion';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import logo from '../assets/asd-image2.png';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-white via-blue-100 to-blue-200">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="ASD Tradings Logo"
            className="h-24 mx-auto mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Maintenance Icon */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-[#C82D4D] mb-6"
          >
            <HiOutlineWrenchScrewdriver className="h-20 w-20 mx-auto" />
          </motion.div>

          {/* Text Content */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1B1D51] mb-4">
            Under Maintenance
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We're currently updating our website to serve you better.
            <br />
            Please check back soon!
          </p>

          {/* Contact Information */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 mt-8 shadow-lg">
            <h2 className="text-xl font-semibold text-[#1B1D51] mb-4">
              Need to reach us?
            </h2>
            <p className="text-gray-600">
              Email: contact@asdtradings.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Maintenance; 