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
      icon: HiOutlineCube,
      title: 'Inventory Management',
      description: 'Expert solutions for managing and optimizing your surplus inventory efficiently.',
    },
    {
      icon: HiOutlineTruck,
      title: 'Logistics Support',
      description: 'End-to-end logistics management for seamless international trading operations.',
    },
    {
      icon: HiOutlineChartBar,
      title: 'Market Analysis',
      description: 'Data-driven insights to help you make informed decisions about your surplus inventory.',
    },
    {
      icon: HiOutlineScale,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure product integrity and customer satisfaction.',
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
              className="relative group"
            >
              <div className="h-full bg-white rounded-lg shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-5">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500">
                  {service.description}
                </p>
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
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 