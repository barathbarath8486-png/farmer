import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    quality: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.quantity ||
      !formData.quality
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (Number(formData.price) <= 0) {
      setError("Price must be greater than 0.");
      return;
    }

    if (Number(formData.quantity) <= 0) {
      setError("Quantity must be greater than 0.");
      return;
    }

    setError("");

    console.log("New Product:", formData);

    alert("Product added successfully!");

    navigate("/products");
  };

  return (
    <div className="add-product-page">

      {/* Header */}
      <div className="add-product-header">
        <div>
          <h1>Add Product</h1>
          <p>Add a new product from your farm.</p>
        </div>

        <button
          className="back-products-btn"
          onClick={() => navigate("/products")}
        >
          ← Back to Products
        </button>
      </div>

      {/* Form Card */}
      <div className="add-product-card">

        <form onSubmit={handleSubmit}>

          {/* Product Name */}
          <div className="product-form-group">
            <label>
              Product Name <span>*</span>
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div className="product-form-group">
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
              <option value="Pulses">Pulses</option>
              <option value="Spices">Spices</option>
            </select>
          </div>

          {/* Price + Quantity */}
          <div className="product-form-row">

            <div className="product-form-group">
              <label>
                Price per kg <span>*</span>
              </label>

              <div className="input-with-symbol">
                <span>₹</span>

                <input
                  type="number"
                  name="price"
                  placeholder="0"
                  min="1"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="product-form-group">
              <label>
                Available Quantity <span>*</span>
              </label>

              <div className="input-with-symbol">
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                />

                <span>kg</span>
              </div>
            </div>

          </div>

          {/* Quality */}
          <div className="product-form-group">
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
            </select>
          </div>

          {/* Description */}
          <div className="product-form-group">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Enter product description..."
              rows="5"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="product-form-error">
              ⚠️ {error}
            </div>
          )}

          {/* Buttons */}
          <div className="product-form-actions">

            <button
              type="button"
              className="product-cancel-btn"
              onClick={() => navigate("/products")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="product-save-btn"
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