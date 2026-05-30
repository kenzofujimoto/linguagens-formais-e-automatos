with open(r"c:\Users\Kenzo\Desktop\codigo\projetos\linguagens-formais-e-automatos\assets\js\site-data.js", "r", encoding="utf-8") as f:
    content = f.read()

print("Occurrences of solutionSteps:", content.count("solutionSteps"))
print("Occurrences of automaton in exercises:", content.count("automaton"))
