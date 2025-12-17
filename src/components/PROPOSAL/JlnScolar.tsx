import React from 'react';

const JlnScolar: React.FC = () => {
    //   const darkGreen = 'bg-[#004d2e]';

    return (
        <header className="bg-white shadow-lg border-b border-gray-200 font-sans mt-2 mx-2 md:mx-6 lg:mx-10 rounded-2xl">

            {/* 1. Main Dark Green Banner */}
            <div className=" md:py-8 mx-2 md:mx-4 bg-[#015D38] py-16 rounded-t-2xl ">
                <h1 className="text-white text-3xl md:text-4xl font-bold tracking-widest text-center">
                    JLN CATALOGUE
                </h1> <br />
                <p className="text-white text-center  md:text-xl text-[10px] ">
                    Conventional Energy Price List <br />

                    Complete Energy Installation Package
                </p>
            </div>

            {/* 2. Information Section */}
            <div className="p-4 md:p-6 text-sm md:text-base text-gray-700 mx-2 md:mx-4">

                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4 sm:gap-0">

                    {/* Left Column */}
                    <div className="text-left">
                        <p className="font-semibold text-base md:text-lg ">JLN SOLAR</p>
                        <p className="text-[#004d2e] italic text-xs md:text-sm ">
                            (A division of JLN Global Investment Ltd)
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="text-left sm:text-right">
                        <p className="font-semibold text-base md:text-lg">JLN Global Investment Ltd/Owerri</p>
                        <p className="text-gray-600">
                            GT Bank, Acc. No. <span className="font-mono font-medium">0869739815</span>
                        </p>
                    </div>
                </div>

                <hr className="border-gray-100 mt-2 mb-4" />

                {/* Contact */}
                <div className="text-center mt-2 text-xs md:text-sm">
                    <p className="leading-relaxed">
                        Lagos <span className="font-mono font-medium">0810-022-1075</span> |
                        Port Harcourt Rd. <span className="font-mono font-medium">0806-540-6386</span> |
                        FACTORY/WAREHOUSE <span className="font-mono font-medium">0802-404-7184</span>

                        <br className="hidden md:inline" />

                        Delta <span className="font-mono font-medium">0803-264-4506</span> |
                        Owerri <span className="font-mono font-medium">0803-264-4506</span>
                        <span className="font-mono font-medium">0801-586-5131</span>
                    </p>
                </div>
            </div>
        </header>
    );
};

export default JlnScolar;
