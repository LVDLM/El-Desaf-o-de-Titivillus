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
      t("Hen", "En"), s(), // 1. Hen -> En
      t("un"), s(), 
      t("lu"), t("gar"), s(), 
      t("de"), s(), 
      t("la"), s(), 
      t("Man"), t("xa", "cha"), t(","), s(), // 2. xa -> cha
      t("de"), s(), 
      t("cu"), t("yo"), s(), 
      t("non", "nom"), t("bre"), s(), // 3. nonbre -> nombre
      t("no"), s(), 
      t("kie", "quie"), t("ro"), s(), // 4. kie -> quie
      t("a"), t("cor"), t("dar"), t("me"), t("..", "...") // 5. .. -> ...
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
      t("e", "é"), t("po"), t("ca"), s(), // 1
      t("de"), s(),
      t("ca"), t("lor"), s(),
      t("ex"), t("ce"), t("si"), t("bo", "vo"), t(","), s(), // 2
      t("al"), s(),
      t("a"), t("no"), t("che"), t("cer"), t(","), s(),
      t("un"), s(),
      t("jo"), t("ven"), s(),
      t("sa"), t("lio", "lió"), s(), // 3
      t("de"), s(),
      t("la"), s(),
      t("re"), t("du"), t("zi", "ci"), t("da"), s(), // 4. zida -> cida
      t("a", "ha"), t("bi"), t("ta"), t("ción"), s(), // 5
      t("que"), s(),
      t("te"), t("ni", "ní"), t("a"), s(), // 6
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
      t("A", "Ha"), t("bi"), t("tá"), t("ba"), t("mos"), s(), // 1
      t("el"), s(),
      t("quar", "cuar"), t("to"), s(), // 2. quarto -> cuarto
      t("de"), s(),
      t("es"), t("tu"), t("dio"), s(),
      t("cuan"), t("do"), s(),
      t("en"), t("tro", "tró"), s(), // 3
      t("el"), s(),
      t("di"), t("rec"), t("tor"), t(","), s(),
      t("se"), t("gui"), t("do"), s(),
      t("de"), s(),
      t("un"), s(),
      t("nue"), t("vo"), s(),
      t("bes", "ves"), t("ti"), t("do"), s(), // 4
      t("de"), s(),
      t("pue"), t("blo"), s(),
      t("y"), s(),
      t("de"), s(),
      t("un"), s(),
      t("ve", "be"), t("del"), s(), // 5
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
      t("se"), t("nor", "ñor"), s(), // 1. senor -> señor
      t("Car"), t("los"), s(),
      t("Fran"), t("cis"), t("co"), s(),
      t("Bien"), t("ve"), t("ni"), t("do"), s(),
      t("My"), t("riel"), s(),
      t("e"), t("ra"), s(),
      t("o"), t("vis", "bis"), t("po"), s(), // 2
      t("de"), s(),
      t("Dig"), t("ne"), t("."), s(),
      t("E"), t("ra"), s(),
      t("un"), s(),
      t("an"), t("sia", "cia"), t("no"), s(), // 3
      t("de"), s(),
      t("u"), t("nos"), s(),
      t("se"), t("ten"), t("ta"), s(),
      t("y"), s(),
      t("sin", "cin"), t("co"), s(), // 4
      t("a"), t("nos", "ños"), t(";"), s(), // 5. anos -> años
      t("o"), t("cu"), t("pa"), t("va", "ba"), s(), // 6. ocupava -> ocupaba
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
      t("sen"), t("si", "ci"), t("llo"), s(), // 1
      t("via"), t("ja"), t("ba"), s(),
      t("en"), s(),
      t("ple"), t("no"), s(),
      t("ve"), t("ra"), t("no"), s(),
      t("des"), t("de"), s(),
      t("Am", "Ham"), t("bur"), t("go"), t(","), s(), // 2. Amburgo -> Hamburgo
      t("su"), s(),
      t("ciu"), t("da", "dad"), s(), // 3. ciuda -> ciudad
      t("na"), t("tal"), t(","), s(),
      t("a"), s(),
      t("Da"), t("vos"), t("-"), t("Platz"), t(","), s(),
      t("en"), s(),
      t("los"), s(),
      t("Gri"), t("so"), t("nes"), t("."), s(),
      t("A", "Ha"), t("cí", "cí"), t("a"), s(), // 4. Acía -> Hacía
      t("el"), s(),
      t("via"), t("je"), s(),
      t("pa"), t("ra"), s(),
      t("u"), t("na"), s(),
      t("es"), t("tan"), t("sia", "cia"), s(), // 5. estansia -> estancia
      t("de"), s(),
      t("tres"), s(),
      t("se"), t("ma"), t("nas"), t(".")
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
      t("in"), t("tran"), t("qi", "qui"), t("lo"), t(","), s(), // 1
      t("Gre"), t("go"), t("rio"), s(),
      t("Sam"), t("sa"), s(),
      t("se"), s(),
      t("des"), t("per"), t("to", "tó"), s(), // 2
      t("con"), t("ver"), t("ti"), t("do"), s(),
      t("en"), s(),
      t("un"), s(),
      t("mos", "mons"), t("truo"), t("so"), s(), // 3
      t("in"), t("sep", "sec"), t("to"), t("."), s(), // 4. insepto -> insecto
      t("Es"), t("ta"), t("ba"), s(),
      t("e"), t("cha"), t("do"), s(),
      t("so"), t("bre"), s(),
      t("el"), s(),
      t("du"), t("ro"), s(),
      t("ca"), t("pa"), t("ra"), t("zon", "zón"), s(), // 5
      t("de"), s(),
      t("su"), s(),
      t("ez", "es"), t("pal"), t("da"), t(".") // 6. ezpalda -> espalda
    ]
  }
];