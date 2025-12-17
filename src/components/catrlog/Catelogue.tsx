
import JlnCatalogueHeader from "@/components/catrlog/JlnCatalogueHeader";
import ProductTable from "./ProductTable";
const Catelogue = () => {
    return (
        <div className="bg-[#E8F3DB]">
              <JlnCatalogueHeader></JlnCatalogueHeader>
              <ProductTable></ProductTable>
        </div>
    );
};

export default Catelogue;