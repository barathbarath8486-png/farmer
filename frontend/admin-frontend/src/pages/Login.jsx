import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setError("");

    // Temporary login
    localStorage.setItem("adminToken", "temporary-admin-token");

    navigate("/dashboard");
  };

  return (
    <div className="admin-login-page">

      {/* Left Section */}
      <div className="admin-login-left">
        <div className="admin-brand">
          <div className="admin-brand-icon">🌾</div>
          <span>AgriConnect</span>
        </div>

        <div className="admin-login-content">
          <span className="admin-small-title">
            ADMIN PANEL
          </span>

          <h1>
            Manage your
            <span> agriculture marketplace.</span>
          </h1>

          <p>
            Manage farmers, groceries, orders, rates and
            quality from one powerful dashboard.
          </p>

          <div className="admin-features">

            <div className="admin-feature">
              <div className="admin-feature-icon">👨‍🌾</div>
              <div>
                <strong>Manage Farmers</strong>
                <span>Review and manage farmer registrations</span>
              </div>
            </div>

            <div className="admin-feature">
              <div className="admin-feature-icon">🥬</div>
              <div>
                <strong>Manage Products</strong>
                <span>Control grocery rates, quality and quantity</span>
              </div>
            </div>

            <div className="admin-feature">
              <div className="admin-feature-icon">📦</div>
              <div>
                <strong>Manage Orders</strong>
                <span>Monitor customer orders and delivery</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="admin-login-right">

        <div className="admin-login-card">

          <div className="admin-login-icon">
            🔐
          </div>

          <span className="admin-card-title">
            ADMIN LOGIN
          </span>

          <h2>Welcome back!</h2>

          <p className="admin-login-description">
            Login to access your admin dashboard
          </p>

          <form onSubmit={handleSubmit}>

            <div className="admin-input-group">
              <label>Email Address</label>

              <div className="admin-input-wrapper">
                <span>✉️</span>

                <input
                  type="email"
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="admin-input-group">
              <label>Password</label>

              <div className="admin-input-wrapper">
                <span>🔒</span>

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <p className="admin-login-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="admin-login-button"
            >
              Login to Dashboard →
            </button>

          </form>

          <div className="admin-security">
            🛡️ Secure admin access
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;