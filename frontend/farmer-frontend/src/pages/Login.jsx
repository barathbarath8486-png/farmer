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
    localStorage.setItem(
      "farmerToken",
      "temporary-farmer-token"
    );

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

  const handleContactAdmin = () => {
    alert(
      "Please contact the AgriConnect administrator for farmer registration or account assistance."
    );
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-info">

          <div className="login-logo">🌾</div>

          <h1>AgriConnect</h1>
          <h2>Farmer Portal</h2>

          <p>
            Manage your farm products, prices, stock and
            admin purchase orders from one simple dashboard.
          </p>

          <div className="login-feature">
            <span>🥬</span>
            <div>
              <strong>Manage Products</strong>
              <p>
                Add and manage your farm products.
              </p>
            </div>
          </div>

          <div className="login-feature">
            <span>📦</span>
            <div>
              <strong>Manage Purchases</strong>
              <p>
                View purchase orders from admin.
              </p>
            </div>
          </div>

          <div className="login-feature">
            <span>💰</span>
            <div>
              <strong>Track Sales</strong>
              <p>
                Monitor your purchase value and stock.
              </p>
            </div>
          </div>

        </div>

        <div className="login-form-section">

          <div className="login-form-header">
            <h2>Farmer Login</h2>
            <p>
              Login to access your farmer dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter 10-digit phone number"
                value={phone}
                maxLength="10"
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/\D/g, "")
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-submit-btn"
            >
              Login
            </button>

          </form>

          <div className="login-help">
            <p>Don't have a farmer account?</p>

            <button
              type="button"
              className="contact-admin-btn"
              onClick={handleContactAdmin}
            >
              Contact Admin
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;