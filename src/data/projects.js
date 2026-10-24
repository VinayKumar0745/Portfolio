/**
 * Featured Projects Data
 * Displayed in the strict order requested:
 * 1. Hospital Care Website
 * 2. Minutes of Meeting Management System
 * 3. Food Delivery Web Application
 * 
 * Truthful, verified implementation details only. No fabricated links.
 */

export const projectsData = [
  {
    id: "hospital-care",
    title: "Hospital Care Website",
    type: "Company Assignment • Frontend Project",
    shortDescription: "A responsive hospital website designed to help visitors explore healthcare services, browse doctor information, and access appointment-related information through a clear, user-friendly interface.",
    problemStatement: "Provides an organized, intuitive online entry point for patients to explore medical specialties, review doctor profiles and OPD schedules, and submit appointment requests without navigating convoluted hospital directories.",
    myContribution: "Engineered the responsive single-page React frontend application from scratch. Designed reusable component structures, implemented doctor listing cards, built accessible doctor profile modals with keyboard navigation, and created a controlled appointment booking form with client-side validation and demonstration LocalStorage persistence.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
    features: [
      "Responsive navigation bar and clean medical hero section",
      "Specialty exploration catalog and department service summaries",
      "Interactive doctor profile modal with keyboard navigation (Escape key dismissal) and body scroll locking",
      "Controlled appointment booking form with required field validation and feedback notices",
      "Client-side demonstration persistence using browser LocalStorage",
      "Mobile-friendly layouts designed with CSS Flexbox and Grid for zero horizontal overflow"
    ],
    technicalNotes: "This project is a frontend implementation demonstrating component architecture, client-side validation, and accessibility. It does not connect to live hospital scheduling databases.",
    githubUrl: null, // Omit repository link as none is publicly configured
    liveDemoUrl: null // Omit live demo as none is publicly deployed
  },
  {
    id: "mom-management",
    title: "Minutes of Meeting (MoM) Management System",
    type: "Company Project • Full Stack Application",
    shortDescription: "A web application designed to organize meeting updates, support role-based workflows, and provide a structured view of company meeting information.",
    problemStatement: "Solves internal corporate documentation disorganization by standardizing the capture of meeting updates, employee progress (past, present, future work), and deadlines under controlled role-based approval lifecycles.",
    myContribution: "Developed modular React frontend components and integrated them with Spring Boot REST APIs. Implemented role-based view controls (HR Admin, Coordinator, Manager, MIS), collaborative temporary edit access modals, meeting entry forms, and error-handling interceptors.",
    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "Context API",
      "Axios",
      "CSS3",
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL"
    ],
    features: [
      "Meeting header management with meeting date and coordinator assignment",
      "Structured work updates tracking past work, present work, future work, blockers, and deadlines",
      "Clear status lifecycles distinguishing active drafts from submitted, locked records",
      "Role-based view and action gating for Coordinators, Employees, HR Admins, and Managers",
      "Temporary collaborative edit session workflow with time-to-live restrictions and approval checkpoints",
      "Clean integration between Axios HTTP services and backend Spring Boot controllers"
    ],
    technicalNotes: "Commercial software engineered at Abhishyandh Global Solutions. Proprietary enterprise codebase; internal source and credentials are fully protected and omitted from public display.",
    githubUrl: null, // Internal company project; public repository omitted
    liveDemoUrl: null
  },
  {
    id: "food-delivery",
    title: "Food Delivery Web Application",
    type: "Personal Project • Java MVC Architecture",
    shortDescription: "A complete food ordering web application built using Java, Servlets, and JSP following the Model-View-Controller (MVC) and Data Access Object (DAO) architecture.",
    problemStatement: "Provides a practical e-commerce platform for customers to browse restaurants, explore menu items, manage an interactive shopping cart, and submit orders with relational database persistence.",
    myContribution: "Designed and implemented the full application from the ground up: created server-rendered dynamic web pages using JSP and CSS, handled client requests and session management with Java Servlets, and authored DAO classes executing JDBC queries against MySQL.",
    technologies: [
      "Java",
      "Servlets",
      "JavaServer Pages (JSP)",
      "JDBC",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Apache Tomcat"
    ],
    features: [
      "Model-View-Controller (MVC) and Data Access Object (DAO) architectural pattern",
      "Dynamic server-rendered pages using JSP with CSS custom properties and responsive card grids",
      "Session-based shopping cart management via Java HttpSession (item addition, removal, quantity increments)",
      "CRUD operations implemented with JDBC and PreparedStatement to prevent SQL injection vulnerabilities",
      "Atomic transaction management for order placement linking parent orders to order line items",
      "Relational schema in MySQL covering users, restaurants, menu items, orders, and addresses"
    ],
    technicalNotes: "Personal full-stack project demonstrating core Java web fundamentals, database connectivity, and session management on Apache Tomcat.",
    githubUrl: "https://github.com/VinayKumar0745/FoodDelivery", // Confirmed public repository
    liveDemoUrl: null // Local Apache Tomcat deployment
  }
];
