import { Star } from "lucide-react";
import abouthero from "@/assets/about-hero.png";

const JlnSection = () => {
  return (
    <div className="py-20 w-full">
      <div className="w-full mx-auto max-w-[1700px] flex flex-col lg:flex-row items-stretch gap-5">

        {/* LEFT SIDE (HERO IMAGE) */}
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img
            src={abouthero}
            alt="JLN Hero"
            className="w-full h-auto rounded-3xl object-cover shadow-lg"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 w-full space-y-6  bg-white rounded-3xl  sm:p-6 flex flex-col ">
          {/* Top */}
          <div className="space-y-6">
            {/* <span className="bg-[#A9B01B] text-black px-5 py-2 rounded-full text-sm font-bold shadow-lg inline-block">
              WE ARE JLN
            </span> */}
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-green-700 text-black px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
            WE ARE JLN
          </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Gives you quality services at the best prices.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              JLN is your trusted hub for sustainable energy solutions and premium solar technology.
              We power homes and businesses with innovation, reliability, and a commitment to a greener future.
            </p>
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between gap-8 mt-8">
            {/* Features */}
            <div className="space-y-3">
              {["Support 24/7", "Best Quality", "Fastest Delivery", "Warranty 30 Days Product"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <p className="text-gray-700 font-medium text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-6 min-w-[350px]">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-teal-500">4.7</div>
                  <p className="text-sm text-gray-500 mt-1">(871 Reviews)</p>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg font-bold text-gray-900 leading-tight">From Google</p>
                  <p className="text-lg font-bold text-gray-900 leading-tight">Business</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default JlnSection;
