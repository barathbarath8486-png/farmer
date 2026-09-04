import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const farmer = JSON.parse(localStorage.getItem("farmer")) || {
    name: "Farmer",
    farm: "My Farm",
  };

  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome, {farmer.name} 👋</h1>
          <p>
            Here's what's happening with your farm today.
          </p>
        </div>

        <button
          className="dashboard-add-btn"
          onClick={() => navigate("/products/add")}
        >
          + Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">

        <div className="dashboard-stat-card">
          <div className="stat-icon">🥬</div>
          <p>My Products</p>
          <h2>12</h2>
          <span>10 active products</span>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">📦</div>
          <p>Total Orders</p>
          <h2>86</h2>
          <span>8 pending orders</span>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">💰</div>
          <p>Total Sales</p>
          <h2>₹48,650</h2>
          <span>This month</span>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">📊</div>
          <p>Available Stock</p>
          <h2>425 kg</h2>
          <span>3 low stock items</span>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="dashboard-grid">

        {/* Recent Orders */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Recent Orders</h2>
              <p>Your latest customer orders</p>
            </div>

            <button onClick={() => navigate("/orders")}>
              View All
            </button>
          </div>

          <div className="order-list">

            <div className="dashboard-order">
              <div>
                <strong>ORD1001</strong>
                <span>Fresh Tomato • 10 kg</span>
              </div>
              <strong>₹400</strong>
              <span className="order-status delivered">
                Delivered
              </span>
            </div>

            <div className="dashboard-order">
              <div>
                <strong>ORD1002</strong>
                <span>Carrot • 15 kg</span>
              </div>
              <strong>₹600</strong>
              <span className="order-status pending">
                Pending
              </span>
            </div>

            <div className="dashboard-order">
              <div>
                <strong>ORD1003</strong>
                <span>Onion • 20 kg</span>
              </div>
              <strong>₹700</strong>
              <span className="order-status processing">
                Processing
              </span>
            </div>

          </div>
        </div>

        {/* Low Stock */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Low Stock</h2>
              <p>Products that need attention</p>
            </div>
          </div>

          <div className="stock-list">

            <div className="stock-item">
              <div>
                <strong>Tomato</strong>
                <span>Vegetables</span>
              </div>
              <b>12 kg</b>
            </div>

            <div className="stock-item">
              <div>
                <strong>Carrot</strong>
                <span>Vegetables</span>
              </div>
              <b>15 kg</b>
            </div>

            <div className="stock-item">
              <div>
                <strong>Onion</strong>
                <span>Vegetables</span>
              </div>
              <b>18 kg</b>
            </div>

          </div>

          <button
            className="stock-button"
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