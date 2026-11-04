# Mohammad Shaan — research portfolio

Static academic website hosted with GitHub Pages. No build step is required.

## Editing

- `index.html`: introduction, research interests, selected projects, and contact.
- `sections/projects.html`: all research and coursework projects.
- `publications.html`: public publication record. Keep project reports separate.
- `sections/education.html`: education and research training.
- `sections/notes.html`: course-note and topic indexes.
- `research.css` and `research.js`: shared design, mobile navigation, and project filters.
- `assets/Shaan_CV.pdf`: CV served by all CV links. Replace this file to update the CV.

## Adding publications

When a manuscript is available, replace the empty state in `publications.html` with its exact title, author list, venue or preprint server, year, and DOI or stable URL. Label preprints explicitly. Update the publications summary on `index.html`. `publications.json` is an optional machine-readable inventory; it is not rendered automatically. Never add placeholder papers as real publications.

## Deployment

GitHub Pages serves the root of the `main` branch at https://statshaan27.github.io/personal/. All internal links are relative to support project-path hosting. Existing reports, course notes, legacy pages, and the original stylesheet remain available.

## Local preview

Run `python -m http.server 8000` from this directory, then open http://localhost:8000.
