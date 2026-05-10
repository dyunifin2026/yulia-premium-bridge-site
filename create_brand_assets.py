from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math

project = Path('/home/ubuntu/yulia-premium-bridge-site')
public = project / 'client' / 'public'
public.mkdir(parents=True, exist_ok=True)

svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-labelledby="title desc">
  <title id="title">Юлия — психолог-психодраматист</title>
  <desc id="desc">Премиальная монограмма Ю с мягкой дугой контакта</desc>
  <defs>
    <radialGradient id="milk" cx="36%" cy="24%" r="82%">
      <stop offset="0%" stop-color="#fffdf8"/>
      <stop offset="64%" stop-color="#f4ede2"/>
      <stop offset="100%" stop-color="#e3d1b8"/>
    </radialGradient>
    <linearGradient id="gold" x1="18" y1="18" x2="110" y2="112">
      <stop offset="0%" stop-color="#d5b57c"/>
      <stop offset="42%" stop-color="#9b6f42"/>
      <stop offset="100%" stop-color="#6d4a31"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#4f5f55" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect x="8" y="8" width="112" height="112" rx="36" fill="url(#milk)"/>
  <circle cx="64" cy="64" r="48" fill="none" stroke="url(#gold)" stroke-width="2.4" opacity="0.78"/>
  <path d="M31 76 C42 95 86 95 97 76" fill="none" stroke="url(#gold)" stroke-width="2.2" stroke-linecap="round" opacity="0.72"/>
  <path d="M41 39 L41 48 C47 48 49 51 49 58 L49 76 C49 84 54 90 63 90 C72 90 77 84 77 76 L77 48 L87 48 L87 39 L67 39 L67 48 L69 48 L69 75 C69 80 67 83 63 83 C59 83 57 80 57 75 L57 58 C57 47 51 40 41 39 Z" fill="url(#gold)" filter="url(#shadow)"/>
  <circle cx="96" cy="64" r="3.2" fill="#9b6f42" opacity="0.88"/>
  <circle cx="32" cy="64" r="3.2" fill="#9b6f42" opacity="0.88"/>
</svg>'''
(public / 'favicon.svg').write_text(svg, encoding='utf-8')

# Raster ICO drawn directly for crisp browser fallback.
size = 256
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
# rounded milk background
try:
    bg = (246, 238, 226, 255)
    d.rounded_rectangle([16, 16, 240, 240], radius=72, fill=bg)
except Exception:
    d.rectangle([16, 16, 240, 240], fill=(246, 238, 226, 255))
# subtle rings and bridge
gold = (155, 111, 66, 255)
d.ellipse([50, 50, 206, 206], outline=gold, width=5)
d.arc([58, 74, 198, 210], start=32, end=148, fill=(181, 139, 84, 230), width=5)
d.ellipse([62, 124, 76, 138], fill=gold)
d.ellipse([180, 124, 194, 138], fill=gold)
# monogram using available serif font
font_paths = [
    '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf',
    '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf',
]
font = None
for p in font_paths:
    if Path(p).exists():
        font = ImageFont.truetype(p, 122)
        break
if font is None:
    font = ImageFont.load_default()
text = 'Ю'
bbox = d.textbbox((0, 0), text, font=font)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
d.text(((size - tw) / 2, (size - th) / 2 - 14), text, fill=gold, font=font)
img.save(public / 'favicon.ico', sizes=[(16,16), (32,32), (48,48), (64,64), (128,128), (256,256)])
print('created', public / 'favicon.svg', public / 'favicon.ico')
