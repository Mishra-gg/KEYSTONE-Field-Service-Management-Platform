import Sidebar from "../../components/Sidebar/Sidebar";
import "./Schedule.css";

type ScheduleItem = {
  id: string;
  title: string;
  technician: string;
  customer: string;
  time: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  status: "Assigned" | "In Progress" | "Completed";
};

const scheduleItems: ScheduleItem[] = [
  {
    id: "WO-1001",
    title: "AC Maintenance",
    technician: "Rahul Kumar",
    customer: "ABC Facilities",
    time: "09:00 AM - 11:00 AM",
    priority: "High",
    status: "Assigned",
  },
  {
    id: "WO-1002",
    title: "Electrical Repair",
    technician: "Amit Singh",
    customer: "XYZ Industries",
    time: "11:30 AM - 01:00 PM",
    priority: "Critical",
    status: "In Progress",
  },
  {
    id: "WO-1003",
    title: "HVAC Inspection",
    technician: "Priya Singh",
    customer: "Global Tech",
    time: "02:00 PM - 03:30 PM",
    priority: "Medium",
    status: "Completed",
  },
  {
    id: "WO-1004",
    title: "Generator Service",
    technician: "Vikas Verma",
    customer: "City Mall",
    time: "04:00 PM - 05:30 PM",
    priority: "Low",
    status: "Assigned",
  },
];

function Schedule({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="schedule-layout">
      <Sidebar
        currentPage="schedule"
        onNavigate={onNavigate}
      />

      <main className="schedule-main">
        {/* HEADER */}
        <div className="schedule-header">
          <div>
            <h1>Schedule</h1>
            <p>
              Plan and manage technician work schedules
            </p>
          </div>

          <button
            className="schedule-create-btn"
            onClick={() => onNavigate("create-workorder")}
          >
            + Create Work Order
          </button>
        </div>

        {/* TOOLBAR */}
        <div className="schedule-toolbar">
          <button className="calendar-nav-btn">
            ←
          </button>

          <button className="today-btn">
            Today
          </button>

          <button className="calendar-nav-btn">
            →
          </button>

          <div className="schedule-date">
            <span>📅</span>
            <strong>September 10, 2026</strong>
          </div>

          <select className="schedule-view-select">
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
          </select>
        </div>

        {/* TECHNICIAN SUMMARY */}
        <div className="schedule-summary">
          <div className="summary-card">
            <div className="summary-icon">👨‍🔧</div>
            <div>
              <span>Total Technicians</span>
              <strong>4</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">📋</div>
            <div>
              <span>Scheduled Jobs</span>
              <strong>4</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">🔄</div>
            <div>
              <span>In Progress</span>
              <strong>1</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">✅</div>
            <div>
              <span>Completed</span>
              <strong>1</strong>
            </div>
          </div>
        </div>

        {/* SCHEDULE CARD */}
        <div className="schedule-card">
          <div className="schedule-card-header">
            <div>
              <h2>Today's Schedule</h2>
              <p>
                Technician assignments and scheduled work orders
              </p>
            </div>

            <div className="schedule-legend">
              <span>
                <i className="legend-assigned"></i>
                Assigned
              </span>

              <span>
                <i className="legend-progress"></i>
                In Progress
              </span>

              <span>
                <i className="legend-completed"></i>
                Completed
              </span>
            </div>
          </div>

          <div className="schedule-list">
            {scheduleItems.map((item) => (
              <div
                className="schedule-row"
                key={item.id}
              >
                {/* TIME */}
                <div className="schedule-time">
                  <strong>{item.time.split(" - ")[0]}</strong>
                  <span>
                    {item.time.split(" - ")[1]}
                  </span>
                </div>

                {/* TECHNICIAN */}
                <div className="schedule-technician">
                  <div className="schedule-avatar">
                    {item.technician.charAt(0)}
                  </div>

                  <div>
                    <strong>{item.technician}</strong>
                    <span>Field Technician</span>
                  </div>
                </div>

                {/* WORK ORDER */}
                <div className="schedule-workorder">
                  <div>
                    <span className="schedule-workorder-id">
                      {item.id}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.customer}</p>
                  </div>

                  <span
                    className={`priority-badge ${item.priority.toLowerCase()}`}
                  >
                    {item.priority}
                  </span>
                </div>

                {/* STATUS */}
                <div className="schedule-status">
                  <span
                    className={`schedule-status-badge ${item.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* ACTION */}
                <button
                  className="schedule-view-btn"
                  onClick={() =>
                    onNavigate(`workorder-${item.id}`)
                  }
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Schedule;