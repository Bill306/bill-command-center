import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileSidebar from "@/components/Sidebar/MobileSidebar";
import Footer from "@/components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Header */}
      <MobileSidebar />

      {/* Main Content */}
      <main className="lg:ml-56 min-h-screen flex flex-col">
        <div className="flex-1 p-6 pt-20 lg:pt-6 max-w-5xl w-full mx-auto">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
