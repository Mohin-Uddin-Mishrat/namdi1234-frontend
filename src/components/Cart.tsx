/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
// import img from "@/assets/b.jpg"
// import img2 from "@/assets/h.jpg"
// import img3 from "@/assets/m.jpg"
// import img4 from "@/assets/n.jpg"
// import img5 from "@/assets/t.jpg"
// import img6 from "@/assets/r.jpg"
// import img7 from "@/assets/n.jpg"
// import img8 from "@/assets/n.jpg"
// import img9 from "@/assets/i.png"
// import img10 from "@/assets/j.png"
// import img11 from "@/assets/k.png"
// Product type definition
interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
}

// Category type definition
interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Cart: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 92,
    hours: 14,
    minutes: 36,
    seconds: 46
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  console.log(cartCount)
  const [slideIn, setSlideIn] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Products data
  const products: Product[] = [
    {
      id: 1,
      name: 'CompactPower 5watts 12V DC Bulb With 5m Cable Lamp Holder Switch -1pc',
      image:"https://res.cloudinary.com/dafumxx8n/image/upload/v1764481705/c_r9ya7x.jpg",
      originalPrice: 21780.00,
      salePrice: 19800.00
    },
    {
      id: 2,
      name: '9W 12V Plastic DC LED Bulbs',
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481705/e_jubm2e.jpg",
      originalPrice: 3000.00,
      salePrice: 2805.00
    },
    {
      id: 3,
      name: 'Dc LED USB ENERGY SAVING BULB',
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481708/z_vy1icl.jpg",
      originalPrice: 4355.00,
      salePrice: 3960.00
    },
    {
      id: 4,
      name: 'Generic 1000W HOME SOLAR LIGHTING SYSTEM FOR TV, LAPTOP AND LIGHTS',
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/m_jxfliz.jpg",
      originalPrice: 245025.00,
      salePrice: 222750.00
    },
    {
      id: 5,
      name: 'Generic DC BULB 3W/12V',
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481707/t_x0axwv.jpg",
      originalPrice: 2350.00,
      salePrice: 2145.00
    },
    {
      id: 6,
      name: 'Generic Inverter Friendly Lightening DC Bulb 12v 5w (10 Pieces)',
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481707/r_vfqesw.jpg",
      originalPrice: 34485.00,
      salePrice: 31350.00
    },
    {
      id: 7,
      name: 'Generic Inverter Friendly Lightening DC Bulb 12v 7w (10 Pieces)',
      image:"https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/n_rnmjxb.jpg",
      originalPrice: 25410.00,
      salePrice: 23100.00
    },
    {
      id: 8,
      name: 'Generic Inverter Friendly Lightening DC Bulb 12v 7w (10 Pieces)',
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/n_rnmjxb.jpg",
      originalPrice: 25410.00,
      salePrice: 23100.00
    }
  ];

  // Categories data
  const categories: Category[] = [
    {
      id: 1,
      name: "Solar's",
      description: "Don't miss the last opportunity",
      image:"https://res.cloudinary.com/dafumxx8n/image/upload/v1764481707/i_ziuvgs.png"
    },
    {
      id: 2,
      name: 'Lighting And Fans',
      description: "Don't miss the last opportunity",
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/j_dgr9cj.png"
    },
    {
      id: 3,
      name: 'SmartTV',
      description: "Don't miss the last opportunity",
      image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481708/tv_iaegk9.jpg"
    }
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setSlideIn(false);
    setTimeout(() => setSlideIn(true), 10);
  };

  const closeImageModal = () => {
    setSlideIn(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Main Content */}
      <main className="w-full max-w-full mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar - Countdown Timer */}
          <aside className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-[#8DC34E] rounded-lg p-6 sm:p-8 text-white text-center sticky top-40">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl">⏰</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-left">Exclusive Solar Offer</h2>
              <p className="text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed text-left">
                Harness the power of the sun with our limited-time solar solutions. Save energy, 
                save money, and reduce your carbon footprint with JLN Solar's advanced solar 
                panels and energy storage systems.
              </p>
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                <div className="bg-white text-green-700 rounded-lg p-2 sm:p-4">
                  <div className="text-xl sm:text-3xl font-bold">{countdown.days}</div>
                  <div className="text-xs sm:text-sm">Days</div>
                </div>
                <div className="bg-white text-green-700 rounded-lg p-2 sm:p-4">
                  <div className="text-xl sm:text-3xl font-bold">{countdown.hours}</div>
                  <div className="text-xs sm:text-sm">Hours</div>
                </div>
                <div className="bg-white text-green-700 rounded-lg p-2 sm:p-4">
                  <div className="text-xl sm:text-3xl font-bold">{countdown.minutes}</div>
                  <div className="text-xs sm:text-sm">Mins</div>
                </div>
                <div className="bg-white text-green-700 rounded-lg p-2 sm:p-4">
                  <div className="text-xl sm:text-3xl font-bold">{countdown.seconds}</div>
                  <div className="text-xs sm:text-sm">Secs</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 w-full overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition w-full">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-2 sm:mb-3 h-10 sm:h-12 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div>
                        <div className="text-gray-400 line-through text-xs sm:text-sm">
                          {formatPrice(product.originalPrice)}
                        </div>
                        <div className="text-green-700 font-bold text-base sm:text-lg">
                          {formatPrice(product.salePrice)}
                        </div>
                      </div>
                      <button 
                        onClick={addToCart}
                        className="bg-green-700 text-white px-3 sm:px-4 py-2 rounded hover:bg-green-800 transition cursor-pointer"
                      >
                        <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            <div className="text-center mt-6 sm:mt-8">
              <button className="bg-[#8DC34E] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-green-600 transition cursor-pointer font-semibold text-sm sm:text-base">
                Show More
              </button>
            </div>

            {/* Categories Section */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  onClick={() => openImageModal(category.image)}
                  className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{category.description}</p>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-40 sm:h-48 object-contain mb-3 sm:mb-4"
                  />
                  <button className="border-2 border-gray-800 text-gray-800 px-4 sm:px-6 py-1.5 sm:py-2 rounded hover:bg-gray-800 hover:text-white transition cursor-pointer text-sm sm:text-base">
                    See More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal with Slide Animation from Right */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-end"
          onClick={closeImageModal}
        >
          <div 
            className={`h-full w-full md:w-2/3 lg:w-1/2 bg-white transform transition-transform duration-300 ease-out ${
              slideIn ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">Product Details</h2>
                <button 
                  onClick={closeImageModal}
                  className="text-gray-600 hover:text-gray-800 text-3xl font-light cursor-pointer"
                >
                  ×
                </button>
              </div>
              
              {/* Image Container */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Full size"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;