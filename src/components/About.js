import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  // Ref for the main About text section
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjusted threshold
  });

  // Ref for the Reviews section
  const [reviewsRef, reviewsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower threshold for reviews grid
  });

  // Variants for the overall section container (can be reused)
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // Variants for staggered items (like review cards)
  const listContainerVariants = {
    hidden: { },
    visible: {
      transition: {
        staggerChildren: 0.3, // Slightly increased stagger
      },
    },
  };

  // Variants for individual items sliding in
  const itemSlideInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variant for the quote icon inside the card
  const quoteIconVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2, // Delay slightly after card starts appearing
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const reviews = [
    {
      text: "ASD sourced toys for us below the standard market price. Throughout the whole process, ASD was extremely clear, transparent, and kept us posted on every step. Whether you're looking to buy or sell, I highly recommend working with ASD Tradings.",
      author: "C.S",
      company: "COS Supplies",
    },
    {
      text: "ASD Tradings is an honest and reliable company. I highly recommend them to anyone looking to work with a transparent and trustworthy partner.",
      author: "E.G",
      company: "Hod Vehodor Judaica",
    },
    {
      text: "ASD Tradings was super helpful in helping us clear our unwanted stock. Communicative, efficient, and reliable.",
      author: "G.S",
      company: "The Rolling Pin",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Use sectionVariants for the overall section fade-in */}
      <motion.div
        // No ref needed here if we trigger children based on their own refs/viewport
        variants={sectionVariants}
        initial="hidden"
        animate="visible" // Animate immediately on load/mount
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* About Text Block - uses its own ref and variant */}
        <motion.div 
          ref={aboutRef}
          variants={itemSlideInVariants} 
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            About <span className="text-[#C82D4D]">ASD Tradings</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Founded in 2023, ASD Tradings was established to assist businesses struggling with overstock, freeing up valuable warehouse space and improving cash flow. As global traders and distributors of surplus, excess, and liquidation inventory, we operate as a service that connects buyers and sellers, primarily in the UK and USA, but with a global reach across all product categories. Our extensive network allows us to create valuable opportunities, ensuring surplus stock reaches the right buyers while benefiting both parties.
          </p>
        </motion.div>

        {/* Reviews Section Container - uses reviewsRef and listContainerVariants */}
        <motion.div 
          ref={reviewsRef} 
          variants={listContainerVariants} // Use list variants for staggering
          initial="hidden"
          animate={reviewsInView ? "visible" : "hidden"}
        >
          {/* Reviews Heading - animates with the reviews section */}
          <motion.h3 
            variants={itemSlideInVariants} // Reuse slide-in for heading
            className="text-2xl font-bold text-gray-900 text-center mb-10 sm:text-3xl"
          >
            What Our Partners Say
          </motion.h3>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={itemSlideInVariants} // Each card uses slide-in
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
                }} // Hover effect
                transition={{ duration: 0.3 }} // Transition for hover
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full" // Added h-full
              >
                {/* Animate Quote Icon */}
                <motion.div variants={quoteIconVariants}>
                  <FaQuoteLeft className="text-3xl text-[#C82D4D] opacity-30 mb-4" aria-hidden="true" />
                </motion.div>
                <blockquote className="flex-grow">
                  <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                </blockquote>
                <footer className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">- {review.author}</p>
                  <p className="text-xs text-gray-500">{review.company}</p>
                </footer>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
