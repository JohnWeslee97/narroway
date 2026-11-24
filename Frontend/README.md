# Narroway | Business Solution

Company website for Narroway, built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Editing content

All text (services, stats, packages, testimonials, FAQ, contact details) lives in
`src/content/site.ts`. Lines marked `PLACEHOLDER` need Narroway's real details before launch.

## Structure

- `src/app` – layout, global styles, home page
- `src/components` – one component per section (Navbar, Hero, Stats, Services, Process, Testimonials, Packages, FAQ, Contact, Footer)
- `public` – logo files and favicon

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new); no extra configuration needed.
