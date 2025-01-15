import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker, HiGlobeAlt } from 'react-icons/hi';
import logo from '../assets/asd-image2.png';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9am to 6pm PST',
    },
    {
      icon: HiMail,
      title: 'Email',
      details: 'contact@asdtradings.com',
      description: "We'll respond within 24 hours",
    },
    {
      icon: HiLocationMarker,
      title: 'Office',
      details: 'Los Angeles, CA',
      description: 'Come visit our office',
    },
    {
      icon: HiGlobeAlt,
      title: 'Global Presence',
      details: 'Worldwide Operations',
      description: 'Serving clients globally',
    },
  ];

  return (
    <section id="contact" className="relative bg-white py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
        >
          <div className="max-w-lg mx-auto">
            <div className="flex items-center justify-center mb-8">
              <img
                src={logo}
                alt="ASD Tradings Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Ready to optimize your surplus inventory? We're here to help you maximize value and minimize waste.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              {contactInfo.map((item, index) => (
                <div key={index} className="mt-6">
                  <dt className="sr-only">{item.title}</dt>
                  <dd className="flex">
                    <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p>{item.details}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Tell us about your surplus inventory needs"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 