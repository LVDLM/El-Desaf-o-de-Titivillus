/**
 * BANCO DE TEXTOS - NIVEL DE DIFICULTAD 1 (PERFIL 1)
 * 
 * Fuentes bibliográficas y situación de derechos:
 * 1. Refrán Popular ("El hábito no hace al monje"):
 *    - Fuente: Refranero tradicional castellano (tradición oral / Marqués de Santillana).
 *    - Dominio público pleno.
 * 2. Advertencia Medieval ("Cría cuervos y te sacarán los ojos"):
 *    - Fuente: Refranero tradicional hispánico (siglo XVI).
 *    - Dominio público pleno.
 * 3. Juan Ramón Jiménez: «Platero y yo» (1914):
 *    - Obra original publicada en Madrid (1914, Ed. de la Lectura).
 *    - Dominio público (obra de 1914 / autor fallecido en 1958).
 * 4. Julio Verne: «La vuelta al mundo en ochenta días» («Le Tour du monde en quatre-vingts jours», 1872):
 *    - Traducción clásica castellana de dominio público (siglo XIX, Vicente Guimerá).
 *    - Autor fallecido en 1905 (dominio público patrimonial internacional).
 * 5. Gustavo Adolfo Bécquer: «Rimas y Leyendas» (1871):
 *    - Obra original publicada póstumamente en Madrid.
 *    - Dominio público pleno. Autor fallecido en 1870.
 * 6. Miguel de Unamuno: «Niebla» (1914):
 *    - Novela original publicada en Madrid (Editorial Renacimiento).
 *    - Dominio público pleno. Autor fallecido en 1936.
 */

import { LevelData } from "../../types";
import { w, p, s } from "../../utils/levelHelpers";

