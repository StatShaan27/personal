# Mohammad Shaan — field notes

Static GitHub Pages website. No package install or build step is required to serve it.

- `index.html`: introduction and interactive learning-interest explorer.
- `sections/projects.html`: project search and subject filters.
- `sections/notes.html`: course-note index.
- `sections/education.html`: academic background and CV.
- `sections/misc.html`: directory of all connected GitHub Pages sites.
- `blog/`: personal essays and travel-writing structure.
- `beyond/`, `books/`, `photography/`: personal mini-sites.
- `research.css`, `research.js`: main design and interactions.
- `shaan-shared.css`, `shaan-shared.js`: reading design for archived pages.

See `CONTENT_GUIDE.md` for adding photographs, books, and journal entries. Photos and book titles are intentionally awaiting the owner's actual selections.

After changing journal source: `python scripts/build_blog.py`. After changing page content: `python scripts/build_search.py`.

Local preview: `python -m http.server 8000`. GitHub Pages serves the repository root of `main`.
