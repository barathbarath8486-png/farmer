import { useState } from "react";

function Profile() {
  const storedMiddleman = JSON.parse(
    localStorage.getItem("middleman") || "{}"
  );

  const [profile, setProfile] = useState({
    name: storedMiddleman.name || "Suresh Kumar",
    phone: storedMiddleman.phone || "",
    area: storedMiddleman.area || "Coimbatore",
    role: storedMiddleman.role || "Middleman",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "middleman",
      JSON.stringify(profile)
    );

    setSaved(true);
  };

  return (
    <div className="middleman-profile-page">
      <div className="middleman-page-header">
        <h1>My Profile</h1>
        <p>
          View and manage your middleman account details.
        </p>
      </div>

      <div className="middleman-profile-card">
        <div className="middleman-profile-top">
          <div className="middleman-profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <div className="middleman-profile-form-grid">
            <div className="middleman-input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>

            <div className="middleman-input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                maxLength="10"
                onChange={(e) => {
                  const value = e.target.value.replace(
                    /\D/g,
                    ""
                  );

                  setProfile((prev) => ({
                    ...prev,
                    phone: value,
                  }));

                  setSaved(false);
                }}
              />
            </div>

            <div className="middleman-input-group">
              <label>Area</label>
              <input
                type="text"
                name="area"
                value={profile.area}
                onChange={handleChange}
              />
            </div>

            <div className="middleman-input-group">
              <label>Role</label>
              <input
                type="text"
                value={profile.role}
                disabled
              />
            </div>
          </div>

          {saved && (
            <div className="middleman-profile-success">
              Profile updated successfully.
            </div>
          )}

          <button
            type="submit"
            className="middleman-profile-save-btn"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;