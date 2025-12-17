import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your 3 banner images
import banner1 from '@/assets/Banner (3).png';
import banner2 from '@/assets/Banner (3).png';
import banner3 from '@/assets/Banner (3).png';

const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 3 banner images
  const images = [banner1, banner2, banner3];

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full overflow-hidden group m"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Carousel Container */}
      <div className="relative w-full rounded-3xl">
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-in-out rounded-3xl"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 rounded-3xl"
            >
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-auto object-contain object-center block  rounded-3xl"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white cursor-pointer p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 cursor-pointer z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Dots Indicator - 3 dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;