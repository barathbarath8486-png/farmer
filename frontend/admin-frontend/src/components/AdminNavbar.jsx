import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminNavbar() {
  const navigate = useNavigate();
  const { admin } = useAuth();

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header className="admin-navbar">
      {/* Left */}
      <div className="navbar-left">
        <div>
          <h3>Admin Dashboard</h3>
          <p>Manage your agriculture marketplace</p>
        </div>
      </div>

      {/* Right */}
      <div className="navbar-right">
        {/* Notification */}
        <button className="navbar-icon-btn" title="Notifications">
          🔔
          <span className="notification-dot"></span>
        </button>

        {/* Admin Profile */}
        <button
          className="navbar-profile"
          onClick={handleProfile}
        >
          <div className="navbar-avatar">A</div>

          <div className="navbar-user-info">
            <strong>
              {admin?.name || "Administrator"}
            </strong>
            <span>Admin</span>
          </div>

          <span className="navbar-arrow">⌄</span>
        </button>
      </div>
    </header>
  );
}

export default AdminNavbar;