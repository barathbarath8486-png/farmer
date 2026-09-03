import { Link } from "react-router-dom";

function OrderTable({ orders, onStatusChange }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "status-success";

      case "Out for Delivery":
        return "status-info";

      case "Processing":
        return "status-warning";

      case "Pending":
        return "status-pending";

      case "Cancelled":
        return "status-danger";

      default:
        return "";
    }
  };

  return (
    <div className="table-card">
      {orders.length === 0 ? (
        <div className="empty-orders">
          <div>📦</div>
          <h3>No orders found</h3>
          <p>There are no orders matching your search.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  {/* Order ID */}
                  <td>
                    <div className="order-table-id">
                      <span className="order-table-icon">📦</span>

                      <div>
                        <strong>{order.id}</strong>
                        <span>Order</span>
                      </div>
                    </div>
                  </td>

                  {/* Customer */}
                  <td>
                    <div className="order-customer-cell">
                      <strong>{order.customer}</strong>
                      <span>{order.phone}</span>
                    </div>
                  </td>

                  {/* Items */}
                  <td>{order.items} items</td>

                  {/* Amount */}
                  <td>
                    <strong>₹{order.amount}</strong>
                  </td>

                  {/* Payment */}
                  <td>
                    <span className="payment-method">
                      {order.payment}
                    </span>
                  </td>

                  {/* Status */}
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        onStatusChange(
                          order.id,
                          e.target.value
                        )
                      }
                      className={`status-select ${getStatusClass(
                        order.status
                      )}`}
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Processing">
                        Processing
                      </option>

                      <option value="Out for Delivery">
                        Out for Delivery
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>
                    </select>
                  </td>

                  {/* Date */}
                  <td>{order.date}</td>

                  {/* Actions */}
                  <td>
                    <Link
                      to={`/orders/${order.id}`}
                      className="view-order-btn"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrderTable;