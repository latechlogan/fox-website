# Component Reference

Quick reference for all components — props, slots, and usage examples.

---

### `ApplicationForm.jsx`
React job-application form. Posts to Web3Forms on submit and shows a toast (`@pheralb/toast`) on success/failure. Supports adding repeating "Work History" and "References" blocks via internal state.

No props — access key and field set are hardcoded.

```astro
<ApplicationForm client:load />
```

---

### `BaseLayout.astro`
Root layout wrapper used by every page. Renders `Header`, `GlobalCTA`, and `Footer` around page content. No props.

**Slots:**
- Default slot — page content

---

### `CTAPhone.astro`
Primary CTA button that links to the business phone number (`tel:3183309966`) with a phone icon. Styled as a `.btn` with flex layout.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `label` | `string` | No | Button text |

```astro
<CTAPhone label="Call us now" />
```

---

### `CTABlock.astro`
Bordered card block with an optional icon, heading, body, and a slot for action buttons. Always renders as a card (unlike `IconBlock` which has an optional `card` prop).

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `icon` | React icon component | No | e.g., `FaBolt` from `react-icons/fa`; omit to render without icon |
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

### `ContactForm.jsx`
React contact form (name, phone, email, topic/customer-type radio groups, message). Posts to Web3Forms on submit and shows a toast (`@pheralb/toast`) on success/failure.

No props — access key and field set are hardcoded.

```astro
<ContactForm client:load />
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

### `HeroReviewRotator.jsx`
Small auto-cycling review card (star rating, body, name, "Google Review" link) rendered inside the homepage hero image. Advances every 4s and respects `prefers-reduced-motion`.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `reviews` | `Review[]` | Yes | Pre-filtered list to rotate through (e.g. `reviews.filter((r) => r.rotator === true)`) |

```astro
<HeroReviewRotator
  reviews={reviews.filter((review) => review.rotator === true)}
  client:load
/>
```

---

### `Hero.astro`
Two-column section with text on one side and slotted content (usually an image) on the other. Stacks vertically on mobile.

| Prop | Type | Required | Default | Notes |
|------|------|:--------:|---------|-------|
| `heading` | `string` | Yes | — | |
| `body` | `string` | Yes | — | |
| `eyebrow` | `string` | No | — | Small label above heading |
| `reverse` | `boolean` | No | `false` | Puts the `image` slot on the left |
| `noImage` | `boolean` | No | `false` | Centers the text column and drops the second column entirely |

**Slots:**
- `image` — Visual content for the non-text column (no `image`/`imageAlt` props — pass an `<Image>` directly)
- `buttons` — CTA links/buttons
- `logo` — Optional logo/badge above the heading
- `bullets` — Optional bulleted list content

```astro
<Hero
  heading="We're the electrical contractors trusted by your neighbors."
  body="Fox Family Electric has been reliably serving this community for generations."
>
  <div class="image-wrapper" slot="image">
    <Image src={photo} alt="Electrician at work" />
  </div>
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
  reverse={true}
>
  <div class="image-wrapper" slot="image">
    <Image src={liveSwitchPhoto} alt="" />
  </div>
  <Image slot="logo" src={liveSwitch} alt="LiveSwitch logo" class="featured-logo" />
  <Fragment slot="buttons">
    <a href="" class="btn btn-secondary">Learn how it works</a>
  </Fragment>
</Hero>

<!-- No image, centered text -->
<Hero
  heading="Three generations built this on trust"
  body="Our story started simple."
  noImage={true}
/>
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
Responsive grid of partner/client logos, repeated twice for a scrolling-row effect. Pulls data from `src/data/logos`.

Built but not currently rendered on any page — see `TODO.md` for wiring instructions.

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
| `heading` | `string` | Yes | — | Supports `\n` for line breaks (uses `white-space: pre-wrap`) |
| `body` | `string` | Yes | — | |
| `eyebrow` | `string` | No | — | |
| `align` | `"center" \| "left"` | No | `"center"` | Aligns the banner text |

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
    <a href="" class="btn btn-secondary">Explore our services</a>
  </div>
</SectionGrid>
```

---

### `SectionIntro.astro`
Standalone eyebrow + heading + body text block. Used inside `Hero` and `SectionGrid` (which forward their own `heading`/`body`/`eyebrow` props to it), but can be used independently.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `heading` | `string` | Yes | Supports `\n` for line breaks (uses `white-space: pre-wrap`) |
| `body` | `string \| string[]` | Yes | An array renders as multiple `<p>` paragraphs |
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

**Currently hardcoded to `src/assets/placeholder.jpg`** for every card — it does not accept or render a `photo` prop yet, pending real staff photos. See `TODO.md` ("Team Grid") for the restore steps.

| Prop | Type | Required | Notes |
|------|------|:--------:|-------|
| `name` | `string` | Yes | |
| `role` | `string` | Yes | Job title |
| `description` | `string` | Yes | Bio/description |

```astro
{teamMembers.map((m) => (
  <StaffBlock name={m.name} role={m.role} description={m.description} />
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
| `src/data/faq` | `generalFAQ`, `businessLinesFAQ`, `faqBookOnline`, `faqPayInvoice`, `faqFinancing`, `faqMoxey` | `FAQ` (via pages) |
| `src/data/iconBlocks` | `businessLines`, `serviceCallItems`, `serviceCallSteps`, `projectDisciplines`, `generatorNeeds`, `generatorBenefits`, `threeEasySteps`, `careerBenefits` | `IconBlock` (via pages) |
| `src/data/logos` | `logos` (currently 3 placeholder logos — see `TODO.md`; an `awards` export is stubbed out, pending client-provided award logos) | `LogoGrid` |
| `src/data/reviews` | `reviews`, `projectReviews` | `ReviewBlock`, `ReviewCarousel`, `ReviewFeatured`, `HeroReviewRotator` |
| `src/data/team` | `teamMembers` | `Team` → `StaffBlock` |
| `src/data/textBlocks` | `generatorBenefits` | `TextBlock` (via pages) |

Note: `src/data/iconBlocks` and `src/data/textBlocks` both export a `generatorBenefits` array (different shapes — icon blocks vs. plain text blocks) — import from the file matching the component you're using.

Each `Review` also carries `featured` and `rotator` booleans used by pages to filter which reviews show where (e.g. `reviews.filter((r) => r.rotator === true)` for `HeroReviewRotator`), plus an optional `photo` (`ImageMetadata`).
