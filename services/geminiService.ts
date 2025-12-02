import { GoogleGenAI, Type } from "@google/genai";
import { LevelData, TextToken } from "../types";

// Helper to generate unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

export const generateLevel = async (difficulty: number): Promise<LevelData> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Define complexity based on difficulty
  let promptContext = "";
  let errorFrequency = "";
  let timeLimit = 60;

  if (difficulty === 1) {
    promptContext = "Create a very short, simple sentence (approx 15 words) resembling a simple proverb or monastery rule.";
    errorFrequency = "Introduce 2-3 very obvious errors (spelling mistakes like 'b' instead of 'v', missing 'h', or extremely obvious typos).";
    timeLimit = 45;
  } else if (difficulty <= 3) {
    promptContext = "Create a short paragraph (approx 30 words) resembling a medieval chronicle or fable.";
    errorFrequency = "Introduce 3-5 errors including basic accentuation (tildes) and spelling.";
    timeLimit = 90;
  } else {
    promptContext = "Create a medium length paragraph (approx 50 words) resembling a complex theological or philosophical text.";
    errorFrequency = "Introduce 5-7 subtle errors including punctuation (commas, periods), subtle accentuation, and homophones.";
    timeLimit = 120;
  }

  const systemInstruction = `
    Eres Titivillus, el demonio de los escribas. Tu trabajo es introducir errores en los manuscritos.
    Genera un nivel para un juego de "encuentra las diferencias".
    
    1. Genera un texto ORIGINAL correcto en ESPAÑOL.
    2. Genera tokens para la versión COPIA (con errores).
    
    IMPORTANTE SOBRE LOS TOKENS:
    - Debes separar los signos de puntuación (.,;:?!) como tokens independientes para que el usuario pueda hacer clic en ellos si son erróneos.
    - Ejemplo: "Hola, mundo." -> ["Hola", ",", " ", "mundo", "."]
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          description: { type: Type.STRING, description: "A thematic description of the text source (e.g., 'Fragmento de la Regla de San Benito')" },
          originalText: { type: Type.STRING, description: "The completely correct original text string." },
          tokens: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                text: { type: Type.STRING, description: "The word or punctuation mark as it appears in the CORRUPTED copy." },
                isError: { type: Type.BOOLEAN, description: "True if this token contains an error compared to the original." },
                correction: { type: Type.STRING, description: "The correct form of the token. If isError is false, matches text." }
              },
              required: ["text", "isError", "correction"]
            }
          }
        },
        required: ["description", "originalText", "tokens"]
      }
    },
    contents: `
      Context: ${promptContext}
      Task: ${errorFrequency}
      Output the structured JSON for the game level.
    `
  });

  const data = JSON.parse(response.text || "{}");

  // Post-process to ensure IDs and types
  const tokens: TextToken[] = data.tokens.map((t: any) => ({
    id: generateId(),
    text: t.text,
    isError: t.isError,
    correction: t.correction,
    userFixed: false,
    revealed: false
  }));

  const totalErrors = tokens.filter((t) => t.isError).length;

  return {
    originalText: data.originalText,
    tokens,
    totalErrors,
    timeLimit,
    description: data.description || "Manuscrito Desconocido",
    difficultyLevel: difficulty
  };
};