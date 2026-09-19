import { useState } from "react";

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";

import WorkOrders from "./pages/WorkOrders/WorkOrders";
import CreateWorkOrder from "./pages/CreateWorkOrder/CreateWorkOrder";
import WorkOrderDetails from "./pages/WorkOrderDetails/WorkOrderDetails";

import Kanban from "./pages/Kanban/Kanban";

import Customers from "./pages/Customers/Customers";
import CustomerDetails from "./pages/Customers/CustomerDetails";
import AddCustomer from "./pages/Customers/AddCustomer";

import Sites from "./pages/Sites/Sites";
import type { Site } from "./pages/Sites/Sites";
import AddSite from "./pages/Sites/AddSite";
import SiteDetails from "./pages/Sites/SiteDetails";
import EditSite from "./pages/Sites/EditSite";
import Technicians from "./pages/Technicians/Technicians";
import type { Technician } from "./pages/Technicians/Technicians";
import AddTechnician from "./pages/Technicians/AddTechnician";
import TechnicianDetails from "./pages/Technicians/TechnicianDetails";
import EditTechnician from "./pages/Technicians/EditTechnician";
import Schedule from "./pages/Schedule/Schedule";
import Inventory from "./pages/Inventory/Inventory";
import type { Part } from "./pages/Inventory/Inventory";

import AddPart from "./pages/Inventory/AddPart";
import type { NewPart } from "./pages/Inventory/AddPart";
import PartDetails from "./pages/Inventory/PartDetails";
import Reports from "./pages/Reports/Reports";

/* =========================
   STATUS HISTORY TYPE
========================= */

export type StatusHistory = {
  status: string;
  note: string;
  date: string;
};


/* =========================
   WORK ORDER TYPE
========================= */

export type WorkOrder = {
  id: string;
  title: string;
  description: string;
  priority: string;
  customer: string;
  site: string;
  technician: string;
  scheduledDate: string;
  dueDate: string;
  status: string;
  statusHistory: StatusHistory[];
};


/* =========================
   CUSTOMER TYPE
========================= */

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  sites: number;
  workOrders: number;
};


/* =========================
   APP
========================= */

function App() {

  const [page, setPage] = useState("login");


  /* =========================
     CUSTOMERS
  ========================= */

  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "CUS-001",
      name: "ABC Facilities",
      email: "contact@abcfacilities.com",
      phone: "+91 9876543210",
      address: "New Delhi, India",
      sites: 3,
      workOrders: 8,
    },

    {
      id: "CUS-002",
      name: "XYZ Industries",
      email: "info@xyzindustries.com",
      phone: "+91 9876543211",
      address: "Mumbai, India",
      sites: 2,
      workOrders: 5,
    },

    {
      id: "CUS-003",
      name: "Global Tech",
      email: "admin@globaltech.com",
      phone: "+91 9876543212",
      address: "Bangalore, India",
      sites: 4,
      workOrders: 11,
    },
  ]);


  /* =========================
     SITES
  ========================= */

  const [sites, setSites] = useState<Site[]>([
    {
      id: "SITE-001",
      name: "Main Office",
      customerId: "CUS-001",
      customerName: "ABC Facilities",
      address: "12 MG Road",
      city: "New Delhi",
      state: "Delhi",
      postalCode: "110001",
      workOrders: 4,
    },

    {
      id: "SITE-002",
      name: "Warehouse",
      customerId: "CUS-001",
      customerName: "ABC Facilities",
      address: "45 Industrial Area",
      city: "Noida",
      state: "Uttar Pradesh",
      postalCode: "201301",
      workOrders: 2,
    },

    {
      id: "SITE-003",
      name: "Branch Office",
      customerId: "CUS-002",
      customerName: "XYZ Industries",
      address: "21 Park Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      workOrders: 3,
    },
  ]);


  const [technicians, setTechnicians] = useState<Technician[]>([
  {
    id: "TECH-001",
    name: "Rahul Kumar",
    email: "rahul@keystone.com",
    phone: "9876543210",
    skills: "HVAC, AC Repair",
    status: "Available",
    assignedWorkOrders: 2,
  },
  {
    id: "TECH-002",
    name: "Amit Sharma",
    email: "amit@keystone.com",
    phone: "9876543211",
    skills: "Electrical, Wiring",
    status: "Busy",
    assignedWorkOrders: 3,
  },
  {
    id: "TECH-003",
    name: "Priya Singh",
    email: "priya@keystone.com",
    phone: "9876543212",
    skills: "Plumbing, Maintenance",
    status: "Available",
    assignedWorkOrders: 1,
  },
  {
    id: "TECH-004",
    name: "Vikas Verma",
    email: "vikas@keystone.com",
    phone: "9876543213",
    skills: "HVAC, Electrical",
    status: "Off Duty",
    assignedWorkOrders: 0,
  },
]);


