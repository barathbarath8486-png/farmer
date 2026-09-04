import { Outlet } from "react-router-dom";
import FarmerNavbar from "./FarmerNavbar";
import FarmerSidebar from "./FarmerSidebar";

function FarmerLayout() {
  return (
    <div className="farmer-layout">
      <FarmerNavbar />

      <div className="farmer-body">
        <FarmerSidebar />

        <main className="farmer-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default FarmerLayout;