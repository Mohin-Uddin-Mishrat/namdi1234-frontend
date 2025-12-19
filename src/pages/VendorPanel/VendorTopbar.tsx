import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBell, HiOutlineShoppingCart } from 'react-icons/hi';
const VendorTopBar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Mock seller data
  const seller = {
    name: "Marvin McKinney",
    role: "Seller",
    avatar: "/avatar-placeholder.jpg", // Replace with real avatar URL
  };

  const notifications = [
    { id: 1, message: "New order received", time: "2 mins ago" },
    { id: 2, message: "Payment processed", time: "1 hour ago" },
  ];

  const cartItems = [
    { id: 1, name: "Product A", quantity: 2 },
    { id: 2, name: "Product B", quantity: 1 },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      {/* Left: Seller Info */}
      <div className="flex items-center space-x-4">
        <img
          src={seller.avatar}
          alt={seller.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-800">{seller.name}</div>
          <div className="text-sm text-gray-500">{seller.role}</div>
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <HiOutlineBell className="h-6 w-6" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 h-5 w-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className="p-3 border-b border-gray-100 hover:bg-gray-50">
                    <p className="text-sm text-gray-800">{n.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-gray-200">
                <Link
                  to="/vendor-dashboard/notifications"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <HiOutlineShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 h-5 w-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">Cart ({cartItems.length})</h3>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-3 border-b border-gray-100 hover:bg-gray-50">
                    <p className="text-sm text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-gray-200">
                <Link
                  to="/vendor-dashboard/cart"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  View cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default VendorTopBar;