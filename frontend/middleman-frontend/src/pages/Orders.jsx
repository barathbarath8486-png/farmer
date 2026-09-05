import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: "ORD5001",
      customer: "Arun Kumar",
      location: "Coimbatore",
      products: "Tomato, Onion",
      quantity: "5 kg",
      total: "₹420",
      status: "Assigned",
      date: "03 Sep 2026",
    },
    {
      id: "ORD5002",
      customer: "Priya",
      location: "Gandhipuram",
      products: "Carrot, Potato",
      quantity: "4 kg",
      total: "₹350",
      status: "Collected",
      date: "03 Sep 2026",
    },
    {
      id: "ORD5003",
      customer: "Rahul",
      location: "RS Puram",
      products: "Rice, Tomato",
      quantity: "7 kg",
      total: "₹680",
      status: "Out for Delivery",
      date: "03 Sep 2026",
    },
    {
      id: "ORD5004",
      customer: "Meena",
      location: "Saibaba Colony",
      products: "Onion, Carrot",
      quantity: "3 kg",
      total: "₹290",
      status: "Assigned",
      date: "03 Sep 2026",
    },
    {
      id: "ORD5005",
      customer: "Karthik",
      location: "Peelamedu",
      products: "Potato, Tomato",
      quantity: "6 kg",
      total: "₹510",
      status: "Collected",
      date: "02 Sep 2026",
    },
  ];

  return (
    <div className="middleman-orders-page">
      <div className="middleman-page-header">
        <div>
          <h1>Assigned Orders</h1>
          <p>
            Customer orders assigned by admin for delivery.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="middleman-order-summary">
        <div className="middleman-order-summary-card">
          <span>📦</span>
          <div>
            <small>Total Assigned</small>
            <strong>12</strong>
          </div>
        </div>

        <div className="middleman-order-summary-card">
          <span>🛒</span>
          <div>
            <small>To Collect</small>
            <strong>5</strong>
          </div>
        </div>

        <div className="middleman-order-summary-card">
          <span>🚚</span>
          <div>
            <small>Out for Delivery</small>
            <strong>7</strong>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="middleman-orders-card">
        <div className="middleman-orders-card-header">
          <div>
            <h2>Customer Orders</h2>
            <p>Orders assigned to you by the administrator.</p>
          </div>
        </div>

        <div className="middleman-orders-table-wrapper">
          <table className="middleman-orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Products</th>
                <th>Quantity</th>
                <th>Total</th>
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

                  <td>
                    <div className="middleman-customer-info">
                      <strong>{order.customer}</strong>
                      <span>{order.location}</span>
                    </div>
                  </td>

                  <td>{order.products}</td>

                  <td>{order.quantity}</td>

                  <td>
                    <strong>{order.total}</strong>
                  </td>

                  <td>{order.date}</td>

                  <td>
                    <span
                      className={`middleman-table-status ${order.status
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="middleman-view-btn"
                      onClick={() =>
                        navigate(`/orders/${order.id}`)
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;