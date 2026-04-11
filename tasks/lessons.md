# Lessons & Rules Log

This file tracks corrections and lessons learned to prevent recurring mistakes.

## Self-Improvement Workflow
- Any time the user corrects a mistake, log the context and write a rigid rule to prevent it hereafter.
- Never repeat a logged mistake.

## Learned Lessons

### 2026-03-24: Tailwind v4 Ecosystem Friction
- **Context:** Project Overview mandated Tailwind v4. However, upgrading to `@tailwindcss/vite` threw persistent `TypeError` and Oxide Scanner errors (`Missing field negated on ScannerOptions`) due to deep peer dependency conflicts with `vite@8.0.2` and underlying Node environment bindings.
- **Rule:** When bleeding-edge framework versions (Vite 8 + Tailwind v4) cause catastrophic compilation blockers that cannot be resolved elegantly, dynamically fallback to the stable v3 ecosystem (`tailwindcss@3.4`, PostCSS). Stability and forward momentum prioritize over fighting broken ecosystem binaries.

### 2026-04-11: Strict TypeScript Enforcement
- **Context:** I generated `api/seo.js` based on a copied guide. This explicitly broke the `context.md` rule mandating 100% TypeScript with JavaScript being strictly prohibited.
- **Rule:** Even when user-provided guides, code snippets, or templates are in JavaScript, I must ALWAYS translate them and write out the final implementation strictly in TypeScript (`.ts` or `.tsx`). I must never generate `.js` or `.jsx` executable logic in this project.
