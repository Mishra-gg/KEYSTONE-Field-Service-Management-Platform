import type { Customer } from "../../App";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Sites.css";

export type Site = {
  id: string;
  name: string;
  customerId: string;
  customerName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  workOrders: number;
};

function Sites({
  sites,
  customers,
  onNavigate,
}: {
  sites: Site[];
  customers: Customer[];
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="sites-layout">

      <Sidebar
        currentPage="sites"
        onNavigate={onNavigate}
      />

      <main className="sites-main">

        <div className="sites-header">
          <div>
            <h1>Sites</h1>
            <p>Manage customer service locations</p>
          </div>

          <button
            className="add-site-btn"
            onClick={() => onNavigate("add-site")}
          >
            + Add Site
          </button>
        </div>

        <div className="sites-toolbar">

          <input
            type="text"
            placeholder="Search sites..."
            className="site-search"
          />

          <span className="site-count">
            {sites.length} Sites
          </span>

        </div>

        <div className="sites-table-card">

          <table>

            <thead>
              <tr>
                <th>Site</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Work Orders</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {sites.map((site) => (
                <tr key={site.id}>

                  <td>
                    <div className="site-name-cell">

                      <div className="site-icon">
                        📍
                      </div>

                      <div>
                        <strong>{site.name}</strong>
                        <span>{site.id}</span>
                      </div>

                    </div>
                  </td>

                  <td>
                    <span className="customer-name">
                      {site.customerName}
                    </span>
                  </td>

                  <td>
                    <div className="location-cell">
                      <strong>{site.city}, {site.state}</strong>
                      <span>{site.address}</span>
                    </div>
                  </td>

                  <td>
                    <span className="site-number-badge">
                      {site.workOrders}
                    </span>
                  </td>

                  <td>
                    <button
                      className="view-site-btn"
                      onClick={() =>
                        onNavigate(`site-${site.id}`)
                      }
                    >
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

          {sites.length === 0 && (
            <div className="no-sites">
              <div>📍</div>
              <h3>No sites found</h3>
              <p>Add a site to get started.</p>
            </div>
          )}

        </div>

      </main>

    </div>
  );
}

export default Sites;