/* =========================
   INVENTORY
========================= */



/* =========================
   INVENTORY
========================= */

const [parts, setParts] = useState<Part[]>([
  {
    id: "PART-001",
    name: "Air Filter",
    category: "HVAC",
    sku: "HVAC-AF-001",
    stock: 45,
    minStock: 10,
    unitPrice: 850,
    status: "In Stock",
  },
  {
    id: "PART-002",
    name: "Copper Pipe",
    category: "Plumbing",
    sku: "PLB-CP-002",
    stock: 8,
    minStock: 15,
    unitPrice: 1200,
    status: "Low Stock",
  },
  {
    id: "PART-003",
    name: "Circuit Breaker",
    category: "Electrical",
    sku: "ELE-CB-003",
    stock: 25,
    minStock: 10,
    unitPrice: 650,
    status: "In Stock",
  },
  {
    id: "PART-004",
    name: "Compressor",
    category: "HVAC",
    sku: "HVAC-CM-004",
    stock: 0,
    minStock: 5,
    unitPrice: 18500,
    status: "Out of Stock",
  },
]);

  /* =========================
     WORK ORDERS
  ========================= */

  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([
    {
      id: "WO-1001",
      title: "AC Maintenance",
      description: "AC maintenance required",
      priority: "High",
      customer: "ABC Facilities",
      site: "ABC Facilities - Main Office",
      technician: "Rahul Kumar",
      scheduledDate: "2026-09-10",
      dueDate: "2026-09-12",
      status: "Assigned",

      statusHistory: [
        {
          status: "New",
          note: "Work order created",
          date: "2026-09-09",
        },

        {
          status: "Assigned",
          note: "Technician Rahul Kumar assigned",
          date: "2026-09-09",
        },
      ],
    },


    {
      id: "WO-1002",
      title: "Electrical Repair",
      description: "Electrical repair required",
      priority: "Critical",
      customer: "XYZ Industries",
      site: "XYZ Industries - Factory",
      technician: "Amit Singh",
      scheduledDate: "2026-09-10",
      dueDate: "2026-09-11",
      status: "In Progress",

      statusHistory: [
        {
          status: "New",
          note: "Work order created",
          date: "2026-09-09",
        },

        {
          status: "Assigned",
          note: "Technician Amit Singh assigned",
          date: "2026-09-09",
        },

        {
          status: "In Progress",
          note: "Work started",
          date: "2026-09-10",
        },
      ],
    },


    {
      id: "WO-1003",
      title: "HVAC Inspection",
      description: "HVAC inspection required",
      priority: "Medium",
      customer: "Meridian Office",
      site: "Meridian Office - Building A",
      technician: "Priya Sharma",
      scheduledDate: "2026-09-11",
      dueDate: "2026-09-14",
      status: "Completed",

      statusHistory: [
        {
          status: "New",
          note: "Work order created",
          date: "2026-09-09",
        },

        {
          status: "Assigned",
          note: "Technician Priya Sharma assigned",
          date: "2026-09-09",
        },

        {
          status: "In Progress",
          note: "Work started",
          date: "2026-09-11",
        },

        {
          status: "Completed",
          note: "Work completed",
          date: "2026-09-11",
        },
      ],
    },


    {
      id: "WO-1004",
      title: "Generator Service",
      description: "Generator service required",
      priority: "Low",
      customer: "City Mall",
      site: "City Mall - Central Block",
      technician: "Unassigned",
      scheduledDate: "2026-09-12",
      dueDate: "2026-09-15",
      status: "New",

      statusHistory: [
        {
          status: "New",
          note: "Work order created",
          date: "2026-09-12",
        },
      ],
    },
  ]);


  /* =========================
     CREATE WORK ORDER
  ========================= */

  const handleCreateWorkOrder = (
  newWorkOrder: Omit<
    WorkOrder,
    "id" | "status" | "statusHistory"
  >
) => {
  const newId = `WO-${1001 + workOrders.length}`;

  const workOrder: WorkOrder = {
    ...newWorkOrder,

    id: newId,

    status: "New",

    statusHistory: [
      {
        status: "New",
        note: "Work order created",
        date: new Date()
          .toISOString()
          .split("T")[0],
      },
    ],
  };

  setWorkOrders((previousOrders) => [
    ...previousOrders,
    workOrder,
  ]);

  // Update technician assigned work orders count
  if (newWorkOrder.technician !== "Unassigned") {
    setTechnicians((previousTechnicians) =>
      previousTechnicians.map((technician) =>
        technician.name === newWorkOrder.technician
          ? {
              ...technician,
              assignedWorkOrders:
                technician.assignedWorkOrders + 1,
            }
          : technician
      )
    );
  }

  setPage("workorders");
};

  /* =========================
     UPDATE WORK ORDER STATUS
  ========================= */

  const handleUpdateStatus = (
    id: string,
    status: string
  ) => {

    setWorkOrders((previousOrders) =>
      previousOrders.map((workOrder) => {

        if (workOrder.id !== id) {
          return workOrder;
        }


        const newHistory: StatusHistory = {
          status: status,

          note:
            status === "Assigned"
              ? `Technician ${workOrder.technician} assigned`

              : status === "In Progress"
              ? "Work started"

              : status === "On Hold"
              ? "Work put on hold"

              : status === "Completed"
              ? "Work completed"

              : "Status updated",

          date: new Date()
            .toISOString()
            .split("T")[0],
        };


        return {
          ...workOrder,

          status: status,

          statusHistory: [
            ...workOrder.statusHistory,
            newHistory,
          ],
        };
      })
    );
  };


  /* =========================
     ADD CUSTOMER
  ========================= */

  const handleAddCustomer = (
    customer: Omit<
      Customer,
      "id" | "sites" | "workOrders"
    >
  ) => {

    const newCustomer: Customer = {
      id: `CUS-${String(
        customers.length + 1
      ).padStart(3, "0")}`,

      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,

      sites: 0,
      workOrders: 0,
    };


    setCustomers((previousCustomers) => [
      ...previousCustomers,
      newCustomer,
    ]);


    setPage("customers");
  };



  const handleAddPart = (newPart: NewPart) => {
  const part: Part = {
    ...newPart,
    id: `PART-${1001 + parts.length}`,
  };

  setParts((previousParts) => [
    ...previousParts,
    part,
  ]);

  setPage("inventory");
};


  /* =========================
     ADD SITE
  ========================= */

  const handleAddSite = (
    site: Omit<Site, "id" | "workOrders">
  ) => {

    const newSite: Site = {
      ...site,

      id: `SITE-${String(
        sites.length + 1
      ).padStart(3, "0")}`,

      workOrders: 0,
    };


    setSites((previousSites) => [
      ...previousSites,
      newSite,
    ]);


    setPage("sites");
  };


  const handleAddTechnician = (
  technician: Omit<
    Technician,
    "id" | "assignedWorkOrders"
  >
) => {
  const newTechnician: Technician = {
    id: `TECH-${String(
      technicians.length + 1
    ).padStart(3, "0")}`,

    name: technician.name,
    email: technician.email,
    phone: technician.phone,
    skills: technician.skills,
    status: technician.status,

    assignedWorkOrders: 0,
  };

  setTechnicians((previousTechnicians) => [
    ...previousTechnicians,
    newTechnician,
  ]);

  setPage("technicians");
};

