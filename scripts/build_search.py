from pathlib import Path
import re,json,html
p=Path(__file__).resolve().parents[1]
index=[]
for f in [p/'index.html',p/'publications.html',*(p/'sections').glob('*.html'),*(p/'blog').glob('*.html'),*(p/'beyond').glob('*.html'),*(p/'books').glob('*.html'),*(p/'photography').glob('*.html')]:
 if f.name in ['opp.html','opp2nd.html','misc1.html']:continue
 t=f.read_text();title=html.unescape(re.search(r'<title>(.*?)</title>',t,re.S)[1]).split(' · ')[0].split(' | ')[0]
 main=re.search(r'<main\b.*?</main>',t,re.S)[0]
 main=re.sub(r'<(?:script|style)\b.*?</(?:script|style)>','',main,flags=re.S)
 text=html.unescape(re.sub(r'\s+',' ',re.sub('<[^>]+>',' ',main)))
 lead=re.search(r'<p class="(?:lead|hero-description|post-subtitle)">(.*?)</p>',main,re.S)
 summary=html.unescape(re.sub('<[^>]+>',' ',lead[1])) if lead else title
 index.append(dict(title=title,path=str(f.relative_to(p)),tags=text+' '+('photos photography pictures camera clicks' if 'photography' in str(f) else 'books bookshelf reading shelf' if 'books' in str(f) else ''),summary=summary[:110]))
(p/'search-index.json').write_text(json.dumps(index,ensure_ascii=False))
print('Indexed',len(index),'pages')
