import { useNavigate } from "react-router-dom";

function OrderTable({ orders = [] }) {
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <div className="farmer-empty-table">
        <div>📦</div>
        <p>No orders found.</p>
      </div>
    );
  }

  return (
    <div className="farmer-table-wrapper">
      <table className="farmer-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <strong>{order.id}</strong>
              </td>

              <td>{order.customer}</td>

              <td>{order.product}</td>

              <td>{order.quantity}</td>

              <td>₹{order.amount}</td>

              <td>{order.date}</td>

              <td>
                <span
                  className={`farmer-order-status ${
                    order.status?.toLowerCase().replace(/\s+/g, "-")
                  }`}
                >
                  {order.status}
                </span>
              </td>

              <td>
                <button
                  className="farmer-view-btn"
                  onClick={() => navigate(`/orders/${order.id}`)}
                >
                  👁 View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;