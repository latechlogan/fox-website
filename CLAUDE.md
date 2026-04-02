# Fox Family Electric — Website

Marketing website for Fox Family Electric, a Louisiana-based electrical contractor.

## Tech Stack

- **Astro** (v6) — static site framework; `.astro` files for pages and most components
- **React** (v19) — used only for interactive components (e.g., carousels); `.jsx` files
- **TypeScript** — strict mode; data files and types in `src/data/`
- **Custom CSS** — no Tailwind; fluid typography via CSS custom properties (`src/css/global.css`)
- **react-icons** — icon components passed as props (e.g., `FaBolt` from `react-icons/fa`)

## Commands

```bash
npm run dev      # Start local dev server (http://localhost:4321)
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

Requires Node >= 22.12.0.

## Directory Structure

```
src/
├── assets/          # Images (imported via astro:assets for optimization)
├── components/
│   ├── grid-blocks/ # IconBlock, CTABlock, ReviewBlock, TextBlock, StaffBlock — used inside SectionGrid
│   └── *.astro      # Section-level components (Hero, SectionGrid, Header, FAQ, Team, etc.)
├── css/
│   └── global.css   # CSS reset + fluid type scale + utility/container classes
├── data/            # Typed data arrays (reviews, logos, iconBlocks, faq, team, textBlocks)
├── layouts/
│   └── BaseLayout.astro  # Root layout (Header, GlobalCTA, Footer, global styles)
└── pages/
    ├── index.astro
    ├── about-us.astro
    ├── faq.astro
    ├── generators.astro
    └── what-we-do/
        ├── index.astro
        ├── service-calls.astro
        └── projects.astro
```

## Key Conventions

- **Container classes:** `.fw-container` (full-width) wraps `.mw-container` (max-width centered)
- **Buttons:** `<a class="btn">` for primary, `<a class="btn btn-secondary">` for secondary
- **Data → components:** data arrays live in `src/data/`; pages import and map over them
- **Astro vs React:** prefer `.astro` by default; use `.jsx` only when client-side interactivity is needed (add `client:load` or `client:visible` directive when using React in Astro)

See `COMPONENTS.md` for full prop/slot reference for every component.
