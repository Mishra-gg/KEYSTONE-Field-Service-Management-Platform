import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar
        currentPage="dashboard"
        onNavigate={onNavigate}
      />

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">
          <div className="dashboard-welcome">
            <span className="welcome-icon">👋</span>

            <div>
              <h1>Welcome back, Rahul Kumar!</h1>
              <p>Here&apos;s what&apos;s happening with your field service today.</p>
            </div>
          </div>

          <div className="dashboard-header-actions">
            <button className="notification-btn">
              🔔
              <span className="notification-dot">3</span>
            </button>

            <div className="dashboard-profile">
              <div className="user-avatar">A</div>

              <div className="profile-info">
                <strong>Admin</strong>
                <span>Manager / Dispatcher</span>
              </div>

              <span className="profile-arrow">⌄</span>
            </div>
          </div>
        </header>

        {/* KPI CARDS */}
        <section className="dashboard-cards">

          <div className="dashboard-card total-card">
            <div className="card-top">
              <div className="card-icon">📋</div>
              <span className="card-trend positive">↗</span>
            </div>

            <p>Total Work Orders</p>
            <h2>24</h2>
            <span className="card-growth">↗ 12% from last week</span>
          </div>

          <div className="dashboard-card assigned-card">
            <div className="card-top">
              <div className="card-icon">👤</div>
              <span className="card-trend positive">↗</span>
            </div>

            <p>Assigned</p>
            <h2>8</h2>
            <span className="card-growth">↗ 2% from last week</span>
          </div>

          <div className="dashboard-card progress-card">
            <div className="card-top">
              <div className="card-icon">◌</div>
              <span className="card-trend positive">↗</span>
            </div>

            <p>In Progress</p>
            <h2>5</h2>
            <span className="card-growth">↗ 8% from last week</span>
          </div>

          <div className="dashboard-card overdue-card">
            <div className="card-top">
              <div className="card-icon">!</div>
              <span className="card-trend negative">↘</span>
            </div>

            <p>Overdue</p>
            <h2>3</h2>
            <span className="card-growth negative-text">
              ↘ 25% from last week
            </span>
          </div>

        </section>

        {/* MAIN GRID */}
        <section className="dashboard-grid">

          {/* WORK ORDER OVERVIEW */}
          <div className="dashboard-panel overview-panel">

            <div className="panel-header">
              <div>
                <h2>Work Order Overview</h2>
                <p>Status of all work orders</p>
              </div>

              <button className="period-btn">
                This Week <span>⌄</span>
              </button>
            </div>

            <div className="overview-content">

              <div className="donut-chart">
                <div className="donut-center">
                  <strong>24</strong>
                  <span>Total Work Orders</span>
                </div>
              </div>

              <div className="overview-legend">

                <div className="legend-row">
                  <div>
                    <span className="legend-dot completed-dot"></span>
                    <span>Completed</span>
                  </div>
                  <strong>12</strong>
                  <small>50%</small>
                </div>

                <div className="legend-row">
                  <div>
                    <span className="legend-dot progress-dot"></span>
                    <span>In Progress</span>
                  </div>
                  <strong>5</strong>
                  <small>21%</small>
                </div>

                <div className="legend-row">
                  <div>
                    <span className="legend-dot assigned-dot"></span>
                    <span>Assigned</span>
                  </div>
                  <strong>4</strong>
                  <small>17%</small>
                </div>

                <div className="legend-row">
                  <div>
                    <span className="legend-dot overdue-dot"></span>
                    <span>Overdue</span>
                  </div>
                  <strong>3</strong>
                  <small>12%</small>
                </div>

              </div>
            </div>
          </div>

          {/* RECENT WORK ORDERS */}
          <div className="dashboard-panel recent-panel">

            <div className="panel-header">
              <div>
                <h2>Recent Work Orders</h2>
                <p>Latest assigned and updated work orders</p>
              </div>

              <button
                className="view-all-btn"
                onClick={() => onNavigate("workorders")}
              >
                View All →
              </button>
            </div>

            <div className="recent-list">

              <div className="recent-item">
                <div className="recent-icon blue">🔧</div>

                <div className="recent-info">
                  <strong>WO-1001</strong>
                  <span>AC Maintenance • Main Office</span>
                </div>

                <div className="recent-meta">
                  <span className="status assigned">Assigned</span>
                  <small>Today</small>
                </div>

                <button
                  className="recent-arrow"
                  onClick={() => onNavigate("workorder-WO-1001")}
                >
                  →
                </button>
              </div>

              <div className="recent-item">
                <div className="recent-icon orange">⚡</div>

                <div className="recent-info">
                  <strong>WO-1002</strong>
                  <span>Electrical Repair • Factory</span>
                </div>

                <div className="recent-meta">
                  <span className="status progress">In Progress</span>
                  <small>Today</small>
                </div>

                <button
                  className="recent-arrow"
                  onClick={() => onNavigate("workorder-WO-1002")}
                >
                  →
                </button>
              </div>

              <div className="recent-item">
                <div className="recent-icon green">⚙</div>

                <div className="recent-info">
                  <strong>WO-1003</strong>
                  <span>HVAC Inspection • Building A</span>
                </div>

                <div className="recent-meta">
                  <span className="status completed">Completed</span>
                  <small>Yesterday</small>
                </div>

                <button
                  className="recent-arrow"
                  onClick={() => onNavigate("workorder-WO-1003")}
                >
                  →
                </button>
              </div>

              <div className="recent-item">
                <div className="recent-icon red">⚠</div>

                <div className="recent-info">
                  <strong>WO-1004</strong>
                  <span>Generator Service • Central Block</span>
                </div>

                <div className="recent-meta">
                  <span className="status overdue">Overdue</span>
                  <small>2 days ago</small>
                </div>

                <button
                  className="recent-arrow"
                  onClick={() => onNavigate("workorder-WO-1004")}
                >
                  →
                </button>
              </div>

            </div>
          </div>

          {/* WEEKLY WORK ORDER STATUS */}
          <div className="dashboard-panel weekly-panel">

            <div className="panel-header">
              <div>
                <h2>Work Order Status</h2>
                <p>Weekly progress</p>
              </div>

              <div className="chart-labels">
                <span>
                  <i className="completed-dot"></i>
                  Completed
                </span>

                <span>
                  <i className="progress-dot"></i>
                  In Progress
                </span>
              </div>
            </div>

            <div className="weekly-chart">

              <div className="chart-y-axis">
                <span>20</span>
                <span>15</span>
                <span>10</span>
                <span>5</span>
                <span>0</span>
              </div>

              <div className="chart-area">

                <div className="chart-grid-line line-1"></div>
                <div className="chart-grid-line line-2"></div>
                <div className="chart-grid-line line-3"></div>
                <div className="chart-grid-line line-4"></div>

                <div className="bar-chart">

                  <div className="day-bar">
                    <div className="bar completed-bar" style={{ height: "48%" }}></div>
                    <div className="bar progress-bar" style={{ height: "28%" }}></div>
                    <span>Mon</span>
                  </div>

                  <div className="day-bar">
                    <div className="bar completed-bar" style={{ height: "62%" }}></div>
                    <div className="bar progress-bar" style={{ height: "36%" }}></div>
                    <span>Tue</span>
                  </div>

                  <div className="day-bar">
                    <div className="bar completed-bar" style={{ height: "55%" }}></div>
                    <div className="bar progress-bar" style={{ height: "30%" }}></div>
                    <span>Wed</span>
                  </div>

                  <div className="day-bar">
                    <div className="bar completed-bar" style={{ height: "68%" }}></div>
                    <div className="bar progress-bar" style={{ height: "42%" }}></div>
                    <span>Thu</span>
                  </div>

                  <div className="day-bar">
                    <div className="bar completed-bar" style={{ height: "82%" }}></div>
                    <div className="bar progress-bar" style={{ height: "52%" }}></div>
                    <span>Fri</span>
                  </div>

                  <div className="day-bar">
                    <div className="bar completed-bar" style={{ height: "64%" }}></div>
                    <div className="bar progress-bar" style={{ height: "38%" }}></div>
                    <span>Sat</span>
                  </div>

                  <div className="day-bar">
                    <div className="bar completed-bar" style={{ height: "76%" }}></div>
                    <div className="bar progress-bar" style={{ height: "48%" }}></div>
                    <span>Sun</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* TOP SITES */}
          <div className="dashboard-panel sites-panel">

            <div className="panel-header">
              <div>
                <h2>Top Sites</h2>
                <p>Most work orders</p>
              </div>
            </div>

            <div className="site-list">

              <div className="site-row">
                <span className="site-rank">1</span>
                <span className="site-name">Main Office</span>
                <strong>8</strong>
              </div>

              <div className="site-row">
                <span className="site-rank">2</span>
                <span className="site-name">Factory</span>
                <strong>6</strong>
              </div>

              <div className="site-row">
                <span className="site-rank">3</span>
                <span className="site-name">Building A</span>
                <strong>5</strong>
              </div>

              <div className="site-row">
                <span className="site-rank">4</span>
                <span className="site-name">Central Block</span>
                <strong>3</strong>
              </div>

            </div>
          </div>

          {/* PRIORITY BREAKDOWN */}
          <div className="dashboard-panel priority-panel">

            <div className="panel-header">
              <div>
                <h2>Priority Breakdown</h2>
                <p>Work orders by priority</p>
              </div>
            </div>

            <div className="priority-list">

              <div className="priority-row">
                <span>
                  <i className="priority-dot critical"></i>
                  Critical
                </span>
                <div className="priority-progress">
                  <div style={{ width: "32%" }}></div>
                </div>
                <strong>3</strong>
              </div>

              <div className="priority-row">
                <span>
                  <i className="priority-dot high"></i>
                  High
                </span>
                <div className="priority-progress">
                  <div style={{ width: "58%" }}></div>
                </div>
                <strong>7</strong>
              </div>

              <div className="priority-row">
                <span>
                  <i className="priority-dot medium"></i>
                  Medium
                </span>
                <div className="priority-progress">
                  <div style={{ width: "75%" }}></div>
                </div>
                <strong>9</strong>
              </div>

              <div className="priority-row">
                <span>
                  <i className="priority-dot low"></i>
                  Low
                </span>
                <div className="priority-progress">
                  <div style={{ width: "45%" }}></div>
                </div>
                <strong>5</strong>
              </div>

            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;