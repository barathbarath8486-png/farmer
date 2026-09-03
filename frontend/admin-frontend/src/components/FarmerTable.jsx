import { Link } from "react-router-dom";

function FarmerTable({ farmers, onStatusChange, onDelete }) {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this farmer?"
    );

    if (confirmDelete) {
      onDelete(id);
    }
  };

  const handleStatusChange = (id, status) => {
    onStatusChange(id, status);
  };

  return (
    <div className="table-card">
      {farmers.length === 0 ? (
        <div className="empty-farmers">
          <div>👨‍🌾</div>
          <h3>No farmers found</h3>
          <p>There are no farmers matching your search.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Farmer</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Farm</th>
                <th>Products</th>
                <th>Orders</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {farmers.map((farmer) => (
                <tr key={farmer.id}>
                  {/* Farmer */}
                  <td>
                    <div className="farmer-table-cell">
                      <div className="farmer-avatar">
                        👨‍🌾
                      </div>

                      <div>
                        <strong>{farmer.name}</strong>
                        <span>{farmer.id}</span>
                      </div>
                    </div>
                  </td>

                  {/* Phone */}
                  <td>{farmer.phone}</td>

                  {/* Location */}
                  <td>{farmer.location}</td>

                  {/* Farm */}
                  <td>
                    <strong>{farmer.farm}</strong>
                  </td>

                  {/* Products */}
                  <td>{farmer.products}</td>

                  {/* Orders */}
                  <td>{farmer.orders}</td>

                  {/* Status */}
                  <td>
                    <select
                      value={farmer.status}
                      onChange={(e) =>
                        handleStatusChange(
                          farmer.id,
                          e.target.value
                        )
                      }
                      className={`farmer-status-select ${
                        farmer.status === "Approved"
                          ? "farmer-status-approved"
                          : farmer.status === "Pending"
                          ? "farmer-status-pending"
                          : "farmer-status-blocked"
                      }`}
                    >
                      <option value="Approved">
                        Approved
                      </option>

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Blocked">
                        Blocked
                      </option>
                    </select>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="farmer-actions">
                      <Link
                        to={`/farmers/${farmer.id}`}
                        className="view-farmer-btn"
                      >
                        View
                      </Link>

                      <button
                        className="delete-farmer-btn"
                        onClick={() =>
                          handleDelete(farmer.id)
                        }
                      >
                        Delete
                      </button>
                    </div>
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

export default FarmerTable;