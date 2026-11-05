'use strict';
(() => {
  const API = 'https://api.github.com/repos/StatShaan27/personal/git/trees/main?recursive=1';
  const CACHE = 'ishaan-files-v1';
  const $ = id => document.getElementById(id);
  const bookSelect = $('book-select'), monthSelect = $('month-select');
  const bookResult = $('book-result'), classResult = $('class-result');
  const refresh = $('refresh'), status = $('status');
  let books = [], notes = [];
  const title = path => path.split('/').pop().replace(/\.pdf$/i, '').replace(/[_-]+/g, ' ').trim();
  const fileURL = path => path.split('/').map(encodeURIComponent).join('/');
  const plural = (n, word) => `${n} ${word}${n === 1 ? '' : word === 'class' ? 'es' : 's'}`;
  function empty(container, message) {
    const box = document.createElement('div'); box.className = 'empty';
    const symbol = document.createElement('span'); symbol.className = 'empty-symbol'; symbol.textContent = '↳'; symbol.setAttribute('aria-hidden', 'true');
    const p = document.createElement('p'); p.textContent = message;
    box.append(symbol, p); container.replaceChildren(box);
  }
  function option(value, text) { const o = document.createElement('option'); o.value = value; o.textContent = text; return o; }
  function pdfLink(file, label, className) {
    const link = document.createElement('a'); link.href = file.url || fileURL(file.path);
    link.target = '_blank'; link.rel = 'noopener noreferrer'; link.className = className;
    link.setAttribute('aria-label', `${file.title}, PDF, opens in a new tab`);
    const text = document.createElement('span'); text.textContent = label;
    const arrow = document.createElement('span'); arrow.className = 'arrow'; arrow.textContent = className === 'file-link' ? 'PDF ↗' : '↗'; arrow.setAttribute('aria-hidden', 'true');
    link.append(text, arrow); return link;
  }
  function validDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T12:00:00Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }
  function parseFiles(tree) {
    const catalog = window.ishaanCatalog || {books:[],notes:[]};
    const result = { books: [...catalog.books], notes: [...catalog.notes] };
    for (const item of tree) {
      if (item.type !== 'blob' || typeof item.path !== 'string' || !/\.pdf$/i.test(item.path)) continue;
      if (item.path.startsWith('ishaan/books/')) result.books.push({path: item.path, title: title(item.path)});
      const match = item.path.match(/^ishaan\/notes\/(\d{4}-\d{2}-\d{2})\/(.+\.pdf)$/i);
      if (match && validDate(match[1])) result.notes.push({path: item.path, title: title(item.path), date: match[1]});
    }
    result.books.sort((a,b) => a.title.localeCompare(b.title));
    result.notes.sort((a,b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
    return result;
  }
  function showBook() {
    const book = books.find(b => b.path === bookSelect.value);
    if (!books.length) return empty(bookResult, 'No books uploaded yet.');
    if (!book) return empty(bookResult, 'Choose a book to open its PDF.');
    const card = document.createElement('article'); card.className = 'book-result';
    const type = document.createElement('span'); type.className = 'file-type'; type.textContent = 'BOOK / PDF';
    const heading = document.createElement('h3'); heading.textContent = book.title;
    card.append(type, heading, pdfLink(book, 'Open PDF', 'pdf-link')); bookResult.replaceChildren(card);
  }
  function showClasses() {
    const chosen = notes.filter(n => n.date.startsWith(monthSelect.value));
    if (!chosen.length) return empty(classResult, 'No class notes uploaded yet.');
    const days = [...new Set(chosen.map(n => n.date))];
    const list = document.createElement('ul'); list.className = 'class-list';
    for (const day of days) {
      const date = new Date(`${day}T12:00:00Z`);
      const row = document.createElement('li'); row.className = 'class-row';
      const time = document.createElement('time'); time.className = 'date'; time.dateTime = day;
      time.setAttribute('aria-label', date.toLocaleDateString('en-IN', {day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}));
      const number = document.createElement('span'); number.className = 'day'; number.textContent = day.slice(8);
      const month = document.createElement('span'); month.className = 'month'; month.textContent = date.toLocaleDateString('en-IN', {month:'short',timeZone:'UTC'});
      time.append(number, month);
      const files = document.createElement('ul'); files.className = 'file-list';
      for (const file of chosen.filter(n => n.date === day)) { const li = document.createElement('li'); li.append(pdfLink(file,file.title,'file-link')); files.append(li); }
      const source = chosen.find(n => n.date === day && n.source)?.source;
      if (source) { const a = document.createElement('a'); a.className = 'source-link'; a.href = source; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'Trello ↗'; a.setAttribute('aria-label', 'View class on Trello'); const li = document.createElement('li'); li.append(a); files.append(li); }
      row.append(time, files); list.append(row);
    }
    classResult.replaceChildren(list);
    $('class-count').textContent = plural(days.length, 'class');
  }
  function render(tree) {
    const previousBook = bookSelect.value, previousMonth = monthSelect.value;
    ({books, notes} = parseFiles(tree));
    bookSelect.replaceChildren(option('', books.length ? 'Choose a book' : 'No books yet'));
    for (const book of books) bookSelect.append(option(book.path, book.title));
    bookSelect.disabled = books.length === 0;
    if (books.some(b => b.path === previousBook)) bookSelect.value = previousBook;
    const months = [...new Set(notes.map(n => n.date.slice(0,7)))].sort().reverse();
    monthSelect.replaceChildren();
    for (const month of months) monthSelect.append(option(month, new Date(`${month}-01T12:00:00Z`).toLocaleDateString('en-IN', {month:'long',year:'numeric',timeZone:'UTC'})));
    if (!months.length) monthSelect.append(option('', 'No months yet'));
    monthSelect.disabled = months.length === 0;
    if (months.includes(previousMonth)) monthSelect.value = previousMonth;
    $('book-count').textContent = plural(books.length, 'book');
    $('class-count').textContent = plural(0, 'class');
    showBook(); showClasses();
  }
  function cached() {
    try { const value = JSON.parse(localStorage.getItem(CACHE)); if (Array.isArray(value?.tree) && Number.isFinite(value.time)) return value; } catch {}
    return null;
  }
  async function load(force = false) {
    refresh.disabled = true;
    let saved = cached();
    if (!saved && window.ishaanCatalog) render([]);
    if (saved) { render(saved.tree); status.textContent = 'Saved files'; }
    if (!force && saved && Date.now() - saved.time < 5 * 60 * 1000) { status.textContent = 'Files up to date'; refresh.disabled = false; return; }
    status.textContent = 'Checking files…';
    const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(API, {signal: controller.signal, cache: 'no-store', headers:{Accept:'application/vnd.github+json'}});
      if (!response.ok) throw new Error('Files could not be loaded');
      const data = await response.json();
      if (!Array.isArray(data.tree) || data.truncated) throw new Error('Incomplete file list');
      // Cache only this archive, never the wider personal repository.
      const tree = data.tree.filter(item => typeof item.path === 'string' && item.path.startsWith('ishaan/'));
      render(tree);
      try { localStorage.setItem(CACHE, JSON.stringify({tree, time:Date.now()})); } catch {}
      status.textContent = 'Files up to date';
    } catch {
      if (saved) status.textContent = 'Showing saved files. Refresh to check for updates.';
      else if (window.ishaanCatalog) {
        render([]); status.textContent = 'Trello notes loaded. New uploads could not be checked.';
      } else {
        bookSelect.replaceChildren(option('', 'Files unavailable')); monthSelect.replaceChildren(option('', 'Files unavailable'));
        bookSelect.disabled = monthSelect.disabled = true;
        empty(bookResult, 'Could not load books. Please refresh.'); empty(classResult, 'Could not load notes. Please refresh.');
        status.textContent = 'Unable to connect. Please try again shortly.';
      }
    } finally { clearTimeout(timeout); refresh.disabled = false; }
  }
  bookSelect.addEventListener('change', showBook); monthSelect.addEventListener('change', showClasses);
  refresh.addEventListener('click', () => load(true));
  load();
})();
