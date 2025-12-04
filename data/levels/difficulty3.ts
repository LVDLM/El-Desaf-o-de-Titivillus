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
      t("nom", "nom"), t("bre"), s(), // Error visual: nom + bre = nombre. No error actually on 'nom' needed if split correctly, but keeping previous logic fix: t("non", "nom")
      t("no"), s(), 
      t("kie", "quie"), t("ro"), s(), // Error: kie -> quie
      t("a"), t("cor"), t("dar"), t("me"), t("..", "...") // Error: .. -> ...
    ]
  },
  {
    difficultyLevel: 3,
    description: "Crimen y castigo (Frag.)",
    totalErrors: 6,
    timeLimit: 90,
    originalText: "A principios de julio, en época de calor excesivo, al anochecer, un joven salió de la reducida habitación que tenía alquilada en la callejuela de S.",
    bookTitle: "Crimen y castigo",
    bookAuthor: "Fiódor Dostoyevski",
    tokens: [
      t("A"), s(),
      t("prin"), t("ci"), t("pios"), s(),
      t("de"), s(), t("ju"), t("lio"), t(","), s(),
      t("en"), s(),
      t("é"), t("po"), t("ca"), s(),
      t("de"), s(),
      t("ca"), t("lor"), s(),
      t("ex"), t("ce"), t("si", "si"), t("bo", "vo"), t(","), s(), // Error: excesibo -> excesivo
      t("al"), s(),
      t("a"), t("no"), t("che"), t("cer"), t(","), s(),
      t("un"), s(),
      t("jo"), t("ven"), s(),
      t("sa"), t("lió"), s(),
      t("de"), s(),
      t("la"), s(),
      t("re"), t("du"), t("ci"), t("da"), s(),
      t("a", "ha"), t("bi"), t("ta"), t("ción"), s(), // Error: abitacion -> habitación
      t("que"), s(),
      t("te"), t("ní", "ní"), t("a"), s(),
      t("al"), t("qui"), t("la"), t("da"), s(),
      t("en"), s(),
      t("la"), s(),
      t("ca"), t("lle"), t("jue"), t("la"), s(),
      t("de"), s(), t("S"), t(".")
    ]
  },
  {
    difficultyLevel: 3,
    description: "Madame Bovary (Frag.)",
    totalErrors: 5,
    timeLimit: 80,
    originalText: "Habitábamos el cuarto de estudio cuando entró el director, seguido de un nuevo vestido de pueblo y de un bedel que llevaba un gran pupitre.",
    bookTitle: "Madame Bovary",
    bookAuthor: "Gustave Flaubert",
    tokens: [
      t("A", "Ha"), t("bi"), t("tá"), t("ba"), t("mos"), s(), // Error: Abitábamos -> Habitábamos
      t("el"), s(),
      t("cuar"), t("to"), s(),
      t("de"), s(),
      t("es"), t("tu"), t("dio"), s(),
      t("cuan"), t("do"), s(),
      t("en"), t("tro", "tró"), s(), // Error: entro -> entró
      t("el"), s(),
      t("di"), t("rec"), t("tor"), t(","), s(),
      t("se"), t("gui"), t("do"), s(),
      t("de"), s(),
      t("un"), s(),
      t("nue"), t("vo"), s(),
      t("bes", "ves"), t("ti"), t("do"), s(), // Error: bestido -> vestido
      t("de"), s(),
      t("pue"), t("blo"), s(),
      t("y"), s(),
      t("de"), s(),
      t("un"), s(),
      t("ve", "be"), t("del"), s(), // Error: vedel -> bedel
      t("que"), s(),
      t("lle"), t("va"), t("ba"), s(),
      t("un"), s(),
      t("gran"), s(),
      t("pu"), t("pi"), t("tre"), t(".")
    ]
  },
  {
    difficultyLevel: 3,
    description: "Los miserables (Frag.)",
    totalErrors: 6,
    timeLimit: 100,
    originalText: "En 1815, el señor Carlos Francisco Bienvenido Myriel era obispo de Digne. Era un anciano de unos setenta y cinco años; ocupaba la sede de Digne desde 1806.",
    bookTitle: "Los miserables",
    bookAuthor: "Victor Hugo",
    tokens: [
      t("En"), s(), t("1815"), t(","), s(),
      t("el"), s(),
      t("se"), t("ñor"), s(),
      t("Car"), t("los"), s(),
      t("Fran"), t("cis"), t("co"), s(),
      t("Bien"), t("ve"), t("ni"), t("do"), s(),
      t("My"), t("riel"), s(),
      t("e"), t("ra"), s(),
      t("o", "o"), t("vis", "bis"), t("po"), s(), // Error: ovispo -> obispo
      t("de"), s(),
      t("Dig"), t("ne"), t("."), s(),
      t("E"), t("ra"), s(),
      t("un"), s(),
      t("an"), t("sia", "cia"), t("no"), s(), // Error: ansiano -> anciano
      t("de"), s(),
      t("u"), t("nos"), s(),
      t("se"), t("ten"), t("ta"), s(),
      t("y"), s(),
      t("sin", "cin"), t("co"), s(), // Error: sinco -> cinco
      t("a"), t("ños"), t(";"), s(),
      t("o"), t("cu"), t("pa", "ba"), s(), // Error: ocupa -> ocupaba (o similar) wait original is ocupaba. Let's do ocupava -> ocupaba
      t("la"), s(),
      t("se"), t("de"), s(),
      t("de"), s(),
      t("Dig"), t("ne"), s(),
      t("des"), t("de"), s(),
      t("1806"), t(".")
    ]
  },
  {
    difficultyLevel: 3,
    description: "La montaña mágica (Frag.)",
    totalErrors: 5,
    timeLimit: 90,
    originalText: "Un joven sencillo viajaba en pleno verano desde Hamburgo, su ciudad natal, a Davos-Platz, en los Grisones. Hacía el viaje para una estancia de tres semanas.",
    bookTitle: "La montaña mágica",
    bookAuthor: "Thomas Mann",
    tokens: [
      t("Un"), s(),
      t("jo"), t("ven"), s(),
      t("sen"), t("si", "ci"), t("llo"), s(), // Error: sensillo -> sencillo
      t("via"), t("ja"), t("ba"), s(),
      t("en"), s(),
      t("ple"), t("no"), s(),
      t("ve"), t("ra"), t("no"), s(),
      t("des"), t("de"), s(),
      t("Am", "Ham"), t("bur"), t("go"), t(","), s(), // Error: Amburgo -> Hamburgo
      t("su"), s(),
      t("ciu"), t("dad"), s(),
      t("na"), t("tal"), t(","), s(),
      t("a"), s(),
      t("Da"), t("vos"), t("-"), t("Platz"), t(","), s(),
      t("en"), s(),
      t("los"), s(),
      t("Gri"), t("so"), t("nes"), t("."), s(),
      t("Ha", "Ha"), t("cí", "cí"), t("a"), s(), // Correcto
      t("el"), s(),
      t("via"), t("je"), s(),
      t("pa"), t("ra"), s(),
      t("u"), t("na"), s(),
      t("es"), t("tan"), t("cia"), s(),
      t("de"), s(),
      t("tres"), s(),
      t("se"), t("ma"), t("nas", "nas"), t(".") // Correcto
    ]
  },
  {
    difficultyLevel: 3,
    description: "La metamorfosis (Frag.)",
    totalErrors: 6,
    timeLimit: 90,
    originalText: "Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto. Estaba echado sobre el duro caparazón de su espalda.",
    bookTitle: "La metamorfosis",
    bookAuthor: "Franz Kafka",
    tokens: [
      t("U"), t("na"), s(),
      t("ma"), t("ña"), t("na"), t(","), s(),
      t("tras"), s(),
      t("un"), s(),
      t("sue"), t("ño"), s(),
      t("in"), t("tran"), t("qi", "qui"), t("lo"), t(","), s(), // Error: intranqilo -> intranquilo
      t("Gre"), t("go"), t("rio"), s(),
      t("Sam"), t("sa"), s(),
      t("se"), s(),
      t("des"), t("per"), t("to", "tó"), s(), // Error: desperto -> despertó
      t("con"), t("ver"), t("ti"), t("do"), s(),
      t("en"), s(),
      t("un"), s(),
      t("mos", "mons"), t("truo"), t("so"), s(), // Error: mostruoso -> monstruoso
      t("in"), t("sec"), t("to"), t("."), s(),
      t("Es"), t("ta"), t("ba"), s(),
      t("e"), t("cha"), t("do"), s(),
      t("so"), t("bre"), s(),
      t("el"), s(),
      t("du"), t("ro"), s(),
      t("ca"), t("pa"), t("ra"), t("zon", "zón"), s(), // Error: caparazon -> caparazón
      t("de"), s(),
      t("su"), s(),
      t("es"), t("pal"), t("da"), t(".")
    ]
  }
];