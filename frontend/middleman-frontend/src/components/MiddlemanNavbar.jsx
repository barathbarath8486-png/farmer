import { useNavigate } from "react-router-dom";

function MiddlemanNavbar() {
  const navigate = useNavigate();

  const middleman = JSON.parse(
    localStorage.getItem("middleman") || "{}"
  );

  const handleLogout = () => {
    localStorage.removeItem("middlemanToken");
    localStorage.removeItem("middleman");

    navigate("/login", { replace: true });
  };

  return (
    <header className="middleman-navbar">

      <div className="middleman-navbar-brand">
        <span className="middleman-logo">🚚</span>

        <div>
          <h2>AgriConnect</h2>
          <p>Middleman Portal</p>
        </div>
      </div>

      <div className="middleman-navbar-right">
        <span>
          Welcome, {middleman.name || "Middleman"} 👋
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

    </header>
  );
}

export default MiddlemanNavbar;