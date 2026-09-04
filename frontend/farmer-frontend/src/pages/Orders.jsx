import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");

  const orders = [
    {
      id: "ORD1001",
      buyer: "AgriConnect Admin",
      product: "Fresh Tomato",
      quantity: "50 kg",
      price: 40,
      amount: 2000,
      status: "Completed",
      date: "02 Sep 2026",
    },
    {
      id: "ORD1002",
      buyer: "AgriConnect Admin",
      product: "Fresh Carrot",
      quantity: "30 kg",
      price: 50,
      amount: 1500,
      status: "Pending",
      date: "03 Sep 2026",
    },
    {
      id: "ORD1003",
      buyer: "AgriConnect Admin",
      product: "Fresh Onion",
      quantity: "40 kg",
      price: 40,
      amount: 1600,
      status: "Confirmed",
      date: "03 Sep 2026",
    },
    {
      id: "ORD1004",
      buyer: "AgriConnect Admin",
      product: "Fresh Potato",
      quantity: "60 kg",
      price: 30,
      amount: 1800,
      status: "Collected",
      date: "01 Sep 2026",
    },
    {
      id: "ORD1005",
      buyer: "AgriConnect Admin",
      product: "Fresh Tomato",
      quantity: "25 kg",
      price: 40,
      amount: 1000,
      status: "Pending",
      date: "03 Sep 2026",
    },
  ];

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="orders-page">
      <div className="orders-header">
        <div>
          <h1>Orders</h1>
          <p>View and manage purchase orders from admin.</p>
        </div>
      </div>

      <div className="orders-summary">
        <div className="order-summary-card">
          <span>Total Orders</span>
          <strong>86</strong>
        </div>

        <div className="order-summary-card">
          <span>Pending</span>
          <strong>8</strong>
        </div>

        <div className="order-summary-card">
          <span>Confirmed</span>
          <strong>5</strong>
        </div>

        <div className="order-summary-card">
          <span>Completed</span>
          <strong>73</strong>
        </div>
      </div>

      <div className="orders-filter">
        <label>Filter Orders</label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Collected">Collected</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="orders-table-card">
        <div className="orders-table-header">
          <h2>Admin Purchase Orders</h2>
          <span>{filteredOrders.length} orders</span>
        </div>

        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Buyer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong>{order.id}</strong>
                  </td>

                  <td>{order.buyer}</td>

                  <td>{order.product}</td>

                  <td>{order.quantity}</td>

                  <td>₹{order.amount}</td>

                  <td>
                    <span
                      className={`order-status ${order.status
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>{order.date}</td>

                  <td>
                    <button
                      className="order-view-btn"
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

        {filteredOrders.length === 0 && (
          <div className="orders-empty">
            No orders found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;