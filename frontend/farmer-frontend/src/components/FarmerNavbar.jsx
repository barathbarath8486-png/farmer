import { useNavigate } from "react-router-dom";

function FarmerNavbar() {
  const navigate = useNavigate();

  const farmer = JSON.parse(
    localStorage.getItem("farmer") || "{}"
  );

  const handleLogout = () => {
    localStorage.removeItem("farmerToken");
    localStorage.removeItem("farmer");

    navigate("/login", { replace: true });
  };

  return (
    <header className="farmer-navbar">

      <div className="farmer-navbar-brand">
        <span className="farmer-logo">🌾</span>

        <div>
          <h2>AgriConnect</h2>
          <p>Farmer Portal</p>
        </div>
      </div>

      <div className="farmer-navbar-right">
        <span>
          Welcome, {farmer.name || "Farmer"} 👋
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

    </header>
  );
}

export default FarmerNavbar;