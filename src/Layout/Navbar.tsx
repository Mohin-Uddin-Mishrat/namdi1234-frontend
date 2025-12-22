import React, { useRef, useState } from "react";
import {
  IoLocationOutline,
  IoSearchOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import logo from "@/assets/logo (2).png";
import AccountDropdown from "@/components/AccountDropdown";
import Shopping, { SheetCartItemData } from "@/components/Shopping";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [cartItems, setCartItems] = useState<SheetCartItemData[]>([
    {
      id: "1",
      productName: "KISONLI U3100 Mini Speaker",
      currentPrice: 1125,
      originalPrice: 1798,
      quantity: 2,
      imageSrc: "path/to/img1.png",
      productBrand: "Kisonli",
    },
    {
      id: "2",
      productName: "Portable Bluetooth Speaker",
      currentPrice: 1500,
      originalPrice: 2000,
      quantity: 1,
      imageSrc: "path/to/img2.png",
      productBrand: "SoundMax",
    },
  ]);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const navigate = useNavigate(); // 👈 Hook for navigation
  const searchInputRef = useRef<HTMLInputElement>(null); // 👈 Reference to input

  const handleSearch = () => {
    const query = searchInputRef.current?.value.trim();
    if (query) {
      // URL-encode the query to handle spaces/special chars safely
      const encodedQuery = encodeURIComponent(query);
      navigate(`/products/${encodedQuery}`);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleDelete = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <nav className="bg-[#BFE099] w-full shadow-md sticky top-0 z-30">
      <div className=" mx-auto flex items-center h-16 sm:h-20 md:h-24 py-2 px-2 sm:px-4 md:px-6 lg:px-8">
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt="logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain mr-3 flex-shrink-0"
          />
        </Link>

        {/* ADDRESS */}
        <div className="hidden md:flex items-center gap-2 p-1 rounded-lg text-[#6E7A84] hover:bg-[#a8d675]/20 cursor-pointer mr-6">
          <IoLocationOutline className="w-8 h-6 md:w-10 md:h-7 lg:w-12 lg:h-8" />
          <div className="text-xs md:text-sm">
            <span className="font-semibold block">Select</span>
            <span className="font-semibold">Address</span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex-1 flex items-center gap-2 min-w-0">
          <div className="flex w-full h-9 sm:h-10 md:h-11 bg-white rounded-full overflow-hidden shadow-md border-2 border-[#BFE099]">
            <input
              type="text"
              placeholder="Search Products"
              ref={searchInputRef}
              onKeyDown={handleSearchKeyDown} // Allow Enter key
              className="flex-1 bg-white px-4 md:px-5 text-sm md:text-base text-gray-700 placeholder-gray-500 focus:outline-none min-w-0"
            />
          </div>
          <button
            type="button"
            onClick={handleSearch} // 👈 Trigger navigation
            className="flex items-center justify-center px-3 h-9 md:h-10 rounded-full border border-[#015D38] bg-[#BFE099] hover:bg-[#015D38] hover:text-white transition"
          >
            <IoSearchOutline className="w-6 h-6 text-[#015D38] group-hover:text-white" />
          </button>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center ml-4 space-x-4 flex-shrink-0">
          <div className="hidden md:block cursor-pointer hover:bg-green-100 p-1 rounded-full">
            <IoNotificationsOutline className="w-7 h-7 text-[#015D38]" />
          </div>
          <div className="hidden lg:flex items-center text-[#015D38] cursor-pointer">
            <AccountDropdown />
          </div>

          {/* Shopping Cart */}
          <Shopping
            itemCount={itemCount}
            cartItems={cartItems}
            onQuantityChange={handleQuantityChange}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
