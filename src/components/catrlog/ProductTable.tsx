import React, { useState } from 'react';
import {  ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  thumbnail: string;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  quantity: number;
}

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Always show exactly 5 pages
  const getPageNumbers = (): number[] => {
    const pages: number[] = [];
    
    // Always show pages 1-5
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <div className="bg-[#E8F3DB] border-t  w-fill">
      {/* Top section with "Showing" text */}
      <div className="px-4 py-3 sm:hidden">
        <p className="text-sm text-gray-600 text-center">
          Showing {startItem} - {endItem} out of {totalItems}
        </p>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-2 px-4 py-4">
        {/* Desktop and Mobile page numbers - always 1 to 5 */}
        <div className="flex items-center gap-2">
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center min-w-[2.25rem] h-9 px-3 rounded font-medium transition-all shadow-sm ${
                currentPage === page
                  ? 'bg-teal-600 text-white scale-105 shadow-md'
                  : ' text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 33;

  // Page 1 products
  const page1Products: Product[] = [
    { id: 22330, thumbnail: '🔋', name: '1.4kva, 12v Bara Power Inverter', originalPrice: '₦250,470.00', discountedPrice: '₦227,700.00', quantity: 1 },
    { id: 21090, thumbnail: '⚡', name: '100ah 12/24/36/48v Felicity Charger Controller MPPT', originalPrice: '₦435,600.00', discountedPrice: '₦396,000.00', quantity: 1 },
    { id: 19620, thumbnail: '🔋', name: '100ah 12v C Capital Solar Battery', originalPrice: '₦217,800.00', discountedPrice: '₦198,000.00', quantity: 1 },
    { id: 19630, thumbnail: '🔋', name: '100AH 12v GBM Solar Dry Cell Battery', originalPrice: '₦245,025.00', discountedPrice: '₦222,750.00', quantity: 1 },
    { id: 21100, thumbnail: '⚡', name: '100ah 48v Felicity Solar Charger Controller MPPT', originalPrice: '₦417,450.00', discountedPrice: '₦379,500.00', quantity: 1 },
    { id: 22340, thumbnail: '💡', name: '10kva 48V Felicity Smart Inverter Machine', originalPrice: '₦1,996,500.00', discountedPrice: '₦1,815,000.00', quantity: 1 },
    { id: 22350, thumbnail: '💡', name: '10kva 48V Felicity Smart Inverter Machine', originalPrice: '₦1,996,500.00', discountedPrice: '₦1,815,000.00', quantity: 1 },
    { id: 22360, thumbnail: '💡', name: '10kva 48v Ivpm Hybrid Felicity Inverter', originalPrice: '₦1,996,500.00', discountedPrice: '₦1,815,000.00', quantity: 1 },
    { id: 19640, thumbnail: '🔋', name: '10kva 48V Xanfress Solar Battery', originalPrice: '₦1,452,000.00', discountedPrice: '₦1,320,000.00', quantity: 1 },
    { id: 20370, thumbnail: '📱', name: '12kva 96V/120V/360V Felicity Home Inverter Sunshine Series', originalPrice: '₦2,200,000.00', discountedPrice: '₦2,000,000.00', quantity: 1 },
    { id: 20330, thumbnail: '🔌', name: '120watt Polycrystal Solar panel', originalPrice: '₦50,000.00', discountedPrice: '₦45,000.00', quantity: 1 },
    { id: 20250, thumbnail: '☀️', name: '12.8V 100ah LiFePO4 (Deep Blue Li-smart) System 48V Bank', originalPrice: '₦850,755.00', discountedPrice: '₦773,415.00', quantity: 1 },
    { id: 21250, thumbnail: '💾', name: '150A Amp 12v Storage Controller', originalPrice: '₦120,802.00', discountedPrice: '₦109,820.00', quantity: 1 },
    { id: 21410, thumbnail: '🔋', name: '17.0 200ah Lithium (LiFeP04) Battery Pack 3KW LCD Display 6p x 200ah', originalPrice: '₦3,246,792.00', discountedPrice: '₦2,951,720.00', quantity: 1 },
    { id: 20180, thumbnail: '💡', name: '180w Strong Solar Street Light', originalPrice: '', discountedPrice: '₦74,910.00', quantity: 1 },
    { id: 20190, thumbnail: '💡', name: '180w All In One Solar Led Light', originalPrice: '₦104,728.00', discountedPrice: '₦95,207.00', quantity: 1 },
    { id: 20200, thumbnail: '💡', name: '180w All In One Solar Led Light', originalPrice: '₦104,728.00', discountedPrice: '₦95,207.00', quantity: 1 },
    { id: 20800, thumbnail: '🔋', name: '1KW(0) 48v Solar Battery (Sync)', originalPrice: '₦363,000.00', discountedPrice: '₦330,000.00', quantity: 1 },
    { id: 20060, thumbnail: '🔋', name: '200ah 12v Energy Dry Cell Battery', originalPrice: '₦368,159.00', discountedPrice: '₦334,690.00', quantity: 1 },
    { id: 20950, thumbnail: '🔌', name: '2Batteries Polygo Rechargeable Standing Fan With Remote', originalPrice: '₦177,892.00', discountedPrice: '₦161,720.00', quantity: 1 },
    { id: 22210, thumbnail: '☀️', name: '310watt 48v Mono-Durable Canadian Solar Battery Academy', originalPrice: '₦83,314.00', discountedPrice: '₦75,740.00', quantity: 1 },
    { id: 22220, thumbnail: '☀️', name: '310watt 48v Mono-Durable Canadian Solar Battery Academy', originalPrice: '₦83,314.00', discountedPrice: '₦75,740.00', quantity: 1 },
    { id: 22310, thumbnail: '💚', name: '3KW Semi-Sync Rechargeable Charging Fan', originalPrice: '', discountedPrice: '₦264,742.00', quantity: 1 },
    { id: 22270, thumbnail: '🔌', name: '3.5kw All in Solar Power Hybrid Battery Station', originalPrice: '₦2,335,835.00', discountedPrice: '₦2,123,487.00', quantity: 1 },
    { id: 22500, thumbnail: '📺', name: '43 Inch Smart LED', originalPrice: '', discountedPrice: '₦360,207.00', quantity: 1 },
    { id: 22260, thumbnail: '🔋', name: '48kva 12v (Paralleled) 12V Laptop Battery Generator', originalPrice: '₦816,562.00', discountedPrice: '₦742,330.00', quantity: 1 },
    { id: 22600, thumbnail: '🔌', name: '50kwatt Suit 24v (1~10KVA) Small Commercial Solar System 48kWh', originalPrice: '', discountedPrice: '₦19,345,000.00', quantity: 1 },
    { id: 21980, thumbnail: '☀️', name: '545W Poly Half Cell 144 Bifacial Solar Panel Blue', originalPrice: '₦207,482.00', discountedPrice: '₦188,620.00', quantity: 1 },
    { id: 20510, thumbnail: '🔋', name: '550w All In One Tubular Lead-Acid Panel', originalPrice: '₦506,302.00', discountedPrice: '₦460,275.00', quantity: 1 },
    { id: 21870, thumbnail: '⚡', name: '5kva Max Hybrid Tubular Sunshine', originalPrice: '', discountedPrice: '₦817,425.00', quantity: 1 },
    { id: 21810, thumbnail: '🔋', name: '60 x 200ah TUBULAR Semi-Junction', originalPrice: '₦8,267,943.00', discountedPrice: '₦7,516,312.00', quantity: 1 },
    { id: 23300, thumbnail: '☀️', name: 'CanadianSolar 450W SOLAR PANEL MONO 24V/36V/48V | Jumia Nigeria', originalPrice: '₦174,240.00', discountedPrice: '₦158,400.00', quantity: 1 },
    { id: 21690, thumbnail: '🌀', name: 'Century 18 AC/DC Energy Saving Non Rechargeable Fan', originalPrice: '', discountedPrice: '₦10,881.00', quantity: 1 },
  ];

  // Page 2 products
  const page2Products: Product[] = [
    { id: 21700, thumbnail: '🌀', name: 'Century 18" Rechargeable Wall Fan+Remote', originalPrice: '₦110,715.00', discountedPrice: '₦100,650.00', quantity: 1 },
    { id: 21710, thumbnail: '🌀', name: 'Century Mist Fan Double Batteries and LED Light', originalPrice: '₦306,735.00', discountedPrice: '₦278,850.00', quantity: 1 },
    { id: 21220, thumbnail: '⚡', name: 'Charger Controller 60ah MPPT', originalPrice: '₦263,175.00', discountedPrice: '₦239,250.00', quantity: 1 },
    { id: 27950, thumbnail: '🔌', name: 'Circuit Breakers', originalPrice: '', discountedPrice: '₦9,500.00', quantity: 1 },
    { id: 22590, thumbnail: '💚', name: 'Cloud Energy 1.5KVA/12V Home (Non-Hybrid) Inverter Green', originalPrice: '₦533,227.00', discountedPrice: '₦484,752.00', quantity: 1 },
    { id: 22600, thumbnail: '💚', name: 'Cloud Energy 1.5KVA/12V Home (Non-Hybrid) Inverter Green', originalPrice: '₦533,227.00', discountedPrice: '₦484,752.00', quantity: 1 },
    { id: 22610, thumbnail: '💚', name: 'Cloud Energy 1.5KVA/12V Home (Non-Hybrid) Inverter Green', originalPrice: '₦533,227.00', discountedPrice: '₦484,752.00', quantity: 1 },
    { id: 22620, thumbnail: '💚', name: 'Cloud Energy 1.5KVA/12V Home (Non-Hybrid) Inverter Green', originalPrice: '₦533,227.00', discountedPrice: '₦484,752.00', quantity: 1 },
    { id: 21720, thumbnail: '🌀', name: 'Cloud Energy 16" 10watt DC Standing Fan', originalPrice: '₦87,118.00', discountedPrice: '₦79,198.00', quantity: 1 },
    { id: 23450, thumbnail: '🔌', name: 'AI_IoT CONTROL PAY-to-action Charge Shoutdown Charging at Deep Touch WIFI App 63A Type-X', originalPrice: '₦117,647.00', discountedPrice: '₦107,000.00', quantity: 1 },
    { id: 23740, thumbnail: '🔋', name: '3p 3.2v Blue Bench Light [Remote]', originalPrice: '₦159,000.00', discountedPrice: '₦159,000.00', quantity: 1 },
    { id: 23750, thumbnail: '🔋', name: '3p 3.2v Blue Bench Light Priority C3 - 36w', originalPrice: '₦208,824.00', discountedPrice: '₦189,840.00', quantity: 1 },
    { id: 21960, thumbnail: '📺', name: 'Amani 43"ELED Based Android TV', originalPrice: '', discountedPrice: '₦180,000.00', quantity: 1 },
    { id: 23580, thumbnail: '🎵', name: 'AmazonMusic TV Alarm 2R-SR', originalPrice: '', discountedPrice: '₦12,000.00', quantity: 1 },
    { id: 23660, thumbnail: '⚫', name: 'Smart CAMSIR Digital Video Suitable 18X 1080/720p Full HD Output', originalPrice: '₦291,669.00', discountedPrice: '₦265,154.00', quantity: 1 },
    { id: 23730, thumbnail: '📱', name: 'Android TV-3', originalPrice: '', discountedPrice: '₦63,000.00', quantity: 1 },
    { id: 23820, thumbnail: '🔋', name: 'Asuu Africa LP 100-3', originalPrice: '', discountedPrice: '₦19,208.00', quantity: 1 },
    { id: 23830, thumbnail: '📡', name: 'Assiast Moontia', originalPrice: '', discountedPrice: '₦14,000.00', quantity: 1 },
    { id: 23800, thumbnail: '⭕', name: 'Battery Combo', originalPrice: '', discountedPrice: '₦4,500.00', quantity: 1 },
    { id: 23940, thumbnail: '🔋', name: 'Battery Bank kit Aluminum', originalPrice: '', discountedPrice: '₦22,106.00', quantity: 1 },
    { id: 23050, thumbnail: '🔋', name: 'Birlls Priority System for Inverter Manually', originalPrice: '', discountedPrice: '₦132,000.00', quantity: 1 },
    { id: 23060, thumbnail: '🔋', name: 'Birlls Priority System for Inverter System Manually', originalPrice: '₦145,200.00', discountedPrice: '₦132,000.00', quantity: 1 },
    { id: 23230, thumbnail: '📦', name: 'Boxtt Circular RESERVED 100+ Piece a5 150mm Nominal', originalPrice: '₦215,022.00', discountedPrice: '₦195,475.00', quantity: 1 },
    { id: 22320, thumbnail: '💡', name: 'Bright', originalPrice: '', discountedPrice: '₦8,000.00', quantity: 1 },
    { id: 23760, thumbnail: '🔋', name: 'Cabinet Blocks', originalPrice: '', discountedPrice: '₦2,000.00', quantity: 1 },
    { id: 23340, thumbnail: '☀️', name: 'CanadianSolar 305W(12V) Dilatation contact Supply Bracket -1 module 590mm', originalPrice: '₦151,140.00', discountedPrice: '₦137,400.00', quantity: 1 },
    { id: 23350, thumbnail: '☀️', name: 'CanadianSolar 305W(12V) KuMax CS3W-A(GB) 420mm (340/370/395W) MALAYSIA SOLAR', originalPrice: '₦166,320.00', discountedPrice: '₦151,200.00', quantity: 1 },
    { id: 23360, thumbnail: '☀️', name: 'CanadianSolar 305W(12V) KuMax CS3W-A(GB) 420mm (340/370/395W) SOLAR', originalPrice: '₦166,320.00', discountedPrice: '₦151,200.00', quantity: 1 },
    { id: 23370, thumbnail: '☀️', name: 'Century 18 DC225D Looping Turning Non-Rechargeable Fan', originalPrice: '', discountedPrice: '₦16,637.00', quantity: 1 },
    { id: 23740, thumbnail: '🌀', name: 'Century 18" Rechargeable-Best-Fan Oscillate', originalPrice: '₦110,355.00', discountedPrice: '₦100,322.00', quantity: 1 },
    { id: 23450, thumbnail: '💡', name: 'Century-Blue 16w (Smart Rechargeable 60w Light (PRO-LED 40J)', originalPrice: '₦136,883.00', discountedPrice: '₦124,439.00', quantity: 1 },
    { id: 23460, thumbnail: '💚', name: 'Cloud Energy 3KVA(48V) Cloned Blue (Hybrid) Inverter Green', originalPrice: '₦1,673,342.00', discountedPrice: '₦1,521,220.00', quantity: 1 },
    { id: 23470, thumbnail: '💚', name: 'Cloud Energy 3KVA/24V Cloned Blue (Hybrid) Inverter Green', originalPrice: '₦1,673,342.00', discountedPrice: '₦1,521,220.00', quantity: 1 },
  ];

  // Combine all products for pagination
  const allProducts = [...page1Products, ...page2Products];
  
  const totalItems = allProducts.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  return (
    <div className="mt-5 ml-10 mr-10">
            {/* Header */}
          <div className="  px-4 py-3 hidden sm:block">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1} - {Math.min(endIndex, totalItems)} out of {totalItems}
            </p>
          </div>
      <div className="w-full  mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
      

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium w-20">ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium w-24">Thumbnails</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Products</th>
                  <th className="px-4 py-3 text-left text-sm font-medium w-48">Price</th>
                  <th className="px-4 py-3 text-center text-sm font-medium w-24">Quantity</th>
                  <th className="px-4 py-3 text-center text-sm font-medium w-28">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentProducts.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-sm text-gray-700">{product.id}</td>
                    <td className="px-4 py-4">
                      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-3xl">
                        {product.thumbnail}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">{product.name}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col">
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                        <span className="text-sm font-semibold text-gray-900">
                          {product.discountedPrice}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-gray-700">
                      {product.quantity}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2 mx-auto transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTable;