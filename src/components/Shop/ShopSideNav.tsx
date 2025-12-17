import React from 'react';

interface CategoryItem {
  id: string;
  name: string;
  href: string;
  items?: string;
}

interface CategoriesSidebarProps {
  title?: string;
  categories?: CategoryItem[];
}

const defaultCategories: CategoryItem[] = [
  { id: 'bulbs', name: 'Bulbs', href: '/categories/bulbs', items: '12' },
  { id: 'cctv', name: 'CCTV Cameras', href: '/categories/cctv', items: '45' },
  { id: 'smart-tv', name: 'Smart TV', href: '/categories/smart-tv', items: '32' },
  { id: 'solar-battery', name: 'Solar Battery', href: '/categories/solar-battery', items: '98' },
  { id: 'solar-charge-controller', name: 'Solar Charge Controller', href: '/categories/solar-charge-controller', items: '60' },
  { id: 'solar-fan', name: 'Solar Fan', href: '/categories/solar-fan', items: '55' },
  { id: 'solar-generator', name: 'Solar Generator', href: '/categories/solar-generator', items: '15' },
  { id: 'solar-inverter', name: 'Solar Inverter', href: '/categories/solar-inverter', items: '110' },
  { id: 'solar-panel', name: 'Solar Panel', href: '/categories/solar-panel', items: '150' },
  { id: 'solar-pumps', name: 'Solar Pumps', href: '/categories/solar-pumps', items: '28' },
  { id: 'solar-security-camera', name: 'Solar Security Camera', href: '/categories/solar-security-camera', items: '38' },
  { id: 'solar-street-light', name: 'Solar Street Light', href: '/categories/solar-street-light', items: '75' },
  { id: 'installation-accessories', name: 'Installation Accessories', href: '/categories/installation-accessories', items: '210' },
];

const ShopSideNav: React.FC<CategoriesSidebarProps> = ({
  title = 'All Categories',
  categories = defaultCategories,
}) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto font-sans mt-2 mb-4 px-2  sticky top-40 z-10">
      <div className="bg-[#015D38] text-white rounded-xl shadow-2xl overflow-hidden w-full ">
        {/* Title Section */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold bg-[#014d2e]/90 p-3 sm:p-4 rounded-t-xl">
          {title}
        </h2>

        {/* Categories List */}
   
        <ul className="py-1 sm:py-2 divide-y divide-white/30 w-full">
          {categories.map((category) => (
          
            <li key={category.id}>
              <a
                href={category.href}
                className="flex items-center p-3 sm:p-4 text-sm sm:text-base 
                           hover:bg-[#014d2e]/70 transition-colors duration-200 cursor-pointer"
              >
                {/* ID + Items */}
                <span className="mr-3 text-gray-300 font-semibold">
                  {category.id}
                  {category.id && ` (${category.items})`}
                </span>
                {/* Category Name */}
                {/* <span className="font-medium line-clamp-1">{category.name}</span> */}
              </a>
            </li>
          ))}
        </ul>
     
      </div>
    </div>
  );
};

export default ShopSideNav;
