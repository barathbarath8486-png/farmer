import { useNavigate } from "react-router-dom";

function Deliveries() {
  const navigate = useNavigate();

  const deliveries = [
    {
      id: "DEL1001",
      orderId: "ORD5001",
      customer: "Arun Kumar",
      address: "Gandhi Nagar, Coimbatore",
      deliveryPerson: "Not Assigned",
      status: "Pending",
    },
    {
      id: "DEL1002",
      orderId: "ORD5002",
      customer: "Priya",
      address: "Gandhipuram, Coimbatore",
      deliveryPerson: "Vijay",
      status: "Assigned",
    },
    {
      id: "DEL1003",
      orderId: "ORD5003",
      customer: "Rahul",
      address: "RS Puram, Coimbatore",
      deliveryPerson: "Karthi",
      status: "Out for Delivery",
    },
    {
      id: "DEL1004",
      orderId: "ORD5004",
      customer: "Meena",
      address: "Saibaba Colony, Coimbatore",
      deliveryPerson: "Not Assigned",
      status: "Pending",
    },
    {
      id: "DEL1005",
      orderId: "ORD5005",
      customer: "Karthik",
      address: "Peelamedu, Coimbatore",
      deliveryPerson: "Ravi",
      status: "Delivered",
    },
  ];

  return (
    <div className="middleman-deliveries-page">
      {/* Header */}
      <div className="middleman-page-header">
        <div>
          <h1>Deliveries</h1>
          <p>
            Assign delivery persons and track customer deliveries.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="middleman-delivery-summary">
        <div className="middleman-delivery-summary-card">
          <span>📋</span>
          <div>
            <small>Total Deliveries</small>
            <strong>12</strong>
          </div>
        </div>

        <div className="middleman-delivery-summary-card">
          <span>⏳</span>
          <div>
            <small>Pending</small>
            <strong>4</strong>
          </div>
        </div>

        <div className="middleman-delivery-summary-card">
          <span>🚚</span>
          <div>
            <small>Out for Delivery</small>
            <strong>3</strong>
          </div>
        </div>

        <div className="middleman-delivery-summary-card">
          <span>✅</span>
          <div>
            <small>Delivered</small>
            <strong>5</strong>
          </div>
        </div>
      </div>

      {/* Delivery Table */}
      <div className="middleman-deliveries-card">
        <div className="middleman-deliveries-card-header">
          <div>
            <h2>Delivery List</h2>
            <p>
              Manage deliveries for assigned customer orders.
            </p>
          </div>
        </div>

        <div className="middleman-delivery-table-wrapper">
          <table className="middleman-delivery-table">
            <thead>
              <tr>
                <th>Delivery ID</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Delivery Person</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {deliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td>
                    <strong>{delivery.id}</strong>
                  </td>

                  <td>{delivery.orderId}</td>

                  <td>
                    <strong>{delivery.customer}</strong>
                  </td>

                  <td>{delivery.address}</td>

                  <td>
                    {delivery.deliveryPerson}
                  </td>

                  <td>
                    <span
                      className={`middleman-delivery-status ${delivery.status
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {delivery.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="middleman-delivery-view-btn"
                      onClick={() =>
                        navigate(
                          `/deliveries/${delivery.id}`
                        )
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

export default Deliveries;