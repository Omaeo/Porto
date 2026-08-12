# AGENTS.md — Developer Portfolio Project

## Project Overview
Building a personal portfolio website for a **software developer**, styled **Dark / Techy** (terminal-inspired, monospace accents, subtle neon glow). Single-page scroll layout, fully responsive, fast to load, no unnecessary bloat.

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animation (optional):** Framer Motion — keep subtle, snappy, not flashy
- **Deployment target:** Vercel
- **Fonts:** A bold grotesk/mono font via `next/font` (e.g. Space Grotesk, Archivo Black, or JetBrains Mono for code-related accents)

## Design System (Dark / Techy Rules)
Follow these consistently across every component:

- **Background:** near-black (`#0A0A0A` / `#0D1117`-style), not pure `#000` — gives depth
- **Text:** off-white/light gray for body (`#E4E4E4`), pure white for headings, muted gray for secondary text (`#8B949E`)
- **Accent colors:** 1-2 glow/neon accents used sparingly for emphasis — e.g. terminal green (`#00FF9C` / `#39FF14`), cyan (`#00E5FF`), or purple (`#A855F7`). Don't overuse — accents highlight key actions/links, not everything.
- **Typography:**
  - Monospace font for headings, code snippets, and accents (e.g. JetBrains Mono, Fira Code, Space Mono)
  - Clean sans-serif for body text readability (e.g. Inter, Geist)
  - Consider a blinking cursor `_` or terminal-prompt style (`>` or `$`) as a design motif in the hero
- **Cards/Panels:**
  - Subtle border (`1px solid #2A2A2A` or similar), slightly lighter background than page bg (`#111318`)
  - Optional subtle glow on hover (soft box-shadow in the accent color, low opacity)
  - Avoid heavy skeuomorphism — keep it flat with subtle depth via borders/glow, not gradients or 3D
- **Interactive details (optional, keep tasteful):**
  - Terminal-style typing animation for the hero tagline
  - Hover states that feel "digital" — text glitch on hover, glowing underline, or monospace `[hover]` bracket effect
  - Code-block styling for tech stack tags (e.g. `<div className="...">` look, or wrapped in backticks)
- **Layout:**
  - Grid-based, generous dark whitespace, sections separated by subtle borders or gradient dividers
  - Keep it clean — the "techy" feeling should come from typography/color/motifs, not clutter

## Site Structure (Single Page, in order)
1. **Hero** — Name, role/tagline, primary CTA button (e.g. "View Work" or "Download CV")
2. **About Me** — short bio (~80–120 words), optional photo/avatar in a bordered frame
3. **Skills** — grid of bold tag/card elements grouped by category (Languages / Frameworks / Tools)
4. **Projects / Work** — 3–6 project cards, each with: title, 1–2 line description, tech stack tags, live/repo link buttons, optional screenshot
5. **Education** — simple list or timeline: degree, institution, year
6. **Contact** — email + social links (GitHub, LinkedIn, X, etc.) as bold button links

## Build Order (recommended for incremental prompting)
1. Scaffold project: `create-next-app` (App Router, TypeScript, Tailwind), set up global styles (colors, fonts, base button/card classes)
2. Build reusable components first: `Button`, `Card`, `Tag`, `SectionHeading` — establish the brutalist style here before building sections
3. Build sections in order: Hero → About → Skills → Projects → Education → Contact
4. Add responsiveness (mobile-first check on all sections)
5. Add hover/interaction polish (shadow-shift effects, button states)
6. Final pass: accessibility check (contrast, alt text, semantic HTML), performance check with `next build`
7. Connect GitHub repo to Vercel for deploy (auto-deploys on push to main)

## Content Placeholders
Replace with real content before deployment:
- Tagline: `[1-2 sentence tagline]`
- Bio: `[80-120 word bio]`
- Skills list: `[Languages], [Frameworks], [Tools]`
- Projects: `[title, description, tech stack, links, screenshot]` × 3-6
- Education: `[degree, institution, year]`
- Contact: `[email]`, `[GitHub]`, `[LinkedIn]`, `[X/other socials]`

## Constraints / Preferences
- Keep code clean and componentized — no giant single-file pages
- No unnecessary dependencies — stick to Next.js, Tailwind, and Framer Motion (if used)
- Prioritize readability of code over cleverness
- Mobile responsiveness is required, not optional
- Avoid bright/light backgrounds, pastel colors, or heavy gradients/glassmorphism — keep it dark, focused, and code-inspired
- Ensure text contrast meets accessibility standards even on the dark background (test with a contrast checker)
- Use Next.js conventions: Server Components by default, `"use client"` only where interactivity is needed (buttons with hover state, animations, forms)
- Use `next/image` for any images/screenshots (optimization out of the box)
- Keep `metadata` (title, description, OG tags) set up in `layout.tsx` for SEO/social sharing
