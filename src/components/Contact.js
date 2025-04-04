import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiGlobeAlt } from 'react-icons/hi';
import logo from '../assets/asd-image2.png';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // State for accent color cycle ('red' or 'blue')
  const [accentState, setAccentState] = useState('red');

  // Effect to toggle accent color every 8 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAccentState(currentState => (currentState === 'red' ? 'blue' : 'red'));
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/mwplrryd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _to: 'info@asdtradings.com'
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Framer Motion Variants --- 
  const staggerDelay = 0.5;
  const transitionDuration = 1.0;

  const listVariants = {
    red: { transition: { staggerChildren: staggerDelay } },
    blue: { transition: { staggerChildren: staggerDelay } },
  };

  const iconVariants = {
    red: { color: '#C82D4D', transition: { duration: transitionDuration, ease: "easeInOut" } },
    blue: { color: '#1A1C51', transition: { duration: transitionDuration, ease: "easeInOut" } },
  };

  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone UK',
      details: '+44 333 613 6700',
      description: null,
    },
    {
      icon: HiPhone,
      title: 'Phone USA',
      details: '+1 845-202-9691',
      description: null,
    },
    {
      icon: HiMail,
      title: 'Email',
      details: 'info@asdtradings.com',
      description: null,
    },
    {
      icon: HiGlobeAlt,
      title: 'Global Presence',
      details: 'Worldwide Operations',
      description: 'Connecting buyers & sellers worldwide',
    },
  ];

  const buttonDelay = contactInfo.length * staggerDelay;

  const buttonVariants = {
    red: {
      backgroundColor: '#C82D4D',
      transition: { duration: transitionDuration, ease: "easeInOut", delay: buttonDelay },
    },
    blue: {
      backgroundColor: '#1A1C51',
      transition: { duration: transitionDuration, ease: "easeInOut", delay: buttonDelay },
    },
  };

  // --- Conditional Tailwind Classes --- 
  const accentFocusRing = accentState === 'blue' ? 'focus:ring-blue-800' : 'focus:ring-red-600';
  const accentFocusBorder = accentState === 'blue' ? 'focus:border-blue-800' : 'focus:border-red-600';
  const accentHoverBg = accentState === 'blue' ? 'hover:bg-blue-900' : 'hover:bg-red-700';

  return (
    <section id="contact" className="relative bg-gray-50 py-24 sm:py-32">
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 gap-x-16 px-4 sm:px-6 lg:px-8">
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 py-16 lg:py-0"
        >
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center mb-10">
              <img
                src={logo}
                alt="ASD Tradings Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center sm:text-left">
              Get in touch
            </h2>
            <motion.dl
              className="space-y-8 text-base text-gray-600"
              variants={listVariants}
              initial="red"
              animate={accentState}
            >
              {contactInfo.map((item, index) => (
                <motion.div key={index} className="flex items-start">
                  <dt className="flex-shrink-0">
                    <span className="sr-only">{item.title || 'Contact Detail'}</span>
                    <motion.span variants={iconVariants}>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </motion.span>
                  </dt>
                  <dd className="ml-4">
                    <p className="font-semibold text-gray-900">
                      {item.title && <span className="block text-xs text-gray-500 font-medium uppercase tracking-wide">{item.title}</span>}
                      {item.details}
                    </p>
                    {item.description && (
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    )}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 sm:p-10 rounded-lg shadow-lg lg:col-span-3"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Full name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="name"
                className={`block w-full shadow-sm py-3 px-4 placeholder-gray-400 ${accentFocusRing} ${accentFocusBorder} border-gray-300 rounded-md transition-colors duration-1000 ease-in-out`}
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                className={`block w-full shadow-sm py-3 px-4 placeholder-gray-400 ${accentFocusRing} ${accentFocusBorder} border-gray-300 rounded-md transition-colors duration-1000 ease-in-out`}
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">Company</label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                autoComplete="organization"
                className={`block w-full shadow-sm py-3 px-4 placeholder-gray-400 ${accentFocusRing} ${accentFocusBorder} border-gray-300 rounded-md transition-colors duration-1000 ease-in-out`}
                placeholder="Company (Optional)"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`block w-full shadow-sm py-3 px-4 placeholder-gray-400 ${accentFocusRing} ${accentFocusBorder} border-gray-300 rounded-md transition-colors duration-1000 ease-in-out`}
                placeholder="Your message"
                required
              />
            </div>
            {submitStatus.message && (
              <div className={`p-4 rounded-md ${
                submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                variants={buttonVariants}
                initial="red"
                animate={accentState}
                className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white ${accentHoverBg} focus:outline-none focus:ring-2 focus:ring-offset-2 ${accentFocusRing} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 