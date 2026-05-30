import re

# Read site-data.js
path = r"c:\Users\Kenzo\Desktop\codigo\projetos\linguagens-formais-e-automatos\assets\js\site-data.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Parse animations
matches = re.finditer(r'(\w+):\s*\{\s*title:\s*"([^"]+)"', content)
animations = {}

for m in matches:
    anim_id = m.group(1)
    title = m.group(2)
    sub = content[m.start():]
    
    # Extract automaton transitions
    auto_match = re.search(r'automaton:\s*\{', sub)
    transitions = []
    if auto_match:
        # Find matching close bracket for automaton
        start = m.start() + auto_match.end()
        bracket = 1
        i = start
        while bracket > 0 and i < len(content):
            if content[i] == '{': bracket += 1
            elif content[i] == '}': bracket -= 1
            i += 1
        auto_content = content[start:i-1]
        
        # Find all transition ids, from, to, label
        trans_matches = re.finditer(r'\{\s*id:\s*"([^"]+)"\s*,\s*from:\s*"([^"]+)"\s*,\s*to:\s*"([^"]+)"', auto_content)
        for tm in trans_matches:
            transitions.append({
                "id": tm.group(1),
                "from": tm.group(2),
                "to": tm.group(3)
            })
            
    # Extract steps
    steps_match = re.search(r'steps:\s*\[', sub)
    steps = []
    if steps_match:
        start_idx = m.start() + steps_match.end()
        bracket_count = 1
        end_idx = start_idx
        while bracket_count > 0 and end_idx < len(content):
            if content[end_idx] == '[': bracket_count += 1
            elif content[end_idx] == ']': bracket_count -= 1
            end_idx += 1
        steps_content = content[start_idx:end_idx-1]
        
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
                
        for s_idx, block in enumerate(step_blocks):
            states_m = re.search(r'activeStates:\s*\[([^\]]+)\]', block)
            trans_m = re.search(r'activeTransitions:\s*\[([^\]]+)\]', block)
            
            states = [s.strip().strip('"').strip("'") for s in states_m.group(1).split(',')] if states_m and states_m.group(1).strip() else []
            trans = [t.strip().strip('"').strip("'") for t in trans_m.group(1).split(',')] if trans_m and trans_m.group(1).strip() else []
            
            steps.append({
                "states": states,
                "trans": trans,
                "block": block[:120].strip().replace('\n', ' ') + "..."
            })
            
    animations[anim_id] = {
        "title": title,
        "transitions": transitions,
        "steps": steps
    }

print("Verifying synchronization of transitions and states...")
for anim_id, anim in animations.items():
    print(f"\nVerifying {anim_id}:")
    trans_dict = {t["id"]: t for t in anim["transitions"]}
    
    prev_states = []
    for s_idx, step in enumerate(anim["steps"]):
        states = step["states"]
        trans = step["trans"]
        
        # 1. Check if all activeTransitions exist
        for t_id in trans:
            if t_id not in trans_dict:
                print(f"  [ERROR] Step {s_idx+1}: Active transition '{t_id}' does not exist in automaton definition!")
                continue
                
            t_obj = trans_dict[t_id]
            # 2. Check if the transition's destination is in activeStates
            if t_obj["to"] not in states:
                print(f"  [WARNING] Step {s_idx+1}: Transition '{t_id}' goes to '{t_obj['to']}', but it is NOT in activeStates {states}!")
            
            # 3. Check if the transition's source was in previous activeStates (for deterministic ones)
            if prev_states and t_obj["from"] not in prev_states:
                print(f"  [INFO] Step {s_idx+1}: Transition '{t_id}' starts from '{t_obj['from']}', which was NOT in previous activeStates {prev_states}.")
                
        prev_states = states
print("\nVerification complete!")
