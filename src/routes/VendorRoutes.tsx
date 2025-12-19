import CreateProductPage from "@/pages/VendorPanel/CreateProduct";
import VendorchildDemo from "@/pages/VendorPanel/VendorchildDemo";

export function getVedordRoutes() {
  return [
    {
      index: true,
      element: <VendorchildDemo />,
    },
    {
      path: "create-product",
      element: <CreateProductPage />,
    },
  ];
}
