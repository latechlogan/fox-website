# Deferred Features

Sections removed from the site pending client-provided content. Each item notes what's needed and how to restore it.

---

## Team Grid (About Us + Careers)

**Blocked by:** staff photos for each team member

**To restore:**
1. Add photos to `src/assets/` and wire them into `src/data/team.ts`
2. In `StaffBlock.astro`, add `photo` back to the prop destructuring and swap `placeholder` for `photo` in the `<Image src>` attribute
3. In `about-us.astro`: re-add `import Team` and add `<div id="team-grid"><Team /></div>` after the second Hero section
4. In `careers.astro`: re-add `import Team` and add `<Team />` before the benefits `<SectionGrid>`

---

## Logo Grid (About Us + Homepage)

**Blocked by:** client-provided partner/award logos. `src/data/logos.ts` currently holds Raising Cane's, FastPace Health, and LiveSwitch, but these are placeholders used to build and preview `LogoGrid.astro` — not final, client-approved assets. A grid needs roughly 3–6 logos to look right visually, so more real logos are needed before this ships (and the `awards` export is still empty, pending client-provided award logos).

**To restore:**
1. Replace the placeholder entries in `src/data/logos.ts` with real client-approved logo assets (aim for 3–6) added to `src/assets/`
2. In `about-us.astro`: re-add `import LogoGrid` and add the two `<LogoGrid>` instances after the Team section
3. In `index.astro`: re-add `import LogoGrid` and add `<LogoGrid heading="Trusted by Louisiana families and businesses" />` before `</BaseLayout>`
4. Awards: once award logos are provided, add the assets to `src/assets/`, uncomment and populate the `awards` export in `logos.ts`, and add a second `<LogoGrid>` instance in `about-us.astro`

---

## Service Area Image (service-area page)

**Blocked by:** a real service area map or photo

**To restore:**
1. Add the image asset to `src/assets/`
2. In `service-area.astro`: re-add `import Image` and the asset import, restore the image block, and add back the `.service-area__img` CSS rule:
   ```css
   .service-area__img {
     width: 100%;
     aspect-ratio: 16 / 9;
     object-fit: cover;
   }
   ```
