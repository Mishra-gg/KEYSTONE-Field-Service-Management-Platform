import Sidebar from "../../components/Sidebar/Sidebar";
import "./Inventory.css";

export type Part = {
  id: string;
  name: string;
  category: string;
  sku: string;
  stock: number;
  minStock: number;
  unitPrice: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
};

// const parts: Part[] = [
//   {
//     id: "PART-001",
//     name: "Air Filter",
//     category: "HVAC",
//     sku: "HVAC-AF-001",
//     stock: 45,
//     minStock: 10,
//     unitPrice: 850,
//     status: "In Stock",
//   },
//   {
//     id: "PART-002",
//     name: "Copper Pipe",
//     category: "Plumbing",
//     sku: "PLB-CP-002",
//     stock: 8,
//     minStock: 15,
//     unitPrice: 1200,
//     status: "Low Stock",
//   },
//   {
//     id: "PART-003",
//     name: "Circuit Breaker",
//     category: "Electrical",
//     sku: "ELE-CB-003",
//     stock: 25,
//     minStock: 10,
//     unitPrice: 650,
//     status: "In Stock",
//   },
//   {
//     id: "PART-004",
//     name: "Compressor",
//     category: "HVAC",
//     sku: "HVAC-CM-004",
//     stock: 0,
//     minStock: 5,
//     unitPrice: 18500,
//     status: "Out of Stock",
//   },
// ];

function Inventory({
  parts,
  onNavigate,
}: {
  parts: Part[];
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="inventory-layout">
      <Sidebar
        currentPage="inventory"
        onNavigate={onNavigate}
      />

      <main className="inventory-main">
        <div className="inventory-header">
          <div>
            <h1>Inventory</h1>
            <p>
              Manage parts, stock levels and inventory
            </p>
          </div>

          <button
  className="inventory-add-btn"
  onClick={() => onNavigate("add-part")}
>
  + Add Part
</button>
        </div>

        <div className="inventory-summary">
          <div className="inventory-summary-card">
            <span>📦</span>
            <div>
              <p>Total Parts</p>
              <strong>{parts.length}</strong>
            </div>
          </div>

          <div className="inventory-summary-card">
            <span>✅</span>
            <div>
              <p>In Stock</p>
              <strong>
                {parts.filter(
                  (part) => part.status === "In Stock"
                ).length}
              </strong>
            </div>
          </div>

          <div className="inventory-summary-card">
            <span>⚠️</span>
            <div>
              <p>Low Stock</p>
              <strong>
                {parts.filter(
                  (part) => part.status === "Low Stock"
                ).length}
              </strong>
            </div>
          </div>

          <div className="inventory-summary-card">
            <span>❌</span>
            <div>
              <p>Out of Stock</p>
              <strong>
                {parts.filter(
                  (part) => part.status === "Out of Stock"
                ).length}
              </strong>
            </div>
          </div>
        </div>

        <div className="inventory-card">
          <div className="inventory-card-header">
            <div>
              <h2>Parts Inventory</h2>
              <p>
                Track available parts and stock levels
              </p>
            </div>

            <div className="inventory-filters">
              <input
                type="text"
                placeholder="Search parts..."
              />

              <select>
                <option>All Categories</option>
                <option>HVAC</option>
                <option>Electrical</option>
                <option>Plumbing</option>
              </select>

              <select>
                <option>All Status</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="inventory-table-wrapper">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Part</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Unit Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {parts.map((part) => (
                  <tr key={part.id}>
                    <td>
                      <div className="part-name">
                        <div className="part-icon">
                          📦
                        </div>

                        <div>
                          <strong>{part.name}</strong>
                          <span>{part.id}</span>
                        </div>
                      </div>
                    </td>

                    <td>{part.sku}</td>

                    <td>
                      <span className="category-badge">
                        {part.category}
                      </span>
                    </td>

                    <td>
                      <strong>{part.stock}</strong>
                      <span className="minimum-stock">
                        {" "}
                        / min {part.minStock}
                      </span>
                    </td>

                    <td>
                      ₹{part.unitPrice.toLocaleString("en-IN")}
                    </td>

                    <td>
                      <span
                        className={`stock-status ${part.status
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                      >
                        {part.status}
                      </span>
                    </td>

                    <td>
                      <button
  className="inventory-view-btn"
  onClick={() => onNavigate(`part-${part.id}`)}
>
  View
</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inventory;