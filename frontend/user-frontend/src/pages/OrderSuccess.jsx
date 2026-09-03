import { Link } from "react-router-dom";

function OrderSuccess() {
  const order = {
    id: "AGR1002",
    date: "03 Sep 2026",
    total: 235,
    deliveryDate: "05 Sep 2026",
    deliveryTime: "10:00 AM - 2:00 PM",
    payment: "Cash on Delivery",
  };

  return (
    <div className="order-success-page">

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
          <Link to="/profile">Profile</Link>
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

      {/* Success Section */}
      <main className="order-success-container">

        <section className="success-card">

          <div className="success-animation">
            <div className="success-circle">
              ✓
            </div>
          </div>

          <span className="success-small-title">
            ORDER CONFIRMED
          </span>

          <h1>Order Placed Successfully! 🎉</h1>

          <p className="success-message">
            Thank you for shopping with AgriConnect.
            Your fresh groceries are being prepared by our farmers.
          </p>

          {/* Order ID */}
          <div className="success-order-id">
            <span>Order ID</span>
            <strong>#{order.id}</strong>
          </div>

          {/* Order Info */}
          <div className="success-info-grid">

            <div className="success-info-card">
              <div className="success-info-icon">🚚</div>
              <div>
                <span>Expected Delivery</span>
                <strong>{order.deliveryDate}</strong>
                <small>{order.deliveryTime}</small>
              </div>
            </div>

            <div className="success-info-card">
              <div className="success-info-icon">💰</div>
              <div>
                <span>Total Amount</span>
                <strong>₹{order.total}</strong>
                <small>{order.payment}</small>
              </div>
            </div>

          </div>

          {/* Tracking */}
          <div className="success-tracking">

            <div className="success-tracking-step active">
              <div className="success-step-icon">✓</div>
              <div>
                <strong>Order Confirmed</strong>
                <span>Your order has been received</span>
              </div>
            </div>

            <div className="success-tracking-line"></div>

            <div className="success-tracking-step">
              <div className="success-step-icon">🌱</div>
              <div>
                <strong>Preparing</strong>
                <span>Farmers are preparing your groceries</span>
              </div>
            </div>

            <div className="success-tracking-line"></div>

            <div className="success-tracking-step">
              <div className="success-step-icon">🚚</div>
              <div>
                <strong>Delivery</strong>
                <span>Delivered to your doorstep</span>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="success-buttons">

            <Link
              to={`/orders/${order.id}`}
              className="success-primary-button"
            >
              Track My Order →
            </Link>

            <Link
              to="/products"
              className="success-secondary-button"
            >
              Continue Shopping
            </Link>

          </div>

          {/* Bottom message */}
          <div className="success-bottom-message">
            <span>🌱</span>
            <p>
              Your purchase directly supports local farmers.
              Thank you for choosing fresh & local!
            </p>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="home-footer">
        <div>
          <div className="footer-brand">🌾 AgriConnect</div>
          <p>Fresh groceries. Better connections.</p>
        </div>

        <p className="footer-copy">
          © 2026 AgriConnect. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default OrderSuccess;