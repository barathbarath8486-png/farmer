import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [address, setAddress] = useState({
    name: "Dharshan",
    phone: "+91 98765 43210",
    address: "123, Main Road",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641001",
  });

  const [notes, setNotes] = useState("");

  const cartItems = [
    {
      id: 1,
      name: "Fresh Tomato",
      price: 45,
      quantity: 2,
      unit: "kg",
      emoji: "🍅",
    },
    {
      id: 2,
      name: "Fresh Carrot",
      price: 60,
      quantity: 1,
      unit: "kg",
      emoji: "🥕",
    },
    {
      id: 3,
      name: "Fresh Banana",
      price: 55,
      quantity: 1,
      unit: "dozen",
      emoji: "🍌",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = subtotal >= 500 ? 0 : 30;
  const total = subtotal + deliveryCharge;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Later Flask API call will come here
    console.log("Order placed");

    navigate("/order-success");
  };

  return (
    <div className="checkout-page">

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
          <Link to="/cart" className="cart-button">
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
      <section className="checkout-header">

        <div>

          <Link to="/cart" className="back-cart">
            ← Back to Cart
          </Link>

          <span className="checkout-small-title">
            FINAL STEP
          </span>

          <h1>Checkout</h1>

          <p>
            Confirm your delivery details and place your order.
          </p>

        </div>

      </section>

      <main className="checkout-container">

        <form onSubmit={handlePlaceOrder}>

          <div className="checkout-layout">

            {/* LEFT SIDE */}
            <div className="checkout-left">

              {/* Delivery Address */}
              <section className="checkout-card">

                <div className="checkout-card-heading">

                  <div className="checkout-heading-icon">
                    📍
                  </div>

                  <div>
                    <h2>Delivery Address</h2>
                    <p>
                      Where should we deliver your groceries?
                    </p>
                  </div>

                </div>

                <div className="address-form-grid">

                  <div className="checkout-input-group">
                    <label>Full Name</label>

                    <input
                      type="text"
                      value={address.name}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="checkout-input-group">
                    <label>Phone Number</label>

                    <input
                      type="text"
                      value={address.phone}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          phone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="checkout-input-group full-width">
                    <label>Address</label>

                    <textarea
                      rows="3"
                      value={address.address}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          address: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="checkout-input-group">
                    <label>City</label>

                    <input
                      type="text"
                      value={address.city}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          city: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="checkout-input-group">
                    <label>State</label>

                    <input
                      type="text"
                      value={address.state}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          state: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="checkout-input-group">
                    <label>Pincode</label>

                    <input
                      type="text"
                      maxLength="6"
                      value={address.pincode}
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          pincode: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                </div>

              </section>

              {/* Payment */}
              <section className="checkout-card">

                <div className="checkout-card-heading">

                  <div className="checkout-heading-icon">
                    💳
                  </div>

                  <div>
                    <h2>Payment Method</h2>
                    <p>
                      Choose how you want to pay.
                    </p>
                  </div>

                </div>

                <div className="payment-options">

                  {/* COD */}
                  <label
                    className={`payment-option ${
                      paymentMethod === "cod"
                        ? "payment-selected"
                        : ""
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <div className="payment-option-icon">
                      💵
                    </div>

                    <div className="payment-option-content">
                      <strong>Cash on Delivery</strong>

                      <span>
                        Pay when your groceries arrive
                      </span>
                    </div>

                    <div className="payment-check">
                      ✓
                    </div>

                  </label>

                  {/* UPI */}
                  <label
                    className={`payment-option ${
                      paymentMethod === "upi"
                        ? "payment-selected"
                        : ""
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <div className="payment-option-icon">
                      📱
                    </div>

                    <div className="payment-option-content">
                      <strong>UPI Payment</strong>

                      <span>
                        Pay securely using UPI
                      </span>
                    </div>

                    <div className="payment-check">
                      ✓
                    </div>

                  </label>

                </div>

              </section>

              {/* Order Notes */}
              <section className="checkout-card">

                <div className="checkout-card-heading">

                  <div className="checkout-heading-icon">
                    📝
                  </div>

                  <div>
                    <h2>Order Notes</h2>
                    <p>
                      Any special instructions for delivery?
                    </p>
                  </div>

                </div>

                <textarea
                  className="order-notes"
                  rows="4"
                  placeholder="Example: Please call me before delivery..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />

              </section>

            </div>

            {/* RIGHT SIDE */}
            <aside className="checkout-right">

              {/* Order Summary */}
              <section className="checkout-summary-card">

                <h2>Order Summary</h2>

                <div className="checkout-items">

                  {cartItems.map((item) => (
                    <div
                      className="checkout-item"
                      key={item.id}
                    >

                      <div className="checkout-item-image">
                        {item.emoji}
                      </div>

                      <div className="checkout-item-info">

                        <strong>{item.name}</strong>

                        <span>
                          {item.quantity} {item.unit}
                        </span>

                      </div>

                      <strong>
                        ₹{item.price * item.quantity}
                      </strong>

                    </div>
                  ))}

                </div>

                <div className="checkout-summary-divider"></div>

                <div className="checkout-summary-row">
                  <span>Subtotal</span>
                  <strong>₹{subtotal}</strong>
                </div>

                <div className="checkout-summary-row">
                  <span>Delivery</span>

                  <strong>
                    {deliveryCharge === 0
                      ? "FREE"
                      : `₹${deliveryCharge}`}
                  </strong>
                </div>

                <div className="checkout-total-row">
                  <span>Total Amount</span>
                  <strong>₹{total}</strong>
                </div>

                <button
                  type="submit"
                  className="place-order-button"
                >
                  Place Order
                  <span>→</span>
                </button>

                <div className="checkout-security">
                  🔒 Your order is secure
                </div>

              </section>

              {/* Delivery Info */}
              <section className="checkout-delivery-card">

                <div className="checkout-delivery-icon">
                  🚚
                </div>

                <div>
                  <strong>Estimated Delivery</strong>

                  <p>
                    Your groceries will arrive within
                    <b> 1–2 days</b>.
                  </p>
                </div>

              </section>

              {/* Farmer Message */}
              <section className="checkout-farmer-card">

                <div className="checkout-farmer-icon">
                  🌱
                </div>

                <div>
                  <strong>Supporting Local Farmers</strong>

                  <p>
                    Your purchase directly supports
                    local farmers and their families.
                  </p>
                </div>

              </section>

            </aside>

          </div>

        </form>

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

export default Checkout;