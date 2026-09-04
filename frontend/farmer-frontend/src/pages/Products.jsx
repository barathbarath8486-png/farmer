import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");

  const [products, setProducts] = useState([
    {
      id: "PROD001",
      name: "Fresh Tomato",
      category: "Vegetables",
      price: 40,
      stock: 100,
      quality: "A Grade",
      status: "Active",
    },
    {
      id: "PROD002",
      name: "Fresh Carrot",
      category: "Vegetables",
      price: 40,
      stock: 15,
      quality: "A Grade",
      status: "Active",
    },
    {
      id: "PROD003",
      name: "Fresh Banana",
      category: "Fruits",
      price: 50,
      stock: 80,
      quality: "Premium",
      status: "Active",
    },
    {
      id: "PROD004",
      name: "Fresh Onion",
      category: "Vegetables",
      price: 35,
      stock: 18,
      quality: "A Grade",
      status: "Active",
    },
    {
      id: "PROD005",
      name: "Fresh Potato",
      category: "Vegetables",
      price: 30,
      stock: 70,
      quality: "B Grade",
      status: "Inactive",
    },
  ]);

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="products-page">

      {/* Header */}
      <div className="products-header">
        <div>
          <h1>My Products</h1>
          <p>Manage your farm products, prices and stock.</p>
        </div>

        <button
          className="products-add-btn"
          onClick={() => navigate("/products/add")}
        >
          + Add Product
        </button>
      </div>

      {/* Summary */}
      <div className="products-summary">

        <div className="product-summary-card">
          <span>🥬</span>
          <div>
            <p>Total Products</p>
            <h2>{products.length}</h2>
          </div>
        </div>

        <div className="product-summary-card">
          <span>✅</span>
          <div>
            <p>Active</p>
            <h2>
              {products.filter(
                (product) => product.status === "Active"
              ).length}
            </h2>
          </div>
        </div>

        <div className="product-summary-card">
          <span>⚠️</span>
          <div>
            <p>Low Stock</p>
            <h2>
              {products.filter(
                (product) => product.stock < 20
              ).length}
            </h2>
          </div>
        </div>

        <div className="product-summary-card">
          <span>📦</span>
          <div>
            <p>Total Stock</p>
            <h2>
              {products.reduce(
                (total, product) => total + product.stock,
                0
              )}{" "}
              kg
            </h2>
          </div>
        </div>

      </div>

      {/* Filter */}
      <div className="products-toolbar">

        <div>
          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Grains">Grains</option>
            <option value="Pulses">Pulses</option>
            <option value="Spices">Spices</option>
          </select>
        </div>

      </div>

      {/* Product Table */}
      <div className="products-table-card">

        <div className="products-table-header">
          <div>
            <h2>Product List</h2>
            <p>
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="table-wrapper">

          <table className="products-table">

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price / kg</th>
                <th>Stock</th>
                <th>Quality</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredProducts.map((product) => (
                <tr key={product.id}>

                  <td>
                    <div className="product-name">
                      <strong>{product.name}</strong>
                      <span>{product.id}</span>
                    </div>
                  </td>

                  <td>{product.category}</td>

                  <td>₹{product.price}</td>

                  <td>
                    <span
                      className={
                        product.stock < 20
                          ? "stock-low"
                          : "stock-normal"
                      }
                    >
                      {product.stock} kg
                    </span>
                  </td>

                  <td>{product.quality}</td>

                  <td>
                    <span
                      className={
                        product.status === "Active"
                          ? "product-status-active"
                          : "product-status-inactive"
                      }
                    >
                      {product.status}
                    </span>
                  </td>

                  <td>
                    <div className="product-actions">

                      <button
                        onClick={() =>
                          navigate(`/products/${product.id}`)
                        }
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          navigate(
                            `/products/edit/${product.id}`
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-action"
                        onClick={() =>
                          handleDelete(product.id)
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

          {filteredProducts.length === 0 && (
            <div className="empty-products">
              <div>🥬</div>
              <h3>No products found</h3>
              <p>
                Try another category or add a new product.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Products;