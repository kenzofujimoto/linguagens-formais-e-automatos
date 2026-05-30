import json
import sys

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

with open(r"c:\Users\Kenzo\Desktop\codigo\projetos\linguagens-formais-e-automatos\pdf_content.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Procurar especificamente pela chave "Exercicios-P2"
p2_content = data.get("Exercicios-P2", {})
if p2_content:
    text = p2_content.get("text", "")
    pages = text.split("---PAGE---")
    print(f"Total de páginas em Exercicios-P2: {len(pages)}")
    for i, page in enumerate(pages):
        print(f"--- Página {i+1} ---")
        # Imprimir o texto completo da página (sem truncar)
        print(page.strip())
        print()
else:
    print("Exercicios-P2 não encontrado no JSON.")
