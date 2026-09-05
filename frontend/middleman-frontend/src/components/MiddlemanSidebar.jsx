import { NavLink } from "react-router-dom";

function MiddlemanSidebar() {
  return (
    <aside className="middleman-sidebar">

      <div className="middleman-sidebar-menu">

        <NavLink
          to="/dashboard"
          className="middleman-sidebar-link"
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/orders"
          className="middleman-sidebar-link"
        >
          📦 Orders
        </NavLink>

        <NavLink
          to="/deliveries"
          className="middleman-sidebar-link"
        >
          🚚 Deliveries
        </NavLink>

        <NavLink
          to="/profile"
          className="middleman-sidebar-link"
        >
          👤 My Profile
        </NavLink>

      </div>

    </aside>
  );
}

export default MiddlemanSidebar;