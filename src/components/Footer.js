import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='p-2' style={{backgroundColor: "#C82D4D"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center">
        {/* Phone Item */}
        <div className="flex items-center mb-4 sm:mb-0 mx-4">
          <a href="tel:+15555555555" className="text-white flex items-center space-x-2">
            <FaPhone size={24} className="mr-2" />
            <div>
              <h3 className="text-white font-medium">Call Us:</h3>
              <p className="text-white font-medium">03336136700</p>
            </div>
          </a>
        </div>
        {/* Email Item */}
        <div className="flex items-center mb-4 sm:mb-0 mx-4">
          <a href="mailto:info@example.com" className="text-white flex items-center space-x-2">
            <FaEnvelope size={24} className="mr-2" />
            <div>
              <h3 className="text-white font-medium">Email Us:</h3>
              <p className="text-white font-medium">info@asdtradings.com</p>
            </div>
          </a>
        </div>
        {/* LinkedIn Item */}
        <div className="flex items-center mb-4 sm:mb-0 mx-4">
          <a href="https://www.linkedin.com/company/asd-tradings/" target="_blank" rel="noopener noreferrer" className="text-white flex items-center space-x-2">
            <FaLinkedin size={24} className="mr-2" />
            <div>
              <h3 className="text-white font-medium">Follow Us:</h3>
              <p className="text-white font-medium">Follow us on LinkedIn</p>
            </div>
          </a>
        </div>
        {/* Copyright */}
        <div className="flex justify-center items-center w-full pt-8 sm:mt-0">
          <a href="https://onclicksolutions.tech/" className="text-white text-sm">
            © OnClick Solutions 2023
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
