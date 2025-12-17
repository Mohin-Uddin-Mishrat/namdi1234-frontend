import  { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img from "@/assets/3-1.png"
import img1 from "@/assets/4.png"
import img2 from "@/assets/5.png"
import img3 from "@/assets/7.png"
const images = [
  img,
  img1,
  img2,
  img3

];

const GridCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, []);

  // Get visible items based on screen size
  const getVisibleImages = () => {
    const count =
      window.innerWidth >= 1280
        ? 4
        : window.innerWidth >= 768
        ? 3
        : window.innerWidth >= 640
        ? 2
        : 1;

    const visible = [];
    for (let i = 0; i < count; i++) {
      visible.push(images[(startIndex + i) % images.length]);
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="relative w-full max-w-[1400px] py-6">

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20 cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-20 cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      {/* Responsive Grid */}
      <div
        className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          transition-all
        "
      >
        {visibleImages.map((img, i) => (
          <div
            key={i}
            className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[330px] xl:h-[350px]"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCarousel;
