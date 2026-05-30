import json
import re
import sys

# Forçar a saída do terminal para usar UTF-8 e evitar erros com cp1252 no Windows
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

with open(r"c:\Users\Kenzo\Desktop\codigo\projetos\linguagens-formais-e-automatos\pdf_content.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for aula, content in data.items():
    text = content.get("text", "")
    pages = text.split("---PAGE---")
    for i, page in enumerate(pages):
        # Procurar por palavra "exercicio", "exercício", "questão", "q1", "q2" de forma insensível
        if re.search(r"\b(exercicio|exercício|exercícios|questão|resolva|projete|construa)\b", page, re.IGNORECASE):
            print(f"--- {aula} - Página {i+1} ---")
            lines = page.strip().split("\n")
            # Mostrar primeiras linhas, limpando caracteres matemáticos muito complexos se necessário
            for line in lines[:15]:
                # Limpa caracteres estranhos que possam dar erro no print
                clean_line = "".join([c if ord(c) < 65536 else '?' for c in line])
                print("  ", clean_line)
            print()
