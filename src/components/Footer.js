import { Link } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'About', to: 'about' },
      { name: 'Services', to: 'services' },
      { name: 'Portfolio', to: 'portfolio' },
      { name: 'Contact', to: 'contact' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: '#',
        icon: FaLinkedin,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: FaTwitter,
      },
      {
        name: 'Facebook',
        href: '#',
        icon: FaFacebook,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: FaInstagram,
      },
    ],
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">ASD Tradings</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in global surplus inventory solutions. 
              Connecting businesses worldwide with efficient distribution and strategic asset management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Los Angeles, CA</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: contact@asdtradings.com</li>
              <li>Hours: Mon-Fri 9am to 6pm PST</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} ASD Tradings. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Powered by{' '}
            <a 
              href="https://quantumxsolutions.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#C82D4D] hover:text-[#C82D4D]/80 transition-colors duration-300 font-medium"
            >
              Quantum X Solutions
            </a>
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
