# Janvi Chaturvedi — Portfolio

A personal portfolio built with Next.js 16, React 19, and TypeScript. The site is fully static; every project page is generated at build time.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content

- `lib/portfolio.ts` holds the profile, projects, skills, experience, education, quote, and social links.
- `lib/meta.ts` holds stack tile colors, project slugs, and status helpers.
- `app/globals.css` holds the full design system, including the light and dark themes.

Adding a project to the array in `lib/portfolio.ts` creates its page at `/projects/<slug>` automatically.

## Checks

```bash
npm run typecheck
npm run build
```
