import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AddPart.css";

export type NewPart = {
  name: string;
  sku: string;
  category: string;
  stock: number;
  minStock: number;
  unitPrice: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
};

function AddPart({
  onNavigate,
  onAddPart,
}: {
  onNavigate: (page: string) => void;
  onAddPart: (part: NewPart) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    stock: "",
    minStock: "",
    unitPrice: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const stock = Number(formData.stock);
    const minStock = Number(formData.minStock);

    let status: NewPart["status"];

    if (stock === 0) {
      status = "Out of Stock";
    } else if (stock <= minStock) {
      status = "Low Stock";
    } else {
      status = "In Stock";
    }

    onAddPart({
      name: formData.name,
      sku: formData.sku,
      category: formData.category,
      stock,
      minStock,
      unitPrice: Number(formData.unitPrice),
      status,
    });
  };

  return (
    <div className="add-part-layout">
      <Sidebar
        currentPage="inventory"
        onNavigate={onNavigate}
      />

      <main className="add-part-main">
        <div className="add-part-header">
          <div>
            <h1>Add Part</h1>
            <p>
              Add a new part to your inventory
            </p>
          </div>

          <button
            className="add-part-back-btn"
            onClick={() => onNavigate("inventory")}
          >
            ← Back to Inventory
          </button>
        </div>

        <form
          className="add-part-card"
          onSubmit={handleSubmit}
        >
          <div className="add-part-card-header">
            <div>
              <h2>Part Information</h2>
              <p>
                Enter the details of the new inventory part
              </p>
            </div>
          </div>

          <div className="add-part-form">
            <div className="form-group">
              <label>
                Part Name <span>*</span>
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter part name"
                required
              />
            </div>

            <div className="form-group">
              <label>
                SKU <span>*</span>
              </label>

              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="e.g. HVAC-AF-005"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Category <span>*</span>
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select category
                </option>
                <option value="HVAC">HVAC</option>
                <option value="Electrical">
                  Electrical
                </option>
                <option value="Plumbing">
                  Plumbing
                </option>
                <option value="Mechanical">
                  Mechanical
                </option>
                <option value="Safety">Safety</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Stock Quantity <span>*</span>
              </label>

              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Enter quantity"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Minimum Stock <span>*</span>
              </label>

              <input
                type="number"
                name="minStock"
                value={formData.minStock}
                onChange={handleChange}
                placeholder="Enter minimum stock"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Unit Price <span>*</span>
              </label>

              <div className="price-input">
                <span>₹</span>

                <input
                  type="number"
                  name="unitPrice"
                  value={formData.unitPrice}
                  onChange={handleChange}
                  placeholder="Enter price"
                  min="0"
                  required
                />
              </div>
            </div>
          </div>

          <div className="stock-info">
            <div className="stock-info-icon">
              💡
            </div>

            <div>
              <strong>Stock status is automatic</strong>
              <p>
                Status will be calculated automatically
                based on stock quantity and minimum stock.
              </p>
            </div>
          </div>

          <div className="add-part-actions">
            <button
              type="button"
              className="add-part-cancel-btn"
              onClick={() => onNavigate("inventory")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-part-submit-btn"
            >
              + Add Part
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddPart;