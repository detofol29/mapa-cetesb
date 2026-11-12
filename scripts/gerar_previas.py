#!/usr/bin/env python3
"""Gera as imagens do site (public/img/) a partir do PDF final dos mapas.

Uso: py -I scripts/gerar_previas.py caminho/do/ebook.pdf [--capa caminho/da/capa.png] [mapas...]
Ex.: py -I scripts/gerar_previas.py "../mapa-cetesb/Mapa da Aprovação CETESB 2026 - Técnico Administrativo.pdf" --capa "../mapa-cetesb/Mapa visual da aprovação na CETESB.png"

Layout do PDF: página 1 = capa, páginas 2-3 = sumário, depois um mapa por página.
A página de cada mapa é achada pelo texto "MAPA N •" impresso nela (hoje, mapa N = página N+3).
Com --capa, a capa do site vem dessa imagem; sem ele, da página 1 do PDF.
Saída: img/capa.webp, img/capa.jpg, img/capa-nova.png (og:image) e img/mapa-NNN.webp.
"""
import re
import sys
from pathlib import Path

import pypdfium2 as pdfium
from PIL import Image

PADRAO = [1, 17, 29, 39, 50, 73, 83, 91, 109, 128, 138, 148]

args = sys.argv[2:]
capa_arq = None
if "--capa" in args:
    i = args.index("--capa")
    capa_arq = Path(args[i + 1])
    del args[i:i + 2]
pdf = Path(sys.argv[1])
mapas = [int(x) for x in args] or PADRAO
doc = pdfium.PdfDocument(str(pdf))
out = Path(__file__).resolve().parent.parent / "public" / "img"
out.mkdir(parents=True, exist_ok=True)

pagina_do_mapa = {}
for idx in range(len(doc)):
    m = re.search(r"MAPA (\d+) •", doc[idx].get_textpage().get_text_range())
    if m:
        pagina_do_mapa.setdefault(int(m.group(1)), idx)

if capa_arq:
    capa_hi = Image.open(capa_arq).convert("RGB")
    capa = capa_hi.resize((round(capa_hi.width * 1263 / capa_hi.height), 1263), Image.LANCZOS)
else:
    capa_hi = doc[0].render(scale=1.7717).to_pil().convert("RGB")
    capa = doc[0].render(scale=1.5).to_pil().convert("RGB")
capa_hi.save(out / "capa-nova.png", optimize=True)
print("capa-nova.png", capa_hi.size)

capa.save(out / "capa.webp", quality=84, method=6)
capa.save(out / "capa.jpg", quality=84, optimize=True)
print("capa.webp / capa.jpg", capa.size)

for n in mapas:
    if n not in pagina_do_mapa:
        sys.exit(f"Mapa {n} não encontrado no PDF")
    idx = pagina_do_mapa[n]
    img = doc[idx].render(scale=1.6).to_pil().convert("RGB")
    img.save(out / f"mapa-{n:03d}.webp", quality=82, method=6)
    print(f"mapa-{n:03d}.webp  (página {idx + 1})", img.size)
