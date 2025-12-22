import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import NotFound from "../pages/NotFound";
import Home from "@/components/Home/Home";
import AdminRoute from "./AdminRoutes";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import Form from "@/pages/Form";
import Services from "@/pages/Services";
import Shop from "@/components/Shop/Shop";
import Catelogue from "@/components/catrlog/Catelogue";
import Proposal from "@/components/PROPOSAL/Proposal";
import About from "@/components/AboutUs/About";
import Blog from "@/components/blog/Blog";
import ContactUs from "@/components/contact/ContactUs";
import RegisterPage from "@/pages/Register";
import VendorRegisterPage from "@/pages/VendorRegisterPage";
import ProtectedRoute from "./ProtectedRoutes";
import VendorDashboardLayout from "@/pages/VendorPanel/VendorDashboardLayout";
import { getVedordRoutes } from "./VendorRoutes";
import ProductDisplayPage from "@/pages/ProuducDisplay";
import ProductDetailPage from "@/pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/account",
      //   element: <AccountDetails></AccountDetails>,
      // },

      {
        path: "/services",
        element: <Services />,
      },
         {
        path: "/product/details/:id",
        element: <ProductDetailPage />,
      },
        {
        path: "/products/:query",
        element: <ProductDisplayPage />,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      
      {
        path: "/Catalogue",
        element: <Catelogue></Catelogue>,
      },
      {
        path: "/proposal",
        element: <Proposal></Proposal>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
      {
        path: "/vendor-signup",
        element: <VendorRegisterPage />,
      },
      {
        path: "/admin",
        element: <AdminRoute />, // This will check if the user is an admin
        children: [
          { path: "", element: <AdminDashboard /> }, // Admin Dashboard
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/vendor-dashboard",
    element: (
      <ProtectedRoute allowedRoles={["VENDOR"]}>
        <VendorDashboardLayout />
      </ProtectedRoute>
    ),
    children: getVedordRoutes(),
  },
]);

export default routes;
