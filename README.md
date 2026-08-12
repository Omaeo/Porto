# Developer Portfolio

A responsive, single-page developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalize

Update the text, links, skills, projects, and education in `data/portfolio.ts`. Replace `public/hero-portrait.svg` with your portrait, or change `heroImage` and `heroImageAlt` in the portfolio data. Update the metadata and placeholder domain in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` before deployment.

## Checks

```bash
npm run lint
npm run build
```

## Environment Variables

Keep real environment values in `.env.local`. Environment files and common credential formats are excluded by `.gitignore`; only placeholder variable names belong in `.env.example`.
