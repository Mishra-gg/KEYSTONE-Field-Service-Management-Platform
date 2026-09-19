import "./Sidebar.css";

function Sidebar({
  currentPage,
  onNavigate,
}: {
  currentPage: string;
  onNavigate: (page: string) => void;
}) {
  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">

        <div className="sidebar-logo-icon">
          K
        </div>

        <div>
          <h2>KEYSTONE</h2>
          <p>Field Service</p>
        </div>

      </div>

      {/* MENU */}
      <nav className="sidebar-menu">

        {/* DASHBOARD */}
        <button
          className={`sidebar-menu-item ${
            currentPage === "dashboard"
              ? "active"
              : ""
          }`}
          onClick={() => onNavigate("dashboard")}
        >
          <span>🏠</span>
          <span>Dashboard</span>
        </button>

        {/* WORK ORDERS */}
        <button
          className={`sidebar-menu-item ${
            currentPage === "workorders"
              ? "active"
              : ""
          }`}
          onClick={() => onNavigate("workorders")}
        >
          <span>📋</span>
          <span>Work Orders</span>
        </button>

        {/* KANBAN */}
        <button
  className={`sidebar-menu-item ${
    currentPage === "kanban" ? "active" : ""
  }`}
  onClick={() => onNavigate("kanban")}
>
  <span>📊</span>
  <span>Kanban Board</span>
</button>

        {/* CUSTOMERS */}
        <button
  className={`sidebar-menu-item ${
    currentPage === "customers" ? "active" : ""
  }`}
  onClick={() => onNavigate("customers")}
>
  <span>👥</span>
  <span>Customers</span>
</button>

        {/* SITES */}
        <button
  className={`sidebar-menu-item ${
    currentPage === "sites" ? "active" : ""
  }`}
  onClick={() => onNavigate("sites")}
>
  <span>📍</span>
  <span>Sites</span>
</button>

        {/* TECHNICIANS */}
        <button
  className={`sidebar-menu-item ${
    currentPage === "technicians" ? "active" : ""
  }`}
  onClick={() => onNavigate("technicians")}
>
  <span>👨‍🔧</span>
  <span>Technicians</span>
</button>

        <button
  className={`sidebar-menu-item ${
    currentPage === "schedule" ? "active" : ""
  }`}
  onClick={() => onNavigate("schedule")}
>
  <span>📅</span>
  <span>Schedule</span>
</button>

        {/* INVENTORY */}
        <button
  className={`sidebar-menu-item ${
    currentPage === "inventory" ? "active" : ""
  }`}
  onClick={() => onNavigate("inventory")}
>
  <span>📦</span>
  <span>Inventory</span>
</button>

        {/* REPORTS */}
       <button
  className={`sidebar-menu-item ${
    currentPage === "reports" ? "active" : ""
  }`}
  onClick={() => onNavigate("reports")}
>
  <span>📊</span>
  <span>Reports</span>
</button>

      </nav>

      {/* BOTTOM MENU */}
      <div className="sidebar-bottom">

        <button className="sidebar-menu-item">
          <span>⚙️</span>
          <span>Settings</span>
        </button>

        <button className="sidebar-menu-item logout">
          <span>🚪</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;