# Reddi Vinay Kumar — Developer Portfolio

A responsive personal developer portfolio engineered with **React 18**, **Vite**, and **Vanilla CSS** (CSS custom properties, Flexbox, and Grid).

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation & Development
```bash
# Navigate to portfolio directory
cd portfolio

# Install dependencies (already installed if cloned with node_modules)
npm install

# Start Vite development server
npm run dev
```
Open your browser to `http://localhost:5173/` (or the port indicated in your terminal).

---

## 🛠️ Production Build

To build an optimized production bundle:
```bash
npm run build
```
The compiled, minified bundle will be generated in `dist/`.

To preview the production bundle locally:
```bash
npm run preview
```

---

## 📂 Project Architecture

```
portfolio/
├── index.html                   # HTML entry point with meta tags & Google Fonts (Inter, Outfit)
├── package.json                 # Minimal dependencies (React 18, Lucide React, Vite)
├── vite.config.js               # Vite build configuration with React plugin
├── public/                      # Static assets (place your resume.pdf here)
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application orchestrator & modal state
    ├── components/              # Modular, reusable UI components
    │   ├── ContactForm.jsx      # Controlled contact form with field validation
    │   ├── Footer.jsx           # Clean copyright & scroll-to-top component
    │   ├── Navbar.jsx           # Sticky glassmorphic navbar with mobile drawer
    │   ├── ProjectCard.jsx      # Interactive project cards with tech tags & action buttons
    │   ├── ProjectModal.jsx     # Accessible dialog (Escape key, scroll lock, ARIA)
    │   └── SectionHeading.jsx   # Standardized section headers with badges
    ├── data/                    # Single source of truth data files
    │   ├── contributions.js     # Continuous learning & problem solving data
    │   ├── education.js         # Academic credentials (VIT-AP B.Tech)
    │   ├── experience.js        # Professional experience (Abhishyandh Global Solutions)
    │   ├── profile.js           # Candidate profile, social links, contact info
    │   ├── projects.js          # Featured projects (Hospital Care, MoM, Food Delivery)
    │   └── skills.js            # Categorized skills (Frontend, Java Backend, Full Stack)
    ├── sections/                # Full-width page sections in requested hierarchy
    │   ├── Hero.jsx             # Headline, role badges, action buttons
    │   ├── About.jsx            # Professional narrative & key focus highlights
    │   ├── Skills.jsx           # Interactive skills grid with level indicators
    │   ├── Projects.jsx         # Featured projects in strict priority order
    │   ├── Experience.jsx       # Corporate engineering experience timeline
    │   ├── Education.jsx        # Academic background & course highlights
    │   ├── Contributions.jsx    # GitHub activity & problem-solving focus
    │   └── Contact.jsx          # Contact info cards (Phone, Email, LinkedIn, GitHub) & form
    └── styles/                  # Pure Vanilla CSS design system
        ├── variables.css        # Slate/Navy dark-mode tokens & typography
        ├── global.css           # Resets, typography, layout containers, buttons
        ├── navbar.css           # Glassmorphism, mobile toggle & sliding drawer
        ├── hero.css             # Hero layout, greeting pill, status indicators
        ├── sections.css         # Card styles, timelines, skill bars, tags
        ├── projects.css         # Grid layout, card hover elevation, tech badges
        ├── modal.css            # Backdrop overlay, accessible modal layout
        └── contact.css          # Contact grid, info cards, form styling
```

---

## 📄 Enabling Resume PDF Download

1. Export or save your resume as `resume.pdf`.
2. Copy `resume.pdf` into `portfolio/public/resume.pdf`.
3. Open `portfolio/src/data/profile.js` and set:
   ```javascript
   resume: {
     available: true, // Change from false to true
     pdfUrl: "/resume.pdf",
     label: "Resume"
   }
   ```
4. The "Download Resume" buttons in both the Navigation Bar and the Hero Section will automatically become active.

---

## 🌐 Deploying to Vercel or Netlify

### Deploy with Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and set the **Root Directory** to `portfolio`.
4. Framework Preset: **Vite** (build command: `npm run build`, output directory: `dist`).
5. Click **Deploy**.

### Deploy with Netlify
1. Sign in to [Netlify](https://www.netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
2. Select your repository.
3. Set **Base directory**: `portfolio`, **Build command**: `npm run build`, **Publish directory**: `portfolio/dist`.
4. Click **Deploy Site**.
