import type { Customer } from "../../App";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Customers.css";

function Customers({
  customers,
  onNavigate,
}: {
  customers: Customer[];
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="customers-layout">

      <Sidebar
        currentPage="customers"
        onNavigate={onNavigate}
      />

      <main className="customers-main">

        <div className="customers-header">

          <div>
            <h1>Customers</h1>
            <p>
              Manage your customers and their service locations
            </p>
          </div>

          <button
            className="add-customer-btn"
            onClick={() => onNavigate("add-customer")}
          >
            + Add Customer
          </button>

        </div>

        <div className="customers-toolbar">

          <input
            type="text"
            placeholder="Search customers..."
            className="customer-search"
          />

          <span className="customer-count">
            {customers.length} Customers
          </span>

        </div>

        <div className="customers-table-card">

          <table>

            <thead>
              <tr>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Sites</th>
                <th>Work Orders</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {customers.map((customer) => (
                <tr key={customer.id}>

                  <td>
                    <div className="customer-name-cell">

                      <div className="customer-avatar">
                        {customer.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{customer.name}</strong>
                        <span>{customer.id}</span>
                      </div>

                    </div>
                  </td>

                  <td>{customer.email}</td>

                  <td>{customer.phone}</td>

                  <td>
                    <span className="number-badge">
                      {customer.sites}
                    </span>
                  </td>

                  <td>
                    <span className="number-badge">
                      {customer.workOrders}
                    </span>
                  </td>

                  <td>
                    <button
                      className="view-customer-btn"
                      onClick={() =>
                        onNavigate(`customer-${customer.id}`)
                      }
                    >
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default Customers;