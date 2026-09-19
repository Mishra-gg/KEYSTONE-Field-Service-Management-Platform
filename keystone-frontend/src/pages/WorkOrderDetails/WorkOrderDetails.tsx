import type { WorkOrder } from "../../App";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./WorkOrderDetails.css";

function WorkOrderDetails({
  workOrder,
  onNavigate,
  onUpdateStatus,
}: {
  workOrder: WorkOrder;
  onNavigate: (page: string) => void;
  onUpdateStatus: (id: string, status: string) => void;
}) {
  return (
    <div className="workorder-details-layout">

      <Sidebar
        currentPage="workorders"
        onNavigate={onNavigate}
      />

      <main className="workorder-details-main">

        <button
          className="back-button"
          onClick={() => onNavigate("workorders")}
        >
          ← Back to Work Orders
        </button>

        {/* HEADER */}
        <div className="details-header">
          <div>
            <p className="workorder-id">
              {workOrder.id}
            </p>

            <h1>{workOrder.title}</h1>

            <p>{workOrder.description}</p>
          </div>

          <span
            className={`status ${workOrder.status
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {workOrder.status}
          </span>
        </div>

        <div className="details-grid">

          {/* WORK ORDER INFORMATION */}
          <div className="detail-card">

            <h2>Work Order Information</h2>

            <div className="detail-row">
              <span>Priority</span>
              <strong>{workOrder.priority}</strong>
            </div>

            <div className="detail-row">
              <span>Customer</span>
              <strong>{workOrder.customer}</strong>
            </div>

            <div className="detail-row">
              <span>Site</span>
              <strong>{workOrder.site}</strong>
            </div>

            <div className="detail-row">
              <span>Technician</span>
              <strong>{workOrder.technician}</strong>
            </div>

            <div className="detail-row">
              <span>Scheduled Date</span>
              <strong>{workOrder.scheduledDate}</strong>
            </div>

            <div className="detail-row">
              <span>Due Date</span>
              <strong>{workOrder.dueDate}</strong>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="detail-card">

            <h2>Actions</h2>

            {workOrder.status === "New" && (
              <button
                className="action-button"
                onClick={() =>
                  onUpdateStatus(
                    workOrder.id,
                    "Assigned"
                  )
                }
              >
                Assign Technician
              </button>
            )}

            {workOrder.status === "Assigned" && (
              <button
                className="action-button"
                onClick={() =>
                  onUpdateStatus(
                    workOrder.id,
                    "In Progress"
                  )
                }
              >
                Start Work
              </button>
            )}

            {workOrder.status === "In Progress" && (
              <>
                <button
                  className="action-button"
                  onClick={() =>
                    onUpdateStatus(
                      workOrder.id,
                      "On Hold"
                    )
                  }
                >
                  Put On Hold
                </button>

                <button
                  className="action-button complete"
                  onClick={() =>
                    onUpdateStatus(
                      workOrder.id,
                      "Completed"
                    )
                  }
                >
                  Complete Work
                </button>
              </>
            )}

            {workOrder.status === "On Hold" && (
              <button
                className="action-button"
                onClick={() =>
                  onUpdateStatus(
                    workOrder.id,
                    "In Progress"
                  )
                }
              >
                Resume Work
              </button>
            )}

            {workOrder.status === "Completed" && (
              <p className="completed-message">
                ✓ This work order has been completed.
              </p>
            )}

          </div>

        </div>

        {/* STATUS HISTORY */}
        <div className="status-history-card">

          <h2>Status History</h2>

          <div className="status-history">

            {workOrder.statusHistory
              .slice()
              .reverse()
              .map((history, index) => (
                <div
                  className="history-item"
                  key={`${history.status}-${index}`}
                >

                  <div className="history-dot">
                    ✓
                  </div>

                  <div className="history-content">

                    <div className="history-top">
                      <strong>
                        {history.status}
                      </strong>

                      <span>
                        {history.date}
                      </span>
                    </div>

                    <p>
                      {history.note}
                    </p>

                  </div>

                </div>
              ))}

          </div>

        </div>

      </main>

    </div>
  );
}

export default WorkOrderDetails;