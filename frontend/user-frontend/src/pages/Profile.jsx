import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = {
    name: "Dharshan",
    phone: "+91 98765 43210",
    email: "dharshan@example.com",
    address: "123, Main Road, Coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
  };

  const handleLogout = () => {
    // Later JWT token remove pannuvom
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="profile-page">

      {/* Navbar */}
      <nav className="home-navbar">
        <Link to="/home" className="home-brand">
          <div className="home-brand-icon">🌾</div>
          <span>AgriConnect</span>
        </Link>

        <div className="home-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/profile" className="active-nav-link">
            Profile
          </Link>
        </div>

        <div className="home-nav-actions">
          <Link to="/cart" className="cart-button">
            🛒
            <span className="cart-count">0</span>
          </Link>

          <Link to="/profile" className="profile-button">
            👤
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="profile-header">
        <div>
          <span className="profile-small-title">
            YOUR ACCOUNT
          </span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and delivery details.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="profile-container">

        {/* Profile Card */}
        <section className="profile-main-card">

          <div className="profile-cover"></div>

          <div className="profile-main-content">

            <div className="profile-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div className="profile-heading">
              <h2>{user.name}</h2>
              <p>🌱 AgriConnect Customer</p>
            </div>

            <button className="edit-profile-button">
              ✏️ Edit Profile
            </button>

          </div>

        </section>

        {/* Profile Information */}
        <div className="profile-grid">

          {/* Personal Information */}
          <section className="profile-info-card">

            <div className="profile-card-title">
              <div className="profile-title-icon">
                👤
              </div>

              <div>
                <h3>Personal Information</h3>
                <p>Your basic account details</p>
              </div>
            </div>

            <div className="profile-details">

              <div className="profile-detail-item">
                <span>Full Name</span>
                <strong>{user.name}</strong>
              </div>

              <div className="profile-detail-item">
                <span>Phone Number</span>
                <strong>{user.phone}</strong>
              </div>

              <div className="profile-detail-item">
                <span>Email Address</span>
                <strong>{user.email}</strong>
              </div>

            </div>

          </section>

          {/* Delivery Address */}
          <section className="profile-info-card">

            <div className="profile-card-title">
              <div className="profile-title-icon">
                📍
              </div>

              <div>
                <h3>Delivery Address</h3>
                <p>Where your groceries will arrive</p>
              </div>
            </div>

            <div className="address-box">

              <div className="address-icon">
                🏠
              </div>

              <div>
                <strong>Home Address</strong>

                <p>
                  {user.address}
                  <br />
                  {user.city}, {user.state}
                </p>
              </div>

            </div>

            <button className="address-edit-button">
              Edit Address
            </button>

          </section>

        </div>

        {/* Quick Actions */}
        <section className="profile-actions-section">

          <div className="profile-section-heading">
            <h2>Quick Actions</h2>
            <p>Manage your AgriConnect account</p>
          </div>

          <div className="profile-actions-grid">

            <Link to="/orders" className="profile-action-card">
              <div className="action-card-icon">📦</div>

              <div>
                <h3>My Orders</h3>
                <p>View and track your orders</p>
              </div>

              <span>→</span>
            </Link>

            <Link to="/cart" className="profile-action-card">
              <div className="action-card-icon">🛒</div>

              <div>
                <h3>My Cart</h3>
                <p>View your selected groceries</p>
              </div>

              <span>→</span>
            </Link>

            <Link to="/products" className="profile-action-card">
              <div className="action-card-icon">🥦</div>

              <div>
                <h3>Shop Groceries</h3>
                <p>Explore fresh farm products</p>
              </div>

              <span>→</span>
            </Link>

          </div>

        </section>

        {/* Account Security */}
        <section className="profile-security-card">

          <div className="security-icon">
            🔐
          </div>

          <div className="security-content">
            <h3>Account Security</h3>

            <p>
              Your account is protected with secure OTP-based
              authentication.
            </p>
          </div>

          <span className="security-status">
            ✓ Secure
          </span>

        </section>

        {/* Logout */}
        <div className="profile-logout-section">

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>

      </main>

      {/* Footer */}
      <footer className="home-footer">

        <div>
          <div className="footer-brand">
            🌾 AgriConnect
          </div>

          <p>
            Fresh groceries. Better connections.
          </p>
        </div>

        <p className="footer-copy">
          © 2026 AgriConnect. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Profile;