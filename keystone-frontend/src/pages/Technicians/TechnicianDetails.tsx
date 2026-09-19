import type { Technician } from "./Technicians";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./TechnicianDetails.css";

function TechnicianDetails({
  technician,
  onNavigate,
}: {
  technician: Technician;
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="technician-details-layout">

      <Sidebar
        currentPage="technicians"
        onNavigate={onNavigate}
      />

      <main className="technician-details-main">

        {/* Back Button */}
        <button
          className="back-button"
          onClick={() => onNavigate("technicians")}
        >
          ← Back to Technicians
        </button>


        {/* Header */}
        <div className="technician-details-header">

          <div className="technician-title-section">

            <div className="large-technician-avatar">
              {technician.name.charAt(0)}
            </div>

            <div>
              <span className="technician-details-id">
                {technician.id}
              </span>

              <h1>{technician.name}</h1>

              <p>Field Service Technician</p>
            </div>

          </div>


          <button
            className="edit-technician-btn"
            onClick={() =>
              onNavigate(
                `edit-technician-${technician.id}`
              )
            }
          >
            ✏️ Edit Technician
          </button>

        </div>


        {/* Information Cards */}
        <div className="technician-details-grid">

          {/* Personal Information */}
          <div className="technician-info-card">

            <h2>Technician Information</h2>

            <div className="technician-detail-row">
              <span>Technician ID</span>
              <strong>{technician.id}</strong>
            </div>

            <div className="technician-detail-row">
              <span>Full Name</span>
              <strong>{technician.name}</strong>
            </div>

            <div className="technician-detail-row">
              <span>Email</span>
              <strong>{technician.email}</strong>
            </div>

            <div className="technician-detail-row">
              <span>Phone</span>
              <strong>{technician.phone}</strong>
            </div>

          </div>


          {/* Work Information */}
          <div className="technician-info-card">

            <h2>Work Information</h2>

            <div className="technician-detail-row">
              <span>Skills</span>
              <strong>{technician.skills}</strong>
            </div>

            <div className="technician-detail-row">
              <span>Status</span>

              <span
                className={`technician-status ${technician.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {technician.status}
              </span>
            </div>

            <div className="technician-detail-row">
              <span>Assigned Work Orders</span>

              <strong>
                {technician.assignedWorkOrders}
              </strong>
            </div>

          </div>

        </div>


        {/* Assigned Work Orders */}
        <div className="technician-workorders-card">

          <h2>Assigned Work Orders</h2>

          {technician.assignedWorkOrders > 0 ? (

            <div className="technician-workorders-empty">

              <div>📋</div>

              <h3>
                {technician.assignedWorkOrders} Work Orders
              </h3>

              <p>
                Assigned work orders for this technician
                will appear here.
              </p>

            </div>

          ) : (

            <div className="technician-workorders-empty">

              <div>📋</div>

              <h3>No Assigned Work Orders</h3>

              <p>
                This technician currently has no
                assigned work orders.
              </p>

            </div>

          )}

        </div>

      </main>
    </div>
  );
}

export default TechnicianDetails;