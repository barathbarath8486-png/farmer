import { useState } from "react";

function Profile() {
  const farmer = JSON.parse(
    localStorage.getItem("farmer") || "{}"
  );

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(
    farmer.name || "Ramesh Kumar"
  );

  const [phone, setPhone] = useState(
    farmer.phone || ""
  );

  const [farm, setFarm] = useState(
    farmer.farm || "Green Valley Farm"
  );

  const [location, setLocation] = useState(
    farmer.location || "Coimbatore, Tamil Nadu"
  );

  const handleSave = () => {
    const updatedFarmer = {
      ...farmer,
      name,
      phone,
      farm,
      location,
    };

    localStorage.setItem(
      "farmer",
      JSON.stringify(updatedFarmer)
    );

    setEditing(false);

    alert("Profile updated successfully.");
  };

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>View and manage your farmer account information.</p>
        </div>

        {!editing && (
          <button
            className="profile-edit-btn"
            onClick={() => setEditing(true)}
          >
            ✏️ Edit Profile
          </button>
        )}
      </div>

      <div className="profile-card">

        <div className="profile-top">
          <div className="profile-avatar">
            👨‍🌾
          </div>

          <div>
            <h2>{name}</h2>
            <p>Farmer</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>Personal Information</h3>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Farmer Name</label>

              {editing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <strong>{name}</strong>
              )}
            </div>

            <div className="profile-field">
              <label>Phone Number</label>

              {editing ? (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <strong>{phone || "Not available"}</strong>
              )}
            </div>

          </div>
        </div>

        <div className="profile-section">
          <h3>Farm Information</h3>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Farm Name</label>

              {editing ? (
                <input
                  type="text"
                  value={farm}
                  onChange={(e) => setFarm(e.target.value)}
                />
              ) : (
                <strong>{farm}</strong>
              )}
            </div>

            <div className="profile-field">
              <label>Farm Location</label>

              {editing ? (
                <input
                  type="text"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                />
              ) : (
                <strong>{location}</strong>
              )}
            </div>

          </div>
        </div>

        {editing && (
          <div className="profile-actions">
            <button
              className="profile-cancel-btn"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>

            <button
              className="profile-save-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        )}

      </div>

      <div className="profile-security-card">
        <div>
          <h3>Account Security</h3>
          <p>
            Your account information and login details are
            protected.
          </p>
        </div>

        <span className="security-status">
          🔒 Secure
        </span>
      </div>

    </div>
  );
}

export default Profile;