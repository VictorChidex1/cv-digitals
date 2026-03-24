# Lessons & Rules Log

This file tracks corrections and lessons learned to prevent recurring mistakes.

## Self-Improvement Workflow
- Any time the user corrects a mistake, log the context and write a rigid rule to prevent it hereafter.
- Never repeat a logged mistake.

## Learned Lessons

### 2026-03-24: Tailwind v4 Ecosystem Friction
- **Context:** Project Overview mandated Tailwind v4. However, upgrading to `@tailwindcss/vite` threw persistent `TypeError` and Oxide Scanner errors (`Missing field negated on ScannerOptions`) due to deep peer dependency conflicts with `vite@8.0.2` and underlying Node environment bindings.
- **Rule:** When bleeding-edge framework versions (Vite 8 + Tailwind v4) cause catastrophic compilation blockers that cannot be resolved elegantly, dynamically fallback to the stable v3 ecosystem (`tailwindcss@3.4`, PostCSS). Stability and forward momentum prioritize over fighting broken ecosystem binaries.
