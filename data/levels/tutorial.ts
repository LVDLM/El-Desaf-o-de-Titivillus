import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const TUTORIAL_LEVEL: LevelData = {
  difficultyLevel: 0,
  isTutorial: true,
  description: "Entrenamiento de Escriba",
  totalErrors: 5, // 4 Real errors + 1 "Penalty Lesson" = 5 Steps to complete
  timeLimit: 120,
  originalText: "En casa del herrero, cuchillo de palo.",
  bookTitle: "Refranero Popular",
  bookAuthor: "Tradición Oral",
  tokens: [
    t("En"), s(),
    // Error 1: caza -> casa
    t("ca"), t("za", "sa"), s(), 
    t("del"), s(),
    // Error 2: errero -> herrero
    t("e", "he"), t("rre"), t("ro"), t(","), s(), 
    // Error 3: cuchiyo -> cuchillo
    t("cu"), t("chi"), t("yo", "llo"), s(), 
    t("de"), s(),
    // Error 4: , -> . (Ending punctuation)
    t("pa"), t("lo"), t(",", ".")
  ]
};