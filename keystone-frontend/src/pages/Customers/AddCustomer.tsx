import { useState } from "react";
import type { Customer } from "../../App";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AddCustomer.css";

function AddCustomer({
  onNavigate,
  onAddCustomer,
}: {
  onNavigate: (page: string) => void;
  onAddCustomer: (
    customer: Omit<Customer, "id" | "sites" | "workOrders">
  ) => void;
}) {
  return (
    <div className="add-customer-layout">

      <Sidebar
        currentPage="customers"
        onNavigate={onNavigate}
      />

      <main className="add-customer-main">

        <button
          className="add-customer-back"
          onClick={() => onNavigate("customers")}
        >
          ← Back to Customers
        </button>

        <div className="add-customer-card">

          <div className="add-customer-title">
            <h1>Add Customer</h1>
            <p>Create a new customer account</p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              onNavigate("customers");
            }}
          >

            <div className="form-group">
              <label>Customer Name</label>
              <input
                type="text"
                placeholder="Enter customer name"
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                placeholder="Enter customer address"
                rows={4}
              />
            </div>

            <div className="form-actions">

              <button
                type="button"
                className="cancel-customer-btn"
                onClick={() => onNavigate("customers")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-customer-btn"
              >
                Save Customer
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default AddCustomer;