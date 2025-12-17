

import React, { useRef, useEffect, useState } from "react";
import banner from "@/assets/Banner (3).png"

const slides = [banner, banner, banner, banner]; // 4 images

const SecondBannerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalTime = 3500;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
    sliderRef.current?.scrollTo({
      left: nextIndex * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
    sliderRef.current?.scrollTo({
      left: prevIndex * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden scroll-smooth"
      >
        {slides.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-full">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* PAGINATION DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-yellow-400 w-6" : "bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-20 hidden sm:flex"
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-20 hidden sm:flex"
      >
        ▶
      </button>
    </div>
  );
};

export default SecondBannerSlider;







// import React, { useRef, useEffect, useState } from "react";
// import banner from "@/assets/Banner (3).png";

// const slides = [banner, banner, banner, banner]; // 4 images

// const SecondBannerSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const intervalTime = 3500;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     const nextIndex = (currentIndex + 1) % slides.length;
//     setCurrentIndex(nextIndex);
//     sliderRef.current?.scrollTo({
//       left: nextIndex * sliderRef.current.clientWidth,
//       behavior: "smooth",
//     });
//   };

//   const goToPrev = () => {
//     const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
//     setCurrentIndex(prevIndex);
//     sliderRef.current?.scrollTo({
//       left: prevIndex * sliderRef.current.clientWidth,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="relative w-full overflow-hidden rounded-lg">
//       {/* SLIDER */}
//       <div
//         ref={sliderRef}
//         className="flex overflow-x-hidden scroll-smooth"
//       >
//         {slides.map((img, idx) => (
//           <div key={idx} className="flex-shrink-0 w-full">
//             <img
//               src={img}
//               alt={`Slide ${idx + 1}`}
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         ))}
//       </div>

//       {/* PAGINATION DOTS */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//         {slides.map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-2 h-2 rounded-full transition-all ${
//               idx === currentIndex ? "bg-yellow-400 w-6" : "bg-white/70"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={goToPrev}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-20 hidden sm:flex"
//       >
//         ◀
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-20 hidden sm:flex"
//       >
//         ▶
//       </button>
//     </div>
//   );
// };

// export default SecondBannerSlider;
