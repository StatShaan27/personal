# Saptara — uploading PDFs

Page: https://statshaan27.github.io/personal/saptara.html

Upload PDFs to these paths on the `main` branch:

| Type | Example path |
| --- | --- |
| Book | `saptara/books/Book title.pdf` |
| Class note | `saptara/notes/2026-11-05/Topic title.pdf` |

Use `YYYY-MM-DD` for each class date. Put multiple PDFs for the same class in the same date folder. Book titles and note titles come from PDF filenames. Months and class dates appear automatically; no HTML editing is needed.

In GitHub, open the appropriate folder and choose **Add file → Upload files**, then commit to `main`. To create a new date folder in the web interface, use **Add file → Create new file**, enter `notes/YYYY-MM-DD/.gitkeep` from the `saptara` folder and commit; then upload PDFs into that date folder. Uploaded notes are sorted newest first.

Allow GitHub Pages to finish publishing before opening a new PDF. Use **Refresh** on the page to update its file list. The archive uses the public GitHub file-list API and keeps a five-minute browser cache; if GitHub is temporarily unavailable or rate-limited, existing saved lists remain usable.

This is a public GitHub Pages archive. An unlisted link and `noindex` do not provide access control. Upload only PDFs you intend to make public. The homepage and its search index do not link to this archive.
