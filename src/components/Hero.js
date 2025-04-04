import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight } from 'react-icons/hi';
import { useMemo } from 'react';

// Helper function to generate random number in a range
const random = (min, max) => Math.random() * (max - min) + min;

const Hero = () => {
  const numNodes = 30; // Number of nodes
  const connectionThreshold = 250; // Max distance for lines
  const nodeRadius = 4;

  // Generate node positions using useMemo to prevent regeneration on every render
  const nodes = useMemo(() => 
    Array.from({ length: numNodes }).map(() => ({
      x: random(50, 950),
      y: random(50, 950),
      // Add random animation properties per node
      duration: random(2, 5),
      delay: random(0, 2),
    })),
   [numNodes] // Dependency array ensures regeneration only if numNodes changes
  );

  // Generate lines between nearby nodes using useMemo
  const lines = useMemo(() => {
    const linesArray = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < connectionThreshold) {
          linesArray.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            duration: random(3, 6),
            delay: random(0, 3),
          });
        }
      }
    }
    return linesArray;
  }, [nodes, connectionThreshold]);

  // --- Parallax Setup --- 
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Background moves 30% slower

  return (
    <div id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient - Apply Parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-800 via-[#2B2D61] to-[#1B1D51]"
        style={{ y: backgroundY }} // Apply transformed y
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>

      {/* Animated Background - Apply Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: backgroundY }} // Apply transformed y
      >
        <motion.svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice" // Ensures SVG covers the area
          className="w-full h-full opacity-40" // Reduced opacity
        >
          {/* Gradient for Line Glow */}
          <defs>
            <radialGradient id="lineGlow">
              <stop offset="0%" stopColor="#C82D4D" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C82D4D" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Render Lines */}
          {lines.map((line, index) => (
            <motion.line
              key={`line-${index}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#FFFFFF" // Base line color
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }} // Fade in and out
              transition={{
                duration: line.duration,
                delay: line.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          
          {/* Render Glowing Lines on top */}
          {lines.map((line, index) => (
             <motion.line
              key={`glow-line-${index}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#lineGlow)" // Use gradient for glow
              strokeWidth="15" // Wider stroke for glow effect
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0}}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }} // Animate drawing and fade
              transition={{
                duration: line.duration * 0.8, // Slightly faster than base line
                delay: line.delay,
                repeat: Infinity,
                repeatDelay: 1 // Add delay between repeats
              }}
            />
          ))}

          {/* Render Nodes */}
          {nodes.map((node, index) => (
            <motion.circle
              key={`node-${index}`}
              cx={node.x}
              cy={node.y}
              r={nodeRadius}
              fill="#FFFFFF" // Node color
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }} // Pulsing opacity
              transition={{
                duration: node.duration,
                delay: node.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.svg>
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Added z-10 to ensure content is above background */}
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
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C82D4D] hover:bg-[#A8243D] transition-colors duration-300"
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1.5 h-3 bg-white rounded-full mx-auto" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
