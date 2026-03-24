# Component Reference

Quick reference for all components — props, slots, and usage examples.

---

## Layout Components

### `BaseLayout.astro`
The root layout wrapper. Used in every page.

**No props.** Uses a `<slot />` for page content.

---

### `Header.astro`
Static site header with responsive nav and mobile hamburger menu. No props.

---

### `Footer.astro`
Static site footer with logo, social icons, nav links, and legal links. No props.

---

## Section Components

### `Hero.astro`
Two-column section with text on one side and an image on the other.

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
- `logo` — Optional logo above the heading
- `bullets` — Optional bulleted list content

```astro
<Hero
  heading="We're the electrical contractors trusted by your neighbors."
  body="Fox Family Electric has been reliably serving this community for generations."
  image={photo}
  imageAlt="Electrician at work"
>
  <Fragment slot="buttons">
    <a href="" class="btn">Book a service call</a>
    <a href="" class="btn btn-secondary">Contact us</a>
  </Fragment>
</Hero>

<!-- With eyebrow, reverse layout, and logo -->
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

### `SectionGrid.astro`
Section with a `SectionIntro` header and a responsive grid of child blocks.

| Prop | Type | Required | Default | Notes |
|------|------|:--------:|---------|-------|
| `heading` | `string` | Yes | — | |
| `body` | `string` | Yes | — | |
| `eyebrow` | `string` | No | — | |
| `columns` | `2 \| 3 \| 4` | No | `3` | Grid column count |
| `cta.href` | `string` | No | — | Renders a button below the grid |
| `cta.label` | `string` | No | — | Button text |
| `cta.secondary` | `boolean` | No | `false` | Secondary button style |

**Slots:**
- Default slot — grid items (e.g., `IconBlock`, `ReviewBlock`, `CTABlock`)

```astro
<!-- Reviews grid, no CTA -->
<SectionGrid
  heading="Don't take our word for it."
  body="Highly rated across Louisiana."
  columns={3}
>
  {reviews.map((r) => <ReviewBlock review={r} />)}
</SectionGrid>

<!-- Services grid with CTA button -->
<SectionGrid
  eyebrow="Expertise"
  heading="Everything electrical, handled by people who care."
  body="Whether it's a flickering outlet or a full commercial build."
  columns={4}
  cta={{ href: "#", label: "Explore our services", secondary: true }}
>
  {businessLines.map((s) => <IconBlock icon={s.icon} heading={s.heading} body={s.body} />)}
</SectionGrid>
```

---

### `SectionIntro.astro`
Standalone text block — eyebrow, heading, and body. Used inside `Hero` and `SectionGrid`, but can be used independently.

| Prop | Type | Required | Default | Notes |
|------|------|:--------:|---------|-------|
| `heading` | `string` | Yes | — | Supports `\n` for line breaks (uses `white-space: pre-wrap`) |
| `body` | `string` | Yes | — | |
| `eyebrow` | `string` | No | — | |

```astro
<SectionIntro
  eyebrow="Family"
  heading="Built on trust. Rooted in Louisiana."
  body="Our family has been doing this work for three generations."
/>
```

---

### `LogoGrid.astro`
Responsive logo grid. Pulls logo data from `src/data/logos`.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `heading` | `string` | Yes | |

```astro
<LogoGrid heading="Trusted by Louisiana families and businesses" />
```

---

### `GlobalCTA.astro`
Bordered full-width CTA section. Currently static (no props). Content is hardcoded in the component.

---

## Grid Block Components

These are designed to be used as children inside `SectionGrid`.

### `IconBlock.astro`
Icon + heading + body. Used for listing services or features.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `icon` | React icon component | Yes | e.g., `FaBolt` from `react-icons/fa` |
| `heading` | `string` | Yes | |
| `body` | `string` | Yes | |

```astro
<IconBlock icon={FaBolt} heading="Residential" body="Outlets, panels, upgrades, and more." />
```

---

### `CTABlock.astro`
Like `IconBlock` but with a bordered card style and a `cta` slot for action buttons.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `icon` | React icon component | Yes | |
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
    <a href="" class="btn btn-primary">Book a service call</a>
    <a href="" class="btn btn-secondary">Learn about service calls</a>
  </div>
</CTABlock>
```

---

### `ReviewBlock.astro`
Customer review card with stars, body, reviewer name, and optional photo.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `review.stars` | `number` | Yes | 1–5 |
| `review.body` | `string` | Yes | |
| `review.name` | `string` | Yes | |
| `review.description` | `string` | Yes | Reviewer's title/context |
| `review.photo` | `ImageMetadata` | No | |

```astro
<ReviewBlock
  review={{
    stars: 5,
    body: "Best electrical service in the area!",
    name: "Jane D.",
    description: "Homeowner, Baton Rouge",
  }}
/>

<!-- Or from data -->
{reviews.map((r) => <ReviewBlock review={r} />)}
```

---

## Data Files

| File | Used by |
|------|---------|
| `src/data/logos` | `LogoGrid` |
| `src/data/reviews` | `ReviewBlock` (via `index.astro`) |
| `src/data/businessLines` | `IconBlock` (via `index.astro`) |
