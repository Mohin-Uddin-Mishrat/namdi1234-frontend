import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiShoppingBag,
  FiPackage,
  FiDollarSign,
  FiMessageSquare,
  FiSettings,
  FiHelpCircle,
} from 'react-icons/fi';

interface MenuItem {
  label: string;
  icon: JSX.Element;
  path: string;
}

const VendorSidebar = () => {
  const location = useLocation();
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: <FiHome className="w-5 h-5" />,
      path: '/vendor-dashboard',
    },
    {
      label: 'Products',
      icon: <FiShoppingBag className="w-5 h-5" />,
      path: '/vendor-dashboard/products',
    },
    {
      label: 'Order',
      icon: <FiPackage className="w-5 h-5" />,
      path: '/vendor-dashboard/orders',
    },
    {
      label: 'Earnings',
      icon: <FiDollarSign className="w-5 h-5" />,
      path: '/vendor-dashboard/earnings',
    },
    {
      label: 'Message',
      icon: <FiMessageSquare className="w-5 h-5" />,
      path: '/vendor-dashboard/messages',
    },
    {
      label: 'Settings',
      icon: <FiSettings className="w-5 h-5" />,
      path: '/vendor-dashboard/settings',
    },
    {
      label: 'Help & Support',
      icon: <FiHelpCircle className="w-5 h-5" />,
      path: '/vendor-dashboard/help',
    },
  ];

  const getIsActive = (itemPath: string): boolean => {
    if (itemPath === '/vendor-dashboard') {
      // Only active if path is exactly /vendor-dashboard OR /vendor-dashboard/ (with no deeper segments)
      return location.pathname === '/vendor-dashboard' || 
             location.pathname === '/vendor-dashboard/';
    }
    // For all other items: active if path starts with itemPath + '/' OR equals itemPath
    return location.pathname === itemPath || location.pathname.startsWith(itemPath + '/');
  };


  return (
   <aside className="w-64 bg-white text-gray-700 min-h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      <nav className="mt-6 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = getIsActive(item.path);
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className={`mr-3 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default VendorSidebar;