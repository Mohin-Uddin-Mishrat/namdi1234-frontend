import ProductFilterBar from "./ProductFilterBar";
import ProductShopCard from "./ProductShpcard";
import ShopSideNav from "@/components/Shop/ShopSideNav";


const ShopCombine = () => {
    return (
    <div className="bg-[#E8F3DB] w-full ">
  <div className="flex flex-col lg:flex-row max-w-[2000px] mx-auto ">
    {/* Sidebar */}
    <div className="w-full lg:w-1/4 p-2">
      <ShopSideNav />
    </div>

    {/* Main Content */}
    <div className="w-full lg:w-3/4 p-2">
      <ProductFilterBar />
      <ProductShopCard />
    </div>
  </div>
</div>

    );
};

export default ShopCombine;