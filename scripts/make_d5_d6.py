import sys
import re

def tokenize_passage(text_words, errors_map):
    """
    text_words: list of tuples (token_type, value) where token_type is:
      'w': word
      'p': punctuation
      's': normal space
      'err': error token string like w("err", "corr", "kind") or sp(...)
      'dist': distractor word
    """
    code_tokens = []
    for item in text_words:
        t_type = item[0]
        val = item[1]
        if t_type == 's':
            code_tokens.append('s()')
        elif t_type == 'p':
            code_tokens.append(f'p("{val}")')
        elif t_type == 'w':
            code_tokens.append(f'w("{val}")')
        elif t_type == 'dist':
            code_tokens.append(f'w("{val}", undefined, undefined, true)')
        elif t_type == 'err':
            code_tokens.append(val)
    return code_tokens

print("Tokenizer ready")
