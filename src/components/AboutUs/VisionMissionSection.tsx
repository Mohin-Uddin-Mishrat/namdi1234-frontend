const VisionMissionSection = () => {
    return (
        <div className="py-16 px-5 sm:px-10 bg-green-50">

            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="">
                    <div className=" bg-white p-8 rounded-2xl shadow-lg">
                        <span className=" bg-gradient-to-r from-yellow-400 to-green-700 text-black px-4 py-1 mt-5 rounded-full text-xs sm:text-sm font-bold">
                            OUR VISION
                        </span>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                            JLN's vision is to light up Africa and make Africa the next renewable energy “powerhouse” by
                            ensuring affordable off-grid energy access to the underserved, unserved (low, medium, high-end)
                            people of Africa through its unique pay-as-you-go payment systems that capture all categories of
                            energy-challenged users in sub-Saharan Africa. Resolving the climate crisis requires reducing
                            climate pollution in every sector of the economy. Most of the Nations’ greenhouse gas emissions
                            come from burning fossil fuels [EPA 2020]. Solar energy is an inexhaustible and climate pollution-
                            free alternative to fossil fuel combustion. The office advances the technology to use sunlight as a
                            source of clean energy.
                        </p>

                        {/* Stats */}
                        <div className="flex justify-between mt-6 text-center text-green-900 font-bold">
                            <div>
                                <div className="text-3xl sm:text-4xl">15+</div>
                                <div className="text-xs sm:text-sm font-medium text-gray-500">YEARS OF EXPERIENCE</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl">47K+</div>
                                <div className="text-xs sm:text-sm font-medium text-gray-500">PRODUCT SOLD</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl">2K+</div>
                                <div className="text-xs sm:text-sm font-medium text-gray-500">MEMBER ACTIVE</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-green-700 text-black px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                        OUR MISION
                    </span>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        JLN Global Investment Limited’s mission is to accelerate and facilitate seamless energy transition
                        from a grid-based energy mix to an off-grid energy mix, and also to ensure proper utilization of the
                        off-grid energy value chain, and energy matrix’s in Africa.
                    </p>
                    <ol className="list-decimal pl-5 mt-4 text-gray-700 space-y-2">
                        <li>To savage electric power outage in Nigerian communities and Africa by increasing electric generation to unserved and underserved communities through turnkey solar solutions.</li>
                        <li>To make wealth as we seek to improve environmental health through providing renewable energy solutions.</li>
                        <li>To increase access to electricity for productive usage of power and commercial users who are into products processing and production activities.</li>
                        <li>To foster the culture of trust, collaboration and performance to achieve our business goals.</li>
                        {/* <li>To be a responsible corporate citizen and exact the highest standard of corporate governance, ethics, integrity and accountability.</li> */}
                    </ol>
                </div>

            </div>
        </div>
    );
};

export default VisionMissionSection;
