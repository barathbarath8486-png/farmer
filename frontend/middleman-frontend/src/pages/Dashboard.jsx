import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Assigned Customer Orders",
      value: 12,
      icon: "📦",
      link: "/orders",
    },
    {
      title: "Products to Collect",
      value: 5,
      icon: "🛒",
      link: "/orders",
    },
    {
      title: "Pending Deliveries",
      value: 7,
      icon: "🚚",
      link: "/deliveries",
    },
    {
      title: "Completed Deliveries",
      value: 38,
      icon: "✅",
      link: "/deliveries",
    },
  ];

  const recentOrders = [
    {
      id: "ORD5001",
      customer: "Arun Kumar",
      products: "Tomato, Onion",
      quantity: "5 kg",
      status: "Assigned",
    },
    {
      id: "ORD5002",
      customer: "Priya",
      products: "Carrot, Potato",
      quantity: "4 kg",
      status: "Collected",
    },
    {
      id: "ORD5003",
      customer: "Rahul",
      products: "Rice, Tomato",
      quantity: "7 kg",
      status: "Out for Delivery",
    },
    {
      id: "ORD5004",
      customer: "Meena",
      products: "Onion, Carrot",
      quantity: "3 kg",
      status: "Assigned",
    },
  ];

  return (
    <div className="middleman-dashboard">
      <div className="middleman-dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Manage customer orders and coordinate deliveries.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="middleman-dashboard-stats">
        {stats.map((stat) => (
          <div
            className="middleman-dashboard-stat-card"
            key={stat.title}
            onClick={() => navigate(stat.link)}
          >
            <div className="middleman-stat-icon">
              {stat.icon}
            </div>

            <div className="middleman-stat-info">
              <span>{stat.title}</span>
              <strong>{stat.value}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="middleman-dashboard-section">
        <div className="middleman-section-header">
          <div>
            <h2>Recent Assigned Orders</h2>
            <p>Customer orders assigned by admin.</p>
          </div>

          <button
            onClick={() => navigate("/orders")}
            className="middleman-view-all-btn"
          >
            View All
          </button>
        </div>

        <div className="middleman-orders-list">
          {recentOrders.map((order) => (
            <div
              className="middleman-order-item"
              key={order.id}
            >
              <div className="middleman-order-main">
                <strong>{order.id}</strong>
                <span>{order.customer}</span>
              </div>

              <div className="middleman-order-products">
                <span>{order.products}</span>
                <small>{order.quantity}</small>
              </div>

              <div>
                <span
                  className={`middleman-order-status ${order.status
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

      {/* Work Flow */}
      <div className="middleman-dashboard-section">
        <div className="middleman-section-header">
          <div>
            <h2>Today's Work</h2>
            <p>Your main responsibilities as a middleman.</p>
          </div>
        </div>

        <div className="middleman-workflow">
          <div className="middleman-workflow-item">
            <span>📦</span>
            <div>
              <strong>View Assigned Orders</strong>
              <p>Check customer orders assigned by admin.</p>
            </div>
          </div>

          <div className="middleman-workflow-item">
            <span>🛒</span>
            <div>
              <strong>Collect Products</strong>
              <p>Collect products required for each order.</p>
            </div>
          </div>

          <div className="middleman-workflow-item">
            <span>🚚</span>
            <div>
              <strong>Manage Delivery</strong>
              <p>Assign delivery person and update delivery status.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;