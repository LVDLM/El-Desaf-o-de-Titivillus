import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const LEVEL_3_POOL: LevelData[] = [
  {
    difficultyLevel: 3,
    description: "Don Quijote de la Mancha (Frag.)",
    totalErrors: 5,
    timeLimit: 60,
    originalText: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
    bookTitle: "Don Quijote de la Mancha",
    bookAuthor: "Miguel de Cervantes",
    tokens: [
      t("Hen", "En"), s(), // Error: Hen -> En
      t("un"), s(), 
      t("lu"), t("gar"), s(), 
      t("de"), s(), 
      t("la"), s(), 
      t("Man"), t("xa", "cha"), t(","), s(), // Error: xa -> cha
      t("de"), s(), 
      t("cu"), t("yo"), s(), 
      t("non", "nom"), t("bre"), s(), // Error: non -> nom
      t("no"), s(), 
      t("kie", "quie"), t("ro"), s(), // Error: kie -> quie
      t("a"), t("cor"), t("dar"), t("me"), t("..", "...") // Error: .. -> ...
    ]
  },
];