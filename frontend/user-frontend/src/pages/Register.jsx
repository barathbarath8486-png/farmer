import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    district: "",
    state: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your full name");
      return;
    }

    if (formData.phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter your address");
      return;
    }

    if (!formData.district.trim() || !formData.state.trim()) {
      setError("Please enter your district and state");
      return;
    }

    setError("");

    // Later:
    // Axios -> Flask API -> MongoDB
    // Then OTP verification

    console.log("Registration Data:", formData);
  };

  return (
    <div className="register-page">

      {/* Decorative Background */}
      <div className="register-circle register-circle-one"></div>
      <div className="register-circle register-circle-two"></div>

      {/* Left Section */}
      <section className="register-info">

        <div className="brand">
          <div className="brand-icon">🌾</div>
          <span>AgriConnect</span>
        </div>

        <div className="register-info-content">

          <span className="small-title">
            JOIN THE FARMING COMMUNITY
          </span>

          <h1>
            Fresh food,
            <br />
            <span>better connections.</span>
          </h1>

          <p>
            Create your AgriConnect account and discover
            fresh, quality groceries directly from trusted
            local farmers.
          </p>

          <div className="register-benefits">

            <div className="register-benefit">
              <div className="register-benefit-icon">🌱</div>
              <div>
                <h3>Fresh From Farms</h3>
                <p>Get quality products directly from farmers.</p>
              </div>
            </div>

            <div className="register-benefit">
              <div className="register-benefit-icon">🛒</div>
              <div>
                <h3>Easy Shopping</h3>
                <p>Shop groceries easily from one place.</p>
              </div>
            </div>

            <div className="register-benefit">
              <div className="register-benefit-icon">🚚</div>
              <div>
                <h3>Reliable Delivery</h3>
                <p>Track your order from farm to doorstep.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="register-section">

        <div className="register-card">

          <div className="mobile-logo">
            🌾
          </div>

          <h2>Create Account</h2>

          <p className="register-subtitle">
            Join AgriConnect and start shopping fresh
          </p>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <div className="register-phone-input">

                <div className="register-country-code">
                  🇮🇳 <span>+91</span>
                </div>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    setFormData({
                      ...formData,
                      phone: value,
                    });

                    setError("");
                  }}
                />

              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <label htmlFor="address">
                Address
              </label>

              <textarea
                id="address"
                name="address"
                rows="2"
                placeholder="Enter your delivery address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* District + State */}
            <div className="location-row">

              <div className="form-group">
                <label htmlFor="district">
                  District
                </label>

                <input
                  id="district"
                  name="district"
                  type="text"
                  placeholder="District"
                  value={formData.district}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">
                  State
                </label>

                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Error */}
            {error && (
              <p className="register-error">
                ⚠️ {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="register-button"
            >
              Create Account
              <span>→</span>
            </button>

          </form>

          {/* Security */}
          <div className="register-security">
            <span>🔐</span>

            <p>
              Your information is securely protected.
            </p>
          </div>

          {/* Login */}
          <p className="already-account">
            Already have an account?

            <Link
             to="/"
                 className="login-link"
>
             Login
                </Link>
          </p>

        </div>

      </section>

    </div>
  );
}

export default Register;