// import MarqueeComponent from "@/components/MarqueeComponent";
// import FAQ from "../FAQ";
// import Cart from "@/components/Cart";
// import NewArrival from "@/components/NewArrival";
// import ProductGrid from "../ProductGri";
// // import SecondaryNavbar from '@/Layout/SecondaryNavbar';
// import HeroSection from "../HeroSection";
// import CustomerReviews from "../CustomerReviews";
// import CategoryMenu from "./BannerSection/CategoryMenu";
// import ImageCarousel from "./BannerSection/ImageCarousel";
// // import PromoCard from "./BannerSection/PromoCard";
// import SaleBanner from "./BannerSection/SaleBanner";
// import FansPromoCard from "./BannerSection/FansPromoCard";
// import BannerandPro from "./BannerSection/BannerandPro";

// const Home = () => {
//   return (
//     <div className="bg-[#E8F3DB] w-full mx-auto">
//       <div className="flex  flex-col-reverse md:flex-row">
//         <div className="">
//           <CategoryMenu></CategoryMenu>
//           <FansPromoCard></FansPromoCard>
//         </div>
//         {/* <PromoCard></PromoCard> */}
//         <div>
//           <SaleBanner></SaleBanner>
//           <ImageCarousel></ImageCarousel>
//           {/* <BannerCarousel></BannerCarousel>  */}
//           <BannerandPro></BannerandPro>
//         </div>
//       </div>

//       {/* <PromoCard></PromoCard> */}

//       {/* Marquee */}
//       <div className="px-4 py-4">
//         <MarqueeComponent />
//       </div>

//       {/* Other Sections */}
//       <div>
//         <div>
//           <Cart />
//         </div>
//         <NewArrival />
//         <ProductGrid />
//         <HeroSection />
//         <CustomerReviews />
//         <FAQ />
//       </div>
//     </div>
//   );
// };

// export default Home;

import CategorySidebar from "./components/CategorySidebar";
import DiscountCard from "./components/DiscountCard";

import ComboBanner from "./components/ComboBanner";
import GridCarousel from "./components/ImageCarousel";

import Cart from "../Cart";
import NewArrival from "../NewArrival";
import ProductGrid from "../ProductGri";
import HeroSection from "../HeroSection";
import CustomerReviews from "../CustomerReviews";
import FAQ from "../FAQ";

import BannerandPro from "./components/BannerandPro";
import SolarMarquee from "../SolarMarquee";



export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-green-50">
        {/* Main Layout Container */}
        <div className="mx-auto px-4 py-6 flex flex-col-reverse lg:flex-row gap-6 max-w-screen-2xl">
          {/* Sidebar */}
          <div className="w-full lg:w-1/5">
            <CategorySidebar  />
            <div className="mt-6">
              <DiscountCard
                // title="Fans"
                // subtitle="Don't miss the last opportunity"
                // img="/images/fan-card.jpg"
              />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <ComboBanner />
            <GridCarousel />
            <BannerandPro />
            
            
          </div>

        </div>
        {/* ALL SECTIONS BELOW NOW PROPERLY INSIDE THE FLOW */}
            <div className="mt-8 space-y-12">
             <SolarMarquee></SolarMarquee>
              <Cart />
              <NewArrival />
              <ProductGrid />
              <HeroSection />
              <CustomerReviews />
              <FAQ />
            </div>
        {/* End of main container */}
      </div>
    </>
  );
}
