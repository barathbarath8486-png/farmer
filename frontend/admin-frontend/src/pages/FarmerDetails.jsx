import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function FarmerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("Approved");

  // Temporary farmer data
  const farmer = {
    id: id || "FAR001",
    name: "Ramesh Kumar",
    phone: "9876543210",
    email: "ramesh@example.com",
    location: "Coimbatore, Tamil Nadu, India",
    address: "Pollachi, Coimbatore, Tamil Nadu",
    joined: "15 Aug 2026",
    farmName: "Green Valley Farm",
    farmSize: "5 Acres",
    experience: "8 Years",
    totalProducts: 12,
    totalOrders: 86,
    totalSales: 125680,
    products: [
      {
        id: "P001",
        name: "Fresh Tomato",
        category: "Vegetables",
        price: 40,
        quantity: 120,
        quality: "A",
        status: "Available",
      },
      {
        id: "P002",
        name: "Carrot",
        category: "Vegetables",
        price: 60,
        quantity: 80,
        quality: "A",
        status: "Available",
      },
      {
        id: "P003",
        name: "Potato",
        category: "Vegetables",
        price: 35,
        quantity: 0,
        quality: "B",
        status: "Out of Stock",
      },
    ],
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    alert(`Farmer status changed to ${newStatus}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this farmer?"
    );

    if (confirmDelete) {
      alert("Farmer deleted successfully");
      navigate("/farmers");
    }
  };

  return (
    <div className="farmer-details-page">

      {/* Header */}
      <div className="farmer-details-header">
        <div>
          <Link to="/farmers" className="back-farmers-btn">
            ← Back to Farmers
          </Link>

          <h1>Farmer Details</h1>
          <p>View and manage farmer information</p>
        </div>

        <div className="farmer-header-actions">
          <select
            value={status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="farmer-status-select"
          >
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Blocked">Blocked</option>
          </select>

          <button
            className="delete-farmer-btn"
            onClick={handleDelete}
          >
            Delete Farmer
          </button>
        </div>
      </div>

      {/* Farmer Profile */}
      <div className="farmer-details-grid">

        {/* Profile Card */}
        <div className="farmer-profile-card">

          <div className="farmer-profile-top">
            <div className="farmer-big-avatar">
              👨‍🌾
            </div>

            <div>
              <h2>{farmer.name}</h2>
              <p>{farmer.farmName}</p>

              <span
                className={`farmer-status-badge ${
                  status === "Approved"
                    ? "farmer-approved"
                    : status === "Pending"
                    ? "farmer-pending"
                    : "farmer-blocked"
                }`}
              >
                {status}
              </span>
            </div>
          </div>

          <div className="farmer-info-list">

            <div className="farmer-info-row">
              <span>Farmer ID</span>
              <strong>{farmer.id}</strong>
            </div>

            <div className="farmer-info-row">
              <span>Phone</span>
              <strong>{farmer.phone}</strong>
            </div>

            <div className="farmer-info-row">
              <span>Email</span>
              <strong>{farmer.email}</strong>
            </div>

            <div className="farmer-info-row">
              <span>Location</span>
              <strong>{farmer.location}</strong>
            </div>

            <div className="farmer-info-row">
              <span>Address</span>
              <strong>{farmer.address}</strong>
            </div>

            <div className="farmer-info-row">
              <span>Joined Date</span>
              <strong>{farmer.joined}</strong>
            </div>

          </div>
        </div>

        {/* Farm Information */}
        <div className="farm-info-card">

          <h2>Farm Information</h2>

          <div className="farm-info-grid">

            <div className="farm-stat">
              <span>🌱</span>
              <p>Farm Size</p>
              <strong>{farmer.farmSize}</strong>
            </div>

            <div className="farm-stat">
              <span>👨‍🌾</span>
              <p>Experience</p>
              <strong>{farmer.experience}</strong>
            </div>

            <div className="farm-stat">
              <span>🥬</span>
              <p>Total Products</p>
              <strong>{farmer.totalProducts}</strong>
            </div>

            <div className="farm-stat">
              <span>📦</span>
              <p>Total Orders</p>
              <strong>{farmer.totalOrders}</strong>
            </div>

          </div>

          <div className="farmer-sales-box">
            <span>Total Sales</span>
            <strong>₹{farmer.totalSales.toLocaleString()}</strong>
          </div>

        </div>
      </div>

      {/* Products */}
      <div className="farmer-products-card">

        <div className="farmer-products-header">
          <div>
            <h2>Farmer Products</h2>
            <p>Products currently listed by this farmer</p>
          </div>

          <Link
            to="/products/add"
            className="add-farmer-product-btn"
          >
            + Add Product
          </Link>
        </div>

        <div className="table-card">
          <table className="admin-table">

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Quality</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {farmer.products.map((product) => (
                <tr key={product.id}>

                  <td>
                    <div className="farmer-product-name">
                      <span className="product-icon">🥬</span>
                      <strong>{product.name}</strong>
                    </div>
                  </td>

                  <td>{product.category}</td>

                  <td>
                    <strong>₹{product.price}</strong>
                  </td>

                  <td>{product.quantity} kg</td>

                  <td>
                    <span className="quality-badge">
                      Grade {product.quality}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`product-status ${
                        product.status === "Available"
                          ? "status-success"
                          : "status-danger"
                      }`}
                    >
                      {product.status}
                    </span>
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

export default FarmerDetails;