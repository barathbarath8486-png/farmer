import { useNavigate, useParams } from "react-router-dom";

function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Temporary order data
  const order = {
    id: id || "ORD1001",
    customer: "Dharshan",
    phone: "9876543210",
    address: "Coimbatore, Tamil Nadu",
    product: "Fresh Tomato",
    quantity: "10 kg",
    price: 40,
    amount: 400,
    status: "Delivered",
    payment: "Paid",
    date: "02 Sep 2026",
  };

  return (
    <div className="order-details-page">

      {/* Header */}
      <div className="order-details-header">
        <div>
          <h1>Order Details</h1>
          <p>View complete information about this order.</p>
        </div>

        <button
          className="back-orders-btn"
          onClick={() => navigate("/orders")}
        >
          ← Back to Orders
        </button>
      </div>

      {/* Order Card */}
      <div className="order-details-card">

        {/* Order Header */}
        <div className="order-detail-top">
          <div>
            <span className="order-detail-label">Order ID</span>
            <h2>{order.id}</h2>
            <p>{order.date}</p>
          </div>

          <span
            className={`order-detail-status ${order.status
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            {order.status}
          </span>
        </div>

        {/* Customer */}
        <div className="order-detail-section">
          <h3>Customer Information</h3>

          <div className="order-detail-grid">
            <div>
              <span>Name</span>
              <strong>{order.customer}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{order.phone}</strong>
            </div>

            <div className="order-address">
              <span>Delivery Address</span>
              <strong>{order.address}</strong>
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="order-detail-section">
          <h3>Product Information</h3>

          <div className="order-product-box">

            <div className="order-product-icon">
              🥬
            </div>

            <div className="order-product-info">
              <strong>{order.product}</strong>
              <span>{order.quantity}</span>
            </div>

            <div className="order-product-price">
              <span>₹{order.price} / kg</span>
              <strong>₹{order.amount}</strong>
            </div>

          </div>
        </div>

        {/* Payment */}
        <div className="order-detail-section">
          <h3>Payment Information</h3>

          <div className="payment-row">
            <span>Payment Status</span>

            <strong className="payment-paid">
              ✓ {order.payment}
            </strong>
          </div>

          <div className="payment-row">
            <span>Total Amount</span>
            <strong>₹{order.amount}</strong>
          </div>
        </div>

        {/* Timeline */}
        <div className="order-detail-section">
          <h3>Order Timeline</h3>

          <div className="order-timeline">

            <div className="timeline-item completed">
              <div className="timeline-dot">✓</div>

              <div>
                <strong>Order Placed</strong>
                <span>{order.date}</span>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-dot">✓</div>

              <div>
                <strong>Order Confirmed</strong>
                <span>Order accepted by farmer</span>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-dot">✓</div>

              <div>
                <strong>Out for Delivery</strong>
                <span>Product handed over for delivery</span>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-dot">✓</div>

              <div>
                <strong>Delivered</strong>
                <span>Order successfully delivered</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Action */}
        <div className="order-detail-actions">
          <button
            className="order-back-btn"
            onClick={() => navigate("/orders")}
          >
            Back to Orders
          </button>
        </div>

      </div>

    </div>
  );
}

export default OrderDetails;