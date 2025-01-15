import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight } from 'react-icons/hi';
import { FiPackage } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentPath, setCurrentPath] = useState(0);

  // Define more interesting paths across the globe
  const paths = [
    "M 100,300 C 400,100 600,900 900,300",
    "M 900,400 C 600,200 400,800 100,500",
    "M 200,100 C 500,600 700,200 800,700",
    "M 100,600 C 400,200 600,800 900,400"
  ];

  // Change path every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPath((prev) => (prev + 1) % paths.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-[#2B2D61] to-[#1B1D51]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.svg
          viewBox="0 0 1000 1000"
          className="w-full h-full opacity-60"
        >
          {/* Globe Circle */}
          <motion.circle
            cx="500"
            cy="500"
            r="400"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />

          {/* Trailing Path */}
          <motion.path
            key={`trail-${currentPath}`}
            d={paths[currentPath]}
            stroke="white"
            strokeWidth="4"
            strokeDasharray="15,20"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 4,
              ease: "linear"
            }}
          />

          {/* Moving Package */}
          <motion.g
            key={`package-${currentPath}`}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 4,
              ease: "linear"
            }}
            style={{
              offsetPath: `path('${paths[currentPath]}')`
            }}
          >
            {/* Package with glow effect */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {/* Glow effect */}
              <circle
                r="40"
                fill="url(#glow)"
                opacity="0.6"
              />
              {/* Package box */}
              <rect
                width="50"
                height="50"
                fill="#C82D4D"
                x="-25"
                y="-25"
                rx="8"
              />
              {/* Package details */}
              <path
                d="M -12,-12 L 12,-12 L 12,12 L -12,12 Z M -12,-4 L 12,-4 M 0,-12 L 0,12"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
            </motion.g>
          </motion.g>

          {/* Gradient definition for glow effect */}
          <defs>
            <radialGradient id="glow">
              <stop offset="0%" stopColor="#C82D4D" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C82D4D" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Globe Details - Latitude/Longitude lines */}
          {[0, 1, 2].map((i) => (
            <motion.path
              key={`lat-${i}`}
              d={`M 100,${300 + i * 150} Q 500,${400 + i * 100} 900,${300 + i * 150}`}
              stroke="white"
              strokeWidth="1"
              fill="none"
              opacity="0.1"
            />
          ))}
          {[0, 1, 2].map((i) => (
            <motion.path
              key={`long-${i}`}
              d={`M ${300 + i * 150},100 Q ${400 + i * 100},500 ${300 + i * 150},900`}
              stroke="white"
              strokeWidth="1"
              fill="none"
              opacity="0.1"
            />
          ))}
        </motion.svg>
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
