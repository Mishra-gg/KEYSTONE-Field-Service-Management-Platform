import Sidebar from "../../components/Sidebar/Sidebar";
import "./Reports.css";

import type { WorkOrder } from "../../App";

function Reports({
  workOrders,
  onNavigate,
}: {
  workOrders: WorkOrder[];
  onNavigate: (page: string) => void;
}) {
    const today = new Date();

const overdueWorkOrders = workOrders.filter(
  (workOrder) => {
    const dueDate = new Date(workOrder.dueDate);

    return (
      dueDate < today &&
      workOrder.status !== "Completed" &&
      workOrder.status !== "Closed"
    );
  }
);
  return (
    <div className="reports-layout">
      <Sidebar
        currentPage="reports"
        onNavigate={onNavigate}
      />

      <main className="reports-main">
        {/* Header */}
        <div className="reports-header">
          <div>
            <h1>Reports & Analytics</h1>
            <p>
              Monitor work orders, technicians and service performance
            </p>
          </div>

          <button className="reports-export-btn">
            ↓ Export Report
          </button>
        </div>

        {/* Summary Cards */}
        <div className="reports-summary">
          <div className="report-summary-card">
            <div className="report-summary-icon">📋</div>
            <div>
              <span>Total Work Orders</span>
              <strong>
              {workOrders.filter((workOrder) => workOrder.status === "New").length}
              </strong>
              <small>+12% from last month</small>
            </div>
          </div>

          <div className="report-summary-card">
            <div className="report-summary-icon">✅</div>
            <div>
              <span>Completed</span>
              <strong>
               {workOrders.filter(
                (workOrder) => workOrder.status === "Completed"
                ).length}
              </strong>
              <small>+8% from last month</small>
            </div>
          </div>

          <div className="report-summary-card">
            <div className="report-summary-icon">⏰</div>
            <div>
              <span>Overdue</span>
             <strong>{overdueWorkOrders.length}</strong>
              <small>Needs attention</small>
            </div>
          </div>

          <div className="report-summary-card">
            <div className="report-summary-icon">🎯</div>
            <div>
              <span>SLA Compliance</span>
              <strong>92%</strong>
              <small>+4% from last month</small>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="reports-grid">
          <div className="report-card">
            <div className="report-card-header">
              <div>
                <h2>Work Order Overview</h2>
                <p>Work orders by status</p>
              </div>

              <select>
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="status-chart">
              <div className="chart-bar-row">
                <span>New</span>
                <div className="chart-bar">
                  <div
                    className="chart-bar-fill new"
                    style={{ width: "35%" }}
                  />
                </div>
                <strong>
  {workOrders.filter(
    (workOrder) => workOrder.status === "New"
  ).length}
</strong>
              </div>

              <div className="chart-bar-row">
                <span>Assigned</span>
                <div className="chart-bar">
                  <div
                    className="chart-bar-fill assigned"
                    style={{ width: "55%" }}
                  />
                </div>
                <strong>
  {workOrders.filter(
    (workOrder) => workOrder.status === "Assigned"
  ).length}
</strong>
              </div>

              <div className="chart-bar-row">
                <span>In Progress</span>
                <div className="chart-bar">
                  <div
                    className="chart-bar-fill progress"
                    style={{ width: "45%" }}
                  />
                </div>
                <strong>{workOrders.filter(
    (workOrder) => workOrder.status === "In Progress"
  ).length}</strong>
              </div>

              <div className="chart-bar-row">
                <span>Completed</span>
                <div className="chart-bar">
                  <div
                    className="chart-bar-fill completed"
                    style={{ width: "75%" }}
                  />
                </div>
                <strong><strong>
  {workOrders.filter(
    (workOrder) => workOrder.status === "Completed"
  ).length}
</strong></strong>
              </div>

              <div className="chart-bar-row">
                <span>Overdue</span>
                <div className="chart-bar">
                  <div
                    className="chart-bar-fill overdue"
                    style={{
  width: `${Math.min(
    (overdueWorkOrders.length / workOrders.length) * 100,
    100
  )}%`,
}}
                  />
                </div>
                <strong>{overdueWorkOrders.length}</strong>
              </div>
            </div>
          </div>

          <div className="report-card">
            <div className="report-card-header">
              <div>
                <h2>SLA Performance</h2>
                <p>Service level compliance</p>
              </div>
            </div>

            <div className="sla-content">
              <div className="sla-circle">
                <strong>92%</strong>
                <span>Compliant</span>
              </div>

              <div className="sla-stats">
                <div>
                  <span>Within SLA</span>
                  <strong>22</strong>
                </div>

                <div>
                  <span>Breached</span>
                  <strong>2</strong>
                </div>

                <div>
                  <span>At Risk</span>
                  <strong>3</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technician Performance */}
        <div className="report-card technician-performance">
          <div className="report-card-header">
            <div>
              <h2>Technician Performance</h2>
              <p>Work orders completed by technician</p>
            </div>
          </div>

          <div className="performance-table-wrapper">
            <table className="performance-table">
              <thead>
                <tr>
                  <th>Technician</th>
                  <th>Assigned</th>
                  <th>Completed</th>
                  <th>In Progress</th>
                  <th>Completion Rate</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Rahul Kumar</td>
                  <td>8</td>
                  <td>6</td>
                  <td>2</td>
                  <td>
                    <span className="rate-badge">75%</span>
                  </td>
                </tr>

                <tr>
                  <td>Amit Sharma</td>
                  <td>7</td>
                  <td>5</td>
                  <td>2</td>
                  <td>
                    <span className="rate-badge">71%</span>
                  </td>
                </tr>

                <tr>
                  <td>Priya Singh</td>
                  <td>5</td>
                  <td>4</td>
                  <td>1</td>
                  <td>
                    <span className="rate-badge">80%</span>
                  </td>
                </tr>

                <tr>
                  <td>Vikas Verma</td>
                  <td>4</td>
                  <td>3</td>
                  <td>1</td>
                  <td>
                    <span className="rate-badge">75%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="reports-bottom-grid">
          <div className="report-card">
            <div className="report-card-header">
              <div>
                <h2>Top Sites</h2>
                <p>Work orders by site</p>
              </div>
            </div>

            <div className="top-sites">
              <div className="site-report-row">
                <span>Main Office</span>
                <strong>8</strong>
              </div>

              <div className="site-report-row">
                <span>Factory</span>
                <strong>6</strong>
              </div>

              <div className="site-report-row">
                <span>Building A</span>
                <strong>5</strong>
              </div>

              <div className="site-report-row">
                <span>Central Block</span>
                <strong>5</strong>
              </div>
            </div>
          </div>

          <div className="report-card">
            <div className="report-card-header">
              <div>
                <h2>Priority Breakdown</h2>
                <p>Work orders by priority</p>
              </div>
            </div>

            <div className="priority-breakdown">
              <div>
                <span>Critical</span>
                <strong>3</strong>
              </div>

              <div>
                <span>High</span>
                <strong>7</strong>
              </div>

              <div>
                <span>Medium</span>
                <strong>9</strong>
              </div>

              <div>
                <span>Low</span>
                <strong>5</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reports;