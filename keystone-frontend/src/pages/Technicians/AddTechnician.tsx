import { useState } from "react";
import type { Technician } from "./Technicians";
import "./AddTechnician.css";

function AddTechnician({
  onNavigate,
  onAddTechnician,
}: {
  onNavigate: (page: string) => void;
  onAddTechnician: (
    technician: Omit<
      Technician,
      "id" | "assignedWorkOrders"
    >
  ) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [status, setStatus] = useState<
    "Available" | "Busy" | "Off Duty"
  >("Available");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onAddTechnician({
      name,
      email,
      phone,
      skills,
      status,
    });
  };

  return (
    <div className="add-technician-layout">
      <main className="add-technician-main">

        {/* Back Button */}
        <button
          className="back-button"
          onClick={() => onNavigate("technicians")}
        >
          ← Back to Technicians
        </button>


        {/* Header */}
        <div className="add-technician-header">
          <h1>Add Technician</h1>
          <p>Add a new technician to your team</p>
        </div>


        {/* Form */}
        <form
          className="add-technician-card"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter technician name"
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
              placeholder="Enter email address"
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
              placeholder="Enter phone number"
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
              placeholder="e.g. HVAC, Electrical, Plumbing"
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
              className="cancel-technician-button"
              onClick={() =>
                onNavigate("technicians")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-technician-button"
            >
              Add Technician
            </button>

          </div>

        </form>

      </main>
    </div>
  );
}

export default AddTechnician;