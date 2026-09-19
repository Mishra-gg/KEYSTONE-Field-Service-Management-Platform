import { useState } from "react";
import type { Customer } from "../../App";
import "./AddSite.css";

function AddSite({
  customers,
  onNavigate,
  onAddSite,
}: {
  customers: Customer[];
  onNavigate: (page: string) => void;
  onAddSite: (site: {
    name: string;
    customerId: string;
    customerName: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
  }) => void;
}) {
  const [name, setName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const selectedCustomer = customers.find(
      (customer) => customer.id === customerId
    );

    if (!selectedCustomer) {
      alert("Please select a customer");
      return;
    }

    onAddSite({
      name,
      customerId,
      customerName: selectedCustomer.name,
      address,
      city,
      state,
      postalCode,
    });
  };

  return (
    <div className="add-site-layout">
      <main className="add-site-main">
        <button
          className="back-button"
          onClick={() => onNavigate("sites")}
        >
          ← Back to Sites
        </button>

        <div className="add-site-header">
          <h1>Add Site</h1>
          <p>Add a new service location</p>
        </div>

        <form className="add-site-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Site Name</label>
            <input
              type="text"
              placeholder="Enter site name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Customer</label>
            <select
              value={customerId}
              onChange={(event) => setCustomerId(event.target.value)}
              required
            >
              <option value="">Select customer</option>

              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                placeholder="Enter state"
                value={state}
                onChange={(event) => setState(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                placeholder="Enter postal code"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={() => onNavigate("sites")}
            >
              Cancel
            </button>

            <button type="submit" className="save-site-button">
              Add Site
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddSite;