# Portfolio rebuild — prompt for Claude Code

Paste everything below into Claude Code as a single instruction. A few notes before you do:

- This moves the site from a single static HTML file to a small **Next.js (App Router) + TypeScript + Tailwind CSS** project, since routed case-study pages, a light/dark toggle, and reusable card components are the whole point of this revision. That also matches your own listed stack (Next.js, React, Tailwind), so it's not a foreign tool.
- I reconciled two references you gave me: the dark **audit-ledger** aesthetic (paper cards, stamp badges, monospace ledger labels) stays as your *signature texture* — but the overall page structure, the Projects grid, and the About/Skills sections move to Kyle's cleaner, lighter, plainer layout logic, since that's what you explicitly asked to emulate for those sections. Default theme is **light**, with a toggle to dark — tell Claude Code to adjust if you want dark-first instead.
- I filled every content gap with your **real** numbers and quotes from this conversation — nothing invented. A few things are marked `[FILL]` because only you have them (resume PDF file, GitHub URL, exact hometown, headshot).
- HERC's case study is included with real facts only (ISO scores, the reviewer-role revision story) — no screenshots yet, as agreed. Swap in images later.

---

## PROMPT TO CLAUDE CODE

```
Build a personal portfolio website for Xyryz Patagnan, a Computer Science graduate and
automation/full-stack developer based in the Philippines. Use Next.js 14+ (App Router),
TypeScript, and Tailwind CSS. Deployable as a static/Vercel-ready site, no backend/database
needed — this is a content site with a theme toggle, not a web app.

═══════════════════════════════════════════════════════════════════════════
DESIGN SYSTEM
═══════════════════════════════════════════════════════════════════════════

Two coexisting visual registers, both restrained and monospace-forward:

1. HOME HERO + "WORKING LEDGER" SECTION — the audit-ledger identity:
   - Dark desk canvas (#15181A) behind these two sections only
   - "Ledger sheet" cards: paper color (#F3F0E6), dark ink text (#20241F)
   - Dashed rubber-stamp badges for status: SHIPPED (green #2F6B4F on
     #E1EAE2), IN PROGRESS (amber #9C6A1F on #F1E4C9), CONCEPT/PLANNED
     (slate #4A5560 on #DFE3E2)
   - Font: IBM Plex Mono for headers/labels/numbers, IBM Plex Sans for body

2. PROJECTS GRID, PROJECT DETAIL PAGES, ABOUT, BLOG — Kyle-style plain
   minimalism:
   - Light background (#FAFAFA-ish), black headings, gray-600 body text
   - Thin 1px borders, no shadows, no gradients
   - Small monospace uppercase labels (letter-spaced) above section titles
   - Tag chips: light gray rounded-sm background, monospace text
   - Numbers-as-proof stated plainly in a stat row, not decorated
   - Simple line-and-box architecture diagrams where used (no icons/gradients)

Both registers share: IBM Plex Mono for anything numeric/technical, IBM
Plex Sans for prose, restrained color (never more than one accent color
active at a time), no drop shadows, no rounded-pill buttons — sharp/near-
sharp corners throughout (2–3px radius max).

Implement a light/dark theme toggle (sun/moon icon in the nav, top right)
using next-themes or a simple localStorage + CSS variables approach.
Default theme: light. In dark mode, the ledger dark-canvas sections should
already look correct as-is; invert the Kyle-style light sections sensibly
(dark bg, light text, same structure).

═══════════════════════════════════════════════════════════════════════════
NAVIGATION
═══════════════════════════════════════════════════════════════════════════

Nav bar, sticky top:
- Left: wordmark "Xyryz.Patagnan" (bold, black or white depending on theme)
- Center/right links: Home · Projects · Blog · About · Contact
- Far right: theme toggle icon

Routes:
- /                  → Home
- /projects          → Projects index (grid)
- /projects/[slug]   → Individual case study page
- /blog              → Blog / Field Notes index
- /about             → About page
- /contact           → Contact page (or an anchor/section — your call,
                        keep it simple: email + socials, no form backend)

═══════════════════════════════════════════════════════════════════════════
PAGE: HOME (/)
═══════════════════════════════════════════════════════════════════════════

--- Hero (dark ledger canvas) ---
Eyebrow (small monospace, green accent dot before it):
  "Case file — portfolio / Eastern Visayas, PH"

H1:
  "I take a project from intake to handoff, and leave behind something
  you can run without me."

Subhead:
  "I build automation and full-stack systems end-to-end — scoping with
  the operator, shipping the build, and documenting it thoroughly enough
  that nothing I hand over is a black box."

Three CTA buttons:
  - "View Work"  → primary button → links to /projects
  - "Resume"     → secondary/ghost button → downloads /resume.pdf
                   [FILL: Xy needs to add the actual resume PDF file to
                   /public/resume.pdf — placeholder link for now]
  - "Contact"    → secondary/ghost button → links to /contact

Stat strip below CTAs (three columns, thin top border, monospace numbers):
  - "3"      / "Flagship systems shipped end-to-end"
  - "21/22"  / "Invoices matched to the centavo in RentFlow validation"
  - "2,700+" / "Lines of specs, runbooks, PRDs & decision logs authored"

Do NOT include any AU/SG-targeting language anywhere on this page or site
— that positioning line has been removed intentionally.

--- "Working Ledger" section (still dark canvas, directly below hero) ---
Section label: "How I work"
Section title: "Ledger of a delivery"
Note (small, right-aligned or below title):
  "Five stages, every time — the same shape whether the project is a
  billing bot or a full application."

Five stamped stages, laid out as a row of 4 + 1 wrapping line (reuse this
exact copy):
  01 · FILED     — "Intake — map the real process with the operator
                    before touching a tool."
  02 · SCOPED    — "Setup — agree on what should be automated vs. stay
                    manual, and what "done" looks like."
  03 · BUILT     — "Build — ship the workflow, and validate it against
                    real data before anyone relies on it."
  04 · REVIEWED  — "Revisions — sit with stakeholder feedback and change
                    the design, not just the copy."
  05 · DELIVERED — "Handoff comes with documentation, not just a working
                    link: specs, runbooks, and decision logs written so
                    the next person doesn't need me in the room."

Style stages 01–04 as a 4-column row of small ledger cards with stamp-
style status labels (green for FILED/SCOPED/BUILT, amber for REVIEWED).
Style 05 (DELIVERED) as a single full-width dashed-border strip below,
matching the original ledger draft.

--- Brief "Featured work" teaser (transition into light Kyle-style zone) ---
A short section here, light background, that previews 2–3 project cards
(reuse the Project Card component from /projects — see below) with a
"View all projects →" link to /projects. Keep this short; full depth
lives on /projects.

═══════════════════════════════════════════════════════════════════════════
PAGE: PROJECTS (/projects)
═══════════════════════════════════════════════════════════════════════════

Light background, Kyle-style. Section label "PROJECTS", title "Selected
work" or similar.

--- Project Card component (used here and on Home teaser) ---
Each card:
  - Top: a real screenshot/diagram image (16:9-ish crop), NOT a generic
    icon or gradient placeholder
  - A small dashed stamp badge overlapping the top-right corner of the
    image or just below it: SHIPPED / IN PROGRESS / CONCEPT — keep this
    ledger-stamp visual even inside the otherwise plain Kyle-style card
  - Title (bold, black)
  - One-sentence hook (not the full problem/solution — just enough to
    make someone click through)
  - Tag chips row (3–5 tags)
  - Small link/arrow: "Case study →" → routes to /projects/[slug]

Grid: 2 columns desktop, 1 column mobile. Order: RentFlow, HERC, MUPO
first (flagship, larger/featured card treatment if you want a size
distinction), then the three smaller "small builds" entries below as a
lighter, more compact card row (these don't get full case-study pages —
"Case study" link/badge omitted, just the status stamp instead: resume-
tailoring pipeline / PROTOTYPE, lightweight RAG assistant / CONCEPT, AI
intake avatar for service onboarding / PLANNED — reuse exact copy from
below).

═══════════════════════════════════════════════════════════════════════════
PAGE TEMPLATE: PROJECT DETAIL (/projects/[slug])
═══════════════════════════════════════════════════════════════════════════

Follow this exact structure for every case study (mirrors Kyle's
Role/Problem/Approach/Outcome template):

1. "← All projects" back-link, top left
2. Hero image/diagram banner (full width, light gray container)
3. Title (large, bold) + status badge (Shipped / In Progress) inline
4. One-sentence dek/hook
5. Tag chips row
6. Stat row (thin top/bottom border, 3–4 numeric stats, monospace)
7. "Role" — 1–2 sentences on what Xy specifically did (all three of these
   projects were solo-built — say so plainly, don't pad it)
8. "Problem" — 1 short paragraph
9. "Approach" — a bulleted list, EACH bullet stating a decision AND the
   reasoning behind it (this is the important part — don't write generic
   bullets, distribute the judgment-call reasoning across the list itself,
   the way Kyle's case study does, rather than isolating it in one box)
10. Real screenshots/diagrams inline within or after the Approach section,
    each with a one-line caption
11. Simple line-and-box architecture diagram if one is easy to construct
    from the description (optional, only if it adds clarity)
12. "Outcome" — 1 short paragraph, plain prose, stating what changed

Below is the exact content and image list for each of the three flagship
projects, plus the automations feed items. Use this verbatim/near-
verbatim — it's all real.

─────────────────────────────────────────────────────────────────────────
PROJECT 1 — slug: rentflow
─────────────────────────────────────────────────────────────────────────
Status: SHIPPED
Title: RentFlow — AI-assisted billing automation
Hook: "Replaced a manual monthly cycle of reading 46 meters and computing
22 invoices by hand for a 23-unit rental property."
Tags: n8n, Google Gemini (vision), Telegram Bot API, Gmail API, Google
Sheets, PostgreSQL

Stat row:
  20 → 5     workflows, after a ~90% redesign (422 → 43 nodes)
  21 / 22    invoices matched to the centavo vs. hand-computed records
  ₱1,569.78  under-billing error caught during the Sheets → database
             migration
  411 ln     operating runbook — part of 1,700+ total lines of specs,
             build guide & decision log

Role:
  "Sole developer. Scoped the system directly with the property operator,
  built all five n8n workflows and the Telegram bot interface, and
  authored the full delivery documentation — spec, build guide, decision
  log, and runbook."

Problem:
  "The operator computed 22 invoices by hand every month from 46 meter
  readings — a slow, error-prone process with no audit trail and no
  review step before a tenant received a bill."

Approach (bullets, each with reasoning):
  - "Chose Telegram as the interface over a web dashboard after weighing
    both — the operator already lives in the app daily, so meeting them
    there removed a login step entirely."
  - "A Google Gemini vision model reads the pre-printed meter sheets into
    structured data, but nothing reaches an invoice unverified: the
    operator reviews a full draft cycle in Telegram and confirms with
    /send before anything dispatches."
  - "Cut a second OCR verification pass deliberately — a human reviews
    all 46 numbers regardless, so disagreement between two automated
    passes would only detect what the human review already catches. It
    would have added cost without adding safety."
  - "The router workflow authenticates one landlord to one chat ID and
    drops anything else without a reply — an unknown chat that gets an
    error message has learned the bot exists."
  - "Redesigned the original 20-workflow, 422-node build down to 5
    workflows and 43 nodes (~90%) after concluding that more moving parts
    was solving reliability with node-count instead of design — it made
    the system harder to troubleshoot and hand over, not safer."
  - "A daily cron job posts one line even when nothing is due, because
    silence is ambiguous between 'nothing due this week' and 'the cron
    died in March' — and the second case wouldn't surface until a tenant
    complained about a missing bill."
  - "Failures are reported by unit number, not internal IDs, because
    'invoice 41 failed' isn't something the operator can act on."
  - "A dedicated error-handler workflow catches anything that escapes a
    workflow's own error branch and tells the operator what broke in
    plain words, instead of leaving it in an execution log nobody opens."
  - "Real revisions after launch: reworking arrears handling, switching
    the utility baseline to the move-in-date reading instead of the
    cycle start date, and changing invoice delivery from plain email to
    a rendered PNG image after the operator asked for something a tenant
    could read at a glance."

Images (use from /public/projects/rentflow/):
  - rentflow-wf1-router.png — caption: "WF1, the Telegram router. Every
    unknown chat is dropped with a reply; every failure path reports
    back in words."
  - rentflow-telegram-preview.png — caption: "The approval gate itself —
    a draft billing cycle in Telegram, reconciliation totals included,
    before the operator confirms dispatch with /send."
  (Optional additional images available if you want more depth:
  rentflow-wf2-meter-ocr.png, rentflow-wf3-invoice-send.png,
  rentflow-wf4-rent-cron.png, rentflow-wf5-error-handler.png)

Outcome:
  "The operator now runs the full monthly billing cycle from a phone,
  with every number checked before it reaches a tenant. Validated
  against a full month of hand-computed invoices, the system matched 21
  of 22 to the centavo — the one mismatch traced to a pre-existing
  manual error the migration exposed, not a system fault."

─────────────────────────────────────────────────────────────────────────
PROJECT 2 — slug: herc
─────────────────────────────────────────────────────────────────────────
Status: SHIPPED
Title: HERC — Human Ethics Review Board System
Hook: "Replaced VSU's paper-based Research Ethics Review Board process
with a centralized platform across 4 user roles and 3 review workflows."
Tags: Laravel, React, PostgreSQL, Supabase, Railway

Stat row:
  4.97 / 5   performance efficiency, ISO/IEC 25010
  4.89 / 5   functional suitability, ISO/IEC 25010
  4.82 / 5   usability, ISO/IEC 25010
  20         university stakeholders evaluated the system

Role:
  "Sole developer, thesis lead. Ran the engagement end-to-end with
  university stakeholders — mapped the existing paper procedure, agreed
  on the redesigned workflow, and iterated through revision cycles to
  final delivery and defense."

Problem:
  "Research ethics protocols moved through VSU's Research Ethics Review
  Board entirely on paper — printed documents hand-delivered across
  campus, with no centralized tracking of where a submission stood or
  who was accountable for the next step."

Approach (bullets):
  - "Mapped the existing paper procedure with stakeholders before writing
    any code, rather than digitizing the paper form as-is — the risk
    wasn't the build, it was quietly changing who's accountable for what
    in translation."
  - "Modeled 4 distinct user roles and 3 review workflows so a submission
    can't advance a stage without the assigned reviewer's sign-off,
    reproducing digitally the accountability the paper trail used to
    carry."
  - "Revised the admin's 'add reviewer' function mid-project after client
    feedback during pre-defense review: the original design sent an
    authentication link by email to a reviewer signup page; the client
    wanted the admin to create and save a new reviewer's details
    directly, without depending on a self-serve signup step."
  - "Gathered further structural feedback post-defense from the SRC
    panel, advisor, and client representative — pagination, handling
    expired university emails for alumni/resigned faculty, and
    integration with university-hosted infrastructure are documented as
    identified future work, not yet built."

Images: [PENDING — add HERC screenshots when available, e.g. the
reviewer-creation admin screen tied directly to the revision story above,
and a role-based review-status screen]

Outcome:
  "Campus-wide hand delivery of printed protocol documents ended.
  Evaluated by 20 university stakeholders under the ISO/IEC 25010 quality
  model, the system scored 4.97/5 on performance efficiency, 4.89/5 on
  functional suitability, and 4.82/5 on usability."

─────────────────────────────────────────────────────────────────────────
PROJECT 3 — slug: mupo
─────────────────────────────────────────────────────────────────────────
Status: IN PROGRESS
Title: MUPO Dashboard — student org management platform
Hook: "Admin console and bulletin system for SSU's Municipal Psychology
Student Organization, with tiered permissions and a two-step registration
approval gate."
Tags: Next.js, Tailwind CSS, Supabase, Row-Level Security

Stat row:
  205 ln   PRD
  324 ln   Technical design doc
  300 ln   Engineering plan
  161 ln   Design doc

Role:
  "Freelance solo developer. Gathered requirements directly with the
  organization, and am building the system in phased, documented stages
  — PRD, technical design doc, engineering plan, and design doc written
  before each build phase."

Problem:
  "The org chart, event dates, announcements, and files for a 55-member,
  6-committee student organization were scattered with no single source
  of truth and no controlled way to bring on new officers."

Approach (bullets):
  - "Row-level security is the real access-control layer, not just the
    UI — every role's permissions are enforced at the database, so a
    front-end bug can't accidentally expose another committee's content."
  - "New registrations clear two separate steps: an email confirmation,
    then a manual Sys Admin approval — identity and authorization are
    never conflated into a single click, and the interface tells the
    user why they're waiting instead of leaving them guessing."
  - "Chose a link-first, hybrid file storage model with a 1GB quota
    guard instead of storing every upload directly — a small tradeoff in
    convenience against a system that won't silently run out of room or
    get expensive to maintain as the org's content grows."
  - "Built using Claude Code in a phase-gated, agent-delegated workflow —
    each build phase is scoped against the written PRD and engineering
    plan first, so implementation follows a document instead of
    improvising against a chat history."

Images (use from /public/projects/mupo/):
  - mupo-confirm-step.png — caption: "The approval gate stated in plain
    language, not just enforced silently — the interface explains why
    the user is waiting."
  - mupo-dashboard.png — caption: "A live dashboard, not a shell — 55
    members and 6 committees of real org data."

Outcome:
  "Full case study and delivery metrics will be added as the build
  completes its remaining phases — currently in active development."

─────────────────────────────────────────────────────────────────────────
SMALL BUILDS (compact cards on /projects, no dedicated detail page)
─────────────────────────────────────────────────────────────────────────
1. "Resume-tailoring pipeline" / PROTOTYPE
   "Scheduled scraper pulls new job listings on a cron job, an LLM step
   scores fit and drafts a tailored resume pass for review before
   anything is sent."

2. "Lightweight RAG assistant" / CONCEPT
   "Retrieval over a personal document set, built to measure retrieval
   precision before and after chunking/reranking changes — not just a
   demo."

3. "AI intake avatar for service onboarding" / PLANNED
   "Scoped avatar/voice front-end for client intake — collects
   structured requirements before a project enters the build queue."

═══════════════════════════════════════════════════════════════════════════
PAGE: BLOG / FIELD NOTES (/blog)
═══════════════════════════════════════════════════════════════════════════

Keep as previously scoped — a light index page, one entry so far, marked
clearly as upcoming:

Title: "Why heavier context engineering made MUPO's agentic builds
faster, not slower"
Status: COMING SOON
Excerpt: "A retrospective on the token cost and rework of improvised
agentic development vs. a phase-gated approach backed by a full PRD,
TDD, and engineering plan — with the actual before/after numbers."

═══════════════════════════════════════════════════════════════════════════
PAGE: ABOUT (/about)
═══════════════════════════════════════════════════════════════════════════

Light background, Kyle-style layout: photo placeholder (or real headshot
if provided) + intro text on one side, "Expertise / What I do" grid
below, then Skills grid, then Education.

--- Intro (rewritten, no invented years of experience) ---
Eyebrow: "ABOUT"
Heading: "Background"

Body copy (use this, don't shorten it into marketing-speak):

"I'm a Computer Science graduate who builds automation systems and
full-stack applications end-to-end — from n8n workflows and LLM
integrations through to the interfaces people actually use.

I focus on the parts that are hard to undo later: an access model that
holds up, a data model that won't need a rewrite, and documentation
thorough enough that a handoff doesn't depend on me being in the room.

I work directly with operators and stakeholders — turning a manual
process into something that runs on its own, staying through revisions,
and leaving behind runbooks and decision logs instead of just a working
link.

Based in [FILL: exact town], Eastern Visayas, Philippines, working
remotely. I'm open to automation, backend, or full-stack work."

--- "Expertise / What I do" grid (2-column, Kyle's stat-header style) ---
Reuse this exact structure: bold category title + right-aligned small
monospace stat, then 1–2 sentence description, then tag chips.

1. Automation & AI integration        — "5 workflows, 1 property fully
                                          automated"
   "n8n workflows with human-in-the-loop review, LLM vision for document
   OCR, and chat-based interfaces for non-technical operators."
   Tags: n8n · Google Gemini · Telegram Bot API · Webhooks

2. Backend & data                      — "Row-level security as the real
                                          access layer, not the UI"
   "Relational schema design, access control enforced at the database,
   PostgreSQL and Supabase in production."
   Tags: Laravel · PostgreSQL · Supabase · Row-Level Security

3. Frontend                            — "Interfaces built for
                                          non-technical operators"
   "React and Next.js applications, built to be usable by the people who
   actually run the process day to day."
   Tags: Next.js · React · Tailwind CSS · TypeScript

4. Agentic development                 — "PRD/TDD/Eng-plan-led builds"
   "Claude Code in a phase-gated, agent-delegated workflow — every build
   phase scoped against a written plan before implementation starts."
   Tags: Claude Code · CLAUDE.md · Phased development

5. Client & delivery                   — "1,700+ lines of runbooks &
                                          decision logs"
   "Requirements gathering, revision cycles handled directly with
   stakeholders, and handover documentation written so the system
   outlives my involvement."
   Tags: Requirements · Runbooks · Decision logs · Stakeholder revisions

--- Skills grid (tag chips, grouped, Kyle's exact visual pattern) ---
FRONTEND: React · Next.js · TypeScript · Tailwind CSS · JavaScript
BACKEND: Laravel · Java/Spring · PostgreSQL · MySQL · REST APIs
AUTOMATION & AI: n8n · Google Gemini · Telegram Bot API · Webhook/cron
  orchestration · OCR pipelines
CLOUD & TOOLS: Supabase · Docker · Vercel · Git/GitHub · Azure TFS
AGENTIC DEVELOPMENT: Claude Code · CLAUDE.md conventions · Phased,
  agent-delegated builds

--- Education ---
"BS in Computer Science" — right-aligned "2022 – 2026" [FILL: confirm
exact start year; resume only states graduated 2026]
"Visayas State University · Baybay City, Philippines"

═══════════════════════════════════════════════════════════════════════════
PAGE: CONTACT (/contact)
═══════════════════════════════════════════════════════════════════════════

Simple, light, no form/backend needed:
  - "xyryzpatagnankamias@gmail.com" as a mailto link
  - GitHub — [FILL: add real URL once ready]
  - LinkedIn — render as plain SELECTABLE TEXT, NOT an <a href> tag, to
    avoid casual scraper bots picking it up from the DOM:
    "linkedin.com/in/xyryz-patagnan-751048221"
  - Short line: "Usually replies within a day."

═══════════════════════════════════════════════════════════════════════════
ASSETS TO PLACE BEFORE BUILDING
═══════════════════════════════════════════════════════════════════════════

/public/projects/rentflow/rentflow-wf1-router.png
/public/projects/rentflow/rentflow-telegram-preview.png
/public/projects/mupo/mupo-confirm-step.png
/public/projects/mupo/mupo-dashboard.png
/public/resume.pdf                          [FILL — not yet provided]
/public/headshot.jpg (optional, for About)  [FILL — not yet provided]

═══════════════════════════════════════════════════════════════════════════
OPEN ITEMS FOR XY (not for Claude Code to invent)
═══════════════════════════════════════════════════════════════════════════
- [ ] Add real resume.pdf to /public
- [ ] Add real GitHub URL (Contact page + nav if desired)
- [ ] Confirm exact town/city for the About "Based in ___" line
- [ ] Confirm BS Computer Science start year (2022? resume only gives
      graduation year)
- [ ] Add HERC screenshots when ready, update the herc project page
- [ ] Optional: add a real headshot to About
```
