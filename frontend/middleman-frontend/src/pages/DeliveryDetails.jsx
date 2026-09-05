import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeliveryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [deliveryPerson, setDeliveryPerson] =
    useState("Not Assigned");

  const [status, setStatus] = useState("Pending");

  const handleSave = () => {
    alert("Delivery details updated successfully.");
  };

  return (
    <div className="middleman-delivery-details-page">
      {/* Header */}
      <div className="middleman-details-header">
        <div>
          <button
            className="middleman-back-btn"
            onClick={() => navigate("/deliveries")}
          >
            ← Back to Deliveries
          </button>

          <h1>Delivery Details</h1>
          <p>
            Manage delivery assignment and delivery status.
          </p>
        </div>

        <span className="middleman-details-order-id">
          {id || "DEL1001"}
        </span>
      </div>

      {/* Delivery Information */}
      <div className="middleman-delivery-details-grid">
        <div className="middleman-details-card">
          <h2>Customer Information</h2>

          <div className="middleman-detail-row">
            <span>Customer Name</span>
            <strong>Arun Kumar</strong>
          </div>

          <div className="middleman-detail-row">
            <span>Phone</span>
            <strong>9876543210</strong>
          </div>

          <div className="middleman-detail-row">
            <span>Order ID</span>
            <strong>ORD5001</strong>
          </div>

          <div className="middleman-detail-row">
            <span>Delivery Address</span>
            <strong>
              123, Gandhi Nagar, Coimbatore
            </strong>
          </div>
        </div>

        {/* Assignment */}
        <div className="middleman-details-card">
          <h2>Delivery Assignment</h2>

          <div className="middleman-input-group">
            <label>Delivery Person</label>

            <select
              value={deliveryPerson}
              onChange={(e) =>
                setDeliveryPerson(e.target.value)
              }
            >
              <option>Not Assigned</option>
              <option>Vijay</option>
              <option>Karthi</option>
              <option>Ravi</option>
              <option>Manoj</option>
            </select>
          </div>

          <div className="middleman-input-group">
            <label>Delivery Status</label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option>Pending</option>
              <option>Assigned</option>
              <option>Out for Delivery</option>
              <option>Delivered</option>
            </select>
          </div>

          <button
            className="middleman-save-delivery-btn"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Delivery Progress */}
      <div className="middleman-details-card">
        <h2>Delivery Progress</h2>

        <div className="middleman-delivery-progress">
          <div
            className={
              status !== "Pending"
                ? "middleman-progress-item completed"
                : "middleman-progress-item active"
            }
          >
            <span>1</span>
            <div>
              <strong>Pending</strong>
              <p>Waiting for delivery assignment.</p>
            </div>
          </div>

          <div
            className={
              ["Assigned", "Out for Delivery", "Delivered"].includes(
                status
              )
                ? "middleman-progress-item completed"
                : "middleman-progress-item"
            }
          >
            <span>2</span>
            <div>
              <strong>Assigned</strong>
              <p>Delivery person has been assigned.</p>
            </div>
          </div>

          <div
            className={
              ["Out for Delivery", "Delivered"].includes(
                status
              )
                ? "middleman-progress-item completed"
                : "middleman-progress-item"
            }
          >
            <span>3</span>
            <div>
              <strong>Out for Delivery</strong>
              <p>Order is on the way to customer.</p>
            </div>
          </div>

          <div
            className={
              status === "Delivered"
                ? "middleman-progress-item completed"
                : "middleman-progress-item"
            }
          >
            <span>4</span>
            <div>
              <strong>Delivered</strong>
              <p>Order successfully delivered.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryDetails;