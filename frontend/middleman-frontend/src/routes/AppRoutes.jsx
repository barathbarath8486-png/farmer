import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";
import Deliveries from "../pages/Deliveries";
import DeliveryDetails from "../pages/DeliveryDetails";
import Profile from "../pages/Profile";

import ProtectedRoute from "../components/ProtectedRoute";
import MiddlemanLayout from "../components/MiddlemanLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* Default */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Protected Pages */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MiddlemanLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/orders/:id"
            element={<OrderDetails />}
          />

          <Route
            path="/deliveries"
            element={<Deliveries />}
          />

          <Route
            path="/deliveries/:id"
            element={<DeliveryDetails />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

        </Route>
      </Route>

      {/* Unknown URL */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default AppRoutes;