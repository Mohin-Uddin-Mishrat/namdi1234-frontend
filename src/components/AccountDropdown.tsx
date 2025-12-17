// import React, { useState } from "react";
// import { IoChevronDown } from "react-icons/io5";

// const AccountDropdown: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const options = ["Orders", "Accounts"]; 

//   return (
//     <div className="relative">
//       {/* Button */}
//       <div
//         onClick={toggleDropdown}
//         className="flex items-center text-custom-green-dark cursor-pointer select-none"
//       >
//         <span className="text-sm font-medium">Account details</span>
//         <IoChevronDown
//           className={`w-4 h-4 ml-1 transition-transform duration-200 ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </div>

//       {/* Dropdown */}
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//           {options.map((option, idx) => (
//             <div
//               key={idx}
//               className="px-4 py-2 text-gray-700 text-sm cursor-pointer hover:bg-green-100"
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccountDropdown;


import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const AccountDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Added path for routing
  const options = [
    { label: "Orders", path: "/orders" },
    { label: "AccountDetails", path: "/account" },
  ];

  return (
    <div className="relative">
      {/* Button */}
      <div
        onClick={toggleDropdown}
        className="flex items-center text-custom-green-dark cursor-pointer select-none"
      >
        <span className="text-sm font-medium">Account details</span>
        <IoChevronDown
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="px-4 py-2 text-gray-700 text-sm cursor-pointer hover:bg-green-100"
              // You can use this path for routing
              onClick={() => {
                console.log("Navigate to:", option.path);
                // e.g., use router.push(option.path) in Next.js
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
