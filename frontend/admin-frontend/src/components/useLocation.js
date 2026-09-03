import { useLocation } from "react-router-dom";

function UseLocation() {
  const location = useLocation();

  return (
    <div className="current-location">
      Current Page: {location.pathname}
    </div>
  );
}

export default UseLocation;