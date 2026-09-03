import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">

        <Link to="/" className="home-brand">
          <div className="home-brand-icon">🌾</div>
          <span>AgriConnect</span>
        </Link>

        <div className="home-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="home-nav-actions">
          <button className="cart-button">
            🛒
            <span className="cart-count">0</span>
          </button>

          <Link to="/profile" className="profile-button">
            👤
          </Link>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="home-hero">

        <div className="home-hero-content">

          <span className="home-small-title">
            🌱 FRESH FROM LOCAL FARMS
          </span>

          <h1>
            Fresh groceries,
            <br />
            <span>straight to your doorstep.</span>
          </h1>

          <p>
            Discover fresh and quality groceries directly
            from trusted farmers near you.
          </p>

          <div className="home-hero-buttons">
            <Link to="/products" className="shop-button">
              Shop Now
              <span>→</span>
            </Link>

            <Link to="/products" className="explore-button">
              Explore Products
            </Link>
          </div>

        </div>

        <div className="home-hero-visual">

          <div className="hero-circle"></div>

          <div className="hero-vegetables">
            🥕
            🥦
            🍅
            🌽
            🥬
          </div>

          <div className="fresh-badge">
            <span>✓</span>
            <div>
              <strong>100%</strong>
              <small>Fresh Products</small>
            </div>
          </div>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="home-section">

        <div className="section-heading">
          <div>
            <span>SHOP BY CATEGORY</span>
            <h2>What are you looking for?</h2>
          </div>

          <Link to="/products" className="view-all">
            View All →
          </Link>
        </div>

        <div className="category-grid">

          <Link to="/products?category=vegetables" className="category-card">
            <div className="category-icon">🥦</div>
            <h3>Vegetables</h3>
            <p>Fresh farm vegetables</p>
          </Link>

          <Link to="/products?category=fruits" className="category-card">
            <div className="category-icon">🍎</div>
            <h3>Fruits</h3>
            <p>Fresh seasonal fruits</p>
          </Link>

          <Link to="/products?category=grains" className="category-card">
            <div className="category-icon">🌾</div>
            <h3>Grains</h3>
            <p>Quality grains & rice</p>
          </Link>

          <Link to="/products?category=greens" className="category-card">
            <div className="category-icon">🥬</div>
            <h3>Greens</h3>
            <p>Healthy leafy greens</p>
          </Link>

        </div>

      </section>

      {/* WHY AGRICONNECT */}
      <section className="why-section">

        <div className="why-content">

          <span className="home-small-title">
            WHY AGRICONNECT?
          </span>

          <h2>
            From farm to your
            <span> family.</span>
          </h2>

          <p>
            We connect you directly with local farmers,
            helping you get fresh groceries while supporting
            the people who grow your food.
          </p>

        </div>

        <div className="why-features">

          <div className="why-card">
            <div>🌱</div>
            <h3>Farm Fresh</h3>
            <p>Fresh products sourced directly from farmers.</p>
          </div>

          <div className="why-card">
            <div>✓</div>
            <h3>Quality Checked</h3>
            <p>Products are checked for quality and freshness.</p>
          </div>

          <div className="why-card">
            <div>🚚</div>
            <h3>Easy Delivery</h3>
            <p>Track your order until it reaches your doorstep.</p>
          </div>

        </div>

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

export default Home;