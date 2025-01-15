import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cases = [
    {
      title: 'Global Electronics Distribution',
      category: 'Electronics',
      description: 'Successfully managed the distribution of surplus electronic components worth $5M across Asia and Europe.',
      stats: { value: '$5M+', label: 'Deal Value' },
    },
    {
      title: 'Industrial Equipment Resale',
      category: 'Manufacturing',
      description: 'Facilitated the strategic resale of industrial machinery, creating value for both buyer and seller.',
      stats: { value: '30+', label: 'Units Sold' },
    },
    {
      title: 'Automotive Parts Network',
      category: 'Automotive',
      description: 'Built a network of automotive parts suppliers and buyers across three continents.',
      stats: { value: '15', label: 'Countries' },
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Real results for real businesses worldwide
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="h-full bg-gray-50 rounded-lg p-8 hover:bg-gray-100 transition-colors duration-300">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 mb-6">
                  {item.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <dl>
                    <div className="flex justify-between">
                      <dt className="text-sm font-medium text-gray-500">
                        {item.stats.label}
                      </dt>
                      <dd className="text-sm font-bold text-blue-600">
                        {item.stats.value}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-blue-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to optimize</span>
                <span className="block">your surplus inventory?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-200">
                Join our network of successful businesses and start maximizing your returns today.
              </p>
              <a
                href="#contact"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="relative -mt-8 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <div className="transform -translate-x-1/2 translate-y-1/4 lg:absolute lg:inset-y-0 lg:left-0 lg:w-full lg:translate-x-0 lg:translate-y-0">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg transform rotate-3 bg-blue-700 animate-pulse">
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg transform -rotate-6 bg-blue-800 animate-pulse">
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg transform rotate-6 bg-blue-600 animate-pulse">
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg transform -rotate-3 bg-blue-500 animate-pulse">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 