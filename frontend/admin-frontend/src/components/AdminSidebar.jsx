import { NavLink, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    navigate("/login");
  };

  const menuItems = [
    {
      path: "/dashboard",
      icon: "📊",
      label: "Dashboard",
    },
    {
      path: "/farmers",
      icon: "👨‍🌾",
      label: "Farmers",
    },
    {
      path: "/products",
      icon: "🥬",
      label: "Products",
    },
    {
      path: "/orders",
      icon: "📦",
      label: "Orders",
    },
    {
      path: "/users",
      icon: "👥",
      label: "Users",
    },
    {
      path: "/profile",
      icon: "👤",
      label: "Profile",
    },
  ];

  return (
    <aside className="admin-sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🌾</div>

        <div>
          <h2>AgriConnect</h2>
          <span>Admin Panel</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        <p className="sidebar-menu-title">MAIN MENU</p>

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "sidebar-link-active" : ""}`
            }
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <div className="admin-sidebar-user">
          <div className="sidebar-user-avatar">A</div>

          <div className="sidebar-user-info">
            <strong>Administrator</strong>
            <span>Admin</span>
          </div>
        </div>

        <button className="sidebar-logout-btn" onClick={handleLogout}>
          <span>🚪</span>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;