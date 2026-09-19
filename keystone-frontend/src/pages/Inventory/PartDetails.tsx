import Sidebar from "../../components/Sidebar/Sidebar";
import type { Part } from "./Inventory";
import "./PartDetails.css";

function PartDetails({
  part,
  onNavigate,
}: {
  part: Part;
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="part-details-layout">
      <Sidebar
        currentPage="inventory"
        onNavigate={onNavigate}
      />

      <main className="part-details-main">
        <div className="part-details-header">
          <div>
            <h1>Part Details</h1>
            <p>View inventory part information</p>
          </div>

          <button
            className="part-details-back-btn"
            onClick={() => onNavigate("inventory")}
          >
            ← Back to Inventory
          </button>
        </div>

        <div className="part-details-card">
          <div className="part-details-title">
            <div className="part-details-icon">📦</div>

            <div>
              <h2>{part.name}</h2>
              <p>{part.id}</p>
            </div>
          </div>

          <div className="part-details-grid">
            <div className="part-detail-item">
              <span>SKU</span>
              <strong>{part.sku}</strong>
            </div>

            <div className="part-detail-item">
              <span>Category</span>
              <strong>{part.category}</strong>
            </div>

            <div className="part-detail-item">
              <span>Current Stock</span>
              <strong>{part.stock}</strong>
            </div>

            <div className="part-detail-item">
              <span>Minimum Stock</span>
              <strong>{part.minStock}</strong>
            </div>

            <div className="part-detail-item">
              <span>Unit Price</span>
              <strong>
                ₹{part.unitPrice.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="part-detail-item">
              <span>Stock Status</span>

              <span
                className={`stock-status ${part.status
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                {part.status}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PartDetails;