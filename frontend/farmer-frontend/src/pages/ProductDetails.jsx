import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Temporary product data
  const product = {
    id: id || "PROD001",
    name: "Fresh Tomato",
    category: "Vegetables",
    price: 40,
    quantity: 100,
    quality: "A Grade",
    description:
      "Fresh farm-grown tomatoes harvested directly from our farm. Suitable for household and retail use.",
    status: "Active",
    addedDate: "01 Sep 2026",
  };

  return (
    <div className="product-details-page">

      {/* Header */}
      <div className="product-details-header">
        <div>
          <h1>Product Details</h1>
          <p>View complete information about your product.</p>
        </div>

        <button
          className="back-products-btn"
          onClick={() => navigate("/products")}
        >
          ← Back to Products
        </button>
      </div>

      {/* Main Card */}
      <div className="product-details-card">

        {/* Product Top */}
        <div className="product-details-top">

          <div className="product-details-image">
            🥬
          </div>

          <div className="product-details-title">
            <div className="product-title-row">
              <h2>{product.name}</h2>

              <span className="product-detail-active">
                {product.status}
              </span>
            </div>

            <p>{product.category}</p>
            <span>Product ID: {product.id}</span>
          </div>

        </div>

        {/* Information */}
        <div className="product-info-grid">

          <div className="product-info-item">
            <span>Price per kg</span>
            <strong>₹{product.price}</strong>
          </div>

          <div className="product-info-item">
            <span>Available Quantity</span>
            <strong>{product.quantity} kg</strong>
          </div>

          <div className="product-info-item">
            <span>Quality</span>
            <strong>{product.quality}</strong>
          </div>

          <div className="product-info-item">
            <span>Added Date</span>
            <strong>{product.addedDate}</strong>
          </div>

        </div>

        {/* Description */}
        <div className="product-description">
          <h3>Description</h3>

          <p>{product.description}</p>
        </div>

        {/* Actions */}
        <div className="product-details-actions">

          <button
            className="product-detail-edit-btn"
            onClick={() =>
              navigate(`/products/edit/${product.id}`)
            }
          >
            ✏️ Edit Product
          </button>

          <button
            className="product-detail-back-btn"
            onClick={() => navigate("/products")}
          >
            Back to Products
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;