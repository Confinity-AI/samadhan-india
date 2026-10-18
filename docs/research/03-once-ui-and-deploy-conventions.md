## 1. Once UI versions & best template

### Local core vs templates

| Location | `@once-ui-system/core` |
|---|---|
| `once-ui/core/packages/core/package.json` L2–3 | **`2.0.0-alpha.0`** (workspace source of truth) |
| `nextjs-starter`, `magic-journal`, `magic-convert`, `magic-studio` | `^1.6.4` |
| `once-ui-tailwind-starter` | `^1.4.12` |
| `magic-agent`, `magic-spotlight`, `magic-store`, `sb-starter`, `magic-bio`, `magic-docs`, `magic-portfolio` | `"latest"` |

Docs apps use `workspace:*` against the alpha core.

### Best starting point for a content-heavy nonprofit marketing site

Official guidance (`once-ui/docs/DOWNSTREAM_PROJECTS.md` L54–62):

- **Content-led / multi-page:** `magic-portfolio` or `magic-spotlight`
- **Agency/service marketing:** `magic-studio`
- **Clean custom (MIT):** `nextjs-starter` (default in `new-once-ui-site.ps1`)

**Recommendation:** Prefer **`magic-portfolio`** for IA closest to your list (home / about / blog MDX / multi-page shell), then remap `work`/`gallery` → programs/stories/impact. Alternate: **`nextjs-starter`** if you want MIT + latest core without demo baggage. Scaffold via `once-ui/new-once-ui-site.ps1` (default template `nextjs-starter`). License note: `once-ui/AGENTS.md` L65 — portfolio/docs/bio are **CC BY-NC**; core + nextjs-starter are **MIT**.

**App structure (portfolio):**  
`once-ui/magic-portfolio/src/app/` → `/`, `/about`, `/work`, `/work/[slug]`, `/blog`, `/blog/[slug]`, `/gallery` + MDX under `blog/posts/` and `work/projects/`.

**App structure (starter):** only `(main)/page` + OG API — blank canvas.

### Theme config shape (exact)

**Minimal (starter)** — `once-ui/nextjs-starter/src/resources/once-ui.config.js` L29–64:

```29:64:C:\Users\User\Desktop\AmalgamSites\once-ui\nextjs-starter\src\resources\once-ui.config.js
const fonts = { heading, body, label, code };
const style = {
  theme: "system",
  neutral: "gray",
  brand: "blue",
  accent: "indigo",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "filled",
  transition: "all",
  scaling: "100",
};
const dataStyle = { variant: "gradient", mode: "categorical", height: 24, axis: {...}, tick: {...} };
export { fonts, style, dataStyle };
```

**Full (portfolio)** — `once-ui/magic-portfolio/src/resources/once-ui.config.ts` L17–232 exports: `baseURL`, `routes`, `display`, `protectedRoutes`, `fonts`, `style` (L75–86: `theme/neutral/brand/accent/solid/solidStyle/border/surface/transition/scaling`), `dataStyle` (L88–100), `effects`, `mailchimp`, `schema`, `sameAs`, `socialSharing`.

---

## 2. How sites deploy (hosting mix)

**No** `wrangler.toml` / `wrangler.jsonc`, **no** `netlify.toml`, **no** open-next configs under `sites/`.

| Hosting | Sites / evidence |
|---|---|
| **Vercel (marketing-leaning)** | `sites/aspireindia/vercel.json`; `sites/comply-pro-plus/vercel.json`; `sites/graphyte.com` (`deploy:preview/prod` + `.github/workflows/vercel-preview.yml`); `sites/dash-web` (same pattern) |
| **Cloud Run / Docker (product apps)** | `sites/xeso`, `sites/confinity-v3`, `sites/dots-energy`, `sites/frontend` — `Dockerfile` + `cloudbuild.yaml` and/or deploy workflows |
| **Cloudflare Pages (secondary)** | `sites/comply-pro-plus/package.json` — `deploy:cf` via `wrangler pages deploy` (also has Vercel scripts) |
| **Firebase Hosting** | `oxfordlawsoc-nextjs`, `uni-web` — `firebase-hosting.yml` |

