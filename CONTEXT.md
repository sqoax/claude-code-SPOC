# CONTEXT.md — SeamlessPOC Website

> **Do not modify this file when making other edits to the site.**

---

## Project Overview

**Project name:** SeamlessPOC
**Client:** SeamlessPOC (formerly IRG of Georgia)
**Industry:** Healthcare IT installation
**Founded:** 1994 as IRG of Georgia, rebranded SeamlessPOC in 2014

SeamlessPOC handles wall mounts, cable management, point-of-care device deployment, and full facility rollouts in live hospital environments. They are the physical infrastructure layer — they do not provide hardware (computers/monitors), software imaging, EPIC configuration, or clinical device deployment.

---

## Target Audience

- Hospital IT Directors
- Nursing and Clinical Leadership
- Facilities and Operations Managers

---

## Brand & Design

**Tone:** Confident and direct. No fluff, no jargon. Written in plain language that mirrors how customers actually talk.
**Color scheme:**
- Navy: `#0A1F44` (primary)
- Cyan: `#2E86C1` (accent)
- White and off-white for backgrounds

**Fonts:** Inter (body), Poppins (headings) via Google Fonts
**Primary CTA:** "Get In Touch" — links to `contact.html`
**Nav CTA:** "Schedule a Project" — links to `contact.html`

---

## Site Structure

| Page | File | Purpose |
|------|------|---------|
| Homepage | `index.html` | Lean overview — drives visitors to interior pages or contact |
| Services | `services.html` | Detailed service cards (5 full-width sections with checkmark bullets) |
| How We Work | `how-we-work.html` | 5-step process timeline, Assess/Advise/Achieve, We Do/We Do Not scope section, why it works |
| Solutions | `solutions.html` | Project type showcase (10 types), Marlene Sides quote |
| About | `about.html` | Company story, 4-milestone timeline, 5 core values, day-one checklist, 20-hospital client list |
| Contact | `contact.html` | Form with Project Type dropdown + Preferred Contact Method radios + trust signals + values strip |
| Products | `equipment.html` | Main equipment landing page — 3 category sections with product cards |
| AccessMount 180 | `equipment/accessmount-180.html` | Full product page — photos, specs grid, badges, features, gallery, CTA |
| Placeholder pages (6) | `equipment/*.html` | Coming Soon pages for Workstation on Wheels, Laptop Carts, Tablet Carts, Custom Computer Carts, Custom Medical Carts, Custom Displays |

**Shared files:**
- `styles.css` — All styles, CSS custom properties, responsive breakpoints, animations, dropdown nav, equipment/product page styles
- `script.js` — Mobile nav, scroll shadow, IntersectionObserver reveals, counter animation, form handling, mobile accordion, circle-of-services animation

---

## Homepage Sections (in order)

1. Announcement bar (cyan)
2. Navigation (sticky, includes Products dropdown)
3. Hero — "Your IT team is overwhelmed. We handle it."
4. Stats — $2M+ saved, 1,000+ units, 25,000+ IT hours, 30+ years
5. Circle of Services — interactive spoke-and-wheel graphic with "Plug Us In." hub and 9 nodes (Kick Off → Service & Support), animated line-draw on scroll, hover tooltips
6. Sound Familiar — six real customer quotes
7. Services cards — five cards, short one-line descriptions
8. Testimonials — Marlene Sides, Laurie Stewart, Cynthia Hyde
9. Client logo strip
10. Bottom CTA — "Ready to take it off your plate?"
11. Footer

The homepage was intentionally kept lean. Deeper content lives on interior pages.

---

## Key Messaging Pillars

- One vendor, one quote
- After-hours and weekend installs available
- Same team on every project
- Fixed cost, low change order rate
- 30+ years experience
- Factory-trained, credentialed installers

---

## Copy Origin

Copy was written using real customer language from an internal team survey. The "Sound Familiar?" section contains verbatim phrases customers use when they call. Key phrases include:

