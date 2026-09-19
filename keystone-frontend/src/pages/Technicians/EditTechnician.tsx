import { useState } from "react";
import type { Technician } from "./Technicians";
import "./EditTechnician.css";

function EditTechnician({
  technician,
  onNavigate,
  onUpdateTechnician,
}: {
  technician: Technician;
  onNavigate: (page: string) => void;
  onUpdateTechnician: (updatedTechnician: Technician) => void;
}) {
  const [name, setName] = useState(technician.name);
  const [email, setEmail] = useState(technician.email);
  const [phone, setPhone] = useState(technician.phone);
  const [skills, setSkills] = useState(technician.skills);
  const [status, setStatus] = useState<
    "Available" | "Busy" | "Off Duty"
  >(technician.status);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const updatedTechnician: Technician = {
      ...technician,
      name,
      email,
      phone,
      skills,
      status,
    };

    onUpdateTechnician(updatedTechnician);
  };

  return (
    <div className="edit-technician-layout">
      <main className="edit-technician-main">

        {/* Back Button */}
        <button
          className="back-button"
          onClick={() =>
            onNavigate(`technician-${technician.id}`)
          }
        >
          ← Back to Technician Details
        </button>


        {/* Header */}
        <div className="edit-technician-header">
          <h1>Edit Technician</h1>
          <p>Update technician information</p>
        </div>


        {/* Form */}
        <form
          className="edit-technician-card"
          onSubmit={handleSubmit}
        >

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              required
            />
          </div>


          {/* Email */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />
          </div>


          {/* Phone */}
          <div className="form-group">
            <label>Phone</label>

            <input
              type="tel"
              value={phone}
              onChange={(event) =>
                setPhone(event.target.value)
              }
              required
            />
          </div>


          {/* Skills */}
          <div className="form-group">
            <label>Skills</label>

            <input
              type="text"
              value={skills}
              onChange={(event) =>
                setSkills(event.target.value)
              }
              required
            />
          </div>


          {/* Status */}
          <div className="form-group">
            <label>Status</label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value as
                    | "Available"
                    | "Busy"
                    | "Off Duty"
                )
              }
            >
              <option value="Available">
                Available
              </option>

              <option value="Busy">
                Busy
              </option>

              <option value="Off Duty">
                Off Duty
              </option>
            </select>
          </div>


          {/* Buttons */}
          <div className="form-actions">

            <button
              type="button"
              className="cancel-edit-technician-button"
              onClick={() =>
                onNavigate(
                  `technician-${technician.id}`
                )
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-edit-technician-button"
            >
              Save Changes
            </button>

          </div>

        </form>

      </main>
    </div>
  );
}

export default EditTechnician;