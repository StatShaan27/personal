#!/usr/bin/env python3
"""Build static blog pages from blog/posts.json and blog/entries/<slug>.html."""
from pathlib import Path
import html,json,re
ROOT=Path(__file__).resolve().parents[1]
BLOG=ROOT/'blog'
posts=json.loads((BLOG/'posts.json').read_text())
home=(ROOT/'index.html').read_text()
header=home.split('</header>',1)[0]+'</header>'
footer='<footer'+home.split('<footer',1)[1]

def nested(s):
 def attr(m):
  key,url=m.group(1),m.group(2)
  if re.match(r'^(?:[a-z]+:|/|#)',url):return m.group(0)
  return f'{key}="../{url}"'
 return re.sub(r'(href|src)="([^"]+)"',attr,s)
header=nested(header)
footer=nested(footer)
header=header.replace(' aria-current="page"','')
header=header.replace('<a href="../blog/index.html">Blog</a>','<a href="index.html" aria-current="page">Blog</a>')

def esc(s):return html.escape(s,quote=True)
def page(title,body):
 head=re.sub(r'<title>.*?</title>',f'<title>{esc(title)} | Mohammad Shaan</title>',header)
 return head+body+footer

cards=[]
for post in posts:
 slug=post['slug']
 if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',slug):raise ValueError('Use a lowercase hyphenated slug')
 content=(BLOG/'entries'/f'{slug}.html').read_text()
 category=post.get('category','Life & learning')
 words=len(re.findall(r'\w+',re.sub('<[^>]+>',' ',content)))
 minutes=max(1,round(words/200))
 body=f'''<main id="main" class="inner-main"><article class="blog-post"><header class="post-header"><a class="text-link" href="index.html">← All writing</a><p class="eyebrow">{esc(category)} · {minutes} MIN READ</p><h1>{esc(post['title'])}<span>.</span></h1><p class="post-subtitle">{esc(post['subtitle'])}</p><p class="post-period">{esc(post['period'])}</p></header><div class="post-body">{content}</div><footer class="post-end"><a class="text-link" href="index.html">← Back to the blog</a><p>Mohammad Shaan · Personal reflections</p></footer></article></main>'''
 (BLOG/f'{slug}.html').write_text(page(post['title'],body))
 cards.append(f'''<a class="blog-card" href="{slug}.html" data-blog-category="{esc(category)}"><div class="blog-cover"><img src="{esc(post['cover'])}" alt="{esc(post['subtitle'])}" loading="lazy"></div><div class="blog-card-copy"><p class="eyebrow">{esc(category)} · {minutes} MIN READ</p><h2>{esc(post['title'])}</h2><p>{esc(post['summary'])}</p><span class="text-link">Read story ↗</span></div></a>''')
body='''<main id="main" class="inner-main"><section class="page-intro blog-intro"><p class="eyebrow">PERSONAL WRITING</p><h1>Life, learning<br>& places<span>.</span></h1><p class="lead">Memories from school, life at ISI, and the places I visit. A personal corner alongside my academic work.</p></section><div class="filter-bar" role="group" aria-label="Filter blog posts"><button class="active" data-blog-filter="all" aria-pressed="true">All writing</button><button data-blog-filter="Life &amp; learning" aria-pressed="false">Life & learning</button><button data-blog-filter="Travel" aria-pressed="false">Travel</button></div><section class="blog-grid" aria-label="Blog posts">'''+''.join(cards)+'''</section><section class="travel-empty" hidden><p class="eyebrow">TRAVEL NOTES</p><h2>Travel stories are still to come.</h2><p>I’ll add reflections and photographs from my travels here.</p></section></main>'''
(BLOG/'index.html').write_text(page('Blog — Life, Learning & Places',body))
print(f'Built blog index and {len(posts)} posts.')
