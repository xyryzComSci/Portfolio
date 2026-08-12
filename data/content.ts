export const hero = {
  eyebrow: "Case file — portfolio / Eastern Visayas, PH",
  title:
    "I take a project from intake to handoff, and leave behind something you can run without me.",
  subhead:
    "I build automation and full-stack systems end-to-end — scoping with the operator, shipping the build, and documenting it thoroughly enough that nothing I hand over is a black box.",
  stats: [
    { value: "3", label: "Flagship systems shipped end-to-end" },
    { value: "21/22", label: "Invoices matched to the centavo in RentFlow validation" },
    { value: "2,700+", label: "Lines of specs, runbooks, PRDs & decision logs authored" },
  ],
};

export type Stage = {
  number: string;
  stamp: string;
  tone: "green" | "amber" | "slate";
  body: string;
};

export const stages: Stage[] = [
  {
    number: "01",
    stamp: "FILED",
    tone: "green",
    body: "Intake — map the real process with the operator before touching a tool.",
  },
  {
    number: "02",
    stamp: "SCOPED",
    tone: "green",
    body: 'Setup — agree on what should be automated vs. stay manual, and what "done" looks like.',
  },
  {
    number: "03",
    stamp: "BUILT",
    tone: "green",
    body: "Build — ship the workflow, and validate it against real data before anyone relies on it.",
  },
  {
    number: "04",
    stamp: "REVIEWED",
    tone: "amber",
    body: "Revisions — sit with stakeholder feedback and change the design, not just the copy.",
  },
];

export const deliveredStage: Stage = {
  number: "05",
  stamp: "DELIVERED",
  tone: "green",
  body: "Handoff comes with documentation, not just a working link: specs, runbooks, and decision logs written so the next person doesn't need me in the room.",
};

export const aboutIntro = [
  "I'm a Computer Science graduate who builds automation systems and full-stack applications end-to-end — from n8n workflows and LLM integrations through to the interfaces people actually use.",
  "I focus on the parts that are hard to undo later: an access model that holds up, a data model that won't need a rewrite, and documentation thorough enough that a handoff doesn't depend on me being in the room.",
  "I work directly with operators and stakeholders — turning a manual process into something that runs on its own, staying through revisions, and leaving behind runbooks and decision logs instead of just a working link.",
];

export type Expertise = {
  title: string;
  stat: string;
  body: string;
  tags: string[];
};

export const expertise: Expertise[] = [
  {
    title: "Automation & AI integration",
    stat: "5 workflows, 1 property fully automated",
    body: "n8n workflows with human-in-the-loop review, LLM vision for document OCR, and chat-based interfaces for non-technical operators.",
    tags: ["n8n", "Google Gemini", "Telegram Bot API", "Webhooks"],
  },
  {
    title: "Backend & data",
    stat: "Row-level security as the real access layer, not the UI",
    body: "Relational schema design, access control enforced at the database, PostgreSQL and Supabase in production.",
    tags: ["Laravel", "PostgreSQL", "Supabase", "Row-Level Security"],
  },
  {
    title: "Frontend",
    stat: "Interfaces built for non-technical operators",
    body: "React and Next.js applications, built to be usable by the people who actually run the process day to day.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Agentic development",
    stat: "PRD/TDD/Eng-plan-led builds",
    body: "Claude Code in a phase-gated, agent-delegated workflow — every build phase scoped against a written plan before implementation starts.",
    tags: ["Claude Code", "CLAUDE.md", "Phased development"],
  },
  {
    title: "Client & delivery",
    stat: "1,700+ lines of runbooks & decision logs",
    body: "Requirements gathering, revision cycles handled directly with stakeholders, and handover documentation written so the system outlives my involvement.",
    tags: ["Requirements", "Runbooks", "Decision logs", "Stakeholder revisions"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    group: "Backend",
    items: ["Laravel", "Java/Spring", "PostgreSQL", "MySQL", "REST APIs"],
  },
  {
    group: "Automation & AI",
    items: [
      "n8n",
      "Google Gemini",
      "Telegram Bot API",
      "Webhook/cron orchestration",
      "OCR pipelines",
    ],
  },
  {
    group: "Cloud & tools",
    items: ["Supabase", "Docker", "Vercel", "Git/GitHub", "Azure TFS"],
  },
  {
    group: "Agentic development",
    items: ["Claude Code", "CLAUDE.md conventions", "Phased, agent-delegated builds"],
  },
];

export const posts = [
  {
    title: "Why heavier context engineering made MUPO's agentic builds faster, not slower",
    status: "COMING SOON",
    excerpt:
      "A retrospective on the token cost and rework of improvised agentic development vs. a phase-gated approach backed by a full PRD, TDD, and engineering plan — with the actual before/after numbers.",
  },
];
