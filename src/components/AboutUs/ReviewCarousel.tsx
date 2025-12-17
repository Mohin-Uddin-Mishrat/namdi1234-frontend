import React, { useState, useEffect } from "react";

const ReviewCarousel: React.FC = () => {
  // --- 1. Review Data ---
  const customerReviews = [
    {
      id: 1,
      name: "Jenifer Unix",
      role: "Customer",
      rating: 5,
      text: "I've been ordering from JLN Solar for over a year now and I can confidently say it's the best place to get solar products online...",
    },
    {
      id: 2,
      name: "Linda Joseph",
      role: "Customer",
      rating: 5,
      text: "JLN provided exceptional service. Their support team helped me choose exactly what I needed.",
    },
    {
      id: 3,
      name: "Alex Tunde",
      role: "Engineer",
      rating: 4,
      text: "Reliable components and clear documentation. Their large-scale industrial panels are top-notch and installation was smoother than expected.",
    },
    {
      id: 4,
      name: "Sarah K.",
      role: "Homeowner",
      rating: 5,
      text: "Switching to solar felt overwhelming, but the team made it easy. My energy bills are down, and the system looks seamless.",
    },
  ];

  // --- 2. State ---
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // --- 3. Detect screen size ---
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const step = isLargeScreen ? 2 : 1;

  // --- 4. Navigation ---
  const handleNext = () => {
    setActiveIndex((prev) => (prev + step) % customerReviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      (prev - step + customerReviews.length) % customerReviews.length
    );
  };

  // --- 5. Calculate reviews to show ---
  const reviewsToShow = [];
  for (let i = 0; i < step; i++) {
    reviewsToShow.push(customerReviews[(activeIndex + i) % customerReviews.length]);
  }

  // --- 6. Render ---
  return (
    <section className="bg-green-50/50 py-16 sm:py-24 relative overflow-hidden w-full">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700">
            Our Customer Reviews
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition duration-500 ease-in-out">
            {reviewsToShow.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between transition duration-500"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-blue-500 font-medium">{review.role}</p>
                  <div className="flex space-x-0.5 mt-2 cursor-pointer">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${i <= review.rating ? "text-yellow-500" : "text-gray-300"}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic mt-4 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg z-30 border border-gray-200 transition duration-150"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg z-30 border border-gray-200 transition duration-150"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
