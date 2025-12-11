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
  },
  {
    difficultyLevel: 1,
    description: "La vuelta al mundo en 80 días (Inicio)",
    totalErrors: 3,
    timeLimit: 60,
    originalText: "En el año 1872, la casa número 7 de Saville-row, Burlington Gardens. —en la cual murió Sheridan en 1814— estaba habitada por Phileas Fogg quien a pesar de que parecía haber tomado el partido de no hacer nada que pudiese llamar la atención, era uno de los miembros más notables y singulares del Reform Club de Londres.",
    bookTitle: "La vuelta al mundo en 80 días",
    bookAuthor: "Julio Verne",
    tokens: [
      t("En"), s(),
      t("el"), s(),
      t("a"), t("ño"), s(),
      t("1872"), t(","), s(),
      t("la"), s(),
      t("ca"), t("sa"), s(),
      t("nú"), t("me"), t("ro"), s(),
      t("7"), s(),
      t("de"), s(),
      t("Sa"), t("vi"), t("lle"), t("-"), t("row"), t(","), s(),
      t("Bur"), t("ling"), t("ton"), s(),
      t("Gar"), t("dens"), t("."), s(),
      t("—"), t("en"), s(),
      t("la"), s(),
      t("cual"), s(),
      t("mu"), t("rió"), s(),
      t("She"), t("ri"), t("dan"), s(),
      t("en"), s(),
      t("1814"), t("—"), s(),
      t("es"), t("ta"), t("ba"), s(),
      t("a", "ha"), t("bi"), t("ta"), t("da"), s(), // Error 1: abitada -> habitada (falta h)
      t("por"), s(),
      t("Phi"), t("leas"), s(),
      t("Fogg"), s(),
      t("quien"), s(),
      t("a"), s(),
      t("pe"), t("sar"), s(),
      t("de"), s(),
      t("que"), s(),
      t("pa"), t("re"), t("cía"), s(),
      t("ha"), t("ber"), s(),
      t("to"), t("ma"), t("do"), s(),
      t("el"), s(),
      t("par"), t("ti"), t("do"), s(),
      t("de"), s(),
      t("no"), s(),
      t("a", "ha"), t("cer"), s(), // Error 2: acer -> hacer (falta h)
      t("na"), t("da"), s(),
      t("que"), s(),
      t("pu"), t("die"), t("se"), s(),
      t("lla"), t("mar"), s(),
      t("la"), s(),
      t("a"), t("ten"), t("cion", "ción"), t(","), s(), // Error 3: atencion -> atención (falta tilde)
      t("e"), t("ra"), s(),
      t("u"), t("no"), s(),
      t("de"), s(),
      t("los"), s(),
      t("miem"), t("bros"), s(),
      t("más"), s(),
      t("no"), t("ta"), t("bles"), s(),
      t("y"), s(),
      t("sin"), t("gu"), t("la"), t("res"), s(),
      t("del"), s(),
      t("Re"), t("form"), s(),
      t("Club"), s(),
      t("de"), s(),
      t("Lon"), t("dres"), t(".")
    ]
  }
];