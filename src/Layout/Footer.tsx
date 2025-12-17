/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BsUmbrella } from "react-icons/bs";
import { PiGlobeHemisphereEastThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { MdOutlineHeadsetMic } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#d4e8d4] w-full">
      {/* Top Green Banner */}
      <div className="bg-[#0f5132] text-white py-6 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Original Product */}
            <div className="flex items-start gap-3">
              <div className="text-yellow-400 text-4xl mt-1 flex-shrink-0">
                <IoDiamondOutline className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base mb-1">Original Product</h3>
                <p className="text-xs sm:text-sm opacity-90">100% Original product that covered warranty by the vendor.</p>
              </div>
            </div>

            {/* 30 Days Warranty */}
            <div className="flex items-start gap-3">
              <div className="text-yellow-400 text-4xl mt-1 flex-shrink-0">
                <BsUmbrella className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base mb-1">30 Days Warranty</h3>
                <p className="text-xs sm:text-sm opacity-90">You have the right to return your orders within 30 days.</p>
              </div>
            </div>

            {/* Global Shipping */}
            <div className="flex items-start gap-3">
              <div className="text-yellow-400 text-4xl mt-1 flex-shrink-0">
                <PiGlobeHemisphereEastThin className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base mb-1">Global Shipping</h3>
                <p className="text-xs sm:text-sm opacity-90">Your orders are shipped seamlessly between countries</p>
              </div>
            </div>

            {/* 100% Secure */}
            <div className="flex items-start gap-3">
              <div className="text-yellow-400 text-4xl mt-1 flex-shrink-0">
                <CiLock className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base mb-1">100% Secure</h3>
                <p className="text-xs sm:text-sm opacity-90">Your payments are secure with our private security network.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#d4e8d4] py-12 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Logo and Description */}
            <div>
              <div className="flex flex-col gap-3 mb-4">
                <img 
                  src="/src/assets/logo (2).png" 
                  alt="JLN Solars Logo" 
                  className="w-32 h-auto sm:w-40"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h2 className="text-[#0f5132] font-bold text-lg">JLN SOLARS</h2>
              </div>
              <p className="text-gray-700 text-sm">
                We believe we are the future of green energy in Nigeria and Africa!
              </p>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-[rgb(9,10,10)] font-bold text-base mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us Section */}
            <div>
              <h3 className="text-[rgb(8,8,8)] font-bold text-base mb-4">About us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/story" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="/store" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors">
                    Visit Our Store
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/account" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors">
                    Account
                  </a>
                </li>
              </ul>
            </div>

            {/* Find Us Section */}
            <div>
              <h3 className="text-[rgb(18,20,19)] font-bold text-base mb-4">Find Us</h3>
              <p className="text-gray-700 text-sm mb-3">Find a location nearest you.</p>
              <ul className="space-y-3">
                <li>
                  <a href="/stores" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors flex items-center gap-2">
                    <FaMapMarkerAlt /> See Our Stores
                  </a>
                </li>
                <li>
                  <a href="mailto:info@jlnsolars.com" className="text-gray-700 text-sm hover:text-[#0f5132] transition-colors flex items-center gap-2">
                    <FaEnvelope /> info@jlnsolars.com
                  </a>
                </li>
                <li>
                  <div className="bg-[#b8ddb8] p-3 rounded-md flex items-center gap-3 mt-4">
                    <div className="text-[#0f5132] flex-shrink-0">
                      <MdOutlineHeadsetMic size={24} />
                    </div>
                    <div>
                       <p className="text-xs text-[#0f5132] font-bold">NEED HELP? CALL US!</p>
                      <p className="text-[#0f5132] font-bold text-sm sm:text-base">(888) 4000-2424</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-[#d4e8d4] border-t border-gray-300 py-4 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-xs sm:text-sm text-center md:text-left">
              Copyright © 2025 , All rights reserved. Present by JLN Solar
            </p>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <img 
                src="/src/assets/footer.png" 
                alt="Payment Methods" 
                className="h-6 sm:h-8"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback payment icons if image doesn't load */}
              <div className="flex gap-2 text-xl sm:text-2xl text-gray-600">
                {/* <span title="Visa">💳</span>
                <span title="Mastercard">💳</span>
                <span title="American Express">💳</span>
                <span title="PayPal">💳</span>
                <span title="Discover">💳</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#212a31] text-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">About Us</h3>
//             <p className="text-sm">
//               We are a team of passionate developers building amazing web
//               applications with modern technologies.
//             </p>
//           </div>

//           {/* Quick Links Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/" className="hover:text-gray-300">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="hover:text-gray-300">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="/services" className="hover:text-gray-300">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:text-gray-300">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-300"
//               >
//                 <FaFacebook size={24} />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-300"
//               >
//                 <FaTwitter size={24} />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-300"
//               >
//                 <FaInstagram size={24} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Newsletter Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Newsletter</h3>
//             <p className="text-sm mb-4">
//               Subscribe to our newsletter to get the latest updates.
//             </p>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="p-2 mr-2 rounded-md border-1 border-white  text-white focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#124e66] text-[#d3d9d4] px-4 rounded-md hover:bg-[#124e66]/50"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p className="text-sm">
//             &copy; {new Date().getFullYear()} Sazzad Mahim. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
