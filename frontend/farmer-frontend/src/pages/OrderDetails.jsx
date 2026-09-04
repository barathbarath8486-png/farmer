import { useNavigate, useParams } from "react-router-dom";

function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const order = {
    id: id || "ORD1001",
    buyer: "AgriConnect Admin",
    phone: "9876543210",
    product: "Fresh Tomato",
    quantity: "50 kg",
    price: 40,
    amount: 2000,
    status: "Completed",
    payment: "Paid",
    date: "02 Sep 2026",
  };

  return (
    <div className="order-details-page">
      <div className="order-details-header">
        <div>
          <h1>Order Details</h1>
          <p>View complete information about this purchase order.</p>
        </div>

        <button
          className="back-orders-btn"
          onClick={() => navigate("/orders")}
        >
          ← Back to Orders
        </button>
      </div>

      <div className="order-details-card">
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

        <div className="order-detail-section">
          <h3>Buyer Information</h3>

          <div className="order-detail-grid">
            <div>
              <span>Buyer</span>
              <strong>{order.buyer}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{order.phone}</strong>
            </div>
          </div>
        </div>

        <div className="order-detail-section">
          <h3>Purchase Information</h3>

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

        <div className="order-detail-section">
          <h3>Payment Information</h3>

          <div className="payment-row">
            <span>Payment Status</span>

            <strong className="payment-paid">
              ✓ {order.payment}
            </strong>
          </div>

          <div className="payment-row">
            <span>Total Purchase Value</span>

            <strong>₹{order.amount}</strong>
          </div>
        </div>

        <div className="order-detail-section">
          <h3>Purchase Timeline</h3>

          <div className="order-timeline">
            <div className="timeline-item completed">
              <div className="timeline-dot">✓</div>

              <div>
                <strong>Purchase Order Placed</strong>
                <span>{order.date}</span>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-dot">✓</div>

              <div>
                <strong>Order Confirmed</strong>
                <span>Purchase order confirmed by farmer</span>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-dot">✓</div>

              <div>
                <strong>Product Collected</strong>
                <span>Products collected from farmer</span>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-dot">✓</div>

              <div>
                <strong>Purchase Completed</strong>
                <span>Admin purchase completed successfully</span>
              </div>
            </div>
          </div>
        </div>

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