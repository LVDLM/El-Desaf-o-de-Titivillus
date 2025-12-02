import { LevelData, TextToken } from "../types";

// Helper to generate unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

// Helper to create a token easily
const t = (text: string, correction?: string): TextToken => ({
  id: generateId(),
  text,
  isError: !!correction,
  correction: correction || text,
  userFixed: false,
  revealed: false
});

// Helper to create space
const s = (): TextToken => ({
  id: generateId(),
  text: " ",
  isError: false,
  correction: " ",
  userFixed: false,
  revealed: false
});

// Level Database
const LEVELS: LevelData[] = [
  {
    difficultyLevel: 1,
    description: "Refrán Popular",
    totalErrors: 2,
    timeLimit: 30,
    originalText: "El hábito no hace al monje.",
    tokens: [
      t("El"), s(), 
      t("á", "há"), t("bi"), t("to"), s(), // Error: á -> há
      t("no"), s(), 
      t("a", "ha"), t("ce"), s(), // Error: a -> ha
      t("al"), s(), 
      t("mon"), t("je"), t(".")
    ]
  },
  {
    difficultyLevel: 2,
    description: "Advertencia Medieval",
    totalErrors: 3,
    timeLimit: 45,
    originalText: "Cría cuervos y te sacarán los ojos.",
    tokens: [
      t("Crí"), t("a"), s(),
      t("cuer"), t("vos"), s(),
      t("i", "y"), s(), // Error: i -> y
      t("te"), s(),
      t("sa"), t("ca"), t("ran", "rán"), s(), // Error: ran -> rán
      t("los"), s(),
      t("o"), t("jos"), t("!", ".") // Error: ! -> . (Manuscript has !, corrects to .)
    ]
  },
  {
    difficultyLevel: 3,
    description: "Don Quijote de la Mancha (Frag.)",
    totalErrors: 5,
    timeLimit: 60,
    originalText: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
    tokens: [
      t("Hen", "En"), s(), // Error: Hen -> En
      t("un"), s(), 
      t("lu"), t("gar"), s(), 
      t("de"), s(), 
      t("la"), s(), 
      t("Man"), t("xa", "cha"), t(","), s(), // Error: xa -> cha
      t("de"), s(), 
      t("cu"), t("yo"), s(), 
      t("non", "nom"), t("bre"), s(), // Error: non -> nom (Results in nonbre -> nombre)
      t("no"), s(), 
      t("kie", "quie"), t("ro"), s(), // Error: kie -> quie
      t("a"), t("cor"), t("dar"), t("me"), t("..", "...") // Error: .. -> ...
    ]
  },
  {
    difficultyLevel: 4,
    description: "Cantar de mio Cid",
    totalErrors: 6,
    timeLimit: 90,
    originalText: "De los sus ojos tan fuertemente llorando, tornaba la cabeza y estábalos catando.",
    tokens: [
      t("De"), s(), t("los"), s(), t("sus"), s(), 
      t("o"), t("jos"), s(),
      t("tam", "tan"), s(), // Error: tam -> tan
      t("fuer"), t("ti", "te"), t("men"), t("te"), s(), // Error: ti -> te
      t("yo", "llo"), t("ran"), t("do"), t(","), s(), // Error: yo -> llo
      t("tor"), t("na"), t("va", "ba"), s(), // Error: va -> ba
      t("la"), s(),
      t("ca"), t("ve", "be"), t("za"), s(), // Error: ve -> be
      t("y"), s(),
      t("es"), t("ta", "tá"), t("ba"), t("los"), s(), // Error: ta -> tá
      t("ca"), t("tan"), t("do"), t(".")
    ]
  }
];

export const getStaticLevel = async (levelIndex: number): Promise<LevelData> => {
  // Simulate network delay strictly for effect, but very fast (300ms)
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const safeIndex = (levelIndex - 1) % LEVELS.length;
  // Deep copy to avoid mutating the static definition between replays
  const level = JSON.parse(JSON.stringify(LEVELS[safeIndex]));
  
  // Recalculate total errors dynamically to ensure accuracy matches the tokens provided
  level.totalErrors = level.tokens.filter((t: any) => t.isError).length;

  return level;
};