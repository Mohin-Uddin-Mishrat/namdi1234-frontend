import img from "@/assets/sale.png";

const SaleImg = () => {
  return (
    <div className="w-full sm:w-full sticky top-0 z-10">
      <img
        src={img}
        alt="Sale"
        className="w-[250px] sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[380px] 
                   h-auto object-contain rounded-2xl mx-auto"
      />
    </div>
  );
};

export default SaleImg;
