import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./CreateWorkOrder.css";
import type { Technician } from "../Technicians/Technicians";

type NewWorkOrder = {
  title: string;
  description: string;
  priority: string;
  customer: string;
  site: string;
  technician: string;
  scheduledDate: string;
  dueDate: string;
};

function CreateWorkOrder({
  onNavigate,
  onCreateWorkOrder,
  technicians,
}: {
  onNavigate: (page: string) => void;
  onCreateWorkOrder: (
    workOrder: NewWorkOrder
  ) => void;
  technicians: Technician[];
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [customer, setCustomer] = useState("");
  const [site, setSite] = useState("");
  const [technician, setTechnician] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    onCreateWorkOrder({
      title,
      description,
      priority,
      customer,
      site,
      technician: technician || "Unassigned",
      scheduledDate,
      dueDate,
    });
  };

  return (
    <div className="create-workorder-layout">

      <Sidebar
        currentPage="workorders"
        onNavigate={onNavigate}
      />

      <main className="create-workorder-main">

        {/* HEADER */}
        <div className="create-workorder-header">

          <div>
            <h1>Create Work Order</h1>
            <p>
              Create a new service work order
            </p>
          </div>

          <button
            className="back-button"
            onClick={() =>
              onNavigate("workorders")
            }
          >
            ← Back to Work Orders
          </button>

        </div>

        {/* FORM */}
        <div className="create-workorder-card">

          <form onSubmit={handleSubmit}>

            <div className="form-section">
              <h2>Basic Information</h2>
              <p>
                Enter the details of the service work order.
              </p>
            </div>

            <div className="form-grid">

              {/* TITLE */}
              <div className="form-field full-width">
                <label htmlFor="title">
                  Work Order Title
                </label>

                <input
                  id="title"
                  type="text"
                  placeholder="e.g. AC Maintenance"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div className="form-field full-width">
                <label htmlFor="description">
                  Description
                </label>

                <textarea
                  id="description"
                  rows={5}
                  placeholder="Describe the service issue or work required..."
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  required
                />
              </div>

              {/* PRIORITY */}
              <div className="form-field">
                <label htmlFor="priority">
                  Priority
                </label>

                <select
                  id="priority"
                  value={priority}
                  onChange={(e) =>
                    setPriority(e.target.value)
                  }
                  required
                >
                  <option value="">
                    Select Priority
                  </option>
                  <option value="Low">
                    Low
                  </option>
                  <option value="Medium">
                    Medium
                  </option>
                  <option value="High">
                    High
                  </option>
                  <option value="Critical">
                    Critical
                  </option>
                </select>
              </div>

              {/* CUSTOMER */}
              <div className="form-field">
                <label htmlFor="customer">
                  Customer
                </label>

                <select
                  id="customer"
                  value={customer}
                  onChange={(e) =>
                    setCustomer(e.target.value)
                  }
                  required
                >
                  <option value="">
                    Select Customer
                  </option>
                  <option value="ABC Facilities">
                    ABC Facilities
                  </option>
                  <option value="XYZ Industries">
                    XYZ Industries
                  </option>
                  <option value="Meridian Office">
                    Meridian Office
                  </option>
                  <option value="City Mall">
                    City Mall
                  </option>
                </select>
              </div>

              {/* SITE */}
              <div className="form-field">
                <label htmlFor="site">
                  Site
                </label>

                <select
                  id="site"
                  value={site}
                  onChange={(e) =>
                    setSite(e.target.value)
                  }
                  required
                >
                  <option value="">
                    Select Site
                  </option>
                  <option value="ABC Facilities - Main Office">
                    ABC Facilities - Main Office
                  </option>
                  <option value="XYZ Industries - Factory">
                    XYZ Industries - Factory
                  </option>
                  <option value="Meridian Office - Building A">
                    Meridian Office - Building A
                  </option>
                  <option value="City Mall - Central Block">
                    City Mall - Central Block
                  </option>
                </select>
              </div>

              {/* TECHNICIAN */}
              <div className="form-field">
                <label htmlFor="technician">
                  Assign Technician
                </label>

                <select
                  id="technician"
                  value={technician}
                  onChange={(e) =>
                    setTechnician(e.target.value)
                  }
                >
                  <option value="">
  Select Technician
</option>

{technicians.map((technician) => (
  <option
    key={technician.id}
    value={technician.name}
  >
    {technician.name} - {technician.status}
  </option>
))}
                </select>
              </div>

              {/* SCHEDULED DATE */}
              <div className="form-field">
                <label htmlFor="scheduledDate">
                  Scheduled Date
                </label>

                <input
                  id="scheduledDate"
                  type="date"
                  value={scheduledDate}
                  onChange={(e) =>
                    setScheduledDate(e.target.value)
                  }
                  required
                />
              </div>

              {/* DUE DATE */}
              <div className="form-field">
                <label htmlFor="dueDate">
                  SLA / Due Date
                </label>

                <input
                  id="dueDate"
                  type="date"
                  value={dueDate}
                  onChange={(e) =>
                    setDueDate(e.target.value)
                  }
                  required
                />
              </div>

            </div>

            {/* BUTTONS */}
            <div className="form-actions">

              <button
                type="button"
                className="cancel-button"
                onClick={() =>
                  onNavigate("workorders")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="create-button"
              >
                Create Work Order
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default CreateWorkOrder;