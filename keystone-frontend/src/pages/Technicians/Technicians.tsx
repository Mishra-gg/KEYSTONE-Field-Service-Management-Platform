import Sidebar from "../../components/Sidebar/Sidebar";
import "./Technicians.css";

export type Technician = {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string;
  status: "Available" | "Busy" | "Off Duty";
  assignedWorkOrders: number;
};

function Technicians({
  technicians,
  onNavigate,
}: {
  technicians: Technician[];
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="technicians-layout">
      <Sidebar
        currentPage="technicians"
        onNavigate={onNavigate}
      />

      <main className="technicians-main">

        {/* Header */}
        <div className="technicians-header">
          <div>
            <h1>Technicians</h1>
            <p>Manage technicians and their assignments</p>
          </div>

          <button
            className="add-technician-btn"
            onClick={() => onNavigate("add-technician")}
          >
            + Add Technician
          </button>
        </div>


        {/* Toolbar */}
        <div className="technicians-toolbar">

          <input
            type="text"
            placeholder="Search technicians..."
            className="technician-search"
          />

          <select className="technician-status-filter">
            <option>All Status</option>
            <option>Available</option>
            <option>Busy</option>
            <option>Off Duty</option>
          </select>

          <span className="technician-count">
            {technicians.length} Technicians
          </span>

        </div>


        {/* Table */}
        <div className="technicians-table-card">

          <table>

            <thead>
              <tr>
                <th>Technician</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Skills</th>
                <th>Status</th>
                <th>Assigned Jobs</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>

              {technicians.map((technician) => (

                <tr key={technician.id}>

                  {/* Technician */}
                  <td>
                    <div className="technician-name-cell">

                      <div className="technician-avatar">
                        {technician.name.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {technician.name}
                        </strong>

                        <span>
                          {technician.id}
                        </span>
                      </div>

                    </div>
                  </td>


                  {/* Email */}
                  <td>
                    {technician.email}
                  </td>


                  {/* Phone */}
                  <td>
                    {technician.phone}
                  </td>


                  {/* Skills */}
                  <td>
                    <span className="technician-skills">
                      {technician.skills}
                    </span>
                  </td>


                  {/* Status */}
                  <td>

                    <span
                      className={`technician-status ${technician.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {technician.status}
                    </span>

                  </td>


                  {/* Assigned Jobs */}
                  <td>
                    <span className="assigned-jobs-badge">
                      {technician.assignedWorkOrders}
                    </span>
                  </td>


                  {/* Action */}
                  <td>

                    <button
                      className="view-technician-btn"
                      onClick={() =>
                        onNavigate(
                          `technician-${technician.id}`
                        )
                      }
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>


          {/* Empty State */}
          {technicians.length === 0 && (

            <div className="no-technicians">

              <div>👨‍🔧</div>

              <h3>No technicians found</h3>

              <p>
                Add a technician to get started.
              </p>

            </div>

          )}

        </div>

      </main>
    </div>
  );
}

export default Technicians;