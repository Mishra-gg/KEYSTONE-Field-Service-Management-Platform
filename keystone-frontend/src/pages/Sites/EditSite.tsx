import { useState } from "react";
import type { Site } from "./Sites";
import type { Customer } from "../../App";
import "./AddSite.css";

function EditSite({
  site,
  customers,
  onNavigate,
  onUpdateSite,
}: {
  site: Site;
  customers: Customer[];
  onNavigate: (page: string) => void;
  onUpdateSite: (updatedSite: Site) => void;
}) {
  const [name, setName] = useState(site.name);
  const [customerId, setCustomerId] = useState(site.customerId);
  const [address, setAddress] = useState(site.address);
  const [city, setCity] = useState(site.city);
  const [state, setState] = useState(site.state);
  const [postalCode, setPostalCode] = useState(site.postalCode);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const selectedCustomer = customers.find(
      (customer) => customer.id === customerId
    );

    if (!selectedCustomer) {
      alert("Please select a customer");
      return;
    }

    const updatedSite: Site = {
      ...site,
      name,
      customerId,
      customerName: selectedCustomer.name,
      address,
      city,
      state,
      postalCode,
    };

    onUpdateSite(updatedSite);
  };

  return (
    <div className="add-site-layout">
      <main className="add-site-main">

        <button
          className="back-button"
          onClick={() => onNavigate(`site-${site.id}`)}
        >
          ← Back to Site Details
        </button>

        <div className="add-site-header">
          <h1>Edit Site</h1>
          <p>Update site information</p>
        </div>

        <form
          className="add-site-card"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Site Name</label>

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              required
            />
          </div>


          <div className="form-group">
            <label>Customer</label>

            <select
              value={customerId}
              onChange={(event) =>
                setCustomerId(event.target.value)
              }
              required
            >
              <option value="">
                Select customer
              </option>

              {customers.map((customer) => (
                <option
                  key={customer.id}
                  value={customer.id}
                >
                  {customer.name}
                </option>
              ))}
            </select>
          </div>


          <div className="form-group">
            <label>Address</label>

            <input
              type="text"
              value={address}
              onChange={(event) =>
                setAddress(event.target.value)
              }
              required
            />
          </div>


          <div className="form-row">

            <div className="form-group">
              <label>City</label>

              <input
                type="text"
                value={city}
                onChange={(event) =>
                  setCity(event.target.value)
                }
                required
              />
            </div>


            <div className="form-group">
              <label>State</label>

              <input
                type="text"
                value={state}
                onChange={(event) =>
                  setState(event.target.value)
                }
                required
              />
            </div>


            <div className="form-group">
              <label>Postal Code</label>

              <input
                type="text"
                value={postalCode}
                onChange={(event) =>
                  setPostalCode(event.target.value)
                }
                required
              />
            </div>

          </div>


          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={() =>
                onNavigate(`site-${site.id}`)
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-site-button"
            >
              Save Changes
            </button>

          </div>

        </form>

      </main>
    </div>
  );
}

export default EditSite;