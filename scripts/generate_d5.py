import os

# Helper to build level TS code
def make_level_code(level):
    comments = "\n  ".join(level["meta"])
    tokens_str = ",\n      ".join(level["tokens"])
    return f"""  // {comments}
  {{
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "{level['description']}",
    totalErrors: {level['totalErrors']},
    timeLimit: 120,
    originalText: "{level['originalText']}",
    bookTitle: "{level['bookTitle']}",
    bookAuthor: "{level['bookAuthor']}",
    tokens: [
      {tokens_str}
    ]
  }}"""

print("Level code builder ready")
