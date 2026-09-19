import Sidebar from "../../components/Sidebar/Sidebar";
import type { WorkOrder } from "../../App";
import "./WorkOrders.css";

function WorkOrders({
  workOrders,
  onNavigate,
}: {
  workOrders: WorkOrder[];
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="workorders-layout">

      <Sidebar
        currentPage="workorders"
        onNavigate={onNavigate}
      />

      <main className="workorders-main">

        {/* HEADER */}
        <div className="workorders-header">

          <div>
            <h1>Work Orders</h1>
            <p>
              Manage and track all service work orders
            </p>
          </div>

          <button
            className="create-workorder-btn"
            onClick={() => onNavigate("create-workorder")}
          >
            + Create Work Order
          </button>

        </div>

        {/* FILTERS */}
        <div className="workorders-filters">

          <input
            type="text"
            placeholder="Search work orders..."
            className="search-input"
          />

          <select>
            <option>All Status</option>
            <option>New</option>
            <option>Assigned</option>
            <option>In Progress</option>
            <option>On Hold</option>
            <option>Completed</option>
            <option>Closed</option>
          </select>

          <select>
            <option>All Priorities</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

        </div>

        {/* TABLE */}
        <div className="workorders-table-card">

          <table>

            <thead>
              <tr>
                <th>Work Order</th>
                <th>Title</th>
                <th>Customer</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Technician</th>
              </tr>
            </thead>

            <tbody>

              {workOrders.map((workOrder) => (
                <tr key={workOrder.id}>

                  {/* CLICKABLE WORK ORDER ID */}
                  <td>
                    <button
                      className="workorder-link"
                      onClick={() =>
                        onNavigate(`workorder-${workOrder.id}`)
                      }
                    >
                      {workOrder.id}
                    </button>
                  </td>

                  <td>
                    {workOrder.title}
                  </td>

                  <td>
                    {workOrder.customer}
                  </td>

                  <td>
                    <span
                      className={`priority ${workOrder.priority.toLowerCase()}`}
                    >
                      {workOrder.priority}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`status ${workOrder.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {workOrder.status}
                    </span>
                  </td>

                  <td>
                    {workOrder.technician}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default WorkOrders;