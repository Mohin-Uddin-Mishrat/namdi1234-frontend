// // components/DiscountCarouselGrid.jsx
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef } from "react";

// const discountItems = [
//   {
//     id: 1,
//     discount: "40%",
//     image: "/images/discount/generator.jpg",
//     alt: "Solar Generator",
//   },
//   {
//     id: 2,
//     discount: "35%",
//     image: "/images/discount/panels.jpg",
//     alt: "Solar Panels",
//   },
//   {
//     id: 3,
//     discount: "25%",
//     image: "/images/discount/tv.jpg",
//     alt: "Smart TV",
//   },
//   {
//     id: 4,
//     discount: "30%",
//     image: "/images/discount/charger.jpg",
//     alt: "Power Bank & Charger",
//   },
//   {
//     id: 5,
//     discount: "20%",
//     image: "/images/discount/accessories.jpg",
//     alt: "Cables & Accessories",
//   },
// ];

// export default function DiscountCarouselGrid() {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
//   };

//   return (
//     <section className="relative bg-gradient-to-b from-black via-green-950 to-black py-12 overflow-hidden">
//       {/* Optional: Add smoke background */}
//       <div className="absolute inset-0 opacity-50">
//         <div className="absolute inset-0 bg-gradient-to-t from-green-600 via-transparent to-transparent blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative">
//         {/* Carousel Container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-8"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {discountItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex-shrink-0 w-80 sm:w-96 lg:w-80 snap-center group relative"
//             >
//               {/* Card */}
//               <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-green-500/30 shadow-2xl hover:border-green-400/60 transition-all duration-500">
//                 {/* Glowing Border Effect */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

//                 {/* Product Image */}
//                 <div className="p-8 flex justify-center items-center h-80">
//                   <img
//                     src={item.image}
//                     alt={item.alt}
//                     className="max-h-full max-w-full object-contain drop-shadow-2xl"
//                   />
//                 </div>

//                 {/* Discount Text - Top Left */}
//                 <div className="absolute top-6 left-6 text-left pointer-events-none">
//                   <h2 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 drop-shadow-2xl leading-none">
//                     {item.discount}
//                   </h2>
//                   <p className="text-6xl font-bold text-cyan-400 -mt-6 tracking-wider drop-shadow-lg">
//                     OFF
//                   </p>
//                   <p className="text-lg text-white/90 font-medium mt-1 tracking-wide">
//                     ON ALL PRODUCTS
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl transition z-10"
//         >
//           <ChevronLeft className="w-10 h-10 text-white" />
//         </button>
//         <button
//           onClick={scrollRight}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl transition z-10"
//         >
//           <ChevronRight className="w-10 h-10 text-white" />
//         </button>
//       </div>

//       {/* Hide scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// }


// components/DiscountCarouselGrid.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface DiscountItem {
  id: number;
  discount: string;
  image: string;
  alt: string;
}

const discountItems: DiscountItem[] = [
  { id: 1, discount: "40%", image: "/src/assets/3-1.png", alt: "Solar Generator" },
  { id: 2, discount: "35%", image: "/src/assets/4.png", alt: "Solar Panels" },
  { id: 3, discount: "25%", image: "/src/assets/5 (1).png", alt: "Smart TV" },
  { id: 4, discount: "30%", image: "/src/assets/5.png", alt: "Power Bank & Charger" },
  { id: 5, discount: "20%", image: "/src/assets/6.png", alt: "Cables & Accessories" },
];

export default function DiscountCarouselGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-b from-black via-green-950 to-black py-12 overflow-hidden">
      {/* Optional: Add smoke background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-t from-green-600 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-8 scrollbar-hide"
        >
          {discountItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-80 sm:w-96 lg:w-80 snap-center group relative">
              <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-green-500/30 shadow-2xl hover:border-green-400/60 transition-all duration-500">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                {/* Product Image */}
                <div className="p-8 flex justify-center items-center h-80">
                  <img src={item.image} alt={item.alt} className="max-h-full max-w-full object-contain drop-shadow-2xl" />
                </div>

                {/* Discount Text - Top Left */}
                <div className="absolute top-6 left-6 text-left pointer-events-none">
                  <h2 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 drop-shadow-2xl leading-none">
                    {item.discount}
                  </h2>
                  <p className="text-6xl font-bold text-cyan-400 -mt-6 tracking-wider drop-shadow-lg">OFF</p>
                  <p className="text-lg text-white/90 font-medium mt-1 tracking-wide">ON ALL PRODUCTS</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl transition z-10"
        >
          <ChevronLeft className="w-10 h-10 text-white" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl transition z-10"
        >
          <ChevronRight className="w-10 h-10 text-white" />
        </button>
      </div>

      {/* Hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
