import { NavLink } from "react-router-dom";

function FarmerSidebar() {
  return (
    <aside className="farmer-sidebar">
      <div className="sidebar-menu">
        <NavLink to="/dashboard" className="sidebar-link">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/products" className="sidebar-link">
          🥬 My Products
        </NavLink>

        <NavLink to="/products/add" className="sidebar-link">
          ➕ Add Product
        </NavLink>

        <NavLink to="/orders" className="sidebar-link">
          📦 Orders
        </NavLink>

        <NavLink to="/profile" className="sidebar-link">
          👤 My Profile
        </NavLink>
      </div>
    </aside>
  );
}

export default FarmerSidebar;