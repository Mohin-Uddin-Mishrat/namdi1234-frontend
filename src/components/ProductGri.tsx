
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

// const dummy_image_path = (name: string) => `/src/assets/${name}`;


const ProductGrid: React.FC = () => {
    const [, setCountdown] = useState({
        days: 92,
        hours: 14,
        minutes: 36,
        seconds: 46
    });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [, setCartCount] = useState(0);
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
                                // Timer stops at 00:00:00:00
                                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Products data - ১৬
    const products: Product[] = [
        { id: 1, name: 'CompactPower 5watts 12V DC Bulb With 5m Cable Lamp Holder Switch -1pc', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481705/c_r9ya7x.jpg", originalPrice: 21780.00, salePrice: 19800.00 },
        { id: 2, name: '9W 12V Plastic DC LED Bulbs', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481705/c_r9ya7x.jpg", originalPrice: 3000.00, salePrice: 2805.00 },
        { id: 3, name: 'Dc LED USB ENERGY SAVING BULB', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481708/z_vy1icl.jpg", originalPrice: 4355.00, salePrice: 3960.00 },
        { id: 4, name: 'Generic 1000W HOME SOLAR LIGHTING SYSTEM FOR TV, LAPTOP AND LIGHTS', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/m_jxfliz.jpg", originalPrice: 245025.00, salePrice: 222750.00 },
        { id: 5, name: 'Generic DC BULB 3W/12V', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481707/t_x0axwv.jpg", originalPrice: 2350.00, salePrice: 2145.00 },
        { id: 6, name: 'Generic Inverter Friendly Lightening DC Bulb 12v 5w (10 Pieces)', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481707/r_vfqesw.jpg", originalPrice: 34485.00, salePrice: 31350.00 },
        { id: 7, name: 'Generic Inverter Friendly Lightening DC Bulb 12v 7w (10 Pieces)', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/n_rnmjxb.jpg", originalPrice: 25410.00, salePrice: 23100.00 },
        { id: 8, name: 'Generic Inverter Friendly Lightening DC Bulb 12v 7w (10 Pieces)', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/n_rnmjxb.jpg", originalPrice: 25410.00, salePrice: 23100.00 },

        { id: 9, name: 'Solar Panel Kit 50W Monocrystalline', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481707/i_ziuvgs.png", originalPrice: 15000.00, salePrice: 12500.00 },
        { id: 10, name: 'Premium Ceiling Fan DC Motor', image:"https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/j_dgr9cj.png", originalPrice: 8500.00, salePrice: 7800.00 },
        { id: 11, name: '4K Ultra HD Smart TV 32 Inch', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481708/tv_iaegk9.jpg", originalPrice: 45000.00, salePrice: 39999.00 },
        { id: 12, name: 'Portable Power Station 300W', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481705/c_r9ya7x.jpg", originalPrice: 65000.00, salePrice: 59900.00 },
        { id: 13, name: 'LED Tube Light 4ft Pack of 4', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481705/c_r9ya7x.jpg", originalPrice: 5000.00, salePrice: 4500.00 },
        { id: 14, name: 'Lithium Battery 100Ah Deep Cycle', image:"https://res.cloudinary.com/dafumxx8n/image/upload/v1764481707/t_x0axwv.jpg", originalPrice: 120000.00, salePrice: 110000.00 },
        { id: 15, name: 'Solar Charge Controller MPPT 60A', image:"https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/n_rnmjxb.jpg", originalPrice: 32000.00, salePrice: 29500.00 },
        { id: 16, name: 'Smart Home Hub Gateway', image: "https://res.cloudinary.com/dafumxx8n/image/upload/v1764481706/n_rnmjxb.jpg", originalPrice: 9000.00, salePrice: 7999.00 },
    ];

    const addToCart = () => {
        setCartCount(prev => prev + 1);
    };

    const formatPrice = (price: number) => {
        return `₦${price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };
    const closeImageModal = () => {
        setSlideIn(false);
        setTimeout(() => setSelectedImage(null), 300);
    };

    return (

        <div className="min-h-screen bg-gray-50 w-full">

            <div className="  p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <div className="flex items-center">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 pr-4 whitespace-nowrap">
                                Product on sale!
                            </h1>
                            <div className="flex-grow h-0.5 bg-gray-600"></div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <main className="container mx-auto px-2 py-6">

                {/* Products Grid */}
                <div className="flex-1">
                    {/* 1 (Mobile) / sm:2 (Tablet) / lg:3 (Medium) / xl:4 (Desktop) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                                <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        // w-full h-full object-contain
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-800 mb-3 h-12 line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <div className="text-gray-400 line-through text-sm">
                                                {formatPrice(product.originalPrice)}
                                            </div>
                                            <div className="text-green-700 font-bold text-lg">
                                                {formatPrice(product.salePrice)}
                                            </div>
                                        </div>
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
                        <button className="bg-[#8DC34E] text-white px-8 py-3 rounded-lg hover:bg-green-600 transition cursor-pointer font-semibold">
                            Show More
                        </button>
                    </div>
                </div>
                {/* </div> */}
            </main>

            {/* Image Modal with Slide Animation from Right */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-end"
                    onClick={closeImageModal}
                >
                    <div
                        className={`h-full w-full md:w-2/3 lg:w-1/2 bg-white transform transition-transform duration-300 ease-out ${slideIn ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b">
                                <h2 className="text-xl font-bold text-gray-800">Product Details</h2>
                                <button
                                    onClick={closeImageModal}
                                    className="text-gray-600 hover:text-gray-800 text-3xl font-light cursor-pointer"
                                >
                                    
                                </button>
                            </div>

                            {/* Image Container */}
                            <div className="flex-1 overflow-auto p-6 flex items-center justify-center">

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;