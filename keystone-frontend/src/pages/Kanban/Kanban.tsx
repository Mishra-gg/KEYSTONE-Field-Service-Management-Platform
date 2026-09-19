import type { WorkOrder } from "../../App";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Kanban.css";

function Kanban({
  workOrders,
  onNavigate,
  onUpdateStatus,
}: {
  workOrders: WorkOrder[];
  onNavigate: (page: string) => void;
  onUpdateStatus: (id: string, status: string) => void;
}) {
  const columns = [
    "New",
    "Assigned",
    "In Progress",
    "On Hold",
    "Completed",
  ];

  return (
    <div className="kanban-layout">

      <Sidebar
        currentPage="kanban"
        onNavigate={onNavigate}
      />

      <main className="kanban-main">

        <div className="kanban-header">
          <div>
            <h1>Kanban Board</h1>
            <p>Manage work orders by status</p>
          </div>

          <button
            className="kanban-create-btn"
            onClick={() => onNavigate("create-workorder")}
          >
            + Create Work Order
          </button>
        </div>

        <div className="kanban-board">

          {columns.map((column) => {

            const columnOrders = workOrders.filter(
              (workOrder) => workOrder.status === column
            );

            return (
              <div className="kanban-column" key={column}>

                <div className="kanban-column-header">
                  <h2>{column}</h2>
                  <span>{columnOrders.length}</span>
                </div>

                <div className="kanban-cards">

                  {columnOrders.map((workOrder) => (
                    <div
                      className="kanban-card"
                      key={workOrder.id}
                    >

                      <div className="kanban-card-top">
                        <button
                          className="kanban-workorder-id"
                          onClick={() =>
                            onNavigate(`workorder-${workOrder.id}`)
                          }
                        >
                          {workOrder.id}
                        </button>

                        <span
                          className={`kanban-priority ${workOrder.priority.toLowerCase()}`}
                        >
                          {workOrder.priority}
                        </span>
                      </div>

                      <h3>{workOrder.title}</h3>

                      <p className="kanban-customer">
                        {workOrder.customer}
                      </p>

                      <p className="kanban-technician">
                        👨‍🔧 {workOrder.technician}
                      </p>

                      <div className="kanban-card-footer">

                        {column === "New" && (
                          <button
                            onClick={() =>
                              onUpdateStatus(
                                workOrder.id,
                                "Assigned"
                              )
                            }
                          >
                            Assign
                          </button>
                        )}

                        {column === "Assigned" && (
                          <button
                            onClick={() =>
                              onUpdateStatus(
                                workOrder.id,
                                "In Progress"
                              )
                            }
                          >
                            Start
                          </button>
                        )}

                        {column === "In Progress" && (
                          <>
                            <button
                              onClick={() =>
                                onUpdateStatus(
                                  workOrder.id,
                                  "On Hold"
                                )
                              }
                            >
                              Hold
                            </button>

                            <button
                              className="complete-btn"
                              onClick={() =>
                                onUpdateStatus(
                                  workOrder.id,
                                  "Completed"
                                )
                              }
                            >
                              Complete
                            </button>
                          </>
                        )}

                        {column === "On Hold" && (
                          <button
                            onClick={() =>
                              onUpdateStatus(
                                workOrder.id,
                                "In Progress"
                              )
                            }
                          >
                            Resume
                          </button>
                        )}

                        {column === "Completed" && (
                          <span className="completed-text">
                            ✓ Completed
                          </span>
                        )}

                      </div>

                    </div>
                  ))}

                  {columnOrders.length === 0 && (
                    <div className="empty-column">
                      No work orders
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </main>
    </div>
  );
}

export default Kanban;