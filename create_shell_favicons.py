from pathlib import Path
from PIL import Image, ImageDraw

PROJECT_DIR = Path('/home/ubuntu/yulia-premium-bridge-site')
PUBLIC_DIR = PROJECT_DIR / 'client' / 'public'
SOURCE = Path('/home/ubuntu/webdev-static-assets/yulia-mystic-logo-variant-2-shell.png')

PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

source = Image.open(SOURCE).convert('RGBA')
side = min(source.size)
left = (source.width - side) // 2
top = (source.height - side) // 2
source = source.crop((left, top, left + side, top + side))

# Create a gently rounded icon canvas so browser tabs retain the premium mark clearly.
def rounded_icon(size: int) -> Image.Image:
    resized = source.resize((size, size), Image.Resampling.LANCZOS)
    mask = Image.new('L', (size, size), 0)
    draw = ImageDraw.Draw(mask)
    radius = max(4, int(size * 0.18))
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    canvas = Image.new('RGBA', (size, size), (250, 247, 241, 255))
    canvas.alpha_composite(resized)
    canvas.putalpha(mask)
    return canvas

favicon_png = rounded_icon(512)
favicon_png.save(PUBLIC_DIR / 'favicon.png', optimize=True)

apple_icon = rounded_icon(180)
apple_icon.save(PUBLIC_DIR / 'apple-touch-icon.png', optimize=True)

ico_sizes = [16, 24, 32, 48, 64, 128, 256]
ico_images = [rounded_icon(size) for size in ico_sizes]
ico_images[0].save(PUBLIC_DIR / 'favicon.ico', sizes=[(size, size) for size in ico_sizes], append_images=ico_images[1:])

print('Created favicon.png, apple-touch-icon.png, and favicon.ico from approved shell logo.')
