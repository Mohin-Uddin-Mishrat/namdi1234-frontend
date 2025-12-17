
// import React, { useState } from 'react';
// import { IoTimerOutline } from 'react-icons/io5';
// import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
// import { useLocation } from 'react-router-dom';

// interface NavLink {
//   id: number;
//   label: string;
//   href: string;
//   isSpecial?: boolean;
// }

// interface SecondaryNavbarProps {
//   links?: NavLink[];
//   dealsText?: string;
// }

// const defaultLinks: NavLink[] = [
//   { id: 1, label: 'Home', href: '/' },
//   { id: 2, label: 'Shop', href: '/shop' },
//   { id: 3, label: 'Catalogue', href: '/catalogue' },
//   { id: 4, label: 'Proposal', href: '/proposal' },
//   { id: 5, label: 'About Us', href: '/about' },
//   { id: 6, label: 'Blog', href: '/blog' },
//   { id: 7, label: 'Contact Us', href: '/contact' },
// ];

// const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({
//   links = defaultLinks,
//   dealsText = 'Weekend Deals',
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Helper for active link
//   const isActive = (href: string) => location.pathname === href;

//   return (
//     <nav className="bg-white w-full shadow-sm border-b border-gray-100 ">
//       <div className="max-w-7xl mx-auto flex justify-between items-center h-16  px-4 sm:px-6 ">
        
//         {/* Logo or Brand */}
//         {/* <div className="flex-shrink-0 text-xl font-bold text-[#196F52]">Brand</div> */}

//         {/* Mobile Menu Button */}
//         <div className="sm:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-[#196F52] focus:outline-none">
//             {isOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Navigation Links + Deals */}
//         <div className={`
//           absolute sm:relative top-16 sm:top-0 left-0 right-0
//           bg-white sm:bg-transparent shadow-md sm:shadow-none
//           flex-1 sm:flex sm:items-center sm:justify-between
//           ${isOpen ? 'block' : 'hidden'} sm:block z-50
//         `}>
          
//           {/* Links */}
//           <div className="flex flex-col sm:flex-row sm:space-x-6 px-4 sm:px-0 py-4 sm:py-0">
//             {links.map((link) => (
//               <a
//                 key={link.id}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`
//                   px-2 py-2 sm:py-1 text-[16px] font-medium transition duration-150 ease-in-out
//                   border-b sm:border-b-0 border-gray-100
//                   ${link.isSpecial ? 'text-yellow-600 hover:text-yellow-700 font-bold' : 'text-[#196F52] hover:text-green-700'}
//                   ${isActive(link.href) ? 'text-[#D89C2C] font-bold underline underline-offset-4' : ''}
//                 `}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Weekend Deals */}
//           <div className="flex items-center text-[16px] text-[#196F52] font-semibold cursor-pointer px-4 sm:px-0 py-4 sm:py-0 sm:ml-4 transition duration-150 ease-in-out hover:text-green-700">
//             <IoTimerOutline className="w-5 h-5 mr-1 flex-shrink-0" />
//             <span>{dealsText}</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default SecondaryNavbar;

// import React from "react";
// import { IoTimerOutline } from "react-icons/io5";
// import { HiOutlineMenu } from "react-icons/hi";
// import { useLocation } from "react-router-dom";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// interface NavLink {
//   id: number;
//   label: string;
//   href: string;
//   isSpecial?: boolean;
// }

// interface SecondaryNavbarProps {
//   links?: NavLink[];
//   dealsText?: string;
// }

// const defaultLinks: NavLink[] = [
//   { id: 1, label: "Home", href: "/" },
//   { id: 2, label: "Shop", href: "/shop" },
//   { id: 3, label: "Catalogue", href: "/catalogue" },
//   { id: 4, label: "Proposal", href: "/proposal" },
//   { id: 5, label: "About Us", href: "/about" },
//   { id: 6, label: "Blog", href: "/blog" },
//   { id: 7, label: "Contact Us", href: "/contact" },
// ];

// const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({
//   links = defaultLinks,
//   dealsText = "Weekend Deals",
// }) => {
//   const location = useLocation();

//   const isActive = (href: string) => location.pathname === href;

//   return (
//     <nav className=" w-full shadow-sm border-b border-gray-100">
//       <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6">
        
//         {/* MOBILE MENU BUTTON */}
//         <div className="sm:hidden flex items-center">
//           <Sheet>
//             <SheetTrigger asChild>
//               <button className="text-[#196F52]">
//                 <HiOutlineMenu className="w-7 h-7" />
//               </button>
//             </SheetTrigger>

