import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setError("");

    // Later:
    // Axios -> Flask API -> Send OTP

    navigate("/otp", {
  state: {
    phone: phone
  }
});
  }

  return (
    <div className="login-page">

      {/* Background Decoration */}
      <div className="login-circle login-circle-one"></div>
      <div className="login-circle login-circle-two"></div>

      {/* LEFT SIDE */}
      <section className="login-info">

        {/* Brand */}
        <div className="brand">
          <div className="brand-icon">🌾</div>
          <span>AgriConnect</span>
        </div>

        {/* Information */}
        <div className="info-content">

          <span className="small-title">
            FRESH • LOCAL • TRUSTED
          </span>

          <h1>
            Fresh groceries,
            <br />
            <span>straight from farmers.</span>
          </h1>

          <p>
            Connect with local farmers and get fresh,
            quality groceries delivered directly to your
            doorstep.
          </p>

          {/* Features */}
          <div className="features">

            <div className="feature">
              <div className="feature-icon">
                🌱
              </div>

              <div>
                <h3>Farm Fresh</h3>
                <p>
                  Quality products directly from farmers.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">
                ✓
              </div>

              <div>
                <h3>Verified Quality</h3>
                <p>
                  Products verified by our admin team.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">
                🚚
              </div>

              <div>
                <h3>Easy Delivery</h3>
                <p>
                  Reliable delivery through our middlemen.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="login-section">

        <div className="login-card">

          {/* Mobile Logo */}
          <div className="mobile-logo">
            🌾
          </div>

          <h2>Welcome Back!</h2>

          <p className="login-subtitle">
            Login using your mobile number
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>

            <label htmlFor="phone">
              Phone Number
            </label>

            <div className="phone-input">

              <div className="country-code">
                🇮🇳 <span>+91</span>
              </div>

              <input
                id="phone"
                type="tel"
                placeholder="Enter 10-digit number"
                value={phone}
                maxLength={10}
                onChange={(e) => {
                  const value =
                    e.target.value.replace(/\D/g, "");

                  setPhone(value);
                  setError("");
                }}
              />

            </div>

            {/* Error */}
            {error && (
              <p className="error-message">
                {error}
              </p>
            )}

            {/* Send OTP */}
            <button
              type="submit"
              className="otp-button"
            >
              Send OTP
              <span>→</span>
            </button>

          </form>

          {/* Divider */}
          <div className="divider">
            <span>Secure Login</span>
          </div>

          {/* Security */}
          <div className="security-info">

            <span>🔐</span>

            <p>
              Your phone number is protected with
              secure OTP authentication.
            </p>

          </div>

          {/* Register */}
          <p className="register-text">
            Don't have an account?

            <Link
              to="/register"
              className="register-link"
            >
              Register Now
            </Link>
          </p>

        </div>

      </section>

    </div>
  );
}

export default Login;