// import img from "@/assets/Fan.png";

// export default function DiscountCard() {
//   return (
//     <div className="relative bg-gradient-to-br from-green-900 to-black rounded-2xl overflow-hidden group cursor-pointer">
//       <img
//         src={img}
//         alt=""
//         className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
//       <div className="absolute bottom-6 left-6 text-white">
//         <button className="mt-4 bg-white/20 backdrop-blur px-6 py-2 rounded-full hover:bg-white/30 transition">
//           See More
//         </button>
//       </div>
//     </div>
//   );
// }


import Fan from "@/assets/Fan.png"
export default function DiscountCard() {
  return (
    <div className="relative bg-gradient-to-br from-green-900 to-green-700 rounded-2xl overflow-hidden group cursor-pointer h-64 sm:h-80 md:h-96">
      {/* Background lightning effect */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
          <path 
            d="M 50 50 Q 100 120 150 100 T 250 150 T 350 100" 
            stroke="#9EFF00" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.6"
            className="animate-pulse"
          />
          <path 
            d="M 30 150 Q 120 200 180 180 T 300 220 T 380 180" 
            stroke="#9EFF00" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.5"
          />
          <path 
            d="M 20 250 Q 100 280 160 270 T 280 300 T 370 280" 
            stroke="#9EFF00" 
            strokeWidth="2.5" 
            fill="none" 
            opacity="0.4"
          />
          <path 
            d="M 60 320 Q 140 360 200 340 T 320 370 T 390 350" 
            stroke="#9EFF00" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Fan Image */}
      <div className="absolute inset-0">
        <img
          src={Fan}
          alt="Fan"
          className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
            Fans
          </h2>
          <p className="text-white text-sm sm:text-base">
            Don't miss the last<br />opportunity
          </p>
        </div>

        <div>
          <button className="bg-transparent border-2 border-white text-white cursor-pointer px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-lg hover:bg-white hover:text-green-800 transition duration-300 font-medium text-sm sm:text-base">
            See More
          </button>
        </div>
      </div>

      {/* Green glow effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 via-transparent to-green-500/20 pointer-events-none" /> */}
    </div>
  );
}