
import exampleImg from "@/assets/team.jpg"; 

const AboutSection = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 w-full">
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Text */}
        <div className="lg:w-1/2 w-full space-y-6">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-green-700 text-black px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
            OUR HISTORY
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Excellent electronic service with affordability
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            JLN Global Investment Limited is a subsidiary of JLN Construction Services LLC, Baltimore, Maryland, USA. We are an indigenous company registered under the laws of the Federal Republic of Nigeria, and our factory/warehouse is located at Plot C2/39 Industrial Layout by Coca-Cola bus stop, off Onitsha Road, Owerri, Imo State, Nigeria, for the sole purpose of providing alternative solutions to energy challenges in sub-Saharan Africa.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            JLN Global Investment Limited, in partnership with Zhongshan Shouliang Technology Co Ltd. China, specializes in manufacturing, sales, and installations of off-grid solar energy products. We provide turnkey solar energy solutions for residential and commercial end users here in Africa.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our services are targeted to supply solar electricity to households and commercial businesses that solely wish to depend on solar mini grid for electric power supply and usage.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={exampleImg}
            alt="Company Work"
            className="  rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
