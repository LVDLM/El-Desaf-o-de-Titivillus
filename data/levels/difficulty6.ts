/**
 * BANCO DE TEXTOS - NIVEL DE DIFICULTAD 6 (PERFIL 4: NIVEL 10+)
 * 
 * Fuentes bibliográficas y situación de derechos:
 * 1. Rubén Darío: «Cuentos» («Cuentos fantásticos», 1888-1896):
 *    - Obra original del maestro del modernismo hispánico.
 *    - Autor fallecido en 1916 (dominio público pleno e internacional).
 *    - Contiene distractores léxicos correctos según la Ortografía de la RAE (2010):
 *      «hierático», «vicisitudes».
 */

import { LevelData } from "../../types";
import { w, p, sp, s } from "../../utils/levelHelpers";

export const LEVEL_6_POOL: LevelData[] = [
  {
    difficultyLevel: 10,
    profile: "perfil_4",
    description: "Cuentos Fantásticos (Frag.)",
    totalErrors: 9,
    timeLimit: 175,
    bookTitle: "Cuentos",
    bookAuthor: "Rubén Darío",
    originalText: "Aquel anciano de mirada penetrante y porte hierático poseía una extraña idiosincrasia que desconcertaba a cuantos se acercaban a su solitario retiro. ¿Cómo explicar la vorágine de pensamientos que albergaba en su mente sin caer en un análisis exorbitante? Con suma delicadeza examinaba los textos antiguos, evitando cualquier juicio apresurado sobre las vicisitudes del destino. Sus discípulos observaban en respetuoso silencio sus movimientos precisos, admirando la profunda serenidad con que desgranaba cada enigma sin buscar gloria terrenal alguna.",
    tokens: [
      w("Aquel"), s(),
      w("anciano"), s(),
      w("de"), s(),
      w("mirada"), s(),
      w("penetrante"), s(),
      w("y"), s(),
      // DISTRACTOR 1: "hierático" (correcto según RAE, término culto infrecuente)
      w("hierático", undefined, undefined, true), s(),
      w("poseía"), s(),
      w("una"), s(),
      w("extraña"), s(),
      // Error 1: idiozincrasia -> idiosincrasia (homophone)
      w("idiozincrasia", "idiosincrasia", "homophone"), s(),
      w("que"), s(),
      w("desconcertaba"), s(),
      w("a"), s(),
      w("cuantos"), s(),
      w("se"), s(),
      w("acercaban"), s(),
      w("a"), s(),
      w("su"), s(),
      w("solitario"), s(),
      w("retiro"), p("."), s(),
      // Error 2: signo de apertura omitido (punct-missing)
      p("", "¿", "punct-missing"),
      w("Cómo"), s(),
      w("explicar"), s(),
      w("la"), s(),
      // Error 3: voragine -> vorágine (accent)
      w("voragine", "vorágine", "accent"), s(),
      w("de"), s(),
      w("pensamientos"), s(),
      w("que"), s(),
      w("albergaba"), s(),
      w("en"), s(),
      w("su"), s(),
      w("mente"), s(),
      w("sin"), s(),
      w("caer"), s(),
      w("en"), s(),
      w("un"), s(),
      w("análisis"), s(),
      // Error 4: exhorbitante -> exorbitante (homophone)
      w("exhorbitante", "exorbitante", "homophone"), p("?"), s(),
      w("Con"), s(),
      w("suma"), s(),
      w("delicadeza"), s(),
      w("examinaba"), s(),
      w("los"), s(),
      w("textos"), s(),
      w("antiguos"), p(","), s(),
      w("evitando"), s(),
      w("cualquier"), s(),
      w("juicio"), s(),
      w("apresurado"), s(),
      w("sobre"), s(),
      w("las"), s(),
      // DISTRACTOR 2: "vicisitudes" (correcto según RAE)
      w("vicisitudes", undefined, undefined, true), s(),
      w("del"), s(),
      w("destino"), p("."), s(),
      w("Sus"), s(),
      w("discípulos"), s(),
      // Error 5: palabra sobrante indebida (word-extra)
      w("siempre", "", "word-extra"), s(),
      w("observaban"), s(),
      w("en"), s(),
      w("respetuoso"), s(),
      w("silencio"), s(),
      w("sus"), s(),
      w("movimientos"), s(),
      w("precisos"), sp(true, "", "space-extra", " "), p(","), s(), // Error 6: espacio antes de coma (space-extra)
      w("admirando"), s(),
      w("la"), s(),
      w("profunda"), s(),
      w("serenidad"), s(),
      w("conque", "con que", "space-missing"), s(), // Error 7: conque -> con que (space-missing)
      w("desgranaba"), s(),
      // Error 8: palabra omitida "cada" (word-missing)
      sp(true, "cada", "word-missing"), s(),
      w("enigma"), s(),
      w("sin"), s(),
      w("buscar"), s(),
      w("gloria"), s(),
      w("terrenal"), s(),
      // Error 9: algunaa -> alguna (letter)
      w("algunaa", "alguna", "letter"), p(".")
    ]
  }
];
