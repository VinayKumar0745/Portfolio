/**
 * Vinay Kumar Reddi - Portfolio Application Scripts
 * Modern interactions: Project filtering, Skill filtering, Modal dialogs, Smooth Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Skills Filter Tabs
  const skillTabs = document.querySelectorAll('.skill-tab-btn');
  const skillBadges = document.querySelectorAll('.skill-badge');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      skillBadges.forEach(badge => {
        const category = badge.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          badge.style.display = 'inline-flex';
        } else {
          badge.style.display = 'none';
        }
      });
    });
  });

  // Project Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        if (filter === 'all' || tags.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Details Data
  const projectDetails = {
    mom: {
      title: "Minutes of Meeting (MoM) Management Platform",
      tag: "Corporate Project • Abhishyandh Global Solutions",
      stack: ["React.js 18", "Spring Boot 3", "Spring Data JPA", "Hibernate ORM", "MySQL", "JWT", "Axios", "JavaMailSender"],
      overview: "An enterprise workflow and governance system designed to orchestrate the lifecycle of official meeting records, draft preparations, collaborative approvals, and automated stakeholder notifications.",
      keyFeatures: [
        "<strong>Declarative RBAC:</strong> Multi-tiered permissions across HR Admin, MoM Coordinator, IT Admin, and MIS users, conditionally rendering sensitive interface views and API endpoints.",
        "<strong>Collaborative Edit Sessions:</strong> A time-bounded edit unlock mechanism. Coordinators can request temporary access to submitted meeting minutes with IT Admin approval and automated countdown expiration.",
        "<strong>Dual Adapter Pattern:</strong> Structured frontend service layer enabling quick local development mode with seed data and live REST production mode with Axios.",
        "<strong>Transactional Email Dispatch:</strong> Automated meeting summary emails using JavaMailSender with responsive HTML templates, isolated database transactions, and an environment safety kill-switch."
      ],
      interviewHighlight: "Designed to eliminate unstructured meeting notes and enforce corporate governance. Demonstrates full-stack understanding from React component state and route protection to JPA relational entity cascading and token verifiers."
    },
    hospital: {
      title: "Hospital Care Healthcare Web Portal",
      tag: "Corporate Project • Abhishyandh Global Solutions",
      stack: ["React.js 18", "Vite", "Modern CSS3", "Local Storage", "Accessibility (a11y)"],
      overview: "A patient-facing healthcare portal built to provide easy access to medical departments, dynamic doctor rosters, operational stats, and an interactive appointment request flow.",
      keyFeatures: [
        "<strong>Accessible Modal Architecture:</strong> Doctor detail profile modals with full keyboard navigation (Escape key dismissal), focus trapping, backdrop click isolation, and body scroll locking.",
        "<strong>Controlled Lead Capture:</strong> Interactive appointment request form with client-side field validation, dynamic department selectors, and local storage persistence.",
        "<strong>Mobile-First Styling:</strong> Built using modern CSS3 custom properties, CSS Grid, and Flexbox for zero layout shift and smooth cross-device responsiveness.",
        "<strong>Live Availability Indicators:</strong> Dynamic doctor availability badges showing next available consultation timings."
      ],
      interviewHighlight: "Showcases clean component modularity, web accessibility standards (WCAG/ARIA), and stateful form handling in React without third-party heavy UI libraries."
    },
    food: {
      title: "Food Delivery Web Application (MVC & DAO)",
      tag: "Personal Project • Java & Dynamic Web Development",
      stack: ["Java", "JavaServer Pages (JSP)", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3", "Apache Tomcat", "Maven"],
      repoLink: "https://github.com/VinayKumar0745/FoodDelivery",
      overview: "A complete food delivery web application built following the classic Model-View-Controller (MVC) and Data Access Object (DAO) architecture, handling restaurant discovery, cart persistence, and order checkout.",
      keyFeatures: [
        "<strong>Server-Rendered Dynamic Pages:</strong> Built using JSP, HTML5, and modern CSS variables for responsive restaurant cards, menus, and checkout pages.",
        "<strong>DAO Architectural Pattern:</strong> Decoupled data access interfaces and implementations (UserDAO, RestaurantDAO, MenuDAO, OrderDAO) executing parameterized SQL queries.",
        "<strong>Session-Based Cart:</strong> Managed via Java HttpSession, enabling real-time item addition, removal, quantity adjustments, and cumulative price calculations.",
        "<strong>Atomic Transactions:</strong> Ensured relational consistency when placing orders, linking parent orders with individual order items inside atomic JDBC transactions.",
        "<strong>Security:</strong> PreparedStatement interfaces implemented across all database queries to prevent SQL injection vulnerabilities."
      ],
      interviewHighlight: "Demonstrates core Java backend engineering fundamentals, relational database operations, connection management, and full-stack request-response lifecycles."
    }
  };

  // Technical Modal Handlers
  const modalOverlay = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data || !modalContent) return;

    const stackHtml = data.stack.map(s => `<span class="pill-tech">${s}</span>`).join(' ');
    const featuresHtml = data.keyFeatures.map(f => `<li>${f}</li>`).join('');
    const repoHtml = data.repoLink 
      ? `<div style="margin-top: 14px;"><a href="${data.repoLink}" target="_blank" class="btn btn-primary btn-sm"><i class="fa-brands fa-github"></i> View GitHub Repository</a></div>` 
      : '';

    modalContent.innerHTML = `
      <div class="modal-body">
        <span class="modal-tag">${data.tag}</span>
        <h3 id="modalTitle">${data.title}</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin: 12px 0 16px;">
          ${stackHtml}
        </div>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 16px; line-height: 1.6;">
          ${data.overview}
        </p>
        <h4 class="modal-section-title">Key Architectural Highlights:</h4>
        <ul class="modal-list">
          ${featuresHtml}
        </ul>
        <h4 class="modal-section-title">Technical Interview Defense Note:</h4>
        <p style="color: #93c5fd; font-size: 0.9rem; background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent-blue); line-height: 1.5;">
          ${data.interviewHighlight}
        </p>
        ${repoHtml}
      </div>
    `;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      if (projectId) openProjectModal(projectId);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  // Keyboard accessibility: Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });
});
