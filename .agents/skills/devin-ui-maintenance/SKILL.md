---
name: devin-ui-maintenance
description: Maintain and enforce Devin UI components, theme system, color tokens, typography, and layout rules cleanly with zero bloat. Use whenever creating or updating Devin/Puku UI components, pages, navigation, or styles.
---

# Devin UI Maintenance Skill

This skill defines the technical standards, design tokens, typography rules, and component patterns required to maintain the Devin / Puku UI ecosystem. Follow these instructions strictly to ensure aesthetic precision, theme integrity, and zero extraneous dependencies or visual bloat.

---

## 1. Core Principles

- **Strict Minimalist Scope**: Only write or update code necessary for the target component or page. Never add third-party styling packages, redundant wrapper divs, or unnecessary UI libraries.
- **Theme & Token Uniformity**: Always consume predefined CSS theme tokens (`var(--color-dt-bg)`, `var(--color-dt-text)`, `var(--color-dt-primary)`, `var(--color-dt-tint)`, `var(--color-dt-divider)`).
- **Typography Standard**: Use designated typography stacks (`--font-heading`, `--font-body`, `--font-mono`) and maintain fluid font scaling and proper line-heights.
- **SSR & Animation Safety**: When using GSAP, Framer Motion, or DOM manipulation, wrap client interactions in `'use client'` components or dynamic `useEffect` imports to avoid Next.js server-side hydration mismatches.

---

## 2. Theme & Design Tokens

### Color Palette Tokens
- **Primary Background (`--color-dt-bg`)**: `#f8f7f5` (Light mode) / `#0b0c10` (Dark surfaces)
- **Primary Text (`--color-dt-text`)**: `#191919` (Light) / `#e0e6ed` (Dark)
- **Secondary Text (`--color-dt-text-secondary`)**: `#717171` (Light) / `#94a3b8` (Dark)
- **Brand Accent (`--color-dt-primary`)**: `#3210ff` / `#3b82f6` (Blue emphasis)
- **Divider Lines (`--color-dt-divider`)**: `#eae9e7` / `#1e293b`
- **Surface Tints (`--color-dt-tint`)**: `#f1f0ee` / `#111318`

### Glassmorphism & Dropdowns
- **Nav Dropdowns**: Dark surface (`#2a2a2a`), subtle border (`#555`), shadow (`0 22px 32px rgba(0, 0, 0, 0.33)`).
- **Cards & Bento Grids**: Glassmorphism backgrounds (`bg-white/[0.03]`), border glow (`border-white/10 hover:border-blue-500/40`), micro-animations on hover (`hover:-translate-y-1`).

---

## 3. Typography Rules

### Font Families
- **Heading (`--font-heading`)**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Body (`--font-body`)**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Monospace (`--font-mono`)**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

### Typography Scale & Hierarchy
- **H1 (Hero Titles)**: `text-4xl md:text-6xl font-extrabold tracking-tight`
- **H2 (Section Headings)**: `text-2xl md:text-3xl font-bold tracking-tight`
- **H3 (Card / Subsection Titles)**: `text-lg font-semibold`
- **Body Large**: `text-lg md:text-xl font-medium text-slate-300`
- **Body Standard**: `text-base text-slate-400 leading-relaxed`
- **Caption / Badges**: `font-mono text-xs uppercase tracking-widest`

---

## 4. Component Rules

### Header & Navigation
- Fixed top position with backdrop blur (`backdrop-blur-md bg-dt-bg/90`).
- Responsive mobile drawer using accessible dialog states and Framer Motion spring physics.
- Dropdown menus must close on `Escape` key press or clicking outside.

### Page Containers & Bento Grids
- Use `max-w-7xl mx-auto px-6` for page content alignment.
- Use 4-column responsive grid structures (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`).

### Buttons & Call-to-Actions (CTA)
- **Primary CTA**: Solid pill or rounded rectangle (`bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30`).
- **Secondary CTA**: Outline variant (`bg-white/5 hover:bg-white/10 border border-white/10 text-white`).
- Smooth hover transitions (`transition-all hover:scale-[1.02]`).

---

## 5. Maintenance Checklist

When editing or maintaining any Devin UI component:
1. [ ] **No extra packages**: Do not add extra UI libraries (e.g., Shadcn, Chakra, MUI) or extra CSS files.
2. [ ] **Strict token usage**: Check that colors and typography use predefined variables or tailwind utility matches.
3. [ ] **TypeScript Types**: Ensure all component props have explicit TypeScript interfaces.
4. [ ] **Accessibility (a11y)**: Include `aria-expanded`, `aria-label`, `role="dialog"`, and `skip-link` where appropriate.
5. [ ] **Build Validation**: Run `npm run typecheck` and `npm run build` to confirm zero static generation or bundling errors.
