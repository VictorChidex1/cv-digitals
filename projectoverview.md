# Project Overview: CV Digitals - High-Performance Agency Website

## 1. Project Summary

**CV Digitals** is a premium digital agency operating at the intersection of high-level tech (software/web development) and entertainment (music promotion/events). The website must serve as living proof of technical competence—blazing fast, highly interactive, and optimized for lead conversion.

## 2. Technology Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS.
- **UI Components:** Shadcn UI (Radix UI base), Lucide React.
- **Animation:** Motion (formerly Framer Motion), GSAP ScrollTrigger (for deep-dive case studies).
- **Forms & State:** React Hook Form, Zod, Zustand.
- **Backend / Infrastructure:** Firebase (Hosting for the SPA, Firestore for lead capture/inquiries).

## 3. UI/UX & Branding Guidelines

- **Identity:** Corporate, authoritative, but modern and cutting-edge.
- **Color Palette:** - Primary (Tech/Precision): CV Emerald (`emerald-600`).
  - Accent (Energy/Creative): CV Gold (`amber-500`).
  - Neutrals: Dark Slate (`slate-900`) text on clean light backgrounds (`slate-50`).
- **Typography:** Clean, sans-serif typography optimized for readability and fast loading.
- **Motion:** Smooth, purposeful entrance animations. No jagged or delayed loading states.

## 4. Architectural Breakdown & Sitemap

### A. Home Page (The Converter)

- **Hero Section:** High-impact headline, clear subtext, and dual CTAs ("View Services", "Book Consultation").
- **Trust Bar:** Client/brand logos.
- **Core Pillars:** Visual blocks for Web Dev, Music Promotion, and Event Management.
- **Featured Work:** Highlight 1-2 massive wins (e.g., Oxygen Health Systems landing page).

### B. Core Service Pages

- `/services/web-development`: Focus on custom business sites, e-commerce, and headless CMS.
- `/services/music-promotion`: Tailored for artists, Afrobeats campaigns, and brand amplification.
- `/services/event-management`: Corporate and entertainment event capabilities.

### C. Supporting Pages

- `/work`: Project galleries categorized by Tech vs. Entertainment. Deep-dive case studies for major builds.
- `/about`: The agency identity, mission statement, and leadership/process overview.
- `/contact`: Frictionless lead capture. Includes direct contact info, WhatsApp business link, and a Zod-validated "Project Inquiry Form" (filtering by budget and type).

## 5. Folder Structure

```text
/
├── public/
│   └── assets/     # Static assets (Logos, gallery images, favicons) - Served as-is
├── src/
│   ├── components/ # All React components
│   │   ├── ui/     # Shadcn generated components (button.tsx, input.tsx, etc.)
│   │   ├── layout/ # App shell (Navbar, Footer, PageWrapper)
│   │   ├── home/   # Home specific (Hero, TrustBar, CorePillars)
│   │   ├── shared/ # Reusable blocks (TestimonialSlider, ProjectCard)
│   │   └── forms/  # Contact and lead capture forms
│   ├── lib/        # Utilities and configurations
│   │   ├── firebase.ts
│   │   └── utils.ts
│   ├── pages/      # Route views
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Work.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── store/      # Zustand global state
│   ├── App.tsx     # Main wrapper and React Router setup
│   ├── main.tsx    # React DOM entry point
│   └── index.css   # Tailwind v4 imports and custom CSS variables
```

6. Execution Roadmap
   AI Assistant: Await the developer's command to begin each step. Follow the tasks/todo.md workflow strictly.

Step 1: Scaffold Vite/React/TS, install Tailwind, and initialize Shadcn UI (Radix base). (Completed)

Step 2: Set up the tasks directory (todo.md, lessons.md) to establish the orchestrator workflow.

Step 3: Build the layout components (Navbar, Footer) and configure React Router.

Step 4: Develop the Home Page (Hero, Trust Bar, Core Pillars) utilizing CV Emerald and CV Gold branding.

Step 5: Build the dedicated Service Pages and the Work/Case Study gallery.

Step 6: Implement the Zod-validated Contact Form using React Hook Form and connect to Firestore.

Step 7: Apply Motion animations for page transitions and scroll reveals.

Step 8: Final performance audit and deployment to Firebase Hosting.
