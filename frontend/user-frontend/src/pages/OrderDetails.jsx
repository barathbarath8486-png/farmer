import { Link, useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();

  const order = {
    id: id || "AGR1001",
    date: "03 Sep 2026",
    status: "Out for Delivery",
    statusType: "delivery",
    deliveryDate: "Today",
    deliveryTime: "10:00 AM - 2:00 PM",

    customer: {
      name: "Dharshan",
      phone: "+91 98765 43210",
      address: "123, Main Road, Coimbatore",
    },

    middleman: {
      name: "Ravi Kumar",
      phone: "+91 98765 12345",
    },

    items: [
      {
        name: "Fresh Tomato",
        quantity: "2 kg",
        price: 90,
        emoji: "🍅",
        farmer: "Green Valley Farm",
        location: "Coimbatore",
      },
      {
        name: "Fresh Carrot",
        quantity: "1 kg",
        price: 60,
        emoji: "🥕",
        farmer: "Nature Fresh Farm",
        location: "Erode",
      },
      {
        name: "Fresh Banana",
        quantity: "1 dozen",
        price: 55,
        emoji: "🍌",
        farmer: "Golden Farm",
        location: "Theni",
      },
    ],

    subtotal: 205,
    deliveryCharge: 30,
    total: 235,
  };

  return (
    <div className="order-details-page">

      {/* Navbar */}
      <nav className="home-navbar">
        <Link to="/home" className="home-brand">
          <div className="home-brand-icon">🌾</div>
          <span>AgriConnect</span>
        </Link>

        <div className="home-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/orders" className="active-nav-link">
            My Orders
          </Link>
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

      {/* Header */}
      <section className="order-details-header">
        <div>
          <Link to="/orders" className="back-orders">
            ← Back to My Orders
          </Link>

          <span className="order-details-small-title">
            ORDER DETAILS
          </span>

          <h1>Order #{order.id}</h1>

          <p>
            Placed on {order.date}
          </p>
        </div>

        <div className={`details-status ${order.statusType}`}>
          <span className="status-dot"></span>
          {order.status}
        </div>
      </section>

      <main className="order-details-container">

        {/* Delivery Tracking */}
        <section className="tracking-card">

          <div className="tracking-heading">
            <div>
              <h2>🚚 Delivery Tracking</h2>
              <p>
                Your order is on the way to you.
              </p>
            </div>

            <span className="delivery-date">
              📅 {order.deliveryDate}
            </span>
          </div>

          <div className="tracking-line">

            <div className="tracking-step completed">
              <div className="tracking-icon">✓</div>
              <div>
                <strong>Order Placed</strong>
                <span>Order confirmed</span>
              </div>
            </div>

            <div className="tracking-connector active"></div>

            <div className="tracking-step completed">
              <div className="tracking-icon">✓</div>
              <div>
                <strong>Preparing</strong>
                <span>Groceries collected</span>
              </div>
            </div>

            <div className="tracking-connector active"></div>

            <div className="tracking-step current">
              <div className="tracking-icon">🚚</div>
              <div>
                <strong>Out for Delivery</strong>
                <span>On the way</span>
              </div>
            </div>

            <div className="tracking-connector"></div>

            <div className="tracking-step">
              <div className="tracking-icon">✓</div>
              <div>
                <strong>Delivered</strong>
                <span>Order received</span>
              </div>
            </div>

          </div>

          <div className="delivery-time-box">
            <span>🕐</span>
            <div>
              <small>Expected Delivery Time</small>
              <strong>{order.deliveryTime}</strong>
            </div>
          </div>

        </section>

        <div className="order-details-grid">

          {/* Left Side */}
          <div className="order-details-left">

            {/* Products */}
            <section className="details-card">

              <div className="details-card-heading">
                <div>
                  <h2>Order Items</h2>
                  <p>{order.items.length} different products</p>
                </div>
              </div>

              <div className="details-products">

                {order.items.map((item) => (
                  <div
                    className="details-product"
                    key={item.name}
                  >
                    <div className="details-product-image">
                      {item.emoji}
                    </div>

                    <div className="details-product-info">
                      <h3>{item.name}</h3>

                      <p>
                        🌱 {item.farmer}
                      </p>

                      <span>
                        📍 {item.location}
                      </span>
                    </div>

                    <div className="details-product-quantity">
                      <span>Quantity</span>
                      <strong>{item.quantity}</strong>
                    </div>

                    <div className="details-product-price">
                      ₹{item.price}
                    </div>
                  </div>
                ))}

              </div>

            </section>

            {/* Delivery Address */}
            <section className="details-card">

              <div className="details-card-heading">
                <div>
                  <h2>📍 Delivery Address</h2>
                  <p>Order will be delivered here</p>
                </div>
              </div>

              <div className="delivery-address">

                <div className="address-home-icon">
                  🏠
                </div>

                <div>
                  <strong>{order.customer.name}</strong>

                  <p>
                    {order.customer.address}
                  </p>

                  <span>
                    📱 {order.customer.phone}
                  </span>
                </div>

              </div>

            </section>

          </div>

          {/* Right Side */}
          <aside className="order-details-right">

            {/* Order Summary */}
            <section className="details-card summary-card">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{order.items.length}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{order.subtotal}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Charge</span>
                <span>₹{order.deliveryCharge}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total Amount</span>
                <strong>₹{order.total}</strong>
              </div>

              <div className="payment-status">
                <span>✓</span>
                <div>
                  <strong>Cash on Delivery</strong>
                  <small>Payment pending</small>
                </div>
              </div>

            </section>

            {/* Middleman */}
            <section className="details-card middleman-card">

              <h2>🚚 Delivery Partner</h2>

              <div className="middleman-profile">

                <div className="middleman-avatar">
                  {order.middleman.name.charAt(0)}
                </div>

                <div>
                  <strong>{order.middleman.name}</strong>
                  <span>Delivery Executive</span>
                </div>

              </div>

              <div className="middleman-contact">
                <span>📱</span>
                {order.middleman.phone}
              </div>

            </section>

          </aside>

        </div>

        {/* Help Section */}
        <section className="order-help-card">

          <div className="order-help-icon">
            🌱
          </div>

          <div>
            <h3>Need help with your order?</h3>
            <p>
              If you have any issue with your delivery,
              please contact our support team.
            </p>
          </div>

          <button className="contact-support-button">
            Contact Support
          </button>

        </section>

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

export default OrderDetails;