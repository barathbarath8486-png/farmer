import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "Fresh Tomato",
    category: "Vegetables",
    price: "40",
    quantity: "100",
    quality: "A Grade",
    description: "Fresh farm-grown tomatoes.",
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

    console.log("Updated Product:", {
      id,
      ...formData,
    });

    alert("Product updated successfully!");

    navigate("/products");
  };

  return (
    <div className="add-product-page">

      {/* Header */}
      <div className="add-product-header">
        <div>
          <h1>Edit Product</h1>
          <p>Update your product details, price and stock.</p>
        </div>

        <button
          className="back-products-btn"
          onClick={() => navigate("/products")}
        >
          ← Back to Products
        </button>
      </div>

      {/* Form */}
      <div className="add-product-card">

        <form onSubmit={handleSubmit}>

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
                  min="1"
                  placeholder="0"
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
                  min="1"
                  placeholder="0"
                  value={formData.quantity}
                  onChange={handleChange}
                />

                <span>kg</span>
              </div>
            </div>

          </div>

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

          <div className="product-form-group">
            <label>Description</label>

            <textarea
              name="description"
              rows="5"
              placeholder="Enter product description..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className="product-form-error">
              ⚠️ {error}
            </div>
          )}

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
              💾 Update Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditProduct;