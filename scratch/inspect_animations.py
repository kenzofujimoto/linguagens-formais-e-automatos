import json
import re

# Read site-data.js
path = r"c:\Users\Kenzo\Desktop\codigo\projetos\linguagens-formais-e-automatos\assets\js\site-data.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

output_lines = ["Analyzing site-data.js exercises..."]

# Let's find LFA_SITE_DATA.exercises array and extract each exercise block
# Since the array starts at exercises: [ and ends near the end of the file, let's locate it.
exercises_match = re.search(r'exercises:\s*\[', content)
if exercises_match:
    start_idx = exercises_match.end()
    bracket_count = 1
    end_idx = start_idx
    while bracket_count > 0 and end_idx < len(content):
        if content[end_idx] == '[':
            bracket_count += 1
        elif content[end_idx] == ']':
            bracket_count -= 1
        end_idx += 1
    
    exercises_content = content[start_idx:end_idx-1]
    
    # We find individual exercise objects. They start with { and end with } at the top level of the array.
    bracket_count = 0
    ex_blocks = []
    current_block = []
    in_string = False
    escape = False
    quote_char = ''
    
    # Simple state machine to extract top-level objects in the array
    i = 0
    while i < len(exercises_content):
        char = exercises_content[i]
        if in_string:
            if escape:
                escape = False
            elif char == '\\':
                escape = True
            elif char == quote_char:
                in_string = False
            current_block.append(char)
        else:
            if char in ('"', "'", '`'):
                in_string = True
                quote_char = char
                current_block.append(char)
            elif char == '{':
                bracket_count += 1
                current_block.append(char)
            elif char == '}':
                bracket_count -= 1
                current_block.append(char)
                if bracket_count == 0:
                    ex_blocks.append("".join(current_block))
                    current_block = []
            elif bracket_count > 0:
                current_block.append(char)
        i += 1

    for ex_idx, block in enumerate(ex_blocks):
        id_m = re.search(r'id:\s*"([^"]+)"', block)
        ex_id = id_m.group(1) if id_m else f"Exercise {ex_idx+1}"
        title_m = re.search(r'title:\s*"([^"]+)"', block)
        ex_title = title_m.group(1) if title_m else ""
        
        # Check if it has solutionSteps
        steps_match = re.search(r'solutionSteps:\s*\[', block)
        if not steps_match:
            continue
            
        output_lines.append(f"\nExercise: {ex_id} ({ex_title})")
        
        # Extract steps inside solutionSteps
        steps_sub = block[steps_match.end():]
        bracket_count = 1
        sub_end_idx = 0
        while bracket_count > 0 and sub_end_idx < len(steps_sub):
            if steps_sub[sub_end_idx] == '[':
                bracket_count += 1
            elif steps_sub[sub_end_idx] == ']':
                bracket_count -= 1
            sub_end_idx += 1
            
        steps_content = steps_sub[:sub_end_idx-1]
        
        # Split steps
        b_count = 0
        step_blocks = []
        curr_b = []
        for char in steps_content:
            if char == '{':
                b_count += 1
                curr_b.append(char)
            elif char == '}':
                b_count -= 1
                curr_b.append(char)
                if b_count == 0:
                    step_blocks.append("".join(curr_b))
                    curr_b = []
            elif b_count > 0:
                curr_b.append(char)
                
        for idx, s_block in enumerate(step_blocks):
            step_title_m = re.search(r'title:\s*"([^"]+)"', s_block)
            step_title = step_title_m.group(1) if step_title_m else f"Step {idx+1}"
            
            input_m = re.search(r'input:\s*"([^"]+)"', s_block)
            pos_m = re.search(r'inputPosition:\s*(\d+)', s_block)
            states_m = re.search(r'activeStates:\s*\[([^\]]+)\]', s_block)
            trans_m = re.search(r'activeTransitions:\s*\[([^\]]+)\]', s_block)
            
            info = []
            if input_m: info.append(f"input: '{input_m.group(1)}'")
            if pos_m: info.append(f"inputPos: {pos_m.group(1)}")
            if states_m: info.append(f"states: [{states_m.group(1).strip()}]")
            if trans_m: info.append(f"trans: [{trans_m.group(1).strip()}]")
            
            output_lines.append(f"  Step {idx+1}: {step_title} -> {', '.join(info)}")

# Append to file
out_path = r"c:\Users\Kenzo\Desktop\codigo\projetos\linguagens-formais-e-automatos\scratch\inspect_results.txt"
with open(out_path, "a", encoding="utf-8") as f:
    f.write("\n\n" + "\n".join(output_lines))
print("Done! Appended exercises to scratch/inspect_results.txt")
