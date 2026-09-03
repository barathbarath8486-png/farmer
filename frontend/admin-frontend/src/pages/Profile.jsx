import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Dharshan",
    email: "admin@agromarket.com",
    phone: "9876543210",
    role: "Administrator",
    location: "Tamil Nadu, India",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();

    if (!passwords.current || !passwords.newPassword) {
      alert("Please fill all password fields.");
      return;
    }

    if (passwords.newPassword !== passwords.confirm) {
      alert("New passwords do not match.");
      return;
    }

    alert("Password updated successfully!");

    setPasswords({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  return (
    <div className="admin-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your administrator account.</p>
        </div>

        {!isEditing && (
          <button
            className="profile-edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="profile-layout">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-top">
            <div className="profile-avatar">
              {profile.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
            </div>
          </div>

          <div className="profile-divider"></div>

          <div className="profile-info">
            <div className="profile-info-item">
              <span>Email</span>
              <strong>{profile.email}</strong>
            </div>

            <div className="profile-info-item">
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </div>

            <div className="profile-info-item">
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>

            <div className="profile-info-item">
              <span>Role</span>
              <strong>{profile.role}</strong>
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <div className="profile-form-card">
          <div className="profile-card-header">
            <h2>Account Information</h2>
            <p>Update your personal information.</p>
          </div>

          <div className="profile-form">
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Location</label>

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <div className="profile-actions">
                <button
                  className="cancel-profile-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>

                <button
                  className="save-profile-btn"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="password-card">
        <div className="profile-card-header">
          <h2>Change Password</h2>
          <p>Keep your administrator account secure.</p>
        </div>

        <form
          className="password-form"
          onSubmit={handlePasswordUpdate}
        >
          <div className="form-group">
            <label>Current Password</label>

            <input
              type="password"
              name="current"
              placeholder="Enter current password"
              value={passwords.current}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="form-group">
            <label>New Password</label>

            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirm"
              placeholder="Confirm new password"
              value={passwords.confirm}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit" className="change-password-btn">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;