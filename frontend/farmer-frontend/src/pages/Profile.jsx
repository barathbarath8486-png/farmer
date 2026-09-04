import { useState } from "react";

function Profile() {
  const savedFarmer = JSON.parse(
    localStorage.getItem("farmer") || "{}"
  );

  const [formData, setFormData] = useState({
    name: savedFarmer.name || "Ramesh Kumar",
    phone: savedFarmer.phone || "",
    email: savedFarmer.email || "",
    farm: savedFarmer.farm || "Green Valley Farm",
    place: savedFarmer.place || "Coimbatore",
    district: savedFarmer.district || "Coimbatore",
    state: savedFarmer.state || "Tamil Nadu",
    country: savedFarmer.country || "India",
    address: savedFarmer.address || "Coimbatore, Tamil Nadu",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "farmer",
      JSON.stringify(formData)
    );

    setMessage("Profile updated successfully!");
  };

  return (
    <div className="profile-page">

      {/* Header */}
      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your farmer account and farm information.</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="profile-card">

        {/* Profile Top */}
        <div className="profile-top">

          <div className="profile-avatar">
            👨‍🌾
          </div>

          <div>
            <h2>{formData.name || "Farmer"}</h2>
            <p>{formData.farm}</p>
            <span>Farmer Account</span>
          </div>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Personal Information */}
          <div className="profile-section">
            <h3>Personal Information</h3>

            <div className="profile-form-grid">

              <div className="profile-form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="profile-form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  maxLength="10"
                />
              </div>

              <div className="profile-form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />
              </div>

            </div>
          </div>

          {/* Farm Information */}
          <div className="profile-section">
            <h3>Farm Information</h3>

            <div className="profile-form-grid">

              <div className="profile-form-group">
                <label>Farm Name</label>

                <input
                  type="text"
                  name="farm"
                  value={formData.farm}
                  onChange={handleChange}
                  placeholder="Enter farm name"
                />
              </div>

              <div className="profile-form-group">
                <label>Place</label>

                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="Enter place"
                />
              </div>

              <div className="profile-form-group">
                <label>District</label>

                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="Enter district"
                />
              </div>

              <div className="profile-form-group">
                <label>State</label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                />
              </div>

              <div className="profile-form-group">
                <label>Country</label>

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                />
              </div>

            </div>
          </div>

          {/* Address */}
          <div className="profile-section">
            <h3>Farm Address</h3>

            <div className="profile-form-group">
              <label>Full Address</label>

              <textarea
                name="address"
                rows="4"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter complete farm address"
              />
            </div>
          </div>

          {/* Message */}
          {message && (
            <div className="profile-success">
              ✓ {message}
            </div>
          )}

          {/* Actions */}
          <div className="profile-actions">

            <button
              type="button"
              className="profile-cancel-btn"
              onClick={() => window.location.reload()}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="profile-save-btn"
            >
              💾 Save Changes
            </button>

          </div>

        </form>
      </div>

    </div>
  );
}

export default Profile;