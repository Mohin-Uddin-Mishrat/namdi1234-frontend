// import React from 'react';
// import Marquee from 'react-fast-marquee';

// // --- TYPE DEFINITIONS ---
// interface MarqueeItem {
//     id: number;
//     text: string;
// }

// interface MarqueeProps {
//     data: MarqueeItem[];
//     speed?: number;
//     backgroundColor?: string;
//     textColor?: string;
// }

// // --- MARQUEE COMPONENT ---
// export const MarqueeComponent: React.FC<MarqueeProps> = ({
//     data,
//     speed = 50,
//     backgroundColor = 'bg-[#015D38]', // Green background
//     textColor = 'text-white',         // White text
// }) => {
//     if (!data || data.length === 0) {
//         return (
//             <div className="p-16 text-center text-gray-500 border border-dashed border-gray-400">
//                 No content available for marquee.
//             </div>
//         );
//     }

//     const containerClasses = `${backgroundColor}  px-10 overflow-hidden border-y border-gray-300 shadow-md`;

//     return (
// <div
//     className={`${containerClasses} w-full h-[100px] mx-auto text-center flex items-center`}
// >
//     <Marquee
//         speed={speed}
//         gradient={false}
//         pauseOnHover={true}
//         direction="left"
//     >
//         {data.map((item) => (
//             <span
//                 key={item.id}
//                 className={`text-2xl font-semibold ${textColor}
//                 whitespace-nowrap hover:text-pink-300 transition-colors flex-shrink-0`}
//             >
//                 {item.text}
//             </span>
//         ))}
//     </Marquee>
// </div>


//     );
// };

// // --- SAMPLE DATA ---
// const sampleMarqueeData: MarqueeItem[] = [
//     { id: 1, text: '✅ New Feature: Dark Mode is now available!' },
//     { id: 2, text: '✅ Tip: Use `ctrl+k` to open the command palette.' },
//     { id: 3, text: '✅ Important Update: System Maintenance on 25th Nov.' },
//     { id: 4, text: '✅ Sale Alert! All premium plans are 20% off this week.' },
//     { id: 5, text: '✅ Join our webinar next week for a deep dive into React.' },
// ];

// // --- APP ---
// const App: React.FC = () => {
//     return (
//         <div className="  font-sans bg-[#E8F3DB] w-full mx-auto">
//             <div className="mb-12">
//                 <MarqueeComponent
//                     data={sampleMarqueeData}
//                     speed={80}
//                 />
//             </div>
//         </div>
//     );
// };

// export default App;


import { Check } from 'lucide-react';

export default function SolarMarquee() {
  const messages = [
    "SOLAR PANEL SALE YOU CAN'T RESIST",
    "FREE SHIPPING AND RETURN",
    "NEW SEASON, NEW PANELS: SOLAR PANEL SALE YOU CAN'T MISS",
    "LIMITED TIME OFFER: SOLAR PANEL SALE YOU CAN'T RESIST"
  ];

  return (
    <div className="bg-green-800 py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of messages */}
        {messages.map((message, index) => (
          <div key={`first-${index}`} className="flex items-center mx-8">
            <Check className="text-green-400 w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-white font-medium text-sm tracking-wide uppercase">
              {message}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {messages.map((message, index) => (
          <div key={`second-${index}`} className="flex items-center mx-8">
            <Check className="text-green-400 w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-white font-medium text-sm tracking-wide uppercase">
              {message}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}