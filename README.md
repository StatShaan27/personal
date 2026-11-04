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

## Personal blog: adding a life or travel post

The blog is at `blog/index.html`. It has category filters for **Life & learning** and **Travel**. The original BMS, BGKV, and ISI stories, photographs, and captions are retained as three posts.

1. Create `blog/entries/my-trip.html` with your article content, using `<p>…</p>` paragraphs and `<figure><img src="../assets/my-trip.jpg" alt="…"><figcaption>…</figcaption></figure>` for photographs. Save photos in `assets/`.
2. Add a record to `blog/posts.json` with `slug`, `title`, `subtitle`, `period`, `summary`, `category`, and `cover`. Use `Travel` or `Life & learning` as the category, and a cover path such as `../assets/my-trip.jpg`. The slug must match the article filename without `.html`.
3. Run `python scripts/build_blog.py` from the repository root. It builds the blog index and article pages using the current site's navigation and footer.
4. Commit the content, images, index metadata, and generated HTML to `main` to publish with GitHub Pages.

There is no public writing form or login. Blog posts are managed through the GitHub repository. Travel has an honest empty state until the first travel post is added.

The main site uses a dark palette by default. Profile and project descriptions present work from a student's perspective.
