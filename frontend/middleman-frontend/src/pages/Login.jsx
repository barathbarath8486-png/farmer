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
      "middlemanToken",
      "temporary-middleman-token"
    );

    localStorage.setItem(
      "middleman",
      JSON.stringify({
        name: "Suresh Kumar",
        phone: phone,
        area: "Coimbatore",
        role: "Middleman",
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="middleman-login-page">

      <div className="middleman-login-card">

        {/* LEFT SIDE */}

        <div className="middleman-login-info">

          <div className="middleman-login-logo">
            🚚
          </div>

          <h1>AgriConnect</h1>
          <h2>Middleman Portal</h2>

          <p>
            Manage customer orders, collect products and
            coordinate deliveries efficiently.
          </p>

          <div className="middleman-login-feature">
            <span>📦</span>
            <div>
              <strong>Manage Orders</strong>
              <p>
                View orders assigned by admin.
              </p>
            </div>
          </div>

          <div className="middleman-login-feature">
            <span>🚜</span>
            <div>
              <strong>Collect Products</strong>
              <p>
                Collect products for customer orders.
              </p>
            </div>
          </div>

          <div className="middleman-login-feature">
            <span>🚚</span>
            <div>
              <strong>Manage Delivery</strong>
              <p>
                Assign delivery persons and track deliveries.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="middleman-login-form">

          <div className="middleman-login-header">
            <h2>Middleman Login</h2>
            <p>
              Login to manage your assigned deliveries.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="middleman-form-group">
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

            <div className="middleman-form-group">
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
              <div className="middleman-login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="middleman-login-btn"
            >
              Login
            </button>

          </form>

          <div className="middleman-login-help">
            <p>
              Middleman account required?
            </p>

            <button
              type="button"
              onClick={() =>
                alert(
                  "Please contact the AgriConnect administrator for middleman account access."
                )
              }
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