const handleUpdateTechnician = (
  updatedTechnician: Technician
) => {
  setTechnicians((previousTechnicians) =>
    previousTechnicians.map((technician) =>
      technician.id === updatedTechnician.id
        ? updatedTechnician
        : technician
    )
  );

  setPage(
    `technician-${updatedTechnician.id}`
  );
};

  /* =========================
   UPDATE SITE
========================= */

const handleUpdateSite = (updatedSite: Site) => {
  setSites((previousSites) =>
    previousSites.map((site) =>
      site.id === updatedSite.id
        ? updatedSite
        : site
    )
  );

  setPage(`site-${updatedSite.id}`);
};


  /* =========================
     SIGN UP
  ========================= */

  if (page === "signup") {
    return (
      <SignUp
        onSignIn={() => setPage("login")}
      />
    );
  }


  /* =========================
     DASHBOARD
  ========================= */

  if (page === "dashboard") {
    return (
      <Dashboard
        onNavigate={setPage}
      />
    );
  }


  /* =========================
     WORK ORDERS
  ========================= */

  if (page === "workorders") {
    return (
      <WorkOrders
        workOrders={workOrders}
        onNavigate={setPage}
      />
    );
  }


  /* =========================
     KANBAN
  ========================= */

  if (page === "kanban") {
    return (
      <Kanban
        workOrders={workOrders}
        onNavigate={setPage}
        onUpdateStatus={handleUpdateStatus}
      />
    );
  }
/* =========================
     schedule
  ========================= */


  if (page === "schedule") {
  return (
    <Schedule
      onNavigate={setPage}
    />
  );
}

/* =========================
     inventory
  ========================= */

if (page === "inventory") {
  return (
    <Inventory
      parts={parts}
      onNavigate={setPage}
    />
  );
}

/* =========================
     reports
  ========================= */

if (page === "reports") {
  return (
    <Reports
      workOrders={workOrders}
      onNavigate={setPage}
    />
  );
}

