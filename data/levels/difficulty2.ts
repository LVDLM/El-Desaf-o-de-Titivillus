/**
 * BANCO DE TEXTOS - NIVEL DE DIFICULTAD 2 (PERFIL 1 / PERFIL 2)
 * 
 * Fuentes bibliográficas y situación de derechos:
 * 1. Julio Verne: «Veinte mil leguas de viaje submarino» («Vingt mille lieues sous les mers», 1870):
 *    - Traducción clásica de dominio público (siglo XIX, Vicente Guimerá / Gaspar y Roig).
 *    - Autor fallecido en 1905 (dominio público internacional).
 * 2. Robert Louis Stevenson: «La isla del tesoro» («Treasure Island», 1883):
 *    - Traducción histórica castellana de dominio público.
 *    - Autor fallecido en 1894 (dominio público pleno).
 * 3. Lewis Carroll: «Alicia en el país de las maravillas» («Alice's Adventures in Wonderland», 1865):
 *    - Traducción histórica de dominio público (primera mitad del siglo XX).
 *    - Autor fallecido en 1898 (dominio público pleno).
 * 4. Jack London: «El llamado de la selva» («The Call of the Wild», 1903):
 *    - Traducción clásica castellana de dominio público.
 *    - Autor fallecido en 1916 (dominio público internacional).
 */

import { LevelData } from "../../types";
import { w, p, s } from "../../utils/levelHelpers";

export const LEVEL_2_POOL: LevelData[] = [
  {
    difficultyLevel: 2,
    profile: "perfil_1",
    description: "Veinte mil leguas de viaje submarino (Frag.)",
    totalErrors: 3,
    timeLimit: 55,
    originalText: "El año 1866 fue marcado por un extraño acontecimiento. Un fenómeno inexplicable que nadie ha olvidado. Los hombres de mar estaban particularmente emocionados.",
    bookTitle: "Veinte mil leguas de viaje submarino",
    bookAuthor: "Julio Verne",
    tokens: [
      w("El"), s(),
      w("año"), s(),
      w("1866"), s(),
      w("fue"), s(),
      w("marcado"), s(),
      w("por"), s(),
      w("un"), s(),
      w("estraño", "extraño", "homophone"), s(), // Error 1: estraño -> extraño (s -> x)
      w("acontecimiento"), p("."), s(),
      w("Un"), s(),
      w("fenomeno", "fenómeno", "accent"), s(), // Error 2: fenomeno -> fenómeno (falta tilde esdrújula)
      w("inexplicable"), s(),
      w("que"), s(),
      w("nadie"), s(),
      w("ha"), s(),
      w("olbidado", "olvidado", "homophone"), p("."), s(), // Error 3: olbidado -> olvidado (b -> v)
      w("Los"), s(),
      w("hombres"), s(),
      w("de"), s(),
      w("mar"), s(),
      w("estaban"), s(),
      w("particularmente"), s(),
      w("emocionados"), p(".")
    ]
  },
  {
    difficultyLevel: 2,
    profile: "perfil_1",
    description: "La isla del tesoro (Frag.)",
    totalErrors: 3,
    timeLimit: 55,
    originalText: "Debo contar todo, desde el principio hasta el final, sin omitir nada excepto la posición de la isla, y esto solamente porque todavía hay tesoro en ella.",
    bookTitle: "La isla del tesoro",
    bookAuthor: "Robert Louis Stevenson",
    tokens: [
      w("Debo"), s(),
      w("contar"), s(),
      w("todo"), p(","), s(),
      w("desde"), s(),
      w("el"), s(),
      w("prinsipio", "principio", "homophone"), s(), // Error 1: prinsipio -> principio (s -> c)
      w("hasta"), s(),
      w("el"), s(),
      w("final"), p(","), s(),
      w("sin"), s(),
      w("omitir"), s(),
      w("nada"), s(),
      w("escepto", "excepto", "homophone"), s(), // Error 2: escepto -> excepto (s -> x)
      w("la"), s(),
      w("posición"), s(),
      w("de"), s(),
      w("la"), s(),
      w("isla"), p(","), s(),
      w("y"), s(),
      w("esto"), s(),
      w("solamente"), s(),
      w("porque"), s(),
      w("todavia", "todavía", "accent"), s(), // Error 3: todavia -> todavía (falta tilde hiato)
      w("hay"), s(),
      w("tesoro"), s(),
      w("en"), s(),
      w("ella"), p(".")
    ]
  },
  {
    difficultyLevel: 2,
    profile: "perfil_1",
    description: "Alicia en el país de las maravillas (Frag.)",
    totalErrors: 3,
    timeLimit: 60,
    originalText: "Alicia empezaba a cansarse de estar sentada con su hermana a la orilla del río, sin tener nada que hacer. ¿Y de qué sirve un libro sin dibujos ni diálogos?, pensó Alicia.",
    bookTitle: "Alicia en el país de las maravillas",
    bookAuthor: "Lewis Carroll",
    tokens: [
      w("Alicia"), s(),
      w("empesaba", "empezaba", "homophone"), s(), // Error 1: empesaba -> empezaba (s -> z)
      w("a"), s(),
      w("cansarse"), s(),
      w("de"), s(),
      w("estar"), s(),
      w("sentada"), s(),
      w("con"), s(),
      w("su"), s(),
      w("hermana"), s(),
      w("a"), s(),
      w("la"), s(),
      w("orilla"), s(),
      w("del"), s(),
      w("río"), p(","), s(),
      w("sin"), s(),
      w("tener"), s(),
      w("nada"), s(),
      w("que"), s(),
      w("acer", "hacer", "homophone"), p("."), s(), // Error 2: acer -> hacer (falta h)
      p("¿"), w("Y"), s(),
      w("de"), s(),
      w("qué"), s(),
      w("sirve"), s(),
      w("un"), s(),
      w("libro"), s(),
      w("sin"), s(),
      w("dibujos"), s(),
      w("ni"), s(),
      w("dialogos", "diálogos", "accent"), p("?"), p(","), s(), // Error 3: dialogos -> diálogos (falta tilde esdrújula)
      w("pensó"), s(),
      w("Alicia"), p(".")
    ]
  },
  {
    difficultyLevel: 2,
    profile: "perfil_1",
    description: "El llamado de la selva (Frag.)",
    totalErrors: 3,
    timeLimit: 55,
    originalText: "Buck no leía los periódicos, o habría sabido que se avecinaban problemas. No solo para él, sino para todos los perros de músculos fuertes y pelo cálido.",
    bookTitle: "El llamado de la selva",
    bookAuthor: "Jack London",
    tokens: [
      w("Buck"), s(),
      w("no"), s(),
      w("leía"), s(),
      w("los"), s(),
      w("periódicos"), p(","), s(),
      w("o"), s(),
      w("abría", "habría", "homophone"), s(), // Error 1: abría -> habría (falta h)
      w("sabido"), s(),
      w("que"), s(),
      w("se"), s(),
      w("avecinaban"), s(),
      w("problemas"), p("."), s(),
      w("No"), s(),
      w("solo"), s(),
      w("para"), s(),
      w("él"), p(","), s(),
      w("sino"), s(),
      w("para"), s(),
      w("todos"), s(),
      w("los"), s(),
      w("perros"), s(),
      w("de"), s(),
      w("musculos", "músculos", "accent"), s(), // Error 2: musculos -> músculos (falta tilde esdrújula)
      w("fuertes"), s(),
      w("y"), s(),
      w("pelo"), s(),
      w("calido", "cálido", "accent"), p(".") // Error 3: calido -> cálido (falta tilde esdrújula)
    ]
  }
];
