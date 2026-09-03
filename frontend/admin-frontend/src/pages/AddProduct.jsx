import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    farmer: "",
    price: "",
    quantity: "",
    quality: "",
    description: "",
    status: "Available",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.farmer.trim()) {
      newErrors.farmer = "Farmer name is required";
    }

    if (!formData.price || Number(formData.price) <= 0) {
      newErrors.price = "Enter a valid price";
    }

    if (!formData.quantity || Number(formData.quantity) <= 0) {
      newErrors.quantity = "Enter a valid quantity";
    }

    if (!formData.quality) {
      newErrors.quality = "Please select product quality";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("New Product:", formData);

    alert("Product added successfully!");

    navigate("/products");
  };

  return (
    <div className="admin-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Add Product</h1>
          <p>Add a new grocery product to the marketplace.</p>
        </div>

        <Link to="/products" className="back-products-btn">
          ← Back to Products
        </Link>
      </div>

      {/* Form Card */}
      <div className="add-product-card">
        <div className="add-product-card-header">
          <h2>Product Information</h2>
          <p>
            Enter the details of the grocery product supplied by the
            farmer.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="add-product-form">
            {/* Product Name */}
            <div className="form-group">
              <label>
                Product Name <span>*</span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="Example: Fresh Tomato"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small className="form-error">{errors.name}</small>
              )}
            </div>

            {/* Category */}
            <div className="form-group">
              <label>
                Category <span>*</span>
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains">Grains</option>
                <option value="Dairy">Dairy</option>
              </select>

              {errors.category && (
                <small className="form-error">
                  {errors.category}
                </small>
              )}
            </div>

            {/* Farmer */}
            <div className="form-group">
              <label>
                Farmer Name <span>*</span>
              </label>

              <input
                type="text"
                name="farmer"
                placeholder="Example: Ravi Kumar"
                value={formData.farmer}
                onChange={handleChange}
              />

              {errors.farmer && (
                <small className="form-error">
                  {errors.farmer}
                </small>
              )}
            </div>

            {/* Price */}
            <div className="form-group">
              <label>
                Price per kg <span>*</span>
              </label>

              <div className="input-with-prefix">
                <span>₹</span>

                <input
                  type="number"
                  name="price"
                  placeholder="40"
                  min="1"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              {errors.price && (
                <small className="form-error">{errors.price}</small>
              )}
            </div>

            {/* Quantity */}
            <div className="form-group">
              <label>
                Available Quantity <span>*</span>
              </label>

              <div className="input-with-suffix">
                <input
                  type="number"
                  name="quantity"
                  placeholder="100"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                />

                <span>kg</span>
              </div>

              {errors.quantity && (
                <small className="form-error">
                  {errors.quantity}
                </small>
              )}
            </div>

            {/* Quality */}
            <div className="form-group">
              <label>
                Quality <span>*</span>
              </label>

              <select
                name="quality"
                value={formData.quality}
                onChange={handleChange}
              >
                <option value="">Select quality</option>
                <option value="Premium">Premium</option>
                <option value="A Grade">A Grade</option>
                <option value="B Grade">B Grade</option>
                <option value="C Grade">C Grade</option>
              </select>

              {errors.quality && (
                <small className="form-error">
                  {errors.quality}
                </small>
              )}
            </div>

            {/* Status */}
            <div className="form-group">
              <label>Product Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-group full-width">
              <label>Description</label>

              <textarea
                name="description"
                rows="5"
                placeholder="Enter product description..."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="add-product-actions">
            <Link
              to="/products"
              className="cancel-product-btn"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="save-product-btn"
            >
              + Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;