if (page.startsWith("part-")) {
  const partId = page.replace("part-", "");

  const selectedPart = parts.find(
    (part) => part.id === partId
  );

  if (!selectedPart) {
    return <div>Part not found</div>;
  }

  return (
    <PartDetails
      part={selectedPart}
      onNavigate={setPage}
    />
  );
}

if (page === "add-part") {
  return (
    <AddPart
      onNavigate={setPage}
      onAddPart={handleAddPart}
    />
  );
}


  /* =========================
     CUSTOMERS
  ========================= */

  if (page === "customers") {
    return (
      <Customers
        customers={customers}
        onNavigate={setPage}
      />
    );
  }


  /* =========================
     ADD CUSTOMER
  ========================= */

  if (page === "add-customer") {
    return (
      <AddCustomer
        onNavigate={setPage}
        onAddCustomer={handleAddCustomer}
      />
    );
  }


  /* =========================
     CUSTOMER DETAILS
  ========================= */

  if (page.startsWith("customer-")) {

    const customerId = page.replace(
      "customer-",
      ""
    );


    return (
      <CustomerDetails
        customerId={customerId}
        onNavigate={setPage}
      />
    );
  }


  /* =========================
     SITES
  ========================= */

  if (page === "sites") {
    return (
      <Sites
        sites={sites}
        customers={customers}
        onNavigate={setPage}
      />
    );
  }


  if (page === "technicians") {
  return (
    <Technicians
      technicians={technicians}
      onNavigate={setPage}
    />
  );
}

if (page.startsWith("edit-technician-")) {
  const technicianId = page.replace(
    "edit-technician-",
    ""
  );

  const selectedTechnician = technicians.find(
    (technician) => technician.id === technicianId
  );

  if (!selectedTechnician) {
    return (
      <div>
        Technician not found
      </div>
    );
  }

  return (
    <EditTechnician
      technician={selectedTechnician}
      onNavigate={setPage}
      onUpdateTechnician={handleUpdateTechnician}
    />
  );
}

if (page.startsWith("technician-")) {
  const technicianId = page.replace(
    "technician-",
    ""
  );

  const selectedTechnician = technicians.find(
    (technician) => technician.id === technicianId
  );

  if (!selectedTechnician) {
    return (
      <div>
        Technician not found
      </div>
    );
  }

  return (
    <TechnicianDetails
      technician={selectedTechnician}
      onNavigate={setPage}
    />
  );
}

if (page === "add-technician") {
  return (
    <AddTechnician
      onNavigate={setPage}
      onAddTechnician={handleAddTechnician}
    />
  );
}

  /* =========================
   EDIT SITE
========================= */

if (page.startsWith("edit-site-")) {

  const siteId = page.replace(
    "edit-site-",
    ""
  );

  const selectedSite = sites.find(
    (site) => site.id === siteId
  );

  if (!selectedSite) {
    return (
      <div>
        Site not found
      </div>
    );
  }

  return (
    <EditSite
      site={selectedSite}
      customers={customers}
      onNavigate={setPage}
      onUpdateSite={handleUpdateSite}
    />
  );
}

  /* =========================
   SITE DETAILS
========================= */

if (page.startsWith("site-")) {

  const siteId = page.replace(
    "site-",
    ""
  );

  const selectedSite = sites.find(
    (site) => site.id === siteId
  );

  if (!selectedSite) {
    return (
      <div>
        Site not found
      </div>
    );
  }

  return (
    <SiteDetails
      site={selectedSite}
      onNavigate={setPage}
    />
  );
}


  /* =========================
     ADD SITE
  ========================= */

  if (page === "add-site") {
    return (
      <AddSite
        customers={customers}
        onNavigate={setPage}
        onAddSite={handleAddSite}
      />
    );
  }


  /* =========================
     WORK ORDER DETAILS
  ========================= */

  if (page.startsWith("workorder-")) {

    const workOrderId = page.replace(
      "workorder-",
      ""
    );


    const selectedWorkOrder =
      workOrders.find(
        (workOrder) =>
          workOrder.id === workOrderId
      );


    if (!selectedWorkOrder) {
      return (
        <div>
          Work Order not found
        </div>
      );
    }


    return (
      <WorkOrderDetails
        workOrder={selectedWorkOrder}
        onNavigate={setPage}
        onUpdateStatus={handleUpdateStatus}
      />
    );
  }


  /* =========================
     CREATE WORK ORDER
  ========================= */

  if (page === "create-workorder") {
    return (
      <CreateWorkOrder
        onNavigate={setPage}
        onCreateWorkOrder={
          handleCreateWorkOrder
        }
        technicians={technicians}
      />
    );
  }


  /* =========================
     LOGIN
  ========================= */

  return (
    <Login
      onSignUp={() => setPage("signup")}
      onLogin={() => setPage("dashboard")}
    />
  );
}


export default App;