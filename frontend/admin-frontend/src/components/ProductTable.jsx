import { Link } from "react-router-dom";

function ProductTable({ products, onDelete }) {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="table-card">
      {products.length === 0 ? (
        <div className="empty-products">
          <div>🥬</div>
          <h3>No products found</h3>
          <p>There are no products matching your search.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="admin-table">

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Farmer</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Quality</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>

                  {/* Product */}
                  <td>
                    <div className="product-table-cell">
                      <div className="product-icon">
                        🥬
                      </div>

                      <div>
                        <strong>{product.name}</strong>
                        <span>{product.id}</span>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td>{product.category}</td>

                  {/* Farmer */}
                  <td>
                    <div className="product-farmer-cell">
                      <strong>{product.farmer}</strong>
                    </div>
                  </td>

                  {/* Price */}
                  <td>
                    <strong>₹{product.price}</strong>
                    <span className="price-unit"> / kg</span>
                  </td>

                  {/* Quantity */}
                  <td>
                    {product.quantity} kg
                  </td>

                  {/* Quality */}
                  <td>
                    <span className="quality-badge">
                      Grade {product.quality}
                    </span>
                  </td>

                  {/* Status */}
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

                  {/* Actions */}
                  <td>
                    <div className="product-actions">

                      <Link
                        to={`/products/${product.id}`}
                        className="view-product-btn"
                      >
                        View
                      </Link>

                      <Link
                        to={`/products/edit/${product.id}`}
                        className="edit-btn"
                      >
                        Edit
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(product.id)}
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

export default ProductTable;