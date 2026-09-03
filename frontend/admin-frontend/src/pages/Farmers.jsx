import { useState } from "react";
import { Link } from "react-router-dom";
import FarmerTable from "../components/FarmerTable";

function Farmers() {
  const [farmers, setFarmers] = useState([
    {
      id: "FAR001",
      name: "Ramesh Kumar",
      phone: "9876543210",
      location: "Coimbatore, Tamil Nadu",
      farm: "Green Valley Farm",
      products: 12,
      orders: 86,
      status: "Approved",
      joined: "15 Aug 2026",
    },
    {
      id: "FAR002",
      name: "Suresh",
      phone: "9876543211",
      location: "Erode, Tamil Nadu",
      farm: "Fresh Fields Farm",
      products: 8,
      orders: 64,
      status: "Approved",
      joined: "12 Aug 2026",
    },
    {
      id: "FAR003",
      name: "Murugan",
      phone: "9876543212",
      location: "Salem, Tamil Nadu",
      farm: "Green Farm",
      products: 15,
      orders: 92,
      status: "Pending",
      joined: "10 Aug 2026",
    },
    {
      id: "FAR004",
      name: "Kannan",
      phone: "9876543213",
      location: "Madurai, Tamil Nadu",
      farm: "Organic Farm",
      products: 6,
      orders: 38,
      status: "Approved",
      joined: "08 Aug 2026",
    },
    {
      id: "FAR005",
      name: "Selvam",
      phone: "9876543214",
      location: "Trichy, Tamil Nadu",
      farm: "Nature Fresh Farm",
      products: 10,
      orders: 45,
      status: "Blocked",
      joined: "05 Aug 2026",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Update farmer status
  const updateFarmerStatus = (id, newStatus) => {
    setFarmers((currentFarmers) =>
      currentFarmers.map((farmer) =>
        farmer.id === id
          ? { ...farmer, status: newStatus }
          : farmer
      )
    );
  };

  // Delete farmer
  const deleteFarmer = (id) => {
    setFarmers((currentFarmers) =>
      currentFarmers.filter((farmer) => farmer.id !== id)
    );
  };

  // Search + Status Filter
  const filteredFarmers = farmers.filter((farmer) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      farmer.name.toLowerCase().includes(searchText) ||
      farmer.phone.includes(searchText) ||
      farmer.location.toLowerCase().includes(searchText) ||
      farmer.farm.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      farmer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="admin-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Farmers</h1>
          <p>
            Manage registered farmers and their farm details.
          </p>
        </div>

        <Link
          to="/farmers"
          className="add-product-btn"
        >
          👨‍🌾 Farmers
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="farmers-summary">

        <div className="farmer-summary-card">
          <span>Total Farmers</span>
          <strong>{farmers.length}</strong>
        </div>

        <div className="farmer-summary-card">
          <span>Approved</span>
          <strong>
            {
              farmers.filter(
                (farmer) => farmer.status === "Approved"
              ).length
            }
          </strong>
        </div>

        <div className="farmer-summary-card">
          <span>Pending</span>
          <strong>
            {
              farmers.filter(
                (farmer) => farmer.status === "Pending"
              ).length
            }
          </strong>
        </div>

        <div className="farmer-summary-card">
          <span>Blocked</span>
          <strong>
            {
              farmers.filter(
                (farmer) => farmer.status === "Blocked"
              ).length
            }
          </strong>
        </div>

      </div>

      {/* Search + Filter */}
      <div className="farmers-toolbar">

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search farmer, phone, location or farm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Blocked">Blocked</option>
        </select>

      </div>

      {/* Farmer Table */}
      <FarmerTable
        farmers={filteredFarmers}
        onStatusChange={updateFarmerStatus}
        onDelete={deleteFarmer}
      />

    </div>
  );
}

export default Farmers;