**Most common for Once UI marketing foundations: Vercel.** Product apps (XESO, Confinity, Dots) are **Cloud Run**, not Cloudflare. Cloudflare is rare here.

---

## 3. graphyte.com

| Item | Detail |
|---|---|
| Stack | Next.js `^16.2.2`, React 19, MDX, Sass, Biome, Drizzle/Postgres, GCS; Node 24 |
| Once UI | `@once-ui-system/core`: `^1.6.4` (`package.json` L30) |
| Origin | From **`magic-convert`** (`PROJECT_SOURCE.md` L6–7) |
| Deploy | Vercel (`package.json` L11–12; preview workflow) |
| Theme | `src/resources/once-ui.config.js` L41–54: `theme: "system"`, `neutral: "slate"`, `brand: "teal"`, `accent: "cyan"`, `solid: "contrast"`, `solidStyle: "flat"`, `border: "conservative"`, `surface: "filled"` |

**Reusable marketing pieces** under `src/app/(landing)/components/`:

- `ProofBar.tsx` — credential/proof strip (not numeric counters)
- `Pillars.tsx` — 3-up metric cards (`metric` + description)
- `Hero.tsx`, `EditorialBanner.tsx`, `NewsPreview.tsx`, `MethodPreview.tsx`, `Header`/`Footer`/`LandingMegaMenu`
- Content routes: `our-story`, `insights` (blog), `community`, `news`, `careers`, etc.

Good reference for dual landing+product shells and theme sync; less ideal as a nonprofit clone than portfolio/studio patterns.

---

## 4. Scaffolding & anti-slop docs

**Scaffolding**

- `docs/02-OPERATIONS.md` L108–124 — add site: `gh repo create` → clone into `sites/` under **`Confinity-AI/`**
- `docs/01-ARCHITECTURE.md` L55–56 — orgs: **`Confinity-AI/*` (newer)** vs **`Confinity/*` (older)**
- `once-ui/docs/DOWNSTREAM_PROJECTS.md`, `TEMPLATE_SELECTION_AND_CLEANUP.md`
- `once-ui/new-once-ui-site.ps1` — copies one template into `sites/`

**Anti–AI-slop / craft**

| Path | Role |
|---|---|
| `prompts-and-agentic-strategy/prompts/copy-ai-tells.md` | Mechanical AI-tell ban list + Zinsser |
| `prompts/.../brand-copy-voice.md` | Voice IQ / banned words |
| `prompts/.../marketing/ai-tell-audit.md` | Gate 1 audit |
| `prompts/.../ui-craft.md`, `design-ux-ui.md` | Token/craft audits; “hand-made vs any-brand” |
| `once-ui/docs/PHILOSOPHY_AND_TASTE.md` L54 | “not AI-sloppy or generic” |
| Awwwards framing | e.g. `prompts/site-dots-full-surface-award-grade-solo.md`, `prompts/best/xeso-world-first-product-design-elevation.md` |

User frontend design rules (hero discipline, no purple/cream AI defaults) also apply at the Cursor-rule level.

---

## 5. CLIs

| Tool | Status |
|---|---|
| **`gh`** | Logged in as **Confinity-AI** (token + keyring). `gh repo list Confinity-AI --limit 5` works (xeso, aspire-india-website, confinity-v2, dots-energy, aspire-india-preview) |
| **`vercel`** | Not installed (`CommandNotFoundException`) — graphyte uses `npx vercel` |
| **`wrangler`** | Not installed |

---

**Practical scaffold path:** `.\once-ui\new-once-ui-site.ps1 -ProjectName <name> -Template magic-portfolio` (or `nextjs-starter`), put repo under `Confinity-AI`, deploy marketing on **Vercel**, pin `@once-ui-system/core` intentionally (`^1.6.4` today vs local `2.0.0-alpha.0`).