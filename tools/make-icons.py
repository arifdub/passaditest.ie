# Rebuilds the home-screen / PWA icons in public/ from public/wheel.png.
#
#   pip install pillow numpy
#   python3 tools/make-icons.py
#
# The full logo (wheel, tick and the speed lines on its left) is trimmed to
# its visible edges and centred on a dark slate background
# (theme_color #0f172a) so the installed icon matches the app.
import os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public'))

from PIL import Image
import numpy as np
src = Image.open('wheel.png').convert('RGBA')
logo = src.crop(src.getbbox())
print('logo bbox size', logo.size)

def bg(size):
    # dark slate vertical gradient matching theme_color #0f172a
    top = np.array([30, 41, 59], np.float32)     # slate-800
    bot = np.array([15, 23, 42], np.float32)     # slate-900
    t = np.linspace(0, 1, size)[:, None, None]
    g = top*(1-t) + bot*t
    img = np.repeat(g, size, axis=1)
    alpha = np.full((size, size, 1), 255, np.float32)
    return Image.fromarray(np.concatenate([img, alpha], 2).astype(np.uint8))

def make(size, frac):
    canvas = bg(size)
    w, h = logo.size
    s = size*frac / max(w, h)
    lg = logo.resize((round(w*s), round(h*s)), Image.LANCZOS)
    canvas.alpha_composite(lg, ((size-lg.width)//2, (size-lg.height)//2))
    return canvas.convert('RGB')

make(180, 0.84).save('apple-touch-icon.png', optimize=True)
make(192, 0.84).save('icon-192.png', optimize=True)
make(512, 0.84).save('icon-512.png', optimize=True)
make(512, 0.62).save('maskable-icon-512.png', optimize=True)  # stays inside the 80% safe zone
