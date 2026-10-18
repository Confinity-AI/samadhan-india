# Design direction: "Every child leaves a mark"

## Review: what we are replacing

**samadhanindia.org (live).** WordPress X-T9 theme. Nine dead menu pages, "Mentally Handicapped" in every footer, no online giving for Indian donors, 3 of 108 images with alt text, conflicting dates and spellings. Full inventory: `docs/research/01-current-site-forensic-inventory.md`.

**The interim GitHub Pages build (removed).** Rejected for these reasons:

- Clinical, corporate voice ("Clinical Protocol", "Case Audits", "Fund This Unit", "Clinical specifications") that speaks to auditors, not to a mother in Dakshinpuri.
- Programme names and claims that are not in any source (for example "Matrika", "SMAS ABA", "12-Year Audited Reports").
- Text-first: long cards and stacked links, very few of the real photos or paintings.
- Theme toggle, top-bar helpline and seven nav items competing with Donate.
- Once UI 1.6 rather than the current 2.x line.

## Principles

1. **Show, then say.** Every section leads with a photograph or a child's painting. Copy is one headline and at most two short sentences.
2. **The children's paintings are the brand.** Four paintings from the annual report (fish, flowers, strokes, trees) are the visual signature: full-bleed bands, page heroes, the deck and the OG image. They are at 1190px, the sharpest assets we have.
3. **Small photos, honest layout.** Most photos are 350–960px wide. They sit in tight editorial mosaics with captions, never blown up into blurry full-bleed heroes. No upscaling, no AI imagery, no stock.
4. **A mother's phone first.** Call and WhatsApp are one tap from every page. Hindi page for families. 44px targets. Easy Read line on every page.
5. **Proof without bragging.** Real registration numbers, dated figures labelled with their year, partners as a typographic wall.

## System

| Token | Value | Why |
| --- | --- | --- |
| Brand | Heritage navy `#233A73` | From the annual report covers and the logo |
| Accent | Turmeric `#D99A1E` | The mothers' spice unit; warm against navy |
| Neutral | Sand | Paper warmth, not clinical grey |
| Headings | Source Serif 4 | Continuity with the current site, editorial weight |
| Body | Atkinson Hyperlegible Next | Built for low-vision readers |
| Hindi | Mukta | Clear Devanagari at small sizes |
| Shape | Conservative radius, flat solids, 1px sand borders | Calm, not app-like |

**Banned:** gradients, glass, blobs, three-up icon cards, emoji, dark-mode toggle, stat counters that animate, stock photos.

## Site map

Our work (5 programmes) · Stories · Moments (photo gallery) · About (history, founder, people) · Accountability · Get involved (volunteer, internships, partner) · Donate · Contact · For families / परिवारों के लिए · Privacy · Deck (unlisted).

## Signature moments

- **Home hero:** headline beside a 3-photo mosaic, with a painted strip running under it.
- **The child's path:** five chapters (find, assess, early years, school, beyond), each a photo with one line, with a sticky dot index.
- **Painting bands:** full-bleed strips between sections.
- **Moments:** a masonry gallery of every usable photo, filterable by theme.
- **Mothers' shop window:** laddoos, papier-mâché birds, diyas, garden produce as a product grid.
