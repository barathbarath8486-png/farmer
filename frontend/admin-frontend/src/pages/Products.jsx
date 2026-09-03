import { Link } from "react-router-dom";
import { useState } from "react";
import ProductTable from "../components/ProductTable";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fresh Tomato",
      category: "Vegetables",
      farmer: "Ravi Kumar",
      price: 40,
      quantity: 120,
      quality: "A Grade",
      status: "Available",
    },
    {
      id: 2,
      name: "Carrot",
      category: "Vegetables",
      farmer: "Suresh",
      price: 60,
      quantity: 80,
      quality: "A Grade",
      status: "Available",
    },
    {
      id: 3,
      name: "Banana",
      category: "Fruits",
      farmer: "Manoj",
      price: 50,
      quantity: 150,
      quality: "A Grade",
      status: "Available",
    },
    {
      id: 4,
      name: "Potato",
      category: "Vegetables",
      farmer: "Kannan",
      price: 35,
      quantity: 0,
      quality: "B Grade",
      status: "Out of Stock",
    },
    {
      id: 5,
      name: "Onion",
      category: "Vegetables",
      farmer: "Arun",
      price: 45,
      quantity: 200,
      quality: "A Grade",
      status: "Available",
    },
    {
      id: 6,
      name: "Mango",
      category: "Fruits",
      farmer: "Prakash",
      price: 90,
      quantity: 65,
      quality: "Premium",
      status: "Available",
    },
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Delete product
  const deleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id)
    );
  };

  // Search + Category Filter
  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.farmer.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="admin-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Products</h1>
          <p>Manage groceries, prices, quality and stock.</p>
        </div>

        <Link
          to="/products/add"
          className="add-product-btn"
        >
          + Add Product
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="product-summary">

        <div className="product-summary-card">
          <span>Total Products</span>
          <strong>{products.length}</strong>
        </div>

        <div className="product-summary-card">
          <span>Available</span>
          <strong>
            {
              products.filter(
                (product) => product.status === "Available"
              ).length
            }
          </strong>
        </div>

        <div className="product-summary-card">
          <span>Out of Stock</span>
          <strong>
            {
              products.filter(
                (product) => product.status === "Out of Stock"
              ).length
            }
          </strong>
        </div>

        <div className="product-summary-card">
          <span>Total Quantity</span>
          <strong>
            {products.reduce(
              (total, product) => total + product.quantity,
              0
            )}
            kg
          </strong>
        </div>

      </div>

      {/* Search & Filter */}
      <div className="products-toolbar">

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search product or farmer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Grains">Grains</option>
          <option value="Dairy">Dairy</option>
        </select>

      </div>

      {/* Product Table */}
      <ProductTable
        products={filteredProducts}
        onDelete={deleteProduct}
      />

    </div>
  );
}

export default Products;