export const LEVEL_1_POOL: LevelData[] = [
  {
    difficultyLevel: 1,
    profile: "perfil_1",
    description: "Refrán Popular",
    totalErrors: 3,
    timeLimit: 35,
    originalText: "El hábito no hace al monje.",
    bookTitle: "Refranero Español",
    bookAuthor: "Tradición Oral",
    tokens: [
      w("El"), s(), 
      w("ábito", "hábito", "homophone"), s(), // Error 1: ábito -> hábito (falta h)
      w("no"), s(), 
      w("ace", "hace", "homophone"), s(), // Error 2: ace -> hace (falta h)
      w("al"), s(), 
      w("monge", "monje", "homophone"), p(".") // Error 3: monge -> monje (g -> j)
    ]
  },
  {
    difficultyLevel: 1,
    profile: "perfil_1",
    description: "Advertencia Medieval",
    totalErrors: 3,
    timeLimit: 40,
    originalText: "Cría cuervos y te sacarán los ojos.",
    bookTitle: "Refranero Español",
    bookAuthor: "Tradición Oral",
    tokens: [
      w("Cría"), s(),
      w("cuervos"), s(),
      w("i", "y", "letter"), s(), // Error 1: i -> y (conjunción)
      w("te"), s(),
      w("sacaran", "sacarán", "accent"), s(), // Error 2: sacaran -> sacarán (falta tilde aguda)
      w("los"), s(),
      w("ojos"), p("!", ".", "punct-wrong") // Error 3: ! -> . (signo incorrecto)
    ]
  },
  {
    difficultyLevel: 1,
    profile: "perfil_1",
    description: "Platero y yo (Frag.)",
    totalErrors: 3,
    timeLimit: 60,
    originalText: "Platero es pequeño, peludo, suave; tan blando por fuera, que se diría todo de algodón, que no lleva huesos. Solo los espejos de azabache de sus ojos son duros cual dos escarabajos de cristal negro.",
    bookTitle: "Platero y yo",
    bookAuthor: "Juan Ramón Jiménez",
    tokens: [
      w("Platero"), s(),
      w("es"), s(),
      w("pequeño"), p(","), s(),
      w("peludo"), p(","), s(),
      w("suabe", "suave", "homophone"), p(";"), s(), // Error 1: suabe -> suave (b -> v)
      w("tan"), s(),
      w("blando"), s(),
      w("por"), s(),
      w("fuera"), p(","), s(),
      w("que"), s(),
      w("se"), s(),
      w("diría"), s(),
      w("todo"), s(),
      w("de"), s(),
      w("algodon", "algodón", "accent"), p(","), s(), // Error 2: algodon -> algodón (falta tilde)
      w("que"), s(),
      w("no"), s(),
      w("lleva"), s(),
      w("uesos", "huesos", "homophone"), p("."), s(), // Error 3: uesos -> huesos (falta h)
      w("Solo"), s(),
      w("los"), s(),
      w("espejos"), s(),
      w("de"), s(),
      w("azabache"), s(),
      w("de"), s(),
      w("sus"), s(),
      w("ojos"), s(),
      w("son"), s(),
      w("duros"), s(),
      w("cual"), s(),
      w("dos"), s(),
      w("escarabajos"), s(),
      w("de"), s(),
      w("cristal"), s(),
      w("negro"), p(".")
    ]
  },
  {
    difficultyLevel: 1,
    profile: "perfil_1",
    description: "La vuelta al mundo en 80 días (Inicio)",
    totalErrors: 3,
    timeLimit: 65,
    originalText: "En el año 1872, la casa número 7 de Saville-row, Burlington Gardens. —en la cual murió Sheridan en 1814— estaba habitada por Phileas Fogg quien a pesar de que parecía haber tomado el partido de no hacer nada que pudiese llamar la atención, era uno de los miembros más notables y singulares del Reform Club de Londres.",
    bookTitle: "La vuelta al mundo en 80 días",
    bookAuthor: "Julio Verne",
    tokens: [
      w("En"), s(),
      w("el"), s(),
      w("año"), s(),
      w("1872"), p(","), s(),
      w("la"), s(),
      w("casa"), s(),
      w("número"), s(),
      w("7"), s(),
      w("de"), s(),
      w("Saville-row"), p(","), s(),
      w("Burlington"), s(),
      w("Gardens"), p("."), s(),
      p("—"), w("en"), s(),
      w("la"), s(),
      w("cual"), s(),
      w("murió"), s(),
      w("Sheridan"), s(),
      w("en"), s(),
      w("1814"), p("—"), s(),
      w("estaba"), s(),
      w("abitada", "habitada", "homophone"), s(), // Error 1: abitada -> habitada (falta h)
      w("por"), s(),
      w("Phileas"), s(),
      w("Fogg"), s(),
      w("quien"), s(),
      w("a"), s(),
      w("pesar"), s(),
      w("de"), s(),
      w("que"), s(),
      w("parecía"), s(),
      w("haber"), s(),
      w("tomado"), s(),
      w("el"), s(),
      w("partido"), s(),
      w("de"), s(),
      w("no"), s(),
      w("acer", "hacer", "homophone"), s(), // Error 2: acer -> hacer (falta h)
      w("nada"), s(),
      w("que"), s(),
      w("pudiese"), s(),
      w("llamar"), s(),
      w("la"), s(),
      w("atencion", "atención", "accent"), p(","), s(), // Error 3: atencion -> atención (falta tilde)
      w("era"), s(),
      w("uno"), s(),
      w("de"), s(),
      w("los"), s(),
      w("miembros"), s(),
      w("más"), s(),
      w("notables"), s(),
      w("y"), s(),
      w("singulares"), s(),
      w("del"), s(),
      w("Reform"), s(),
      w("Club"), s(),
      w("de"), s(),
      w("Londres"), p(".")
    ]
  },
  {
    difficultyLevel: 1,
    profile: "perfil_1",
    description: "Rimas y Leyendas (Frag.)",
    totalErrors: 3,
    timeLimit: 75,
    bookTitle: "Rimas y Leyendas",
    bookAuthor: "Gustavo Adolfo Bécquer",
    originalText: "Por los tenebrosos rincones de mi cerebro, acurrucados y desnudos, duermen los extravagantes hijos de mi fantasía, esperando en silencio que el arte los vista de la palabra para poder presentarse decentes en la escena del mundo.",
    tokens: [
      w("Por"), s(),
      w("los"), s(),
      w("tenebrosos"), s(),
      w("rinconez", "rincones", "letter"), s(), // Error 1: rinconez -> rincones (letra cambiada)
      w("de"), s(),
      w("mi"), s(),
      w("cerebro"), p(","), s(),
      w("acurrucados"), s(),
      w("y"), s(),
      w("desnudos"), p(","), s(),
      w("duermen"), s(),
      w("los"), s(),
      w("estravaagantes", "extravagantes", "letter"), s(), // Error 2: estravaagantes -> extravagantes (letra duplicada)
      w("hijos"), s(),
      w("de"), s(),
      w("mi"), s(),
      w("fantasia", "fantasía", "accent"), p(","), s(), // Error 3: fantasia -> fantasía (tilde ausente)
      w("esperando"), s(),
      w("en"), s(),
      w("silencio"), s(),
      w("que"), s(),
      w("el"), s(),
      w("arte"), s(),
      w("los"), s(),
      w("vista"), s(),
      w("de"), s(),
      w("la"), s(),
      w("palabra"), s(),
      w("para"), s(),
      w("poder"), s(),
      w("presentarse"), s(),
      w("decentes"), s(),
      w("en"), s(),
      w("la"), s(),
      w("escena"), s(),
      w("del"), s(),
      w("mundo"), p(".")
    ]
  },
  {
    difficultyLevel: 1,
    profile: "perfil_1",
    description: "Niebla (Frag.)",
    totalErrors: 3,
    timeLimit: 80,
    bookTitle: "Niebla",
    bookAuthor: "Miguel de Unamuno",
    originalText: "Al asomar Augusto a la puerta de su casa extendió el brazo derecho, con la palma hacia abajo y abierta, y mirando al cielo se quedó un momento parado en esta actitud estatutaria y augusta. No era que tomaba posesión del mundo exterior, sino que observaba si llovía.",
    tokens: [
      w("Al"), s(),
      w("asomar"), s(),
      w("Augusto"), s(),
      w("a"), s(),
      w("la"), s(),
      w("puerta"), s(),
      w("de"), s(),
      w("su"), s(),
      w("casa"), s(),
      w("extendio", "extendió", "accent"), s(), // Error 1: extendio -> extendió (tilde ausente)
      w("el"), s(),
      w("brazo"), s(),
      w("derecho"), p(","), s(),
      w("con"), s(),
      w("la"), s(),
      w("palma"), s(),
      w("hacia"), s(),
      w("abajo"), s(),
      w("y"), s(),
      w("abierta"), p(","), s(),
      w("y"), s(),
      w("mirando"), s(),
      w("al"), s(),
      w("cielo"), s(),
      w("se"), s(),
      w("quedó"), s(),
      w("un"), s(),
      w("momento"), s(),
      w("parado"), s(),
      w("en"), s(),
      w("esta"), s(),
      w("actitud"), s(),
      w("estatutaria"), s(),
      w("y"), s(),
      w("augusta"), p("."), s(),
      w("No"), s(),
      w("era"), s(),
      w("que"), s(),
      w("tomaba"), s(),
      w("posision", "posesión", "letter"), s(), // Error 2: posision -> posesión (letra cambiada)
      w("del"), s(),
      w("mundo"), s(),
      w("exterior"), p(","), s(),
      w("sino"), s(),
      w("que"), s(),
      w("observaba"), s(),
      w("si"), s(),
      w("llovia", "llovía", "accent"), p(".") // Error 3: llovia -> llovía (tilde hiato)
    ]
  }
];
