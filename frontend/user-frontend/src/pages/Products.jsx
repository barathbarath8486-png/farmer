import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Products() {
  const [searchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(selectedCategory);
  const [sort, setSort] = useState("default");

  const products = [
    {
      id: 1,
      name: "Fresh Tomato",
      category: "vegetables",
      price: 45,
      unit: "1 kg",
      farmer: "Green Valley Farm",
      location: "Coimbatore",
      emoji: "🍅",
      rating: 4.8,
      stock: 25,
    },
    {
      id: 2,
      name: "Fresh Carrot",
      category: "vegetables",
      price: 60,
      unit: "1 kg",
      farmer: "Nature Fresh Farm",
      location: "Erode",
      emoji: "🥕",
      rating: 4.7,
      stock: 18,
    },
    {
      id: 3,
      name: "Fresh Potato",
      category: "vegetables",
      price: 40,
      unit: "1 kg",
      farmer: "Organic Roots",
      location: "Salem",
      emoji: "🥔",
      rating: 4.6,
      stock: 30,
    },
    {
      id: 4,
      name: "Fresh Spinach",
      category: "greens",
      price: 25,
      unit: "1 bunch",
      farmer: "Green Leaf Farm",
      location: "Tiruppur",
      emoji: "🥬",
      rating: 4.9,
      stock: 15,
    },
    {
      id: 5,
      name: "Fresh Apple",
      category: "fruits",
      price: 160,
      unit: "1 kg",
      farmer: "Hill Fresh Farm",
      location: "Ooty",
      emoji: "🍎",
      rating: 4.8,
      stock: 20,
    },
    {
      id: 6,
      name: "Fresh Banana",
      category: "fruits",
      price: 55,
      unit: "1 dozen",
      farmer: "Golden Farm",
      location: "Theni",
      emoji: "🍌",
      rating: 4.7,
      stock: 22,
    },
    {
      id: 7,
      name: "Basmati Rice",
      category: "grains",
      price: 120,
      unit: "1 kg",
      farmer: "Tamil Nadu Grains",
      location: "Thanjavur",
      emoji: "🌾",
      rating: 4.9,
      stock: 50,
    },
    {
      id: 8,
      name: "Fresh Corn",
      category: "vegetables",
      price: 50,
      unit: "1 kg",
      farmer: "Sunshine Farm",
      location: "Pollachi",
      emoji: "🌽",
      rating: 4.6,
      stock: 17,
    },
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "low") {
        return a.price - b.price;
      }

      if (sort === "high") {
        return b.price - a.price;
      }

      if (sort === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  return (
    <div className="products-page">

      {/* NAVBAR */}
      <nav className="home-navbar">

        <Link to="/home" className="home-brand">
          <div className="home-brand-icon">🌾</div>
          <span>AgriConnect</span>
        </Link>

        <div className="home-nav-links">
          <Link to="/home">Home</Link>

          <Link
            to="/products"
            className="active-nav-link"
          >
            Products
          </Link>

          <Link to="/orders">My Orders</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="home-nav-actions">

          <Link to="/cart" className="cart-button">
            🛒
            <span className="cart-count">0</span>
          </Link>

          <Link
            to="/profile"
            className="profile-button"
          >
            👤
          </Link>

        </div>

      </nav>

      {/* PAGE HEADER */}
      <section className="products-header">

        <div>
          <span className="products-small-title">
            FRESH FROM LOCAL FARMS
          </span>

          <h1>Shop Fresh Groceries</h1>

          <p>
            Discover fresh and quality products directly
            from trusted farmers.
          </p>
        </div>

      </section>

      {/* SEARCH + FILTER */}
      <section className="products-container">

        <div className="products-toolbar">

          {/* Search */}
          <div className="product-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search vegetables, fruits, grains..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          {/* Sort */}
          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

        </div>

        {/* CATEGORY FILTER */}
        <div className="category-filter">

          <button
            className={category === "all" ? "category-active" : ""}
            onClick={() => setCategory("all")}
          >
            All Products
          </button>

          <button
            className={
              category === "vegetables"
                ? "category-active"
                : ""
            }
            onClick={() => setCategory("vegetables")}
          >
            🥦 Vegetables
          </button>

          <button
            className={
              category === "fruits"
                ? "category-active"
                : ""
            }
            onClick={() => setCategory("fruits")}
          >
            🍎 Fruits
          </button>

          <button
            className={
              category === "grains"
                ? "category-active"
                : ""
            }
            onClick={() => setCategory("grains")}
          >
            🌾 Grains
          </button>

          <button
            className={
              category === "greens"
                ? "category-active"
                : ""
            }
            onClick={() => setCategory("greens")}
          >
            🥬 Greens
          </button>

        </div>

        {/* RESULT COUNT */}
        <div className="products-result-info">
          <h2>
            {category === "all"
              ? "All Products"
              : category.charAt(0).toUpperCase() +
                category.slice(1)}
          </h2>

          <span>
            {filteredProducts.length} products available
          </span>
        </div>

        {/* PRODUCTS */}
        {filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (

              <div
                className="product-card"
                key={product.id}
              >

                {/* Product Image */}
                <Link
                  to={`/products/${product.id}`}
                  className="product-image"
                >

                  <span className="product-category-badge">
                    {product.category}
                  </span>

                  <span className="product-emoji">
                    {product.emoji}
                  </span>

                </Link>

                {/* Product Info */}
                <div className="product-info">

                  <div className="product-rating">
                    ⭐ {product.rating}
                  </div>

                  <Link
                    to={`/products/${product.id}`}
                    className="product-name"
                  >
                    {product.name}
                  </Link>

                  <p className="product-unit">
                    {product.unit}
                  </p>

                  <div className="farmer-info">

                    <span>🌱</span>

                    <div>
                      <strong>{product.farmer}</strong>

                      <small>
                        📍 {product.location}
                      </small>
                    </div>

                  </div>

                  <div className="product-bottom">

                    <div className="product-price">
                      <span>₹</span>
                      {product.price}
                    </div>

                    <button
                      className="add-cart-button"
                      onClick={() =>
                        console.log(
                          "Added to cart:",
                          product.name
                        )
                      }
                    >
                      + Add
                    </button>

                  </div>

                  <p className="stock-info">
                    ✓ {product.stock} available
                  </p>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* NO PRODUCTS */
          <div className="no-products">

            <div className="no-products-icon">
              🔍
            </div>

            <h2>No products found</h2>

            <p>
              Try searching for a different product
              or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
              }}
            >
              View All Products
            </button>

          </div>

        )}

      </section>

      {/* FOOTER */}
      <footer className="home-footer">

        <div>
          <div className="footer-brand">
            🌾 AgriConnect
          </div>

          <p>
            Fresh groceries. Better connections.
          </p>
        </div>

        <p className="footer-copy">
          © 2026 AgriConnect. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Products;