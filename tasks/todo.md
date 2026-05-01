# Execution Workflow & TODOs - CV Digitals

## Implementation Plan

- [x] **Step 1:** Scaffold Vite/React/TS, install Tailwind, and initialize Shadcn UI (Radix base).
- [x] **Step 2:** Set up the tasks directory (todo.md, lessons.md) to establish the orchestrator workflow.
- [x] **Step 3:** Build the layout components (Navbar, Footer) and configure React Router.
- [/] **Step 4:** Develop the Home Page (Hero, Trust Bar, Core Pillars) utilizing CV Emerald and CV Gold branding.
- [ ] **Step 5:** Build the dedicated Service Pages and the Work/Case Study gallery.
- [ ] **Step 6:** Implement the Zod-validated Contact Form using React Hook Form and connect to Firestore.
- [ ] **Step 7:** Apply Motion animations for page transitions and scroll reveals.
- [ ] **Step 8:** Final performance audit and deployment to Firebase Hosting.

## Current Sub-Tasks

**Step 3 Sub-Tasks:**

- [x] Analyze dependencies (`package.json`).
- [x] Draft detailed implementation plan.
- [x] Configure React Router with route placeholders.
- [x] Build responsive `Navbar` component integrating Shadcn primitives and CV branding.
- [x] Build `Footer` component.

**Step 4 Sub-Tasks (Hero Section):**

- [x] Draft Step 4 Implementation Plan and verify assets.
- [x] Install GSAP, `@gsap/react`, and Lenis.
- [x] Implement `src/lib/smooth-scroll.ts`.
- [x] Construct `Hero.tsx` layout (Dark Mode + Glassmorphism).
- [x] Implement initial load fades and floating effects.
- [x] Implement GSAP ScrollTrigger "Mind-Blow" zoom effect.

**Step 4 Sub-Tasks (Trust Bar):**

- [x] Build Trust Bar Layout framework in dark mode.
- [x] Apply CSS `mask-image` (Abyss effect).
- [x] Import absolute client Logos (`canman, foodflow, veravox, novluma, kudiflow, oxygen-health`).
- [x] Construct `opacity/grayscale` ghosting states perfectly fading into high-density CV Emerald glows.
- [x] Link Tailwind CSS marquee animation orchestration to DOM element.

## Phase: Backend & Infrastructure (Step 6)

- [ ] Initialize Firebase CLI and Local Emulator Suite (Firestore & Functions).
- [ ] Configure `src/lib/firebase.ts` to switch to `127.0.0.1` when in `DEV` mode.
- [ ] Scaffold `functions/.env` for secure API key storage.
- [ ] Build the `sendContactEmail` Firebase Cloud Function (TypeScript).
- [ ] Connect the frontend Zod/React Hook Form to the local Cloud Function.

## Phase: SEO Production Switch (Post-Blaze Upgrade)

- [ ] **Upgrade Plan:** Purchase definitive `.com` domain and upgrade Firebase project to Blaze (Pay-as-you-go).
- [ ] **Activate Interceptor:** Rewrite `firebase.json` to logically ignore `index.html` in hosting and route `**` traffic to the `seoInterceptor` Cloud Function.
- [ ] **Final Deploy:** Run `npm run build:firebase` (or `npm run build`) and execute `firebase deploy` to launch the backend Interceptor and cement production SEO.

{
"hosting": {
"public": "dist",
"ignore": [
"firebase.json",
"**/.*",
"**/node_modules/**",
"index.html" // 1. ADD THIS LINE
],
"rewrites": [
{
"source": "**",
"function": "seoInterceptor" // 2. CHANGE DESTINATION TO FUNCTION
}
]
},
"functions": [ // 3. ADD THIS ENTIRE FUNCTIONS BLOCK AT THE BOTTOM
{
"source": "functions",
"codebase": "default",
"ignore": [
"node_modules",
".git",
"firebase-debug.log",
"firebase-debug.*.log"
]
}
]
}
