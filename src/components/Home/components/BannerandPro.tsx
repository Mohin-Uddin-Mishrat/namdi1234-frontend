
import BannerCarousel from "@/components/Home/components/BannerCarousel";
   import PromoCard from "@/components/Home/components/PromoCard";         
const BannerandPro = () => {
    return (
        <div className="flex gap-3 flex-col md:flex-row">
           <div className=" w-full md:w-2/3">
            <BannerCarousel></BannerCarousel>
           </div>
           <div className="w-full md:w-1/3">
             <PromoCard></PromoCard>
           </div>
        </div>
    );
};

export default BannerandPro;