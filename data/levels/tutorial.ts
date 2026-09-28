/**
 * BANCO DE TEXTOS - NIVEL 0 (TUTORIAL / ENTRENAMIENTO DE ESCRIBA)
 * 
 * Fuentes bibliográficas y situación de derechos:
 * - Refranero Popular Castellano («En casa del herrero, cuchillo de palo»).
 * - Autor: Tradición oral hispánica.
 * - Situación: Dominio público pleno.
 */

import { LevelData } from "../../types";
import { w, p, s } from "../../utils/levelHelpers";

export const TUTORIAL_LEVEL: LevelData = {
  difficultyLevel: 0,
  isTutorial: true,
  description: "Entrenamiento de Escriba",
  totalErrors: 4,
  timeLimit: 120,
  originalText: "En casa del herrero, cuchillo de palo.",
  bookTitle: "Refranero Popular",
  bookAuthor: "Tradición Oral",
  tokens: [
    w("En"), s(),
    // Error 1: caza -> casa
    w("caza", "casa", "homophone"), s(), 
    w("del"), s(),
    // Error 2: errero -> herrero
    w("errero", "herrero", "homophone"), p(","), s(), 
    // Error 3: cuchiyo -> cuchillo
    w("cuchiyo", "cuchillo", "homophone"), s(), 
    w("de"), s(),
    // Error 4: palo + signo incorrecto (coma en vez de punto)
    w("palo"), p(",", ".", "punct-wrong")
  ]
};
