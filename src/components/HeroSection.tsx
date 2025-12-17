import React from 'react';

// Import the image directly (assuming it's located in the 'src/assets' folder)
import hp from "@/assets/hp.jpg";

// HeroSection component
const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image - Fixed position to persist during scroll */}
      <div
        className="absolute top-0 left-0 w-full h-screen z-0" // Adjust z-index to make sure it's behind content
        style={{
          backgroundImage: `url(${hp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay with blur and reduced opacity */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.2px]"></div>
      </div>

      {/* Hero Section Content (Over the fixed background) */}
      <div className="flex justify-end items-center px-4 md:px-8 lg:px-20">
        <div className="h-[500px] overflow-hidden bg-transparent">
          <div className="relative z-10 mx-auto h-full flex flex-col justify-center items-center md:items-start">
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                A complete solution for all electronic <br /> stuff
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-8">
                Find the best products for your needs from anywhere and anytime. Don't miss the new items!
              </p>
              <button className="bg-[#689f38] font-sans hover:bg-[#1f3f03] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer">
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


// import React from 'react';

// // Import the image directly (assuming it's located in the 'src/assets' folder)
// import hp from "@/assets/hp.jpg";

// // HeroSection component
// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative">
//       {/* Background Image - Fixed position to persist during scroll */}
//       <div
//         className="absolute top-0 left-0 w-full h-screen z-0 " // Adjust z-index to make sure it's behind content
//         style={{
//           backgroundImage: `url(${hp})`, 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           backgroundRepeat: 'no-repeat', 
//           backgroundAttachment: 'fixed',
//         }}
//       >
//         {/* Dark Overlay with blur and reduced opacity */}
//         <div className="absolute inset-0 bg-black/40 backdrop-blur-0.2"></div>
//       </div>

//       {/* Hero Section Content (Over the fixed background) */}
//        <div className=' flex justify-end items-center mr-30'>
//         <div className=" h-[500px] overflow-hidden bg-transparent"> 
//         <div className="relative z-10  mx-auto px-4 h-full flex items-center">
//           <div className="">
//             <h1 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"> 
//               A complete solution for all electronic <br /> stuff
//             </h1>
//             <p className="text-base  md:text-lg text-white/90 mb-8">
//               Find the best products for your needs from anywhere and anytime. Don't miss the new items!
//             </p>
//             <button className="bg-[#689f38] font-sans hover:bg-[#1f3f03] text-white px-8 py-2 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer">
//               Discover more
//             </button>
//           </div>
//         </div>
//       </div>
//        </div>
//     </div>
//   );
// };

// export default HeroSection;


// import React from 'react';

// import hp from "@/assets/hp.jpg"

// // HeroSection component
// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative">
//       {/* Background Image - Fixed position to persist during scroll */}
//       <div 
//         className="fixed top-0 left-0 w-full h-screen -z-20  opacity-15"
//         style={{
//           // Ensure this path works. If not, you must place the image in the 'public' directory.
//           backgroundImage: `url('/assets/hp.jpg')`,  // updated for public directory
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'fixed' 
//         }}
//       >
//         {/* Dark Overlay with blur and reduced opacity */}
//         <div className="absolute inset-0 backdrop-blur-[0.2px]"></div>
//       </div>

//       {/* Hero Section Content (Over the fixed background) */}
//       <div className="relative h-[500px] overflow-hidden bg-transparent"> 
//         <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
//           <div className="max-w-2xl">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> 
//               A complete solution for all electronic stuff
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 mb-8">
//               Find the best products for your needs from anywhere and anytime. Don't miss the new items!
//             </p>
//             <button className="opacity-10 hover:bg-[#689f38] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer">
//               Discover more
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



// import React from 'react';
// // Make sure to correctly import your images based on your project setup (e.g., Vite/Webpack)

// // Review interface
// interface Review {
//   id: number;
//   name: string;
//   role: string;
//   rating: number;
//   review: string;
// }

// // Category interface
// interface Category {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const HeroSection: React.FC = () => {
//   // Reviews data (Used all unique reviews from screenshots for a comprehensive data set)
//   const reviews: Review[] = [
//     {
//       id: 1,
//       name: "Robert Smith",
//       role: "Customer",
//       rating: 5,
//       review: "I've been buying from JLN Solar for over a year now and I can confidently say it's the best online store for solar products. Delivery is always prompt and their customer service team is super helpful and polite. I highly recommend JLN Solar to anyone looking for affordable solar equipment."
//     },
//     {
//       id: 2,
//       name: "Chidi Nwosu",
//       role: "Customer",
//       rating: 5,
//       review: "I love the consistency in quality from JLN. They always deliver on their priorities. Highly recommended!"
//     },
//     {
//       id: 3,
//       name: "Linda Joseph",
//       role: "Customer",
//       rating: 5,
//       review: "JLN provided exceptional service. Their support team helped me choose exactly what I needed."
//     },
//     {
//       id: 4,
//       name: "Anayo Rosemary",
//       role: "Customer",
//       rating: 5,
//       review: "Prompt delivery, secure packaging, and the solar product worked exactly as described - couldn't be happier!"
//     }
//   ];

//   // Categories data
//   const categories: Category[] = [
//     {
//       id: 1,
//       title: "Save up to $600 on select big-screen TVs.",
//       description: "",
//       image: "/src/assets/tv.png"
//     },
//     {
//       id: 2,
//       title: "Power Banks",
//       description: "Don't miss the last opportunity",
//       image: "/src/assets/power.png"
//     },
//     {
//       id: 3,
//       title: "Batteries",
//       description: "Don't miss the last opportunity",
//       image: "/src/assets/bat.png"
//     }
//   ];

//   // Render stars function (returns TSX/ReactNode)
//   const renderStars = (rating: number): React.ReactNode => {
//     return (
//       <div className="flex gap-1 mb-3">
//         {[...Array(5)].map((_, index) => (
//           <span key={index} className="text-yellow-400 text-lg">
//             {index < rating ? '★' : '☆'}
//           </span>
//         ))}
//       </div>
//     );
//   };

//   // Function to get a subset of reviews for the initial display
//   const displayedReviews: Review[] = reviews.slice(0, 2); 

//   return (
//     <div className="relative">
//       {/* Background Image - Fixed position to persist during scroll */}
//       <div 
//         className="fixed top-0 left-0 w-full h-screen -z-20 bg-[#807C7F] opacity-15"
//         style={{
//           // **FIXED:** Ensure this path works. If not, you must import the image.
//           backgroundImage: `url('/src/assets/hp.jpg')`, 
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'fixed' 
//         }}
//       >
//         {/* Dark Overlay to improve text readability */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Hero Section Content (Over the fixed background) */}
//       <div className="relative h-[500px] overflow-hidden bg-transparent"> 
//         <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
//           <div className="max-w-2xl">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> 
//               A complete solution for all electronic stuff
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 mb-8">
//               Find the best products for your needs from anywhere and anytime. Don't miss the new items!
//             </p>
//             <button className="bg-[#7cb342] opacity-15 over:bg-[#689f38] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer">
//               Discover more
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Customer Reviews Section - Scrollable content with light green background */}
//       {/* **FIXED:** Changed to bg-green-50 to match the light green background in the screenshots */}
//       <div className="relative bg-green-50 py-16 z-10"> 
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//             Our customer's reviews
//           </h2>

//           {/* Reviews Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//             {displayedReviews.map((review: Review) => (
//               <div 
//                 key={review.id}
//                 className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">
//                   {review.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-3">{review.role}</p>
//                 {renderStars(review.rating)}
//                 <p className="text-gray-700 leading-relaxed">
//                   "{review.review}"
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Categories Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {categories.map((category: Category) => (
//               <div 
//                 key={category.id}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
//               >
//                 {/* Category Image */}
//                 <div className="relative h-72 bg-white flex items-center justify-center p-6">
//                   {/* Image tag uses the path from your data */}
//                   <img 
//                     src={category.image}
//                     alt={category.title}
//                     className="w-full h-full object-contain"
//                     // Fallback image in case path is wrong
//                     onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//                       e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Product+Image';
//                     }}
//                   />
//                 </div>

//                 {/* Category Info */}
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">
//                     {category.title}
//                   </h3>
//                   {category.description && (
//                     <p className="text-sm text-gray-600 mb-4">
//                       {category.description}
//                     </p>
//                   )}
//                   {/* **FIXED:** Button color changed to use the primary green for border/text */}
//                   <button className="border-2 border-[#7cb342] text-[#7cb342] hover:bg-[#7cb342] hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
//                     See More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;