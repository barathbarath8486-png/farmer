import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Tomato",
      farmer: "Green Valley Farm",
      location: "Coimbatore",
      price: 45,
      quantity: 2,
      unit: "kg",
      emoji: "🍅",
    },
    {
      id: 2,
      name: "Fresh Carrot",
      farmer: "Nature Fresh Farm",
      location: "Erode",
      price: 60,
      quantity: 1,
      unit: "kg",
      emoji: "🥕",
    },
    {
      id: 3,
      name: "Fresh Banana",
      farmer: "Golden Farm",
      location: "Theni",
      price: 55,
      quantity: 1,
      unit: "dozen",
      emoji: "🍌",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = subtotal > 0 ? 30 : 0;
  const total = subtotal + deliveryCharge;

  return (
    <div className="cart-page">

      {/* Navbar */}
      <nav className="home-navbar">
        <Link to="/home" className="home-brand">
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
          <Link to="/cart" className="cart-button active-cart-button">
            🛒
            <span className="cart-count">
              {cartItems.length}
            </span>
          </Link>

          <Link to="/profile" className="profile-button">
            👤
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="cart-header">
        <div>
          <span className="cart-small-title">
            YOUR SELECTED GROCERIES
          </span>

          <h1>My Cart</h1>

          <p>
            Review your groceries before placing your order.
          </p>
        </div>
      </section>

      <main className="cart-container">

        {cartItems.length > 0 ? (
          <>
            <div className="cart-layout">

              {/* Cart Items */}
              <section className="cart-items-section">

                <div className="cart-section-heading">
                  <div>
                    <h2>Cart Items</h2>
                    <p>
                      {cartItems.length} products selected
                    </p>
                  </div>

                  <Link to="/products">
                    + Add More
                  </Link>
                </div>

                <div className="cart-items-list">

                  {cartItems.map((item) => (
                    <div
                      className="cart-item-card"
                      key={item.id}
                    >

                      <div className="cart-product-image">
                        {item.emoji}
                      </div>

                      <div className="cart-product-info">
                        <h3>{item.name}</h3>

                        <p>
                          🌱 {item.farmer}
                        </p>

                        <span>
                          📍 {item.location}
                        </span>

                        <strong>
                          ₹{item.price} / {item.unit}
                        </strong>
                      </div>

                      <div className="cart-quantity-section">

                        <span>Quantity</span>

                        <div className="quantity-control">
                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            −
                          </button>

                          <strong>
                            {item.quantity}
                          </strong>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </button>
                        </div>

                      </div>

                      <div className="cart-item-total">
                        <strong>
                          ₹{item.price * item.quantity}
                        </strong>

                        <button
                          className="remove-cart-item"
                          onClick={() =>
                            removeItem(item.id)
                          }
                        >
                          Remove
                        </button>
                      </div>

                    </div>
                  ))}

                </div>

                {/* Continue Shopping */}
                <Link
                  to="/products"
                  className="back-shopping-button"
                >
                  ← Continue Shopping
                </Link>

              </section>

              {/* Summary */}
              <aside className="cart-summary-card">

                <h2>Order Summary</h2>

                <div className="cart-summary-row">
                  <span>Items</span>
                  <strong>
                    {cartItems.reduce(
                      (total, item) =>
                        total + item.quantity,
                      0
                    )}
                  </strong>
                </div>

                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <strong>₹{subtotal}</strong>
                </div>

                <div className="cart-summary-row">
                  <span>Delivery Charge</span>
                  <strong>₹{deliveryCharge}</strong>
                </div>

                <div className="cart-summary-divider"></div>

                <div className="cart-total-row">
                  <span>Total</span>
                  <strong>₹{total}</strong>
                </div>

                <div className="free-delivery-info">
                  🚚
                  <span>
                    Free delivery on orders above ₹500
                  </span>
                </div>

                <button
                  className="checkout-button"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                  <span>→</span>
                </button>

                <div className="secure-cart-info">
                  🔒 Secure & trusted checkout
                </div>

              </aside>

            </div>

            {/* Bottom Feature Cards */}
            <section className="cart-features">

              <div className="cart-feature">
                <div>🌱</div>
                <section>
                  <strong>Farm Fresh</strong>
                  <p>
                    Directly sourced from local farmers.
                  </p>
                </section>
              </div>

              <div className="cart-feature">
                <div>✓</div>
                <section>
                  <strong>Quality Assured</strong>
                  <p>
                    Fresh and quality checked products.
                  </p>
                </section>
              </div>

              <div className="cart-feature">
                <div>🚚</div>
                <section>
                  <strong>Easy Delivery</strong>
                  <p>
                    Fast delivery to your doorstep.
                  </p>
                </section>
              </div>

            </section>
          </>
        ) : (

          /* Empty Cart */
          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <h2>Your Cart is Empty</h2>

            <p>
              Looks like you haven't added any groceries yet.
            </p>

            <Link
              to="/products"
              className="empty-cart-button"
            >
              Start Shopping →
            </Link>

          </div>

        )}

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

export default Cart;