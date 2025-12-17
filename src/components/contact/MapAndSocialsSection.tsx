// src/components/MapAndSocialsSection.tsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const MapAndSocialsSection: React.FC = () => {
  const socialIconClasses = "w-6 h-6 text-gray-700 hover:text-green-700 transition duration-300 ";

  return (
    <section className="bg-white py-16 sm:py-24 w-full">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Social Media Section --- */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Follow us on Social Media
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className={socialIconClasses} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className={socialIconClasses} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className={socialIconClasses} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className={socialIconClasses} />
            </a>
          </div>
        </div>

        {/* --- Map Section --- */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg w-full" style={{ minHeight: "300px", height: "50vh" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.98066535187!2d3.5937171499999996!3d6.4566085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4740e79391b%3A0x66f68e0d3c01c77c!2sGreenland%20Estate%2C%20Oluwo%20Ologbon%2C%20Lagos!5e0!3m2!1sen!2sng!4v1701540321473!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location on Google Maps"
          ></iframe>

          <a
            href="https://www.google.com/maps/place/Greenland+Estate,+Oluwo+Ologbon,+Lagos/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 left-4 bg-white text-gray-800 text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
          >
            View larger map
          </a>
        </div>

      </div>
    </section>
  );
};

export default MapAndSocialsSection;
