import CreateProductPage from "@/pages/VendorPanel/CreateProduct";
import OrdersPage from "@/pages/VendorPanel/Order";
import OrderDetailsPage from "@/pages/VendorPanel/Orders/OrderDetailsPage";
import ProductEditForm from "@/pages/VendorPanel/Product/ProductEditForm";
import ProductTable from "@/pages/VendorPanel/Product/ProudctTable";
import SettingPage from "@/pages/VendorPanel/Settings";
import VendorchildDemo from "@/pages/VendorPanel/VendorchildDemo";

export function getVedordRoutes() {
  return [
    {
      index: true,
      element: <VendorchildDemo />,
    },
    {
      path: "products/create",
      element: <CreateProductPage />,
    },
    {
      path: "products",
      element: <ProductTable />,
    },
    {
      path: "products/:id",
      element: <ProductEditForm />,
    },
     {
      path: "orders",
      element: <OrdersPage />,
    }, 
     {
      path: "orders/:orderId",
      element: <OrderDetailsPage />,
    }, 
     {
      path: "settings",
      element: <SettingPage />,
    }, 
  ];
}
