import { useState } from "react";
import OrderTable from "../components/OrderTable";

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "AGR1001",
      customer: "Dharshan",
      phone: "9876543210",
      items: 3,
      amount: 235,
      payment: "Cash on Delivery",
      status: "Out for Delivery",
      date: "03 Sep 2026",
    },
    {
      id: "AGR1002",
      customer: "Arun Kumar",
      phone: "9876543211",
      items: 2,
      amount: 180,
      payment: "Online",
      status: "Delivered",
      date: "02 Sep 2026",
    },
    {
      id: "AGR1003",
      customer: "Priya",
      phone: "9876543212",
      items: 5,
      amount: 420,
      payment: "Online",
      status: "Processing",
      date: "02 Sep 2026",
    },
    {
      id: "AGR1004",
      customer: "Karthik",
      phone: "9876543213",
      items: 4,
      amount: 310,
      payment: "Cash on Delivery",
      status: "Pending",
      date: "01 Sep 2026",
    },
    {
      id: "AGR1005",
      customer: "Meena",
      phone: "9876543214",
      items: 1,
      amount: 95,
      payment: "Online",
      status: "Cancelled",
      date: "01 Sep 2026",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Update Order Status
  const updateStatus = (orderId, newStatus) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  // Search + Status Filter
  const filteredOrders = orders.filter((order) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      order.id.toLowerCase().includes(searchText) ||
      order.customer.toLowerCase().includes(searchText) ||
      order.phone.includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="admin-page">

      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>Manage and monitor all customer orders.</p>
        </div>

        <div className="orders-summary">
          <div>
            <strong>{orders.length}</strong>
            <span>Total Orders</span>
          </div>

          <div>
            <strong>
              ₹
              {orders.reduce(
                (total, order) => total + order.amount,
                0
              )}
            </strong>
            <span>Total Sales</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="orders-toolbar">

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search order ID, customer or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Out for Delivery">
            Out for Delivery
          </option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>

      </div>

      {/* Orders Table */}
      <div className="table-card">

        <div className="table-header">
          <div>
            <h2>All Orders</h2>
            <p>{filteredOrders.length} orders found</p>
          </div>
        </div>

        {/* OrderTable Component */}
        <OrderTable
          orders={filteredOrders}
          onStatusChange={updateStatus}
        />

      </div>

    </div>
  );
}

export default Orders;