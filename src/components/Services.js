import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineGlobeAlt, HiOutlineCube, HiOutlineTruck, HiOutlineChartBar, HiOutlineScale, HiOutlineCurrencyDollar } from 'react-icons/hi';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: HiOutlineGlobeAlt,
      title: 'Global Network',
      description: 'Access our worldwide network of verified buyers and sellers for optimal trading opportunities.',
    },
    {
      icon: HiOutlineTruck,
      title: 'Logistics Support',
      description: 'End-to-end logistics management for seamless international trading operations.',
    },
    {
      icon: HiOutlineCurrencyDollar,
      title: 'Value Optimization',
      description: 'Strategic pricing and positioning to maximize returns on your surplus inventory.',
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Comprehensive solutions for your surplus inventory needs
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative group h-full"
            >
              <div className="h-full bg-white rounded-lg shadow-sm p-8 border border-gray-100 group-hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="text-[#C82D4D] mb-5 flex-shrink-0">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C82D4D] hover:bg-[#A8243D] transition-colors duration-300"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 