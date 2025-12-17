import React from 'react';

// Import the image directly (assuming it's located in the 'src/assets' folder)
import hp from "@/assets/hp.jpg"; // Ensure your image path is correct

// Review interface
interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  review: string;
}

// Category interface
interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CustomerReviews: React.FC = () => {
  // Reviews data
  const reviews: Review[] = [
    {
      id: 1,
      name: "Robert Smith",
      role: "Customer",
      rating: 5,
      review: "I've been buying from JLN Solar for over a year now and I can confidently say it's the best online store for solar products."
    },
    {
      id: 2,
      name: "Chidi Nwosu",
      role: "Customer",
      rating: 5,
      review: "I love the consistency in quality from JLN. They always deliver on their priorities. Highly recommended!"
    },
    {
      id: 3,
      name: "Linda Joseph",
      role: "Customer",
      rating: 5,
      review: "JLN provided exceptional service. Their support team helped me choose exactly what I needed."
    },
    {
      id: 4,
      name: "Anayo Rosemary",
      role: "Customer",
      rating: 5,
      review: "Prompt delivery, secure packaging, and the solar product worked exactly as described - couldn't be happier!"
    }
  ];

  // Categories data
  const categories: Category[] = [
    {
      id: 1,
      title: "Save up to $600 on select big-screen TVs.",
      description: "",
      image: "/src/assets/tv.jpg"
    },
    {
      id: 2,
      title: "Power Banks",
      description: "Don't miss the last opportunity",
      image: "/src/assets/power.png"
    },
    {
      id: 3,
      title: "Batteries",
      description: "Don't miss the last opportunity",
      image: "/src/assets/bat.png"
    }
  ];

  // Render stars function
  const renderStars = (rating: number): React.ReactNode => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400 text-lg">
            {index < rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  // State for rotating reviews
  const [currentReviewIndex, setCurrentReviewIndex] = React.useState(0);

  // Auto-rotate reviews every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev === 0 ? 2 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const handlePrevious = () => {
    setCurrentReviewIndex(0);
  };

  const handleNext = () => {
    setCurrentReviewIndex(2);
  };

  // Get current set of reviews to display
  const displayedReviews: Review[] = reviews.slice(currentReviewIndex, currentReviewIndex + 2);

  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-screen -z-20"
        style={{
          backgroundImage: `url(${hp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay with blur and reduced opacity */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.2px]"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Layout Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[516px_1fr] gap-8">
          {/* Left Column - TV Box (516x724) */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-[516px] mx-auto lg:mx-0" style={{ height: '724px' }}>
            <div className="relative bg-white flex items-center justify-center p-8" style={{ height: '580px' }}>
              <img 
                src={categories[0].image}
                alt={categories[0].title}
                className="w-full h-full object-contain"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {categories[0].title}
              </h3>
              <div className="flex justify-center">
               <button className="border-2 border-[#7cb342] bg-[#7cb342] text-white hover:bg-[#A4D78E] hover:text-[#7cb342] px-8 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
                 See More
               </button>
              </div>



            </div>
          </div>

          {/* Right Column - Reviews and Products */}
          <div className="flex flex-col gap-8">
            {/* Reviews Section */}
            <div className="relative">
              
              
              {/* Reviews Grid - 2 columns with navigation */}
             <div className='bg-white p-10 rounded-2xl'>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 bg-white py-6 rounded-lg">
                Our customer's reviews
              </h2>
                 <div className="relative">
                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevious}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentReviewIndex === 0 
                      ? 'bg-[#7cb342] text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentReviewIndex === 2 
                      ? 'bg-[#7cb342] text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displayedReviews.map((review: Review) => (
                    <div 
                      key={review.id}
                      className="bg-[#F7F8F9] rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                      style={{ width: '590px', height: '280px', maxWidth: '100%' }}
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{review.role}</p>
                      {renderStars(review.rating)}
                      <p className="text-gray-700 leading-relaxed">
                        "{review.review}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
             </div>
            </div>

            {/* Products Section - Power Banks and Batteries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Power Banks */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" style={{ width: '590px', height: '250px', maxWidth: '100%' }}>
                <div className="relative bg-white flex items-center justify-center p-4" style={{ height: '140px' }}>
                  <img 
                    src={categories[1].image}
                    alt={categories[1].title}
                    className="w-full h-full object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-800 mb-1">
                    {categories[1].title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {categories[1].description}
                  </p>
                 <button className="border-2 border-[#7cb342] text-white bg-[#7cb342] hover:bg-[#6d9c2b] active:bg-[#4c8721] hover:text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer">
                    See More
                  </button>

                </div>
              </div>

              {/* Batteries */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" style={{ width: '590px', height: '250px', maxWidth: '100%' }}>
                <div className="relative bg-white flex items-center justify-center p-4" style={{ height: '140px' }}>
                  <img 
                    src={categories[2].image}
                    alt={categories[2].title}
                    className="w-full h-full object-contain"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-800 mb-1">
                    {categories[2].title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {categories[2].description}
                  </p>
                  <button className="border-2 border-[#7cb342] text-white bg-[#7cb342] hover:bg-[#6d9c2b] active:bg-[#4c8721] hover:text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer">
                    See More
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;