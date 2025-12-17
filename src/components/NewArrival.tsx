/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
// import img from "@/assets/b.jpg"
// import img2 from "@/assets/h.jpg"
// import img3 from "@/assets/m.jpg"
// import img4 from "@/assets/n.jpg"
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

const NewArrival = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Generic DC BULB 3W/12V",
      price: 2145.0,
      originalPrice: 2350.0,
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481705/c_r9ya7x.jpg",
    },
    {
      id: 2,
      name: "MC4 Spanner Tool",
      price: 2200.0,
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481705/e_jubm2e.jpg",
    },
    {
      id: 3,
      name: "Cable Glands",
      price: 2500.0,
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481708/z_vy1icl.jpg",
    },
    {
      id: 4,
      name: "9W 12V Plastic DC LED Bulbs",
      price: 2805.0,
      originalPrice: 3005.0,
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/m_jxfliz.jpg",
    },
  ]);

  const [visibleProducts, setVisibleProducts] = useState(4);
  const [cartCount, setCartCount] = useState(0);
  console.log(cartCount)

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="min-h-screen bg-[#e8f5e9] py-6">
      <div className="container mx-auto px-2">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Sidebar - Same size as Cart clock box */}
          <aside className="lg:w-96">
            <div className="bg-gradient-to-b from-[#7cb342] to-[#689f38] rounded-lg p-8 text-white text-center sticky top-6">
              <div className="space-y-6">
                {/* International Shipment */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">International Shipment</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Your orders are shipped seamlessly between countries
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/30"></div>

                {/* 30 Days Warranty */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">30 Days Warranty</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    You have the right to return your orders within 30 days.
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/30"></div>

                {/* Secure Payment */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Your payments are secure with our private security network.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content - Products */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                New Arrival
              </h2>
              <div className="h-0.5 w-full bg-gray-300 mt-2"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.slice(0, visibleProducts).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Product Image - Same as Cart */}
                  <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/283x328?text=Product+Image';
                      }}
                    />
                  </div>

                  {/* Product Info - Same as Cart */}
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-800 mb-3 h-12 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Price Section and Cart Button - Same as Cart */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        {product.originalPrice && (
                          <div className="text-gray-400 line-through text-sm">
                            {formatPrice(product.originalPrice)}
                          </div>
                        )}
                        <div className="text-green-700 font-bold text-lg">
                          {formatPrice(product.price)}
                        </div>
                      </div>
                      
                      {/* Add to Cart Button - Same as Cart component */}
                      <button 
                        onClick={addToCart}
                        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition cursor-pointer"
                      >
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            <div className="text-center mt-8">
              <button 
                onClick={handleShowMore}
                className="bg-[#2d4d08] text-white px-8 py-3 rounded-lg hover:bg-green-600 transition cursor-pointer font-semibold"
              >
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;