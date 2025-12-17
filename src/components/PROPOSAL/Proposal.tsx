import JlnScolar from "./JlnScolar";
import ProcurementTable from "./ProcurementTable";
import SaleImg from "./SaleImg";
import WeSell from "./WeSell";

const Proposal = () => {
    return (
     <div className="p-2 sm:p-4 md:p-6 bg-[#E8F3DB]">
  <div className="flex flex-col lg:flex-row gap-4">
    {/* Left Side */}
    <div className="w-full lg:w-3/4 flex flex-col gap-4">
      <JlnScolar />
      <WeSell />
       <div className="mt-6">
    <ProcurementTable />
  </div>
    </div>

    {/* Right Side */}
   <div className="lg:w-1/4 rounded-3xl text-center">
  <div className="sticky top-40 Z-10">
    <SaleImg />
  </div>
</div>

  </div>

  {/* Table */}
 
</div>

    );
};

export default Proposal;