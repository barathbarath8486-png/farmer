import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Dharshan",
      phone: "9876543210",
      email: "dharshan@gmail.com",
      location: "Chennai, Tamil Nadu",
      orders: 8,
      totalSpent: 2450,
      status: "Active",
      joined: "15 Aug 2026",
    },
    {
      id: 2,
      name: "Arun Kumar",
      phone: "9876543211",
      email: "arun@gmail.com",
      location: "Coimbatore, Tamil Nadu",
      orders: 5,
      totalSpent: 1680,
      status: "Active",
      joined: "18 Aug 2026",
    },
    {
      id: 3,
      name: "Priya",
      phone: "9876543212",
      email: "priya@gmail.com",
      location: "Madurai, Tamil Nadu",
      orders: 12,
      totalSpent: 3920,
      status: "Active",
      joined: "20 Aug 2026",
    },
    {
      id: 4,
      name: "Karthik",
      phone: "9876543213",
      email: "karthik@gmail.com",
      location: "Salem, Tamil Nadu",
      orders: 3,
      totalSpent: 850,
      status: "Blocked",
      joined: "22 Aug 2026",
    },
    {
      id: 5,
      name: "Meena",
      phone: "9876543214",
      email: "meena@gmail.com",
      location: "Trichy, Tamil Nadu",
      orders: 7,
      totalSpent: 2140,
      status: "Active",
      joined: "25 Aug 2026",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const toggleUserStatus = (id) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user
      )
    );
  };

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(searchText) ||
      user.phone.includes(search) ||
      user.email.toLowerCase().includes(searchText) ||
      user.location.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="admin-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Users</h1>
          <p>Manage registered customers and their accounts.</p>
        </div>
      </div>

      {/* Summary */}
      <div className="users-summary">
        <div className="user-summary-card">
          <span>Total Users</span>
          <strong>{users.length}</strong>
        </div>

        <div className="user-summary-card">
          <span>Active Users</span>
          <strong>
            {users.filter((user) => user.status === "Active").length}
          </strong>
        </div>

        <div className="user-summary-card">
          <span>Blocked Users</span>
          <strong>
            {users.filter((user) => user.status === "Blocked").length}
          </strong>
        </div>

        <div className="user-summary-card">
          <span>Total Orders</span>
          <strong>
            {users.reduce((total, user) => total + user.orders, 0)}
          </strong>
        </div>
      </div>

      {/* Toolbar */}
      <div className="users-toolbar">
        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search name, phone, email or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Users</option>
          <option value="Active">Active</option>
          <option value="Blocked">Blocked</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="table-card">
        <div className="table-header">
          <div>
            <h2>Customer Accounts</h2>
            <p>{filteredUsers.length} users found</p>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="admin-table users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Contact</th>
                <th>Location</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    {/* User */}
                    <td>
                      <div className="user-cell">
                        <div className="user-avatar">
                          {user.name.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <strong>{user.name}</strong>
                          <span>User #{user.id}</span>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td>
                      <div className="contact-cell">
                        <strong>{user.phone}</strong>
                        <span>{user.email}</span>
                      </div>
                    </td>

                    {/* Location */}
                    <td>{user.location}</td>

                    {/* Orders */}
                    <td>
                      <strong>{user.orders}</strong>
                    </td>

                    {/* Total */}
                    <td>
                      <strong>₹{user.totalSpent}</strong>
                    </td>

                    {/* Joined */}
                    <td>{user.joined}</td>

                    {/* Status */}
                    <td>
                      <span
                        className={`user-status ${
                          user.status === "Active"
                            ? "user-active"
                            : "user-blocked"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td>
                      <button
                        className={
                          user.status === "Active"
                            ? "block-user-btn"
                            : "unblock-user-btn"
                        }
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        {user.status === "Active" ? "Block" : "Unblock"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">
                    <div className="empty-users">
                      <div>👥</div>
                      <h3>No users found</h3>
                      <p>
                        Try changing your search or status filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;