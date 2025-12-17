import React from "react";
import defaultImg from "@/assets/box.png";

interface PromoCardProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  img?: string;
  onButtonClick?: () => void;
}

export const PromoCard: React.FC<PromoCardProps> = ({
  title = "Inverters",
  subtitle = "Don't miss the last opportunity",
  buttonText = "See more",
  img = defaultImg,
  onButtonClick,
}) => {
  return (
    <div className="w-full h-full min-h-80 md:min-h-65"> {/* Proper height */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full bg-gradient-to-br from-black/60 to-black/40">
        
        {/* Background Image */}
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col justify-end h-full pb-10">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-xs">
            {subtitle}
          </p>
          <button
            onClick={onButtonClick}
            className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg w-fit text-lg cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;