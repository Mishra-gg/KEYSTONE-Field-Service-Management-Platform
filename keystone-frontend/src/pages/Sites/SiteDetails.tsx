import type { Site } from "./Sites";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./SiteDetails.css";

function SiteDetails({
  site,
  onNavigate,
}: {
  site: Site;
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="site-details-layout">

      <Sidebar
        currentPage="sites"
        onNavigate={onNavigate}
      />

      <main className="site-details-main">

        <button
          className="back-button"
          onClick={() => onNavigate("sites")}
        >
          ← Back to Sites
        </button>

        <div className="site-details-header">

          <div className="site-title-section">

            <div className="large-site-icon">
              📍
            </div>

            <div>
              <span className="site-details-id">
                {site.id}
              </span>

              <h1>{site.name}</h1>

              <p>
                {site.customerName}
              </p>
            </div>

          </div>

          <button
            className="edit-site-btn"
            onClick={() =>
  onNavigate(`edit-site-${site.id}`)
}
          >
            ✏️ Edit Site
          </button>

        </div>


        <div className="site-details-grid">

          <div className="site-info-card">

            <h2>Site Information</h2>

            <div className="site-detail-row">
              <span>Site ID</span>
              <strong>{site.id}</strong>
            </div>

            <div className="site-detail-row">
              <span>Site Name</span>
              <strong>{site.name}</strong>
            </div>

            <div className="site-detail-row">
              <span>Customer</span>
              <strong>{site.customerName}</strong>
            </div>

            <div className="site-detail-row">
              <span>Customer ID</span>
              <strong>{site.customerId}</strong>
            </div>

          </div>


          <div className="site-info-card">

            <h2>Location</h2>

            <div className="site-detail-row">
              <span>Address</span>
              <strong>{site.address}</strong>
            </div>

            <div className="site-detail-row">
              <span>City</span>
              <strong>{site.city}</strong>
            </div>

            <div className="site-detail-row">
              <span>State</span>
              <strong>{site.state}</strong>
            </div>

            <div className="site-detail-row">
              <span>Postal Code</span>
              <strong>{site.postalCode}</strong>
            </div>

          </div>

        </div>


        <div className="site-stat-card">

          <div className="site-stat-icon">
            📋
          </div>

          <div>
            <span>Total Work Orders</span>
            <h2>{site.workOrders}</h2>
          </div>

        </div>


        <div className="site-workorders-card">

          <h2>Work Orders</h2>

          {site.workOrders > 0 ? (
            <div className="site-workorders-empty">
              <div>📋</div>

              <h3>
                {site.workOrders} Work Orders
              </h3>

              <p>
                Work orders for this site will appear here.
              </p>
            </div>
          ) : (
            <div className="site-workorders-empty">
              <div>📋</div>

              <h3>No Work Orders</h3>

              <p>
                No work orders have been created for this site yet.
              </p>
            </div>
          )}

        </div>

      </main>

    </div>
  );
}

export default SiteDetails;