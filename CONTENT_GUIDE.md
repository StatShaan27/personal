# Updating your field notes

## Photos
Add your chosen original photos under `assets/photos/`. Add entries to `photography/photos.json`, for example:

```json
[{"src":"assets/photos/example.jpg","title":"An evening walk","alt":"Describe what is visible","place":"Location","date":"2026","caption":"Your own words"}]
```

These appear in a responsive gallery with a keyboard-controlled lightbox. No stock photographs or school photographs have been passed off as your own clicks. The gallery is empty until you supply your selection.

## Books
Add your actual reading list to `books/books.json`:

```json
[{"title":"Exact book title","author":"Author","status":"read","note":"Your own response to the book"}]
```

Statuses: `read`, `reading`, `want`. The shelf supports search and status filters. No titles have been invented.

## Journal
Original BMS, BGKV, and ISI essays are in `blog/entries/`. Add an HTML article there, add its metadata to `blog/posts.json`, then run `python scripts/build_blog.py`. Categories: `Life & learning` or `Travel`.

## Design
`research.css` / `research.js`: main site. Newsreader headings, Inter body, IBM Plex Mono labels. Shared theme preference: `shaan-theme`. Satellite sites carry `shaan-shared.css` and `shaan-shared.js`; update copies together. Original project equations, reports, and scripts are preserved.

## Publishing
Commit changes to each repository’s existing main branch. GitHub Pages builds each project separately. All original URLs are retained.