//             {/* MOBILE SHEET MENU */}
//             <SheetContent side="left" className="w-[260px] sm:w-[300px]">
//               <SheetHeader>
//                 <SheetTitle className="text-[#196F52] text-lg">Menu</SheetTitle>
//               </SheetHeader>

//               <div className="mt-6 space-y-4">

//                 {/* NAV LINKS */}
//                 {links.map((link) => (
//                   <a
//                     key={link.id}
//                     href={link.href}
//                     className={`
//                       block text-[16px] font-medium py-2 border-b
//                       ${link.isSpecial ? "text-yellow-600" : "text-[#196F52]"}
//                       ${isActive(link.href) ? "font-bold text-[#D89C2C]" : ""}
//                     `}
//                   >
//                     {link.label}
//                   </a>
//                 ))}

//                 {/* WEEKEND DEALS */}
//                 <div className="flex items-center text-[16px] text-[#196F52] font-semibold pt-2 cursor-pointer">
//                   <IoTimerOutline className="w-5 h-5 mr-2" />
//                   <span>{dealsText}</span>
//                 </div>

//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden sm:flex items-center justify-between w-full">
//           <div className="flex space-x-6">
//             {links.map((link) => (
//               <a
//                 key={link.id}
//                 href={link.href}
//                 className={`
//                   text-[16px] font-medium transition
//                   ${link.isSpecial ? "text-yellow-600" : "text-[#196F52]"}
//                   ${isActive(link.href) ? "text-[#D89C2C] font-bold underline underline-offset-4" : ""}
//                 `}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Weekend Deals */}
//           <div className="flex items-center text-[16px] text-[#196F52] font-semibold hover:text-green-700 cursor-pointer">
//             <IoTimerOutline className="w-5 h-5 mr-1" />
//             <span>{dealsText}</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default SecondaryNavbar;


import React from "react";
import { IoTimerOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { useLocation } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLink {
  id: number;
  label: string;
  href: string;
  isSpecial?: boolean;
}

interface SecondaryNavbarProps {
  links?: NavLink[];
  dealsText?: string;
}

const defaultLinks: NavLink[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Shop", href: "/shop" },
  { id: 3, label: "Catalogue", href: "/catalogue" },
  { id: 4, label: "Proposal", href: "/proposal" },
  { id: 5, label: "About Us", href: "/about" },
  { id: 6, label: "Blog", href: "/blog" },
  { id: 7, label: "Contact Us", href: "/contact" },
];

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({
  links = defaultLinks,
  dealsText = "Weekend Deals",
}) => {
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-40">
      <div className="max-w-full w-full mx-auto flex justify-between items-center h-16 px-4 sm:px-6 md:px-8">

        {/* MOBILE MENU BUTTON */}
        <div className="sm:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-[#196F52] focus:outline-none p-2 rounded hover:bg-green-50 transition">
                <HiOutlineMenu className="w-7 h-7" />
              </button>
            </SheetTrigger>

            {/* MOBILE SHEET MENU */}
            <SheetContent
              side="left"
              className="w-[260px] sm:w-[300px] bg-white rounded-r-lg shadow-lg"
            >
              <SheetHeader className="px-4 pt-6">
                <SheetTitle className="text-[#196F52] text-lg font-semibold">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col space-y-3 px-4">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`
                      block text-[16px] font-medium py-2 px-3 rounded
                      ${link.isSpecial ? "text-yellow-600" : "text-[#196F52]"}
                      ${isActive(link.href) ? "text-[#D89C2C] font-bold bg-green-50" : ""}
                      hover:bg-green-50 transition
                    `}
                  >
                    {link.label}
                  </a>
                ))}

                {/* Weekend Deals */}
                <div className="flex items-center text-[16px] text-[#196F52] font-semibold pt-4 cursor-pointer hover:text-green-700">
                  <IoTimerOutline className="w-5 h-5 mr-2" />
                  <span>{dealsText}</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden sm:flex items-center justify-between w-full">
          <div className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`
                  text-[16px] font-medium transition
                  ${link.isSpecial ? "text-yellow-600" : "text-[#196F52]"}
                  ${isActive(link.href) ? "text-[#D89C2C] font-bold" : ""}
                  hover:text-green-700
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Weekend Deals */}
          <div className="flex items-center text-[16px] text-[#196F52] font-semibold hover:text-green-700 cursor-pointer">
            <IoTimerOutline className="w-5 h-5 mr-1" />
            <span>{dealsText}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
