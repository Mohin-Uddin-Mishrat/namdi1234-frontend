// SolarLanding.tsx

import React from 'react';

// Define the type for the feature card props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isGreen: boolean;
}

// A simple component for the feature cards
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, isGreen }) => {
  const baseClasses = 'p-8 flex flex-col items-center text-center h-full shadow-xl';
  // Corrected color classes based on the original screenshot and your request
  const colorClasses = isGreen
    ? 'bg-gradient-to-r from-yellow-600 to-green-800 text-white' // Gradient for the middle card
    : 'bg-white text-gray-800'; // White background with default text color for side cards

  return (
    <div className={`${baseClasses} ${colorClasses} rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02]`}>
      <div className="mb-4 text-4xl">
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${isGreen ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      {/* Description text color adjusted for clarity on white/gradient backgrounds */}
      <p className={`text-sm ${isGreen ? 'text-gray-100' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
};

// Main Component
const SolarLandingSection: React.FC = () => {
  // Simple SVG/Icon placeholders (replace with actual icons or use a library like Heroicons)
  // Adjusted icon colors to match the screenshot (green for white cards, white for green card)
  const LayeredSquaresIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 17v-4.7L12 12l5-2.7V17h-2V12.7L12 10l-3 1.7V17H7z" opacity=".3" />
      <path d="M12 2L1 6v12l11 4 11-4V6L12 2zm0 14V8l5-2.7L22 6v12l-10 3.6V16zm-10 .7V6l5-2.7L7 17v.7L2 16.7zm11-4V17h-2V12.7L9 11.7v-2L12 10l3 1.7V17h-2v-4.7L12 12l-3 1.7V16z" />
    </svg>
  );

  const ShoppingCartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5.1c-.28.17-.4.51-.3.83l.5 1.5c.08.24.31.41.57.41h10.98c.32 0 .6-.21.72-.5l1.65-4.62c.15-.43-.16-.9-.6-.9H6.18L4.85 3.7c-.12-.35-.45-.6-.82-.6H2c-.55 0-1 .45-1 1s.45 1 1 1h1.56l2.72 9.29-.4 1.52c-.17.6-.3 1.25-.3 1.91 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.18-.01-.36-.03-.53l-.22-1.77H13c.03.17.06.35.06.53 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.52-.12-1.01-.31-1.46L21 8.7c.07-.22.1-.45.09-.69l-1.63-4.57c-.18-.5-.65-.85-1.19-.85H6.18l-.5-1.5h-1.3l.5 1.5c-.28.17-.4.51-.3.83L5.8 12.9z" />
    </svg>
  );

  const TargetIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <path d="M12 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
    </svg>
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dark background for the entire header section */}
      <div className="bg-gray-900 w-full pb-20 lg:pb-60"> {/* Increased padding for larger screens */}
        {/* Background Effect (Stylized circle lines from the original image) */}
        <div className="absolute inset-0 z-0 opacity-20"> {/* Reduced opacity for subtlety */}
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Adjusted positions and visibility to match the screenshot's effect */}
            <circle cx="900" cy="100" r="300" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.1" />
            <circle cx="850" cy="150" r="250" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.08" />
            <circle cx="800" cy="200" r="200" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.06" />
            <circle cx="750" cy="250" r="150" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.04" />
          </svg>
        </div>

        {/* Content Container (Header Text and Cards Wrapper) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Header Content */}
          <div className="text-center text-white ">
            {/* OUR VALUE tag */}
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-green-700 text-black px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
              OUR VALUE
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ">
              Powering the Future with <br className="hidden md:inline" />
              <span className="">Precision</span>
            </h1>

            <p className='text-[#3A3B4C]'>
              At JLN Solar, we are committed to delivering reliable and sustainable energy <br /> solutions across Nigeria. <br />

              From cutting-edge solar panels to efficient energy systems, we light the way to a <br /> brighter tomorrow.
            </p>
          </div>
        </div>
      </div> {/* End of dark background div */}

      {/* Feature Cards Grid - positioned to overlap the section above */}
      {/* Adjust mt- value to control how much the cards overlap. Use negative margins to pull them up. */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-5 sm:mt-2 lg:px-8 mt-[-rem] md:mt-[-10rem] lg:mt-[-8rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        <FeatureCard
          icon={LayeredSquaresIcon}
          title="Durable Solar Components"
          description="We use only premium-grade solar cells and materials, built to withstand Nigeria's toughest weather and ensure long-term performance."
          isGreen={false}
        />
        <FeatureCard
          icon={ShoppingCartIcon}
          title="Scalable for All Projects"
          description="Whether powering a small home or a large industrial site, our solutions scale to meet your specific energy needs."
          isGreen={true} // This one gets the green background
        />
        <FeatureCard
          icon={TargetIcon}
          title="Smart & Seamless Design"
          description="Our systems are engineered for both performance and aesthetic appeal, blending effortlessly into homes and businesses."
          isGreen={false}
        />
      </div>
    </section>
  );
};

export default SolarLandingSection;