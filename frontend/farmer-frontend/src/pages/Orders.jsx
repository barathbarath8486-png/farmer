import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");

  const orders = [
    {
      id: "ORD1001",
      customer: "Dharshan",
      product: "Fresh Tomato",
      quantity: "10 kg",
      amount: 400,
      status: "Delivered",
      date: "02 Sep 2026",
    },
    {
      id: "ORD1002",
      customer: "Arun",
      product: "Fresh Carrot",
      quantity: "5 kg",
      amount: 250,
      status: "Pending",
      date: "03 Sep 2026",
    },
    {
      id: "ORD1003",
      customer: "Priya",
      product: "Fresh Onion",
      quantity: "8 kg",
      amount: 320,
      status: "Out for Delivery",
      date: "03 Sep 2026",
    },
    {
      id: "ORD1004",
      customer: "Karthik",
      product: "Fresh Potato",
      quantity: "15 kg",
      amount: 450,
      status: "Delivered",
      date: "01 Sep 2026",
    },
    {
      id: "ORD1005",
      customer: "Meena",
      product: "Fresh Tomato",
      quantity: "6 kg",
      amount: 240,
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

      {/* Header */}
      <div className="orders-header">
        <div>
          <h1>Orders</h1>
          <p>View and manage your customer orders.</p>
        </div>
      </div>

      {/* Summary Cards */}
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
          <span>Out for Delivery</span>
          <strong>5</strong>
        </div>

        <div className="order-summary-card">
          <span>Delivered</span>
          <strong>73</strong>
        </div>

      </div>

      {/* Filter */}
      <div className="orders-filter">

        <label>Filter Orders</label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Out for Delivery">
            Out for Delivery
          </option>
          <option value="Delivered">Delivered</option>
        </select>

      </div>

      {/* Orders Table */}
      <div className="orders-table-card">

        <div className="orders-table-header">
          <h2>Recent Orders</h2>
          <span>{filteredOrders.length} orders</span>
        </div>

        <div className="orders-table-wrapper">
          <table className="orders-table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
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

                  <td>{order.customer}</td>

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