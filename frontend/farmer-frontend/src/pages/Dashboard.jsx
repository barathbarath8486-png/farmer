import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const farmer = JSON.parse(
    localStorage.getItem("farmer") || "{}"
  );

  const recentOrders = [
    {
      id: "ORD1001",
      buyer: "AgriConnect Admin",
      product: "Fresh Tomato",
      quantity: "50 kg",
      amount: 2000,
      status: "Completed",
    },
    {
      id: "ORD1002",
      buyer: "AgriConnect Admin",
      product: "Fresh Carrot",
      quantity: "30 kg",
      amount: 1500,
      status: "Pending",
    },
    {
      id: "ORD1003",
      buyer: "AgriConnect Admin",
      product: "Fresh Onion",
      quantity: "40 kg",
      amount: 1600,
      status: "Confirmed",
    },
  ];

  const lowStockProducts = [
    {
      name: "Fresh Tomato",
      quantity: "12 kg",
    },
    {
      name: "Fresh Carrot",
      quantity: "15 kg",
    },
    {
      name: "Fresh Onion",
      quantity: "18 kg",
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>
            Welcome, {farmer.name || "Farmer"} 👋
          </h1>

          <p>
            Manage your products and admin purchase orders.
          </p>
        </div>

        <button
          className="dashboard-add-btn"
          onClick={() => navigate("/products/add")}
        >
          + Add Product
        </button>
      </div>

      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <span>My Products</span>
          <strong>12</strong>
        </div>

        <div className="dashboard-stat-card">
          <span>Admin Orders</span>
          <strong>86</strong>
        </div>

        <div className="dashboard-stat-card">
          <span>Total Purchase Value</span>
          <strong>₹48,650</strong>
        </div>

        <div className="dashboard-stat-card">
          <span>Available Stock</span>
          <strong>425 kg</strong>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section-card">
          <div className="dashboard-section-header">
            <div>
              <h2>Recent Admin Purchases</h2>
              <p>Latest purchase orders from admin.</p>
            </div>

            <button
              className="dashboard-view-all-btn"
              onClick={() => navigate("/orders")}
            >
              View All
            </button>
          </div>

          <div className="dashboard-orders">
            {recentOrders.map((order) => (
              <div
                className="dashboard-order-item"
                key={order.id}
              >
                <div className="dashboard-order-main">
                  <strong>{order.id}</strong>

                  <span>
                    {order.product} • {order.quantity}
                  </span>

                  <small>
                    Buyer: {order.buyer}
                  </small>
                </div>

                <div className="dashboard-order-right">
                  <strong>₹{order.amount}</strong>

                  <span
                    className={`order-status ${order.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section-card">
          <div className="dashboard-section-header">
            <div>
              <h2>Low Stock</h2>
              <p>Products that need stock update.</p>
            </div>
          </div>

          <div className="dashboard-low-stock">
            {lowStockProducts.map((product) => (
              <div
                className="dashboard-stock-item"
                key={product.name}
              >
                <div>
                  <strong>{product.name}</strong>
                  <span>Available quantity</span>
                </div>

                <strong>{product.quantity}</strong>
              </div>
            ))}
          </div>

          <button
            className="dashboard-manage-btn"
            onClick={() => navigate("/products")}
          >
            Manage Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;