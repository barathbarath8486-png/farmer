import { Link, useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();

  const order = {
    id: id || "AGR1001",
    date: "03 Sep 2026",
    time: "10:30 AM",
    status: "Out for Delivery",
    payment: "Cash on Delivery",
    paymentStatus: "Pending",

    customer: {
      name: "Dharshan",
      phone: "+91 98765 43210",
      email: "dharshan@example.com",
      address: "123, Main Road",
      city: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641001",
    },

    middleman: {
      name: "Ravi Kumar",
      phone: "+91 98765 12345",
      status: "Assigned",
    },

    items: [
      {
        id: 1,
        name: "Fresh Tomato",
        quantity: 2,
        unit: "kg",
        price: 45,
        total: 90,
        emoji: "🍅",
        farmer: "Green Valley Farm",
        location: "Coimbatore",
        quality: "Premium",
      },
      {
        id: 2,
        name: "Fresh Carrot",
        quantity: 1,
        unit: "kg",
        price: 60,
        total: 60,
        emoji: "🥕",
        farmer: "Nature Fresh Farm",
        location: "Erode",
        quality: "Premium",
      },
      {
        id: 3,
        name: "Fresh Banana",
        quantity: 1,
        unit: "dozen",
        price: 55,
        total: 55,
        emoji: "🍌",
        farmer: "Golden Farm",
        location: "Theni",
        quality: "Good",
      },
    ],

    subtotal: 205,
    deliveryCharge: 30,
    total: 235,
  };

  return (
    <div className="admin-order-details-page">

      {/* Header */}
      <header className="admin-page-header">

        <div>
          <Link to="/orders" className="admin-back-link">
            ← Back to Orders
          </Link>

          <span className="admin-page-label">
            ORDER DETAILS
          </span>

          <h1>Order #{order.id}</h1>

          <p>
            Placed on {order.date} at {order.time}
          </p>
        </div>

        <div className="admin-order-status">
          <span className="status-dot"></span>
          {order.status}
        </div>

      </header>

      <main className="admin-order-details-container">

        {/* Order Summary */}
        <section className="admin-order-summary">

          <div className="admin-summary-box">
            <span className="admin-summary-icon">📦</span>

            <div>
              <small>Order ID</small>
              <strong>#{order.id}</strong>
            </div>
          </div>

          <div className="admin-summary-box">
            <span className="admin-summary-icon">📅</span>

            <div>
              <small>Order Date</small>
              <strong>{order.date}</strong>
            </div>
          </div>

          <div className="admin-summary-box">
            <span className="admin-summary-icon">💰</span>

            <div>
              <small>Total Amount</small>
              <strong>₹{order.total}</strong>
            </div>
          </div>

          <div className="admin-summary-box">
            <span className="admin-summary-icon">💳</span>

            <div>
              <small>Payment</small>
              <strong>{order.payment}</strong>
            </div>
          </div>

        </section>


        <div className="admin-order-grid">

          {/* LEFT */}
          <div className="admin-order-left">

            {/* Products */}
            <section className="admin-details-card">

              <div className="admin-card-heading">
                <div>
                  <h2>Ordered Products</h2>
                  <p>{order.items.length} products in this order</p>
                </div>

                <span className="admin-items-count">
                  {order.items.length} Items
                </span>
              </div>

              <div className="admin-order-products">

                {order.items.map((item) => (
                  <div
                    className="admin-order-product"
                    key={item.id}
                  >

                    <div className="admin-order-product-image">
                      {item.emoji}
                    </div>

                    <div className="admin-order-product-info">

                      <h3>{item.name}</h3>

                      <p>
                        {item.quantity} {item.unit}
                      </p>

                      <div className="admin-product-farmer">
                        👨‍🌾 {item.farmer}
                      </div>

                      <span>
                        📍 {item.location}
                      </span>

                    </div>

                    <div className="admin-product-quality">
                      <span>{item.quality}</span>
                    </div>

                    <div className="admin-product-price">

                      <span>
                        ₹{item.price} / {item.unit}
                      </span>

                      <strong>
                        ₹{item.total}
                      </strong>

                    </div>

                  </div>
                ))}

              </div>

            </section>


            {/* Customer */}
            <section className="admin-details-card">

              <div className="admin-card-heading">
                <div>
                  <h2>Customer Information</h2>
                  <p>Customer details and delivery address</p>
                </div>
              </div>

              <div className="admin-customer-info">

                <div className="admin-customer-profile">
                  <div className="admin-customer-avatar">
                    {order.customer.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{order.customer.name}</h3>
                    <p>{order.customer.phone}</p>
                  </div>
                </div>

                <div className="admin-customer-details">

                  <div>
                    <span>📧 Email</span>
                    <strong>{order.customer.email}</strong>
                  </div>

                  <div>
                    <span>📍 Delivery Address</span>
                    <strong>
                      {order.customer.address},
                      <br />
                      {order.customer.city},
                      {order.customer.state} -{" "}
                      {order.customer.pincode}
                    </strong>
                  </div>

                </div>

              </div>

            </section>


            {/* Middleman */}
            <section className="admin-details-card">

              <div className="admin-card-heading">
                <div>
                  <h2>Delivery Middleman</h2>
                  <p>Person assigned for this order</p>
                </div>

                <span className="admin-assigned-badge">
                  ✓ Assigned
                </span>
              </div>

              <div className="admin-middleman">

                <div className="admin-middleman-avatar">
                  👨‍💼
                </div>

                <div className="admin-middleman-info">
                  <h3>{order.middleman.name}</h3>
                  <p>{order.middleman.phone}</p>
                </div>

                <button className="admin-contact-button">
                  📞 Contact
                </button>

              </div>

            </section>

          </div>


          {/* RIGHT */}
          <aside className="admin-order-right">

            {/* Price Summary */}
            <section className="admin-price-card">

              <h2>Payment Summary</h2>

              <div className="admin-price-row">
                <span>Subtotal</span>
                <strong>₹{order.subtotal}</strong>
              </div>

              <div className="admin-price-row">
                <span>Delivery Charge</span>
                <strong>₹{order.deliveryCharge}</strong>
              </div>

              <div className="admin-price-divider"></div>

              <div className="admin-total-row">
                <span>Total Amount</span>
                <strong>₹{order.total}</strong>
              </div>

              <div className="admin-payment-status">
                <span>Payment Status</span>
                <strong>● {order.paymentStatus}</strong>
              </div>

            </section>


            {/* Order Status */}
            <section className="admin-status-card">

              <h2>Order Status</h2>

              <div className="admin-status-timeline">

                <div className="admin-status-step completed">
                  <div className="admin-status-icon">✓</div>

                  <div>
                    <strong>Order Confirmed</strong>
                    <span>Order has been placed</span>
                  </div>
                </div>

                <div className="admin-status-line active"></div>

                <div className="admin-status-step completed">
                  <div className="admin-status-icon">✓</div>

                  <div>
                    <strong>Preparing</strong>
                    <span>Products collected from farmers</span>
                  </div>
                </div>

                <div className="admin-status-line active"></div>

                <div className="admin-status-step current">
                  <div className="admin-status-icon">🚚</div>

                  <div>
                    <strong>Out for Delivery</strong>
                    <span>Order is on the way</span>
                  </div>
                </div>

                <div className="admin-status-line"></div>

                <div className="admin-status-step">
                  <div className="admin-status-icon">✓</div>

                  <div>
                    <strong>Delivered</strong>
                    <span>Waiting for delivery</span>
                  </div>
                </div>

              </div>

            </section>


            {/* Admin Actions */}
            <section className="admin-actions-card">

              <h2>Admin Actions</h2>

              <button className="admin-action-primary">
                🚚 Update Delivery Status
              </button>

              <button className="admin-action-secondary">
                👨‍💼 Change Middleman
              </button>

              <button className="admin-action-danger">
                ✕ Cancel Order
              </button>

            </section>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default OrderDetails;