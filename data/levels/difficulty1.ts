import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const LEVEL_1_POOL: LevelData[] = [
  {
    difficultyLevel: 1,
    description: "Refrán Popular",
    totalErrors: 3,
    timeLimit: 30,
    originalText: "El hábito no hace al monje.",
    bookTitle: "Refranero Español",
    bookAuthor: "Tradición Oral",
    tokens: [
      t("El"), s(), 
      t("á", "há"), t("bi"), t("to"), s(), // Error 1: ábito -> hábito (falta h)
      t("no"), s(), 
      t("a", "ha"), t("ce"), s(), // Error 2: ace -> hace (falta h)
      t("al"), s(), 
      t("mon"), t("ge", "je"), t(".") // Error 3: monge -> monje (g -> j)
    ]
  },
  {
    difficultyLevel: 1,
    description: "Advertencia Medieval",
    totalErrors: 3,
    timeLimit: 45,
    originalText: "Cría cuervos y te sacarán los ojos.",
    bookTitle: "Refranero Español",
    bookAuthor: "Tradición Oral",
    tokens: [
      t("Crí"), t("a"), s(),
      t("cuer"), t("vos"), s(),
      t("i", "y"), s(), // Error 1: i -> y (conjunción)
      t("te"), s(),
      t("sa"), t("ca"), t("ran", "rán"), s(), // Error 2: sacaran -> sacarán (falta tilde aguda)
      t("los"), s(),
      t("o"), t("jos"), t("!", ".") // Error 3: ! -> . (signo incorrecto)
    ]
  },
  {
    difficultyLevel: 1,
    description: "Platero y yo (Frag.)",
    totalErrors: 3,
    timeLimit: 60,
    originalText: "Platero es pequeño, peludo, suave; tan blando por fuera, que se diría todo de algodón, que no lleva huesos. Solo los espejos de azabache de sus ojos son duros cual dos escarabajos de cristal negro.",
    bookTitle: "Platero y yo",
    bookAuthor: "Juan Ramón Jiménez",
    tokens: [
      t("Pla"), t("te"), t("ro"), s(),
      t("es"), s(),
      t("pe"), t("que"), t("ño"), t(","), s(),
      t("pe"), t("lu"), t("do"), t(","), s(),
      t("sua"), t("be", "ve"), t(";"), s(), // Error 1: suabe -> suave (b -> v)
      t("tan"), s(),
      t("blan"), t("do"), s(),
      t("por"), s(),
      t("fue"), t("ra"), t(","), s(),
      t("que"), s(),
      t("se"), s(),
      t("di"), t("rí"), t("a"), s(),
      t("to"), t("do"), s(),
      t("de"), s(),
      t("al"), t("go"), t("don", "dón"), t(","), s(), // Error 2: algodon -> algodón (falta tilde aguda)
      t("que"), s(),
      t("no"), s(),
      t("lle"), t("va"), s(),
      t("ue", "hue"), t("sos"), t("."), s(), // Error 3: uesos -> huesos (falta h)
      t("So"), t("lo"), s(),
      t("los"), s(),
      t("es"), t("pe"), t("jos"), s(),
      t("de"), s(),
      t("a"), t("za"), t("ba"), t("che"), s(),
      t("de"), s(),
      t("sus"), s(),
      t("o"), t("jos"), s(),
      t("son"), s(),
      t("du"), t("ros"), s(),
      t("cual"), s(),
      t("dos"), s(),
      t("es"), t("ca"), t("ra"), t("ba"), t("jos"), s(),
      t("de"), s(),
      t("cris"), t("tal"), s(),
      t("ne"), t("gro"), t(".")
    ]
  }
];