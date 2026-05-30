import fitz  # pymupdf
import json
import os

pdfs = [
    "Aula01", "Aula02", "Aula04", "Aula05", "Aula06", "Aula07", "Aula08", "Aula09",
    "Aula10", "Aula11", "Aula12", "Aula13", "Aula15", "Aula16", "Aula17", "Aula18",
    "Aula19", "Aula20", "Aula21", "Aula22", "Aula23", "Aula24", "Aula26", "Aula27",
    "Exercicios-P2"
]

results = {}
downloads = r"C:\Users\Kenzo\Downloads"

for name in pdfs:
    path = os.path.join(downloads, f"{name}.pdf")
    if not os.path.exists(path):
        results[name] = {"error": f"File not found: {path}"}
        continue
    try:
        doc = fitz.open(path)
        text = ""
        page_count = len(doc)
        for page in doc:
            text += page.get_text() + "\n---PAGE---\n"
        doc.close()
        results[name] = {"text": text[:5000], "total_chars": len(text), "pages": page_count}
    except Exception as e:
        results[name] = {"error": str(e)}

with open("pdf_content.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Done! Saved to pdf_content.json")
