import Sidebar from "../../components/Sidebar/Sidebar";
import "./CustomerDetails.css";

function CustomerDetails({
  customerId,
  onNavigate,
}: {
  customerId: string;
  onNavigate: (page: string) => void;
}) {
  const customers: Record<
    string,
    {
      id: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      sites: number;
      workOrders: number;
    }
  > = {
    "CUS-001": {
      id: "CUS-001",
      name: "ABC Facilities",
      email: "contact@abcfacilities.com",
      phone: "+91 9876543210",
      address: "New Delhi, India",
      sites: 3,
      workOrders: 8,
    },

    "CUS-002": {
      id: "CUS-002",
      name: "XYZ Industries",
      email: "info@xyzindustries.com",
      phone: "+91 9876543211",
      address: "Mumbai, India",
      sites: 2,
      workOrders: 5,
    },

    "CUS-003": {
      id: "CUS-003",
      name: "Global Tech",
      email: "admin@globaltech.com",
      phone: "+91 9876543212",
      address: "Bangalore, India",
      sites: 4,
      workOrders: 11,
    },
  };

  const customer = customers[customerId];

  if (!customer) {
    return <p>Customer not found.</p>;
  }

  return (
    <div className="customer-details-layout">

      <Sidebar
        currentPage="customers"
        onNavigate={onNavigate}
      />

      <main className="customer-details-main">

        <button
          className="customer-back-button"
          onClick={() => onNavigate("customers")}
        >
          ← Back to Customers
        </button>

        <div className="customer-details-header">

          <div className="customer-details-title">

            <div className="large-customer-avatar">
              {customer.name.charAt(0)}
            </div>

            <div>
              <span>{customer.id}</span>
              <h1>{customer.name}</h1>
              <p>Customer Account</p>
            </div>

          </div>

          <button className="edit-customer-btn">
            Edit Customer
          </button>

        </div>

        <div className="customer-details-grid">

          <div className="customer-info-card">

            <h2>Customer Information</h2>

            <div className="customer-info-row">
              <span>Email</span>
              <strong>{customer.email}</strong>
            </div>

            <div className="customer-info-row">
              <span>Phone</span>
              <strong>{customer.phone}</strong>
            </div>

            <div className="customer-info-row">
              <span>Address</span>
              <strong>{customer.address}</strong>
            </div>

          </div>

          <div className="customer-stats-card">

            <div className="customer-stat">
              <span>Sites</span>
              <strong>{customer.sites}</strong>
            </div>

            <div className="customer-stat">
              <span>Work Orders</span>
              <strong>{customer.workOrders}</strong>
            </div>

          </div>

        </div>

        <div className="customer-section-card">

          <h2>Service Locations</h2>

          <div className="location-item">
            <strong>Main Office</strong>
            <span>Primary Service Location</span>
          </div>

          <div className="location-item">
            <strong>Warehouse</strong>
            <span>Secondary Service Location</span>
          </div>

        </div>

        <div className="customer-section-card">

          <h2>Recent Work Orders</h2>

          <div className="customer-workorder">
            <strong>WO-1001</strong>
            <span>AC Maintenance</span>
            <b>Assigned</b>
          </div>

          <div className="customer-workorder">
            <strong>WO-1002</strong>
            <span>Electrical Repair</span>
            <b>In Progress</b>
          </div>

        </div>

      </main>

    </div>
  );
}

export default CustomerDetails;