import { Outlet } from "react-router-dom";

import MiddlemanNavbar from "./MiddlemanNavbar";
import MiddlemanSidebar from "./MiddlemanSidebar";

function MiddlemanLayout() {
  return (
    <div className="middleman-layout">

      <MiddlemanNavbar />

      <div className="middleman-body">

        <MiddlemanSidebar />

        <main className="middleman-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default MiddlemanLayout;