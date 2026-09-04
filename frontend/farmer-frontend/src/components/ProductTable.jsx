import { useNavigate } from "react-router-dom";

function ProductTable({ products = [], onDelete }) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return (
      <div className="farmer-empty-table">
        <div>🥬</div>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="farmer-table-wrapper">
      <table className="farmer-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price/kg</th>
            <th>Stock</th>
            <th>Quality</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <strong>{product.name}</strong>
              </td>

              <td>{product.category}</td>

              <td>₹{product.price}</td>

              <td>
                <span
                  className={
                    product.quantity <= 20
                      ? "farmer-stock-low"
                      : "farmer-stock-good"
                  }
                >
                  {product.quantity} kg
                </span>
              </td>

              <td>{product.quality}</td>

              <td>
                <span
                  className={
                    product.status === "Active"
                      ? "farmer-product-active"
                      : "farmer-product-inactive"
                  }
                >
                  {product.status}
                </span>
              </td>

              <td>
                <div className="farmer-table-actions">
                  <button
                    className="farmer-action-view"
                    onClick={() =>
                      navigate(`/products/${product.id}`)
                    }
                    title="View Product"
                  >
                    👁
                  </button>

                  <button
                    className="farmer-action-edit"
                    onClick={() =>
                      navigate(`/products/edit/${product.id}`)
                    }
                    title="Edit Product"
                  >
                    ✏️
                  </button>

                  <button
                    className="farmer-action-delete"
                    onClick={() => onDelete?.(product.id)}
                    title="Delete Product"
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;