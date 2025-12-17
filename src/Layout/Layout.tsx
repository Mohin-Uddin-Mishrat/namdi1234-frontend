import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SecoundaryNavber from "@/Layout/SecondaryNavbar"
const Layout: React.FC = () => {
  return (
    <div>


      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div
        className="sticky  sm:top-20 md:top-24 z-40"
      >
        <SecoundaryNavber />
      </div>
      <main className="">
        <Outlet />
      </main>

      {/* 4. Footer
      */}
      <Footer />
    </div>
  );
};

export default Layout;
