# Fox Family Electric — Website

Marketing website for Fox Family Electric, a Louisiana-based electrical contractor.

## Tech Stack

- **Astro** (v6) — static site framework; `.astro` files for pages and most components
- **React** (v19) — used only for interactive components (carousels, review rotator, form handling); `.jsx` files
- **TypeScript** — strict mode; data files and types in `src/data/`
- **Custom CSS** — no Tailwind; fluid typography via CSS custom properties (`src/css/global.css`); form styles in `src/css/forms.css`
- **react-icons** — icon components passed as props (e.g., `FaBolt` from `react-icons/fa`)
- **react-social-icons** — social links in `Footer.astro`
- **@pheralb/toast** — submit feedback in `ApplicationForm.jsx` / `ContactForm.jsx` (both post to Web3Forms)

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
│   ├── cta/         # CTAPhone — reusable CTA button components
│   ├── grid-blocks/ # IconBlock, CTABlock, ReviewBlock, TextBlock, StaffBlock — used inside SectionGrid
│   ├── *.jsx        # Interactive React components (ApplicationForm, ContactForm, HeroReviewRotator, ReviewCarousel)
│   └── *.astro      # Section-level components (Hero, SectionGrid, Header, FAQ, Team, etc.)
├── css/
│   ├── global.css   # CSS reset + fluid type scale + utility/container classes
│   └── forms.css    # Shared styles for ApplicationForm / ContactForm
├── data/            # Typed data arrays (reviews, logos, iconBlocks, faq, team, textBlocks)
├── layouts/
│   └── BaseLayout.astro  # Root layout (Header, GlobalCTA, Footer, global styles)
└── pages/
    ├── index.astro
    ├── about-us.astro
    ├── application.astro
    ├── book-online.astro
    ├── careers.astro
    ├── contact.astro
    ├── faq.astro
    ├── financing.astro
    ├── generators.astro
    ├── liveswitch.astro
    ├── moxey.astro
    ├── pay-invoice.astro
    └── what-we-do/
        ├── index.astro
        ├── projects.astro
        ├── service-area.astro
        └── service-calls.astro
```

## Key Conventions

- **Container classes:** `.fw-container` (full-width) wraps `.mw-container` (max-width centered)
- **Buttons:** `<a class="btn">` for primary, `<a class="btn btn-secondary">` for secondary
- **Data → components:** data arrays live in `src/data/`; pages import and map over them
- **Astro vs React:** prefer `.astro` by default; use `.jsx` only when client-side interactivity is needed (add `client:load` or `client:visible` directive when using React in Astro)

See `COMPONENTS.md` for full prop/slot reference for every component, and `TODO.md` for sections deferred pending client-provided content (team photos, partner/award logos, service area image).
