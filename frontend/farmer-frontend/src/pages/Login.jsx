import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone || !password) {
      setError("Please enter phone number and password.");
      return;
    }

    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError("");

    // Temporary login
    localStorage.setItem("farmerToken", "temporary-farmer-token");

    localStorage.setItem(
      "farmer",
      JSON.stringify({
        name: "Ramesh Kumar",
        phone: phone,
        farm: "Green Valley Farm",
        location: "Coimbatore, Tamil Nadu",
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left Section */}
        <div className="login-info">
          <div className="login-logo">🌾</div>

          <h1>AgriConnect</h1>

          <h2>Farmer Portal</h2>

          <p>
            Manage your farm products, prices, stock and orders
            from one simple dashboard.
          </p>

          <div className="login-feature">
            <span>🥬</span>
            <div>
              <strong>Manage Products</strong>
              <p>Add and manage your farm products.</p>
            </div>
          </div>

          <div className="login-feature">
            <span>📦</span>
            <div>
              <strong>Manage Orders</strong>
              <p>View and track your customer orders.</p>
            </div>
          </div>

          <div className="login-feature">
            <span>💰</span>
            <div>
              <strong>Track Sales</strong>
              <p>Monitor your sales and earnings.</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-form-section">
          <div className="login-form-box">

            <h2>Welcome Back 👋</h2>

            <p className="login-subtitle">
              Login to your farmer account
            </p>

            <form onSubmit={handleSubmit}>

              <div className="login-form-group">
                <label>Phone Number</label>

                <div className="phone-field">
                  <span>+91</span>

                  <input
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={phone}
                    maxLength="10"
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                  />
                </div>
              </div>

              <div className="login-form-group">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && (
                <div className="login-error">
                  ⚠️ {error}
                </div>
              )}

              <button type="submit" className="login-button">
                Login
              </button>
            </form>

            <p className="login-footer">
  New farmer?{" "}
  <button
    type="button"
    className="contact-admin-btn"
    onClick={() =>
      alert(
        "Please contact the AgriConnect administrator to register as a farmer."
      )
    }
  >
    Contact admin to register
  </button>
</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;