# Component Reference

Quick reference for all components — props, slots, and usage examples.

---

### `BaseLayout.astro`
Root layout wrapper used by every page. Renders `Header`, `GlobalCTA`, and `Footer` around page content. No props.

**Slots:**
- Default slot — page content

---

### `CTABlock.astro`
Bordered card block with an icon, heading, body, and a slot for action buttons. Always renders as a card (unlike `IconBlock` which has an optional `card` prop).

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `icon` | React icon component | Yes | e.g., `FaBolt` from `react-icons/fa` |
| `heading` | `string` | Yes | |
| `body` | `string` | Yes | |

**Slots:**
- `cta` — buttons/links shown at the bottom of the block

```astro
<CTABlock
  icon={FaStarOfLife}
  heading="Service"
  body="Electrical issues don't keep business hours."
>
  <div slot="cta" class="btn-group">
    <CTAPhone />
    <a href="" class="btn btn-secondary">Learn about service calls</a>
  </div>
</CTABlock>
```

---

### `FAQ.astro`
Renders a list of FAQs in definition list format with an optional outro section.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `body` | `string` | Yes | Intro text above the FAQ list |
| `faqs` | `{ question: string; answer: string }[]` | Yes | |
| `outro` | `{ heading: string; body: string; btnHref: string; btnLabel: string }` | No | Renders a CTA section below the FAQs |

```astro
<FAQ
  body="Common questions about our services."
  faqs={generalFAQ}
  outro={{ heading: "Still have questions?", body: "We're happy to help.", btnHref: "/contact", btnLabel: "Contact us" }}
/>
```

---

### `Footer.astro`
Static site footer with logo, contact info, social icons, nav links, and legal copy. No props.

---

### `GlobalCTA.astro`
Full-width CTA section rendered on every page via `BaseLayout`. Content is hardcoded (no props).

---

### `Header.astro`
Responsive site header with logo, nav links, and CTA buttons. Includes a mobile hamburger menu with JS toggle. No props.

---

### `Hero.astro`
Two-column section with text on one side and an image on the other. Stacks vertically on mobile.

| Prop | Type | Required | Default | Notes |
|------|------|:--------:|---------|-------|
| `heading` | `string` | Yes | — | |
| `body` | `string` | Yes | — | |
| `image` | `ImageMetadata` | Yes | — | |
| `imageAlt` | `string` | Yes | — | |
| `eyebrow` | `string` | No | — | Small label above heading |
| `reverse` | `boolean` | No | `false` | Puts image on the left |

**Slots:**
- `buttons` — CTA links/buttons
- `logo` — Optional logo/badge above the heading
- `bullets` — Optional bulleted list content

```astro
<Hero
  heading="We're the electrical contractors trusted by your neighbors."
  body="Fox Family Electric has been reliably serving this community for generations."
  image={photo}
  imageAlt="Electrician at work"
>
  <Fragment slot="buttons">
    <CTAPhone />
    <a href="" class="btn btn-secondary">Contact us</a>
  </Fragment>
</Hero>

<!-- Reversed layout with logo slot -->
<Hero
  eyebrow="Innovation"
  heading={"Get estimates faster.\nNo visit required."}
  body="With LiveSwitch, we assess your job through a live video call."
  image={liveSwitchPhoto}
  imageAlt=""
  reverse={true}
>
  <Image slot="logo" src={liveSwitch} alt="LiveSwitch logo" class="featured-logo" />
  <Fragment slot="buttons">
    <a href="" class="btn btn-secondary">Learn how it works</a>
  </Fragment>
</Hero>
```

---

### `IconBlock.astro`
Icon + heading + body block. Used for listing services or features.

| Prop | Type | Required | Default | Notes |
|------|------|:--------:|---------|-------|
| `icon` | React icon component | Yes | — | e.g., `FaBolt` from `react-icons/fa` |
| `heading` | `string` | Yes | — | |
| `body` | `string` | Yes | — | |
| `align` | `"center" \| "left"` | No | `"center"` | Text and icon alignment |
| `card` | `boolean` | No | `false` | Adds border, padding, and border-radius |

**Slots:**
- `cta` — Optional CTA content at the bottom

```astro
<IconBlock icon={FaBolt} heading="Residential" body="Outlets, panels, upgrades, and more." />

<!-- Card style, left-aligned, with CTA -->
<IconBlock icon={MdBuild} heading="Step 1" body="Call us to schedule." align="left" card={true}>
  <div slot="cta" class="btn-group">
    <a href="" class="btn">Get started</a>
  </div>
</IconBlock>
```

---

### `LogoGrid.astro`
Responsive grid of partner/client logos. Pulls data from `src/data/logos`.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `heading` | `string` | Yes | |

```astro
<LogoGrid heading="Trusted by Louisiana families and businesses" />
```

---

### `PageBanner.astro`
Centered text banner for inner pages — eyebrow, heading, body, and an optional CTA slot.

| Prop | Type | Required | Default | Notes |
|------|------|:--------:|---------|-------|
| `heading` | `string` | Yes | — | |
| `body` | `string` | Yes | — | |
| `eyebrow` | `string` | No | — | |

