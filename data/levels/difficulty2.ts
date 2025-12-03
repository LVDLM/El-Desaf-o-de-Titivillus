import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const LEVEL_2_POOL: LevelData[] = [
  {
    difficultyLevel: 2,
    description: "Advertencia Medieval",
    totalErrors: 3,
    timeLimit: 45,
    originalText: "Cría cuervos y te sacarán los ojos.",
    bookTitle: "Refranero Español",
    bookAuthor: "Tradición Oral",
    tokens: [
      t("Crí"), t("a"), s(),
      t("cuer"), t("vos"), s(),
      t("i", "y"), s(), // Error: i -> y
      t("te"), s(),
      t("sa"), t("ca"), t("ran", "rán"), s(), // Error: ran -> rán
      t("los"), s(),
      t("o"), t("jos"), t("!", ".") // Error: ! -> .
    ]
  },
  {
    difficultyLevel: 2,
    description: "Veinte mil leguas de viaje submarino (Frag.)",
    totalErrors: 3,
    timeLimit: 50,
    originalText: "El año 1866 fue marcado por un extraño acontecimiento. Un fenómeno inexplicable que nadie ha olvidado. Los hombres de mar estaban particularmente emocionados.",
    bookTitle: "Veinte mil leguas de viaje submarino",
    bookAuthor: "Julio Verne",
    tokens: [
      t("El"), s(), t("a"), t("ño"), s(), t("1866"), s(),
      t("fue"), s(), t("mar"), t("ca"), t("do"), s(),
      t("por"), s(), t("un"), s(),
      t("es", "ex"), t("tra"), t("ño"), s(), // Error: estraño -> extraño
      t("a"), t("con"), t("te"), t("ci"), t("mien"), t("to"), t("."), s(),
      t("Un"), s(),
      t("fe"), t("no", "nó"), t("me"), t("no"), s(), // Error: fenomeno -> fenómeno
      t("i"), t("nex"), t("pli"), t("ca"), t("ble"), s(),
      t("que"), s(), t("na"), t("die"), s(),
      t("ha"), s(),
      t("ol"), t("bi", "vi"), t("da"), t("do"), t("."), s(), // Error: olbidado -> olvidado
      t("Los"), s(), t("hom"), t("bres"), s(),
      t("de"), s(), t("mar"), s(),
      t("es"), t("ta"), t("ban"), s(),
      t("par"), t("ti"), t("cu"), t("lar"), t("men"), t("te"), s(),
      t("e"), t("mo"), t("cio"), t("na"), t("dos"), t(".")
    ]
  },
  {
    difficultyLevel: 2,
    description: "Las aventuras de Tom Sawyer (Frag.)",
    totalErrors: 4,
    timeLimit: 60,
    originalText: "Tom apareció en la acera con un cubo de cal y una brocha de mango largo. Contempló la valla, y toda la alegría le abandonó, dejando paso a una profunda melancolía.",
    bookTitle: "Las aventuras de Tom Sawyer",
    bookAuthor: "Mark Twain",
    tokens: [
      t("Tom"), s(),
      t("a"), t("pa"), t("re"), t("cio", "ció"), s(), // Error: aparecio -> apareció
      t("en"), s(), t("la"), s(),
      t("a"), t("ce"), t("ra"), s(),
      t("con"), s(), t("un"), s(),
      t("cu"), t("bo"), s(), t("de"), s(), t("cal"), s(),
      t("y"), s(), t("u"), t("na"), s(),
      t("bro"), t("cha"), s(),
      t("de"), s(), t("man"), t("go"), s(),
      t("lar"), t("go"), t("."), s(),
      t("Con"), t("tem"), t("pló"), s(),
      t("la"), s(),
      t("ba", "va"), t("lla"), t(","), s(), // Error: balla -> valla
      t("y"), s(), t("to"), t("da"), s(),
      t("la"), s(), t("a"), t("le"), t("grí"), t("a"), s(),
      t("le"), s(),
      t("a"), t("ban"), t("do"), t("no", "nó"), t(","), s(), // Error: abandono -> abandonó
      t("de"), t("jan"), t("do"), s(),
      t("pa"), t("so"), s(),
      t("a"), s(), t("u"), t("na"), s(),
      t("pro"), t("fun"), t("da"), s(),
      t("me"), t("lan"), t("co"), t("lí"), t("a"), t(".")
    ]
  },
  {
    difficultyLevel: 2,
    description: "La isla del tesoro (Frag.)",
    totalErrors: 3,
    timeLimit: 55,
    originalText: "Debo contar todo, desde el principio hasta el final, sin omitir nada excepto la posición de la isla, y esto solamente porque todavía hay tesoro en ella.",
    bookTitle: "La isla del tesoro",
    bookAuthor: "Robert Louis Stevenson",
    tokens: [
      t("De"), t("bo"), s(), t("con"), t("tar"), s(), t("to"), t("do"), t(","), s(),
      t("des"), t("de"), s(), t("el"), s(),
      t("prin"), t("si", "ci"), t("pio"), s(), // Error: prinsipio -> principio
      t("has"), t("ta"), s(), t("el"), s(),
      t("fi"), t("nal"), t(","), s(),
      t("sin"), s(), t("o"), t("mi"), t("tir"), s(),
      t("na"), t("da"), s(),
      t("es", "ex"), t("cep"), t("to"), s(), // Error: escepto -> excepto
      t("la"), s(),
      t("po"), t("si"), t("ción"), s(),
      t("de"), s(), t("la"), s(),
      t("is"), t("la"), t(","), s(),
      t("y"), s(), t("es"), t("to"), s(),
      t("so"), t("la"), t("men"), t("te"), s(),
      t("por"), t("que"), s(),
      t("to"), t("da"), t("via", "vía"), s(), // Error: todavia -> todavía
      t("hay"), s(),
      t("te"), t("so"), t("ro"), s(),
      t("en"), s(), t("e"), t("lla"), t(".")
    ]
  },
  {
    difficultyLevel: 2,
    description: "Alicia en el país de las maravillas (Frag.)",
    totalErrors: 3,
    timeLimit: 60,
    originalText: "Alicia empezaba a cansarse de estar sentada con su hermana a la orilla del río, sin tener nada que hacer. ¿Y de qué sirve un libro sin dibujos ni diálogos?, pensó Alicia.",
    bookTitle: "Alicia en el país de las maravillas",
    bookAuthor: "Lewis Carroll",
    tokens: [
      t("A"), t("li"), t("cia"), s(),
      t("em"), t("pe"), t("sa", "za"), t("ba"), s(), // Error: empesaba -> empezaba
      t("a"), s(),
      t("can"), t("sar"), t("se"), s(),
      t("de"), s(),
      t("es"), t("tar"), s(),
      t("sen"), t("ta"), t("da"), s(),
      t("con"), s(), t("su"), s(),
      t("her"), t("ma"), t("na"), s(),
      t("a"), s(), t("la"), s(),
      t("o"), t("ri"), t("lla"), s(),
      t("del"), s(), t("rí"), t("o"), t(","), s(),
      t("sin"), s(), t("te"), t("ner"), s(),
      t("na"), t("da"), s(),
      t("que"), s(),
      t("a", "ha"), t("cer"), t("."), s(), // Error: acer -> hacer
      t("¿"), t("Y"), s(),
      t("de"), s(), t("qué"), s(),
      t("sir"), t("ve"), s(),
      t("un"), s(), t("li"), t("bro"), s(),
      t("sin"), s(),
      t("di"), t("bu"), t("jos"), s(),
      t("ni"), s(),
      t("dia", "diá"), t("lo"), t("gos"), t("?"), t(","), s(), // Error: dialogos -> diálogos
      t("pen"), t("só"), s(),
      t("A"), t("li"), t("cia"), t(".")
    ]
  },
  {
    difficultyLevel: 2,
    description: "El llamado de la selva (Frag.)",
    totalErrors: 3,
    timeLimit: 55,
    originalText: "Buck no leía los periódicos, o habría sabido que se avecinaban problemas. No solo para él, sino para todos los perros de músculos fuertes y pelo cálido.",
    bookTitle: "El llamado de la selva",
    bookAuthor: "Jack London",
    tokens: [
      t("Buck"), s(),
      t("no"), s(), t("le"), t("í"), t("a"), s(),
      t("los"), s(), t("pe"), t("rió"), t("di"), t("cos"), t(","), s(),
      t("o"), s(),
      t("a", "ha"), t("brí"), t("a"), s(), // Error: abría -> habría
      t("sa"), t("bi"), t("do"), s(),
      t("que"), s(), t("se"), s(),
      t("a"), t("ve"), t("ci"), t("na"), t("ban"), s(),
      t("pro"), t("ble"), t("mas"), t("."), s(),
      t("No"), s(), t("so"), t("lo"), s(),
      t("pa"), t("ra"), s(), t("él"), t(","), s(),
      t("si"), t("no"), s(),
      t("pa"), t("ra"), s(), t("to"), t("dos"), s(),
      t("los"), s(), t("pe"), t("rros"), s(),
      t("de"), s(),
      t("mus", "mús"), t("cu"), t("los"), s(), // Error: musculos -> músculos
      t("fuer"), t("tes"), s(),
      t("y"), s(),
      t("pe"), t("lo"), s(),
      t("ca", "cá"), t("li"), t("do"), t(".") // Error: calido -> cálido
    ]
  }
];