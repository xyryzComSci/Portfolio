// Single source of truth for identity + the values that still need real data.
// Anything marked TODO is a placeholder; see TODO.md at the repo root.

export const site = {
  name: "Xyryz Patagnan",
  wordmark: "Xyryz.Patagnan",
  role: "Automation & full-stack developer",
  email: "xyryzpatagnankamias@gmail.com",
  // Rendered as plain selectable text, never as an anchor, to keep it out of
  // the DOM as a crawlable link.
  linkedinText: "linkedin.com/in/xyryz-patagnan-751048221",
  github: "https://github.com/xyryzComSci", // TODO: real GitHub URL
  githubReady: false,
  resumePath: "/Xyryz_Patagnan-Resume(1).pdf", // TODO: add the actual PDF to /public
  resumeReady: true,
  headshot: "/headshot.jpg",
  hometown: "Eastern Visayas", // TODO: exact town/city
  hometownReady: false,
  region: "Eastern Visayas, Philippines",
  educationYears: "2022 – 2026", // TODO: confirm start year
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
