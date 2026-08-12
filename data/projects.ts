export type Status = "SHIPPED" | "IN PROGRESS" | "CONCEPT" | "PLANNED" | "PROTOTYPE";

export type Stat = {
  value: string;
  label: string;
};

export type ProjectImage = {
  src: string | null;
  caption: string;
  /** Rendered as a marked-pending frame when the asset does not exist yet. */
  pending?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  status: Status;
  hook: string;
  tags: string[];
  cover: string | null;
  stats: Stat[];
  role: string;
  problem: string;
  approach: string[];
  images: ProjectImage[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "rentflow",
    title: "RentFlow — AI-assisted billing automation",
    status: "SHIPPED",
    hook: "Replaced a manual monthly cycle of reading 46 meters and computing 22 invoices by hand for a 23-unit rental property.",
    tags: [
      "n8n",
      "Google Gemini (vision)",
      "Telegram Bot API",
      "Gmail API",
      "Google Sheets",
      "PostgreSQL",
    ],
    cover: "/projects/rentflow/rentflow-telegram-preview.png",
    stats: [
      { value: "20 → 5", label: "workflows, after a ~90% redesign (422 → 43 nodes)" },
      { value: "21 / 22", label: "invoices matched to the centavo vs. hand-computed records" },
      { value: "₱1,569.78", label: "under-billing error caught during the Sheets → database migration" },
      { value: "411 ln", label: "operating runbook — part of 1,700+ total lines of specs, build guide & decision log" },
    ],
    role: "Sole developer. Scoped the system directly with the property operator, built all five n8n workflows and the Telegram bot interface, and authored the full delivery documentation — spec, build guide, decision log, and runbook.",
    problem:
      "The operator computed 22 invoices by hand every month from 46 meter readings — a slow, error-prone process with no audit trail and no review step before a tenant received a bill.",
    approach: [
      "Chose Telegram as the interface over a web dashboard after weighing both — the operator already lives in the app daily, so meeting them there removed a login step entirely.",
      "A Google Gemini vision model reads the pre-printed meter sheets into structured data, but nothing reaches an invoice unverified: the operator reviews a full draft cycle in Telegram and confirms with /send before anything dispatches.",
      "Cut a second OCR verification pass deliberately — a human reviews all 46 numbers regardless, so disagreement between two automated passes would only detect what the human review already catches. It would have added cost without adding safety.",
      "The router workflow authenticates one landlord to one chat ID and drops anything else without a reply — an unknown chat that gets an error message has learned the bot exists.",
      "Redesigned the original 20-workflow, 422-node build down to 5 workflows and 43 nodes (~90%) after concluding that more moving parts was solving reliability with node-count instead of design — it made the system harder to troubleshoot and hand over, not safer.",
      "A daily cron job posts one line even when nothing is due, because silence is ambiguous between 'nothing due this week' and 'the cron died in March' — and the second case wouldn't surface until a tenant complained about a missing bill.",
      "Failures are reported by unit number, not internal IDs, because 'invoice 41 failed' isn't something the operator can act on.",
      "A dedicated error-handler workflow catches anything that escapes a workflow's own error branch and tells the operator what broke in plain words, instead of leaving it in an execution log nobody opens.",
      "Real revisions after launch: reworking arrears handling, switching the utility baseline to the move-in-date reading instead of the cycle start date, and changing invoice delivery from plain email to a rendered PNG image after the operator asked for something a tenant could read at a glance.",
    ],
    images: [
      {
        src: "/projects/rentflow/rentflow-wf1-router.png",
        caption:
          "WF1, the Telegram router. Every unknown chat is dropped with a reply; every failure path reports back in words.",
      },
      {
        src: "/projects/rentflow/rentflow-telegram-preview.png",
        caption:
          "The approval gate itself — a draft billing cycle in Telegram, reconciliation totals included, before the operator confirms dispatch with /send.",
      },
      {
        src: "/projects/rentflow/rentflow-wf2-meter-ocr.png",
        caption: "WF2, the meter-reading OCR pass — sheet images in, structured readings out.",
      },
      {
        src: "/projects/rentflow/rentflow-wf5-error-handler.png",
        caption:
          "WF5, the dedicated error handler — anything escaping a workflow's own error branch surfaces to the operator in plain words.",
      },
    ],
    outcome:
      "The operator now runs the full monthly billing cycle from a phone, with every number checked before it reaches a tenant. Validated against a full month of hand-computed invoices, the system matched 21 of 22 to the centavo — the one mismatch traced to a pre-existing manual error the migration exposed, not a system fault.",
  },
  {
    slug: "herc",
    title: "HERC — Human Ethics Review Board System",
    status: "SHIPPED",
    hook: "Replaced VSU's paper-based Research Ethics Review Board process with a centralized platform across 4 user roles and 3 review workflows.",
    tags: ["Laravel", "React", "PostgreSQL", "Supabase", "Railway"],
    cover: null,
    stats: [
      { value: "4.97 / 5", label: "performance efficiency, ISO/IEC 25010" },
      { value: "4.89 / 5", label: "functional suitability, ISO/IEC 25010" },
      { value: "4.82 / 5", label: "usability, ISO/IEC 25010" },
      { value: "20", label: "university stakeholders evaluated the system" },
    ],
    role: "Sole developer, thesis lead. Ran the engagement end-to-end with university stakeholders — mapped the existing paper procedure, agreed on the redesigned workflow, and iterated through revision cycles to final delivery and defense.",
    problem:
      "Research ethics protocols moved through VSU's Research Ethics Review Board entirely on paper — printed documents hand-delivered across campus, with no centralized tracking of where a submission stood or who was accountable for the next step.",
    approach: [
      "Mapped the existing paper procedure with stakeholders before writing any code, rather than digitizing the paper form as-is — the risk wasn't the build, it was quietly changing who's accountable for what in translation.",
      "Modeled 4 distinct user roles and 3 review workflows so a submission can't advance a stage without the assigned reviewer's sign-off, reproducing digitally the accountability the paper trail used to carry.",
      "Revised the admin's 'add reviewer' function mid-project after client feedback during pre-defense review: the original design sent an authentication link by email to a reviewer signup page; the client wanted the admin to create and save a new reviewer's details directly, without depending on a self-serve signup step.",
      "Gathered further structural feedback post-defense from the SRC panel, advisor, and client representative — pagination, handling expired university emails for alumni/resigned faculty, and integration with university-hosted infrastructure are documented as identified future work, not yet built.",
    ],
    images: [
      {
        src: null,
        pending: true,
        caption:
          "The reviewer-creation admin screen — the function reworked mid-project so an admin saves a reviewer's details directly.",
      },
      {
        src: null,
        pending: true,
        caption: "Role-based review status — where a submission stands, and who owns the next step.",
      },
    ],
    outcome:
      "Campus-wide hand delivery of printed protocol documents ended. Evaluated by 20 university stakeholders under the ISO/IEC 25010 quality model, the system scored 4.97/5 on performance efficiency, 4.89/5 on functional suitability, and 4.82/5 on usability.",
  },
  {
    slug: "mupo",
    title: "MUPO Dashboard — student org management platform",
    status: "IN PROGRESS",
    hook: "Admin console and bulletin system for SSU's Municipal Psychology Student Organization, with tiered permissions and a two-step registration approval gate.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Row-Level Security"],
    cover: "/projects/mupo/mupo-dashboard.png",
    stats: [
      { value: "205 ln", label: "PRD" },
      { value: "324 ln", label: "Technical design doc" },
      { value: "300 ln", label: "Engineering plan" },
      { value: "161 ln", label: "Design doc" },
    ],
    role: "Freelance solo developer. Gathered requirements directly with the organization, and am building the system in phased, documented stages — PRD, technical design doc, engineering plan, and design doc written before each build phase.",
    problem:
      "The org chart, event dates, announcements, and files for a 55-member, 6-committee student organization were scattered with no single source of truth and no controlled way to bring on new officers.",
    approach: [
      "Row-level security is the real access-control layer, not just the UI — every role's permissions are enforced at the database, so a front-end bug can't accidentally expose another committee's content.",
      "New registrations clear two separate steps: an email confirmation, then a manual Sys Admin approval — identity and authorization are never conflated into a single click, and the interface tells the user why they're waiting instead of leaving them guessing.",
      "Chose a link-first, hybrid file storage model with a 1GB quota guard instead of storing every upload directly — a small tradeoff in convenience against a system that won't silently run out of room or get expensive to maintain as the org's content grows.",
      "Built using Claude Code in a phase-gated, agent-delegated workflow — each build phase is scoped against the written PRD and engineering plan first, so implementation follows a document instead of improvising against a chat history.",
    ],
    images: [
      {
        src: "/projects/mupo/mupo-confirm-step.png",
        caption:
          "The approval gate stated in plain language, not just enforced silently — the interface explains why the user is waiting.",
      },
      {
        src: "/projects/mupo/mupo-dashboard.png",
        caption: "A live dashboard, not a shell — 55 members and 6 committees of real org data.",
      },
    ],
    outcome:
      "Full case study and delivery metrics will be added as the build completes its remaining phases — currently in active development.",
  },
];

export type SmallBuild = {
  title: string;
  status: Status;
  description: string;
};

export const smallBuilds: SmallBuild[] = [
  {
    title: "Resume-tailoring pipeline",
    status: "PROTOTYPE",
    description:
      "Scheduled scraper pulls new job listings on a cron job, an LLM step scores fit and drafts a tailored resume pass for review before anything is sent.",
  },
  {
    title: "Lightweight RAG assistant",
    status: "CONCEPT",
    description:
      "Retrieval over a personal document set, built to measure retrieval precision before and after chunking/reranking changes — not just a demo.",
  },
  {
    title: "AI intake avatar for service onboarding",
    status: "PLANNED",
    description:
      "Scoped avatar/voice front-end for client intake — collects structured requirements before a project enters the build queue.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
