import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import Loading from "../components/Loading";

function Dashboard() {
  const stats = [
    {
      title: "Total Farmers",
      value: "128",
      change: "+12%",
      icon: "👨‍🌾",
    },
    {
      title: "Total Products",
      value: "356",
      change: "+8%",
      icon: "🥬",
    },
    {
      title: "Total Users",
      value: "1,245",
      change: "+18%",
      icon: "👥",
    },
    {
      title: "Total Orders",
      value: "842",
      change: "+15%",
      icon: "📦",
    },
  ];

  const recentOrders = [
    {
      id: "AGR1001",
      customer: "Dharshan",
      amount: 235,
      status: "Out for Delivery",
      date: "03 Sep 2026",
    },
    {
      id: "AGR1002",
      customer: "Arun Kumar",
      amount: 180,
      status: "Delivered",
      date: "02 Sep 2026",
    },
    {
      id: "AGR1003",
      customer: "Priya",
      amount: 420,
      status: "Processing",
      date: "02 Sep 2026",
    },
    {
      id: "AGR1004",
      customer: "Karthik",
      amount: 310,
      status: "Pending",
      date: "01 Sep 2026",
    },
    {
      id: "AGR1005",
      customer: "Meena",
      amount: 95,
      status: "Delivered",
      date: "01 Sep 2026",
    },
  ];

  const lowStockProducts = [
    {
      name: "Potato",
      farmer: "Kannan",
      quantity: 8,
      unit: "kg",
    },
    {
      name: "Tomato",
      farmer: "Ravi Kumar",
      quantity: 12,
      unit: "kg",
    },
    {
      name: "Carrot",
      farmer: "Suresh",
      quantity: 15,
      unit: "kg",
    },
    {
      name: "Onion",
      farmer: "Arun",
      quantity: 18,
      unit: "kg",
    },
  ];
if (loading) {
  return <Loading message="Loading farmers..." />;
}
  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "dashboard-status-success";

      case "Out for Delivery":
        return "dashboard-status-info";

      case "Processing":
        return "dashboard-status-warning";

      case "Pending":
        return "dashboard-status-pending";

      default:
        return "";
    }
  };

  return (
    <div className="admin-page">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin. Here's what's happening today.</p>
        </div>

        <div className="dashboard-date">
          📅 03 September 2026
        </div>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        {stats.map((stat) => (
          <div className="dashboard-stat-card" key={stat.title}>
            <div className="dashboard-stat-top">
              <div className="dashboard-stat-icon">
                {stat.icon}
              </div>

              <span className="dashboard-stat-change">
                {stat.change}
              </span>
            </div>

            <div className="dashboard-stat-content">
              <span>{stat.title}</span>
              <strong>{stat.value}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Overview */}
      <div className="dashboard-main-grid">
        <div className="dashboard-card sales-card">
          <div className="dashboard-card-header">
            <div>
              <h2>Sales Overview</h2>
              <p>Monthly sales performance</p>
            </div>

            <select className="dashboard-select">
              <option>This Year</option>
              <option>This Month</option>
              <option>This Week</option>
            </select>
          </div>

          <div className="sales-content">
            <div className="sales-total">
              <span>Total Sales</span>
              <strong>₹2,84,650</strong>
              <small>↑ 15.8% from last month</small>
            </div>

            <div className="sales-bars">
              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "45%" }}
                ></div>
                <span>Jan</span>
              </div>

              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "60%" }}
                ></div>
                <span>Feb</span>
              </div>

              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "52%" }}
                ></div>
                <span>Mar</span>
              </div>

              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "72%" }}
                ></div>
                <span>Apr</span>
              </div>

              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "65%" }}
                ></div>
                <span>May</span>
              </div>

              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "82%" }}
                ></div>
                <span>Jun</span>
              </div>

              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "76%" }}
                ></div>
                <span>Jul</span>
              </div>

              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "90%" }}
                ></div>
                <span>Aug</span>
              </div>

              <div className="sales-bar-group">
                <div
                  className="sales-bar"
                  style={{ height: "68%" }}
                ></div>
                <span>Sep</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div>
              <h2>Order Summary</h2>
              <p>Current order status</p>
            </div>
          </div>

          <div className="order-summary-list">
            <div className="order-summary-item">
              <div>
                <span className="summary-dot pending-dot"></span>
                <span>Pending</span>
              </div>
              <strong>36</strong>
            </div>

            <div className="order-summary-item">
              <div>
                <span className="summary-dot processing-dot"></span>
                <span>Processing</span>
              </div>
              <strong>52</strong>
            </div>

            <div className="order-summary-item">
              <div>
                <span className="summary-dot delivery-dot"></span>
                <span>Out for Delivery</span>
              </div>
              <strong>28</strong>
            </div>

            <div className="order-summary-item">
              <div>
                <span className="summary-dot delivered-dot"></span>
                <span>Delivered</span>
              </div>
              <strong>726</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders + Low Stock */}
      <div className="dashboard-bottom-grid">
        {/* Recent Orders */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div>
              <h2>Recent Orders</h2>
              <p>Latest customer orders</p>
            </div>

            <Link to="/orders" className="dashboard-view-all">
              View All →
            </Link>
          </div>

          <div className="recent-orders-list">
            {recentOrders.map((order) => (
              <div className="recent-order-item" key={order.id}>
                <div className="recent-order-icon">
                  📦
                </div>

                <div className="recent-order-info">
                  <strong>{order.id}</strong>
                  <span>{order.customer}</span>
                </div>

                <div className="recent-order-middle">
                  <strong>₹{order.amount}</strong>
                  <span>{order.date}</span>
                </div>

                <span
                  className={`dashboard-status ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div>
              <h2>Low Stock</h2>
              <p>Products that need attention</p>
            </div>

            <Link to="/products" className="dashboard-view-all">
              View All →
            </Link>
          </div>

          <div className="low-stock-list">
            {lowStockProducts.map((product) => (
              <div
                className="low-stock-item"
                key={product.name}
              >
                <div className="low-stock-icon">
                  🥬
                </div>

                <div className="low-stock-info">
                  <strong>{product.name}</strong>
                  <span>{product.farmer}</span>
                </div>

                <div className="stock-quantity">
                  <strong>{product.quantity}</strong>
                  <span>{product.unit} left</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card quick-actions-card">
        <div className="dashboard-card-header">
          <div>
            <h2>Quick Actions</h2>
            <p>Frequently used admin actions</p>
          </div>
        </div>

        <div className="quick-actions">
          <Link to="/products/add" className="quick-action">
            <span>➕</span>
            <div>
              <strong>Add Product</strong>
              <small>Add a new grocery product</small>
            </div>
          </Link>

          <Link to="/farmers" className="quick-action">
            <span>👨‍🌾</span>
            <div>
              <strong>Manage Farmers</strong>
              <small>View and manage farmers</small>
            </div>
          </Link>

          <Link to="/orders" className="quick-action">
            <span>📦</span>
            <div>
              <strong>Manage Orders</strong>
              <small>Check customer orders</small>
            </div>
          </Link>

          <Link to="/users" className="quick-action">
            <span>👥</span>
            <div>
              <strong>Manage Users</strong>
              <small>View registered users</small>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;