- "Our IT department is overwhelmed."
- "Things are holding on by a thread. We really need this fixed."
- "We don't want IT to do this — it will be a mess, or it will never get done on time."
- "We just need someone to take ownership and get it done."
- "This needs replaced ASAP."
- "We lack the manpower and skilled labor to handle this internally."

---

## Contact Information

- **Phone:** (678) 990-4806
- **Email:** info@seamlesspoc.com
- **Address:** 2000 Weems Road, Tucker, Georgia 30084

---

## Notable Clients (expanded list on about.html)

- Emory Healthcare
- Duke University Health System
- UNC Healthcare
- WakeMed
- Northside Hospital
- Roper St Francis Health System
- New Hanover Regional Medical Center
- Medical College of Georgia
- Ascension Healthcare
- NC Baptist Hospital Wake Forest
- Mission Hospital
- Athens Regional Medical Center
- DeKalb Medical Center
- Erlanger Hospital
- Nash Healthcare System
- WakeMed Raleigh
- Providence Hospital
- Northeast Georgia Medical Center
- Martin Memorial
- South Georgia Medical Center

---

## Testimonial Sources

| Name | Title | Organization |
|------|-------|-------------|
| Marlene Sides, RN | Director of Information Services | Medical College of Georgia |
| Laurie Stewart, RN | Business System Analyst | Hartford Medical Group |
| Cynthia Hyde, CIO | Chief Information Officer | Providence Hospital |

---

## Competitors

- Cogent
- TRA
- Howard

---

## Equipment / Products Section

**Navigation dropdown:** Products link between Services and How We Work. Desktop: hover-triggered mega dropdown grouped by category with cyan labels. Mobile: collapsible accordion under Products heading.

**Product categories:**
| Category | Products | Status |
|----------|----------|--------|
| Wall Mounts | AccessMount 180 ICW | Full product page with 3 photos (`ul180/ul1801.png`, `ul1802.png`, `ul1803.png`), specs, features, gallery |
| Medical Computer Carts | Workstation on Wheels, Laptop Carts, Tablet Carts | Coming Soon placeholder pages |
| Custom Solutions | Custom Computer Carts, Custom Medical Carts, Custom Displays | Coming Soon placeholder pages |

**AccessMount 180 ICW key specs:** 43.5" horizontal reach, 16" vertical adjustment, 10" stowed depth, up to 42 lbs load capacity, 75/100mm VESA, 5-year warranty. Manufacturer: TouchPoint Medical by ICW. Mounting: Wall, Desk, Pole, Cart. Recommended for: Patient Rooms, ICU, ER, OR, Ambulatory Surgery Centers, Simulation Labs.

**Image paths:** Product images are in the `ul180/` folder at root level. From `equipment/` pages, reference as `../ul180/filename.png`. From root pages, reference as `ul180/filename.png`.

---

## Core Values (used on about.html and contact.html values strip)

1. **Expertise** — 30+ years, current with latest hospital trends
2. **Confidence** — Unobtrusive, professional, evening/weekend capable
3. **Transparency** — Clear communication, no hidden agenda, fixed cost
4. **Commitment** — Long-term relationships, meet go-live no matter what
5. **Customization** — Every job treated as custom, not cookie-cutter

---

## Technical Notes

- Pure HTML/CSS/JS — no build tools, no frameworks
- Mobile-first responsive design (breakpoints at 480px, 640px, 768px, 900px, 960px, 1024px)
- Scroll animations via IntersectionObserver (`.reveal` class)
- Stat counters animate on scroll via individual IntersectionObserver instances
- Circle of Services graphic uses separate IntersectionObserver on `.cos-wrapper` — triggers SVG line-draw animations (stroke-dashoffset) and node fade-ins with staggered delays
- Sticky nav with drop shadow on scroll
- Announcement bar sits above the nav
- Contact form is client-side only (no backend) — shows success state on submit
- Nav dropdown uses CSS hover (`:hover`) on desktop, JS accordion toggle on mobile
- Equipment subfolder (`equipment/`) pages use `../` relative paths for shared CSS, JS, and root-level page links
- Git remote: `https://github.com/sqoax/claude-code-SPOC.git` (branch: `main`)
