import re
import os

def tokenize_level(original_text, errors, distractors=None):
    if distractors is None:
        distractors = set()
    else:
        distractors = set(distractors)

    # Tokenize text into words, punctuation, spaces
    parts = re.findall(r"[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+|[,.;:¿?¡!()«»—\"\x27\-]|\s+", original_text)
    
    tokens = []
    err_idx = 0
    i = 0
    while i < len(parts):
        part = parts[i]
        if part.isspace():
            if err_idx < len(errors) and errors[err_idx].get("type") == "space-extra" and errors[err_idx].get("after") == parts[i-1]:
                tokens.append(errors[err_idx]["code"])
                err_idx += 1
            else:
                tokens.append("s()")
            i += 1
            continue

        # Check punct-missing before word
        if err_idx < len(errors) and errors[err_idx].get("type") == "punct-missing" and errors[err_idx].get("before") == part:
            tokens.append(errors[err_idx]["code"])
            err_idx += 1

        # Check space-missing (joins two words)
        if err_idx < len(errors) and errors[err_idx].get("type") == "space-missing" and errors[err_idx].get("target_first") == part:
            # part is the first word of the pair, parts[i+1] is space, parts[i+2] is second word
            tokens.append(errors[err_idx]["code"])
            err_idx += 1
            i += 3 # skip first word, space, second word
            continue

        # Check word-missing (inserted before word)
        if err_idx < len(errors) and errors[err_idx].get("type") == "word-missing" and errors[err_idx].get("before") == part:
            tokens.append(errors[err_idx]["code"])
            tokens.append("s()")
            err_idx += 1

        # Target word or punct replacement
        if err_idx < len(errors) and errors[err_idx].get("target") == part:
            tokens.append(errors[err_idx]["code"])
            err_idx += 1
            i += 1
            continue

        # Normal punct
        if re.match(r"^[,.;:¿?¡!()«»—\"\x27\-]+$", part):
            tokens.append(f'p("{part}")')
            i += 1
            continue

        # Normal word or distractor
        if part in distractors:
            tokens.append(f'w("{part}", undefined, undefined, true)')
        else:
            tokens.append(f'w("{part}")')
        i += 1

    if err_idx < len(errors):
        print(f"WARNING: only {err_idx} of {len(errors)} errors matched in level!")

    return tokens

print("Tokenizer function defined successfully")
