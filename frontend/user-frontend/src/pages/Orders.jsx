import { Link } from "react-router-dom";

function Orders() {
  const orders = [
    {
      id: "AGR1001",
      date: "03 Sep 2026",
      items: 4,
      amount: 420,
      status: "Out for Delivery",
      statusType: "delivery",
      deliveryDate: "Today",
      products: [
        {
          name: "Fresh Tomato",
          quantity: "2 kg",
          price: 90,
          emoji: "🍅",
        },
        {
          name: "Fresh Carrot",
          quantity: "1 kg",
          price: 60,
          emoji: "🥕",
        },
        {
          name: "Fresh Banana",
          quantity: "1 dozen",
          price: 55,
          emoji: "🍌",
        },
      ],
    },
    {
      id: "AGR0998",
      date: "01 Sep 2026",
      items: 3,
      amount: 350,
      status: "Delivered",
      statusType: "delivered",
      deliveryDate: "01 Sep 2026",
      products: [
        {
          name: "Basmati Rice",
          quantity: "2 kg",
          price: 240,
          emoji: "🌾",
        },
        {
          name: "Fresh Spinach",
          quantity: "2 bunch",
          price: 50,
          emoji: "🥬",
        },
      ],
    },
    {
      id: "AGR0985",
      date: "28 Aug 2026",
      items: 2,
      amount: 285,
      status: "Processing",
      statusType: "processing",
      deliveryDate: "05 Sep 2026",
      products: [
        {
          name: "Fresh Apple",
          quantity: "1 kg",
          price: 160,
          emoji: "🍎",
        },
        {
          name: "Fresh Corn",
          quantity: "2 kg",
          price: 100,
          emoji: "🌽",
        },
      ],
    },
  ];

  return (
    <div className="orders-page">

      {/* NAVBAR */}
      <nav className="home-navbar">

        <Link to="/home" className="home-brand">
          <div className="home-brand-icon">
            🌾
          </div>

          <span>AgriConnect</span>
        </Link>

        <div className="home-nav-links">
          <Link to="/home">Home</Link>

          <Link to="/products">
            Products
          </Link>

          <Link
            to="/orders"
            className="active-nav-link"
          >
            My Orders
          </Link>

          <Link to="/profile">
            Profile
          </Link>
        </div>

        <div className="home-nav-actions">

          <Link
            to="/cart"
            className="cart-button"
          >
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
      <section className="orders-header">

        <div>
          <span className="orders-small-title">
            YOUR SHOPPING ACTIVITY
          </span>

          <h1>My Orders</h1>

          <p>
            Track and manage all your grocery orders
            in one place.
          </p>
        </div>

      </section>


      {/* ORDERS CONTENT */}
      <main className="orders-container">

        {/* SUMMARY */}
        <div className="orders-summary">

          <div className="order-summary-card">
            <div className="summary-icon">
              📦
            </div>

            <div>
              <span>Total Orders</span>
              <strong>3</strong>
            </div>
          </div>

          <div className="order-summary-card">
            <div className="summary-icon">
              🚚
            </div>

            <div>
              <span>Active Orders</span>
              <strong>2</strong>
            </div>
          </div>

          <div className="order-summary-card">
            <div className="summary-icon">
              ✓
            </div>

            <div>
              <span>Delivered</span>
              <strong>1</strong>
            </div>
          </div>

        </div>


        {/* TITLE */}
        <div className="orders-title-row">
          <div>
            <h2>Recent Orders</h2>
            <p>
              View your latest grocery purchases
            </p>
          </div>

          <Link
            to="/products"
            className="continue-shopping"
          >
            Continue Shopping →
          </Link>
        </div>


        {/* ORDER LIST */}
        <div className="orders-list">

          {orders.map((order) => (

            <div
              className="order-card"
              key={order.id}
            >

              {/* ORDER TOP */}
              <div className="order-card-top">

                <div className="order-number">

                  <div className="order-box-icon">
                    📦
                  </div>

                  <div>
                    <span>Order ID</span>

                    <h3>
                      #{order.id}
                    </h3>

                    <p>
                      Placed on {order.date}
                    </p>
                  </div>

                </div>


                {/* STATUS */}
                <div
                  className={`order-status ${order.statusType}`}
                >
                  <span className="status-dot"></span>
                  {order.status}
                </div>

              </div>


              {/* PRODUCTS */}
              <div className="order-products">

                {order.products.map((product) => (

                  <div
                    className="order-product"
                    key={product.name}
                  >

                    <div className="order-product-image">
                      {product.emoji}
                    </div>

                    <div className="order-product-info">

                      <h4>
                        {product.name}
                      </h4>

                      <span>
                        {product.quantity}
                      </span>

                    </div>

                    <strong>
                      ₹{product.price}
                    </strong>

                  </div>

                ))}

              </div>


              {/* ORDER BOTTOM */}
              <div className="order-card-bottom">

                <div className="order-delivery-info">

                  <span>🚚</span>

                  <div>
                    <small>
                      Expected Delivery
                    </small>

                    <strong>
                      {order.deliveryDate}
                    </strong>
                  </div>

                </div>


                <div className="order-total">

                  <span>
                    {order.items} items
                  </span>

                  <strong>
                    ₹{order.amount}
                  </strong>

                </div>


                <Link
                  to={`/orders/${order.id}`}
                  className="track-order-button"
                >
                  View Details
                  <span>→</span>
                </Link>

              </div>

            </div>

          ))}

        </div>


        {/* EMPTY HELP CARD */}
        <div className="orders-help">

          <div className="orders-help-icon">
            🌱
          </div>

          <div>
            <h3>
              Looking for fresh groceries?
            </h3>

            <p>
              Explore fresh products from local farmers
              and place your next order.
            </p>
          </div>

          <Link
            to="/products"
            className="orders-shop-button"
          >
            Shop Now
          </Link>

        </div>

      </main>


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

export default Orders;