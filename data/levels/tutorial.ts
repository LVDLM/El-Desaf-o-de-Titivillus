import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const TUTORIAL_LEVEL: LevelData = {
  difficultyLevel: 0,
  isTutorial: true,
  description: "Entrenamiento de Escriba",
  totalErrors: 2,
  timeLimit: 60, 
  originalText: "En casa del herrero, cuchillo de palo.",
  bookTitle: "Refranero Popular",
  bookAuthor: "Tradición Oral",
  tokens: [
    t("En"), s(),
    t("ca"), t("za", "sa"), s(), // Error 1: caza -> decidera ( )
    t("del"), s(),
    t("e", "he"), t("rre"), t("ro"), t(","), s(), // Error 1: errero -> herrero (falta h)
    t("cu"), t("chi", "chi"), t("yo", "llo"), s(), // Error 2: cuchiyo -> cuchillo (y -> ll)
    t("de"), s(),
    t("pa"), t("lo"), t(",", ".")
  ]
};