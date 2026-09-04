import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import ProductDetails from "../pages/ProductDetails";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";
import Profile from "../pages/Profile";

import FarmerLayout from "../components/FarmerLayout";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route element={<FarmerLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/add"
            element={<AddProduct />}
          />

          <Route
            path="/products/edit/:id"
            element={<EditProduct />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
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