import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function OTP() {
  const navigate = useNavigate();
  const location = useLocation();

  const phone = location.state?.phone || "98765 43210";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Move to next box
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    // Temporary login
    // Later Flask API verification will come here
    localStorage.setItem("token", "temporary-token");

    navigate("/home");
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setError("");
    setTimer(30);

    console.log("OTP resent to:", phone);
  };

  return (
    <div className="otp-page">

      {/* Left Section */}
      <section className="otp-info-section">

        <Link to="/login" className="otp-brand">
          <div className="otp-brand-icon">🌾</div>
          <span>AgriConnect</span>
        </Link>

        <div className="otp-info-content">
          <span className="otp-small-title">
            SECURE LOGIN
          </span>

          <h1>
            One step away from
            <span> fresh groceries.</span>
          </h1>

          <p>
            Verify your phone number to continue shopping
            fresh products directly from local farmers.
          </p>

          <div className="otp-features">
            <div>
              <span>🌱</span>
              <p>
                <strong>Farm Fresh</strong>
                Fresh products directly from farmers
              </p>
            </div>

            <div>
              <span>🔐</span>
              <p>
                <strong>Secure Login</strong>
                Your account is protected with OTP
              </p>
            </div>

            <div>
              <span>🚚</span>
              <p>
                <strong>Easy Delivery</strong>
                Get groceries delivered to your doorstep
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Right Section */}
      <section className="otp-form-section">

        <div className="otp-card">

          <Link to="/login" className="otp-back-link">
            ← Change phone number
          </Link>

          <div className="otp-icon">
            📱
          </div>

          <h2>Verify Your Number</h2>

          <p className="otp-description">
            We've sent a 6-digit verification code to
          </p>

          <strong className="otp-phone">
            +91 {phone}
          </strong>

          <form onSubmit={handleSubmit}>

            <div className="otp-inputs">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={value}
                  onChange={(e) =>
                    handleChange(e.target.value, index)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index)
                  }
                  autoFocus={index === 0}
                />
              ))}
            </div>

            {error && (
              <p className="otp-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="verify-otp-button"
            >
              Verify & Continue →
            </button>

          </form>

          <div className="resend-section">

            {timer > 0 ? (
              <p>
                Didn't receive the code?
                <span> Resend in {timer}s</span>
              </p>
            ) : (
              <button
                className="resend-button"
                onClick={handleResend}
              >
                Resend OTP
              </button>
            )}

          </div>

          <div className="otp-security">
            🔒 <span>Secure OTP verification</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default OTP;