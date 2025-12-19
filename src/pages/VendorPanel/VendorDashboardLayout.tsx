import { Outlet } from 'react-router-dom';
import VendorTopBar from './VendorTopbar';
import VendorSidebar from './VendorSidebar';

export default function VendorDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <VendorSidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 ">
        {/* TopBar */}
        <VendorTopBar />

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}