import img from "@/assets/Banner (3).png";

export default function ComboBanner() {
  return (
    <div className="relative bg-gradient-to-r from-green-900 to-black text-white rounded-2xl overflow-hidden ">
      <img src={img} alt="Combo" className="w-full h-64 md:h-96 object-cover" />
    </div>
  );
}