**Slots:**
- `cta` — Optional CTA content below the text

```astro
<PageBanner
  eyebrow="FAQ"
  heading="Common questions"
  body="Everything you need to know before booking."
>
  <div slot="cta" class="btn-group center">
    <CTAPhone />
  </div>
</PageBanner>
```

---

### `ReviewBlock.astro`
Customer review card with star rating, review text, reviewer name, and optional photo.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `review.stars` | `number` | Yes | 1–5 |
| `review.body` | `string` | Yes | |
| `review.name` | `string` | Yes | |
| `review.description` | `string` | Yes | Reviewer's title/context |
| `review.photo` | `ImageMetadata` | No | |

```astro
{reviews.map((r) => <ReviewBlock review={r} />)}
```

---

### `ReviewCarousel.jsx`
React carousel for cycling through reviews. Rendered client-side with `client:visible`.

No props — reads from `src/data/reviews` directly.

```astro
<ReviewCarousel client:visible />
```

---

### `ReviewFeatured.astro`
Prominently styled single review. Used to highlight a standout review on a page.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `review` | `Review` | Yes | Same shape as `ReviewBlock` |

```astro
<ReviewFeatured review={projectReviews[0]} />
```

---

### `SectionGrid.astro`
Section with a `SectionIntro` header and a responsive grid of child blocks.

| Prop | Type | Required | Default | Notes |
|------|------|:--------:|---------|-------|
| `heading` | `string` | Yes | — | |
| `body` | `string` | Yes | — | |
| `eyebrow` | `string` | No | — | |
| `align` | `"center" \| "left"` | No | `"center"` | Aligns intro text and grid |
| `columns` | `2 \| 3 \| 4` | No | `3` | Grid column count |

**Slots:**
- Default slot — grid items (e.g., `IconBlock`, `ReviewBlock`, `CTABlock`)
- `cta` — Optional content rendered below the grid (e.g., a button group)

```astro
<!-- Reviews grid -->
<SectionGrid
  heading="Don't take our word for it."
  body="Highly rated across Louisiana."
  columns={3}
>
  {reviews.map((r) => <ReviewBlock review={r} />)}
</SectionGrid>

<!-- Services grid with a CTA below -->
<SectionGrid
  eyebrow="Expertise"
  heading="Everything electrical, handled by people who care."
  body="Whether it's a flickering outlet or a full commercial build."
  columns={4}
>
  {businessLines.map((s) => <IconBlock icon={s.icon} heading={s.heading} body={s.body} />)}
  <div slot="cta" class="btn-group center">
    <a href="#" class="btn btn-secondary">Explore our services</a>
  </div>
</SectionGrid>
```

---

### `SectionIntro.astro`
Standalone eyebrow + heading + body text block. Used inside `Hero` and `SectionGrid`, but can be used independently.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `heading` | `string` | Yes | Supports `\n` for line breaks (uses `white-space: pre-wrap`) |
| `body` | `string` | Yes | |
| `eyebrow` | `string` | No | |

```astro
<SectionIntro
  eyebrow="Family"
  heading="Built on trust. Rooted in Louisiana."
  body="Our family has been doing this work for three generations."
/>
```

---

### `StaffBlock.astro`
Team member card with circular photo, name, role, and description. Used inside `Team`.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `name` | `string` | Yes | |
| `role` | `string` | Yes | Job title |
| `description` | `string` | Yes | Bio/description |
| `photo` | `ImageMetadata` | No | |

```astro
{teamMembers.map((m) => (
  <StaffBlock name={m.name} role={m.role} description={m.description} photo={m.photo} />
))}
```

---

### `Team.astro`
Displays all team members in a 4-column `SectionGrid` using `StaffBlock`. Includes a "Who we hire" CTA. No props — reads from `src/data/team`.

```astro
<Team />
```

---

### `TextBlock.astro`
Heading + body block without an icon. Supports the same `align` and `card` options as `IconBlock`.

| Prop | Type | Required | Default | Notes |
|------|------|:--------:|---------|-------|
| `heading` | `string` | Yes | — | |
| `body` | `string` | Yes | — | |
| `align` | `"center" \| "left"` | No | `"center"` | |
| `card` | `boolean` | No | `false` | Adds border, padding, and border-radius |

**Slots:**
- `cta` — Optional CTA content at the bottom

```astro
{generatorBenefits.map((b) => <TextBlock heading={b.heading} body={b.body} />)}
```

---

## Data Files

| File | Exports | Used by |
|------|---------|---------|
| `src/data/faq` | `generalFAQ`, `businessLinesFAQ` | `FAQ` (via pages) |
| `src/data/iconBlocks` | `businessLines`, `serviceCallItems`, `serviceCallSteps`, `projectDisciplines`, `generatorNeeds` | `IconBlock` (via pages) |
| `src/data/logos` | `logos` | `LogoGrid` |
| `src/data/reviews` | `reviews`, `projectReviews` | `ReviewBlock`, `ReviewCarousel`, `ReviewFeatured` |
| `src/data/team` | `teamMembers` | `Team` → `StaffBlock` |
| `src/data/textBlocks` | `generatorBenefits` | `TextBlock` (via pages) |
