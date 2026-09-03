import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const products = [
    {
      id: "1",
      name: "Fresh Tomato",
      category: "Vegetables",
      price: 45,
      unit: "1 kg",
      farmer: "Green Valley Farm",
      location: "Coimbatore",
      rating: 4.8,
      reviews: 124,
      stock: 25,
      emoji: "🍅",
      description:
        "Fresh, naturally grown tomatoes sourced directly from local farmers. Perfect for everyday cooking, salads and curries.",
      quality: "Premium Quality",
    },
    {
      id: "2",
      name: "Fresh Carrot",
      category: "Vegetables",
      price: 60,
      unit: "1 kg",
      farmer: "Nature Fresh Farm",
      location: "Erode",
      rating: 4.7,
      reviews: 98,
      stock: 18,
      emoji: "🥕",
      description:
        "Fresh and crunchy carrots grown with care by local farmers. Rich in nutrients and perfect for healthy meals.",
      quality: "Premium Quality",
    },
    {
      id: "3",
      name: "Fresh Potato",
      category: "Vegetables",
      price: 40,
      unit: "1 kg",
      farmer: "Organic Roots",
      location: "Salem",
      rating: 4.6,
      reviews: 86,
      stock: 30,
      emoji: "🥔",
      description:
        "Quality fresh potatoes directly sourced from trusted farms. Suitable for fries, curries and a variety of dishes.",
      quality: "Good Quality",
    },
    {
      id: "4",
      name: "Fresh Spinach",
      category: "Greens",
      price: 25,
      unit: "1 bunch",
      farmer: "Green Leaf Farm",
      location: "Tiruppur",
      rating: 4.9,
      reviews: 145,
      stock: 15,
      emoji: "🥬",
      description:
        "Fresh green spinach harvested from local farms. Naturally grown and delivered fresh for your family.",
      quality: "Premium Quality",
    },
    {
      id: "5",
      name: "Fresh Apple",
      category: "Fruits",
      price: 160,
      unit: "1 kg",
      farmer: "Hill Fresh Farm",
      location: "Ooty",
      rating: 4.8,
      reviews: 112,
      stock: 20,
      emoji: "🍎",
      description:
        "Fresh and juicy apples sourced from the beautiful hill regions. Carefully selected for excellent quality.",
      quality: "Premium Quality",
    },
    {
      id: "6",
      name: "Fresh Banana",
      category: "Fruits",
      price: 55,
      unit: "1 dozen",
      farmer: "Golden Farm",
      location: "Theni",
      rating: 4.7,
      reviews: 103,
      stock: 22,
      emoji: "🍌",
      description:
        "Naturally ripened fresh bananas from trusted local farmers. Sweet, nutritious and perfect for everyday consumption.",
      quality: "Good Quality",
    },
    {
      id: "7",
      name: "Basmati Rice",
      category: "Grains",
      price: 120,
      unit: "1 kg",
      farmer: "Tamil Nadu Grains",
      location: "Thanjavur",
      rating: 4.9,
      reviews: 167,
      stock: 50,
      emoji: "🌾",
      description:
        "Premium quality basmati rice sourced from trusted grain farmers. Aromatic grains perfect for biryani and everyday meals.",
      quality: "Premium Quality",
    },
    {
      id: "8",
      name: "Fresh Corn",
      category: "Vegetables",
      price: 50,
      unit: "1 kg",
      farmer: "Sunshine Farm",
      location: "Pollachi",
      rating: 4.6,
      reviews: 72,
      stock: 17,
      emoji: "🌽",
      description:
        "Fresh sweet corn harvested from local farms. Great for snacks, salads and healthy meals.",
      quality: "Good Quality",
    },
  ];

  const product = products.find(
    (item) => item.id === String(id)
  ) || products[0];

  const totalPrice = product.price * quantity;

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="product-details-page">

      {/* Navbar */}
      <nav className="home-navbar">

        <Link to="/home" className="home-brand">
          <div className="home-brand-icon">🌾</div>
          <span>AgriConnect</span>
        </Link>

        <div className="home-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/products" className="active-nav-link">
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

          <Link to="/profile" className="profile-button">
            👤
          </Link>
        </div>

      </nav>

      {/* Header */}
      <section className="product-details-header">

        <div>
          <Link to="/products" className="back-products">
            ← Back to Products
          </Link>

          <span className="product-details-small-title">
            FRESH FROM LOCAL FARM
          </span>

          <h1>{product.name}</h1>

          <p>
            Quality groceries directly from trusted farmers.
          </p>
        </div>

      </section>

      {/* Product Details */}
      <main className="product-details-container">

        <div className="product-details-grid">

          {/* Image */}
          <section className="product-details-image-card">

            <span className="details-category-badge">
              {product.category}
            </span>

            <div className="details-big-emoji">
              {product.emoji}
            </div>

            <div className="fresh-product-badge">
              ✓ Fresh & Quality Checked
            </div>

          </section>

          {/* Information */}
          <section className="product-details-info">

            <div className="details-rating">
              ⭐ {product.rating}
              <span>({product.reviews} reviews)</span>
            </div>

            <h2>{product.name}</h2>

            <p className="details-description">
              {product.description}
            </p>

            {/* Farmer */}
            <div className="details-farmer-card">

              <div className="details-farmer-icon">
                🌱
              </div>

              <div>
                <span>Sold by</span>
                <strong>{product.farmer}</strong>
                <small>📍 {product.location}</small>
              </div>

            </div>

            {/* Price */}
            <div className="details-price-section">

              <div>
                <span>Price</span>

                <strong>
                  ₹{product.price}
                </strong>

                <small>
                  / {product.unit}
                </small>
              </div>

              <div className="quality-badge">
                ✓ {product.quality}
              </div>

            </div>

            {/* Stock */}
            <div className="details-stock">
              <span className="stock-dot"></span>
              {product.stock} {product.unit === "1 bunch" ? "bunches" : "units"} available
            </div>

            {/* Quantity */}
            <div className="details-quantity-section">

              <span>Quantity</span>

              <div className="details-quantity-control">

                <button onClick={decreaseQuantity}>
                  −
                </button>

                <strong>{quantity}</strong>

                <button onClick={increaseQuantity}>
                  +
                </button>

              </div>

            </div>

            {/* Total */}
            <div className="details-total">
              <span>Total</span>
              <strong>₹{totalPrice}</strong>
            </div>

            {/* Buttons */}
            <div className="details-buttons">

              <button
                className={`details-add-cart ${added ? "added" : ""}`}
                onClick={handleAddToCart}
              >
                {added ? "✓ Added to Cart" : "🛒 Add to Cart"}
              </button>

              <button
                className="details-buy-button"
                onClick={() => navigate("/checkout")}
              >
                Buy Now →
              </button>

            </div>

          </section>

        </div>

        {/* Features */}
        <section className="product-features-section">

          <div className="product-feature-card">
            <div>🌱</div>
            <section>
              <strong>Farm Fresh</strong>
              <p>Directly sourced from local farmers.</p>
            </section>
          </div>

          <div className="product-feature-card">
            <div>✓</div>
            <section>
              <strong>Quality Assured</strong>
              <p>Fresh products checked for quality.</p>
            </section>
          </div>

          <div className="product-feature-card">
            <div>🚚</div>
            <section>
              <strong>Fast Delivery</strong>
              <p>Delivered fresh to your doorstep.</p>
            </section>
          </div>

          <div className="product-feature-card">
            <div>🔒</div>
            <section>
              <strong>Secure Shopping</strong>
              <p>Safe and trusted checkout.</p>
            </section>
          </div>

        </section>

      </main>

      {/* Footer */}
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

export default ProductDetails;