# Zefanya Felicita Adithya | Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build      # type-checks, then outputs static files to dist/
npm run preview    # serve dist/ locally to test the production build
```

`dist/` is a plain static site. `vite.config.ts` uses `base: './'`, so it works from a domain root or a sub-folder.

## Deploy

| Host | Settings |
| --- | --- |
| Netlify / Cloudflare Pages / Vercel | Build command `npm run build`, output directory `dist` |
| GitHub Pages | Build locally, then publish the `dist/` folder (or use a Pages workflow that runs the build command) |
| Any static host | Upload the contents of `dist/` |

## Where to edit things

- `src/data/index.ts`: projects, skills, timeline, social links, nav sections. Replace the `'#'` project URLs, the GitHub, LinkedIn and email links.
- `public/images/`: drop the profile photo and project screenshots here, then reference them as `/images/your-file.png`. The project cards and the profile card use pastel placeholder blocks until you swap them in (`.img` and `.ph` in `src/components/Projects.tsx`, `ProjectModal.tsx` and `About.tsx`).
- `src/index.css`: all visual styling (colors, tokens, animations), copied 1:1 from the approved design.
- `src/components/FloatingDecorations.tsx`: which doodles appear in each section.
- `src/components/Contact.tsx`: the form is a demo. Connect Formspree, Netlify Forms or your own API in `onSubmit`.

## Structure

```
src/
  components/  Navbar, Hero, Projects, ProjectModal, About, Skills, Experience,
               Contact, Footer, FloatingDecorations, Glyph, Icons, Reveal, TagList
  hooks/       useActiveSection, useInView, useParallax
  data/        index.ts
  types.ts
  index.css
  main.tsx, App.tsx
```
