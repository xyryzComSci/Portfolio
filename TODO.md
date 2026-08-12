# Open items

Everything below is a real-data gap the build could not invent. All of it is
wired through `data/site.ts` unless noted — edit that one file and the whole
site updates.

- [ ] **Resume PDF** — drop the file at `public/resume.pdf`, then set
      `resumeReady: true`. Until then the hero's Resume button renders as a
      dashed, non-clickable placeholder rather than a dead link.
- [ ] **GitHub URL** — set `github` to the real URL and `githubReady: true`.
      The Contact row currently reads "Coming soon".
- [ ] **Hometown** — `hometown` currently says "Eastern Visayas"; replace with
      the exact town/city (About page reads "Based in ___, Philippines").
- [ ] **CS start year** — `educationYears` is a guess at "2022 – 2026".
- [ ] **HERC screenshots** — `resources/HERC/` is empty. Add the images, then
      fill in `src` on the two entries in `data/projects.ts` (the captions are
      already written) and set a `cover`. Until then the case study shows
      marked-pending frames and a typographic hero plate.
- [ ] **Headshot** — `public/headshot.jpg` is a copy of `resources/Xyryz.JPG`.
      Swap it if you have a better one.

## Notes

- The old single-file site is preserved at `archive/index.html`.
- Source images live in `resources/`; the site serves copies from `public/`.
  If you replace one, replace the copy in `public/` too.
- `data/projects.ts` and `data/content.ts` hold all copy verbatim from the
  build brief. Editing text should never require touching a component.
