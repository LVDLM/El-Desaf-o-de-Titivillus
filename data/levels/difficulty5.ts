import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const LEVEL_5_POOL: LevelData[] = [
  {
    difficultyLevel: 5,
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
      t("e", "é"), t("po"), t("ca"), s(), // Error 1: epoca -> época (falta tilde esdrújula)
      t("de"), s(),
      t("ca"), t("lor"), s(),
      t("ex"), t("ce"), t("si"), t("bo", "vo"), t(","), s(), // Error 2: excesibo -> excesivo (b -> v)
      t("al"), s(),
      t("a"), t("no"), t("che"), t("cer"), t(","), s(),
      t("un"), s(),
      t("jo"), t("ven"), s(),
      t("sa"), t("lio", "lió"), s(), // Error 3: salio -> salió (falta tilde aguda)
      t("de"), s(),
      t("la"), s(),
      t("re"), t("du"), t("zi", "ci"), t("da"), s(), // Error 4: reduzida -> reducida (z -> c)
      t("a", "ha"), t("bi"), t("ta"), t("ción"), s(), // Error 5: abitacion -> habitación (falta H)
      t("que"), s(),
      t("te"), t("ni", "ní"), t("a"), s(), // Error 6: tenia -> tenía (falta tilde hiato)
      t("al"), t("qui"), t("la"), t("da"), s(),
      t("en"), s(),
      t("la"), s(),
      t("ca"), t("lle"), t("jue"), t("la"), s(),
      t("de"), s(), t("S"), t(".")
    ]
  },
  {
    difficultyLevel: 5,
    description: "Los miserables (Frag.)",
    totalErrors: 6,
    timeLimit: 100,
    originalText: "En 1815, el señor Carlos Francisco Bienvenido Myriel era obispo de Digne. Era un anciano de unos setenta y cinco años; ocupaba la sede de Digne desde 1806.",
    bookTitle: "Los miserables",
    bookAuthor: "Victor Hugo",
    tokens: [
      t("En"), s(), t("1815"), t(","), s(),
      t("el"), s(),
      t("se"), t("nor", "ñor"), s(), // Error 1: senor -> señor (n -> ñ)
      t("Car"), t("los"), s(),
      t("Fran"), t("cis"), t("co"), s(),
      t("Bien"), t("ve"), t("ni"), t("do"), s(),
      t("My"), t("riel"), s(),
      t("e"), t("ra"), s(),
      t("o"), t("vis", "bis"), t("po"), s(), // Error 2: ovispo -> obispo (v -> b)
      t("de"), s(),
      t("Dig"), t("ne"), t("."), s(),
      t("E"), t("ra"), s(),
      t("un"), s(),
      t("an"), t("sia", "cia"), t("no"), s(), // Error 3: ansiano -> anciano (s -> c)
      t("de"), s(),
      t("u"), t("nos"), s(),
      t("se"), t("ten"), t("ta"), s(),
      t("y"), s(),
      t("sin", "cin"), t("co"), s(), // Error 4: sinco -> cinco (s -> c)
      t("a"), t("nos", "ños"), t(";"), s(), // Error 5: anos -> años (n -> ñ)
      t("o"), t("cu"), t("pa"), t("va", "ba"), s(), // Error 6: ocupava -> ocupaba (v -> b)
      t("la"), s(),
      t("se"), t("de"), s(),
      t("de"), s(),
      t("Dig"), t("ne"), s(),
      t("des"), t("de"), s(),
      t("1806"), t(".")
    ]
  },
  {
    difficultyLevel: 5,
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
      t("in"), t("tran"), t("qi", "qui"), t("lo"), t(","), s(), // Error 1: intranqilo -> intranquilo (q -> qu)
      t("Gre"), t("go"), t("rio"), s(),
      t("Sam"), t("sa"), s(),
      t("se"), s(),
      t("des"), t("per"), t("to", "tó"), s(), // Error 2: desperto -> despertó (falta tilde aguda)
      t("con"), t("ver"), t("ti"), t("do"), s(),
      t("en"), s(),
      t("un"), s(),
      t("mos", "mons"), t("truo"), t("so"), s(), // Error 3: mostruoso -> monstruoso (falta n)
      t("in"), t("sep", "sec"), t("to"), t("."), s(), // Error 4: insepto -> insecto (p -> c)
      t("Es"), t("ta"), t("ba"), s(),
      t("e"), t("cha"), t("do"), s(),
      t("so"), t("bre"), s(),
      t("el"), s(),
      t("du"), t("ro"), s(),
      t("ca"), t("pa"), t("ra"), t("zon", "zón"), s(), // Error 5: carapazon -> carapazón (falta tilde aguda)
      t("de"), s(),
      t("su"), s(),
      t("ez", "es"), t("pal"), t("da"), t(".") // Error 6: ezpalda -> espalda (z -> s)
    ]
  },
  {
    difficultyLevel: 5,
    description: "Cantar de mio Cid",
    totalErrors: 6,
    timeLimit: 90,
    originalText: "De los sus ojos tan fuertemente llorando, tornaba la cabeza y estábalos catando.",
    bookTitle: "Cantar de mio Cid",
    bookAuthor: "Anónimo",
    tokens: [
      t("De"), s(), t("los"), s(), t("sus"), s(), 
      t("o"), t("jos"), s(),
      t("tam", "tan"), s(), // Error 1: tam -> tan (m -> n final)
      t("fuer"), t("ti", "te"), t("men"), t("te"), s(), // Error 2: fuertimente -> fuertemente (i -> e)
      t("yo", "llo"), t("ran"), t("do"), t(","), s(), // Error 3: yorando -> llorando (y -> ll)
      t("tor"), t("na"), t("va", "ba"), s(), // Error 4: tornava -> tornaba (v -> b)
      t("la"), s(),
      t("ca"), t("ve", "be"), t("za"), s(), // Error 5: caveza -> cabeza (v -> b)
      t("y"), s(),
      t("es"), t("ta", "tá"), t("ba"), t("los"), s(), // Error 6: estabalos -> estábalos (falta tilde esdrújula)
      t("ca"), t("tan"), t("do"), t(".")
    ]
  },
  {
    difficultyLevel: 5,
    description: "En busca del tiempo perdido (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "A veces, apenas había apagado la bujía, cerrábanse mis ojos tan presto, que ni tiempo tenía para decirme: 'Ya me duermo'. Y media hora después despertábame la idea de que ya era hora de ir a buscar el sueño.",
    bookTitle: "En busca del tiempo perdido",
    bookAuthor: "Marcel Proust",
    tokens: [
      t("A"), s(), t("ve"), t("ces"), t(","), s(),
      t("ha", "a"), t("pe"), t("nas"), s(), // Error 1: hapenas -> apenas (h innecesaria)
      t("ha"), t("bía"), s(),
      t("a"), t("pa"), t("ga"), t("do"), s(),
      t("la"), s(),
      t("bu"), t("jia", "jía"), t(","), s(), // Error 2: bujia -> bujía (falta tilde)
      t("se", "ce"), t("rrá"), t("ban"), t("se"), s(), // Error 3: serrábanse -> cerrábanse (s -> c)
      t("mis"), s(),
      t("ho", "o"), t("jos"), s(), // Error 4: hojos -> ojos (h innecesaria)
      t("tan"), s(),
      t("pres"), t("to"), t(","), s(),
      t("que"), s(),
      t("ni"), s(),
      t("tiem"), t("po"), s(),
      t("te"), t("nía"), s(),
      t("pa"), t("ra"), s(),
      t("de"), t("cir"), t("me"), t(":"), s(),
      t("'"), t("Ya"), s(), t("me"), s(), t("duer"), t("mo"), t("'"), t("."), s(),
      t("Y"), s(),
      t("me"), t("dia"), s(),
      t("ho"), t("ra"), s(),
      t("des"), t("pués"), s(),
      t("dez", "des"), t("per"), t("tá"), t("ba"), t("me"), s(), // Error 5: dezpertabame -> despertábame (z -> s)
      t("la"), s(),
      t("y", "i"), t("dea"), s(), // Error 6: ydea -> idea (y -> i)
      t("de"), s(),
      t("que"), s(),
      t("ya"), s(),
      t("e"), t("ra"), s(),
      t("ho"), t("ra"), s(),
      t("de"), s(),
      t("ir"), s(),
      t("a"), s(),
      t("bus"), t("car"), s(),
      t("el"), s(),
      t("sue"), t("ño"), t(".")
    ]
  },
  {
    difficultyLevel: 5,
    description: "El proceso (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Alguien debía de haber calumniado a Josef K., porque sin haber hecho nada malo fue detenido una mañana. La cocinera de su patrona, la señora Grubach, no apareció en aquella ocasión.",
    bookTitle: "El proceso",
    bookAuthor: "Franz Kafka",
    tokens: [
      t("Al"), t("guien"), s(),
      t("de"), t("bi", "bí"), t("a"), s(), // Error 1: debia -> debía (falta tilde hiato)
      t("de"), s(),
      t("a", "ha"), t("ber"), s(), // Error 2: aber -> haber (falta h)
      t("ca"), t("lum"), t("nia"), t("do"), s(),
      t("a"), s(),
      t("Jo"), t("sef"), s(),
      t("K"), t("."), t(","), s(),
      t("por"), t("que"), s(),
      t("sin"), s(),
      t("ha"), t("ber"), s(),
      t("he"), t("cho"), s(),
      t("na"), t("da"), s(),
      t("ma"), t("lo"), s(),
      t("fue"), s(),
      t("de"), t("te"), t("ni"), t("do"), s(),
      t("u"), t("na"), s(),
      t("ma", "ma"), t("na", "ña"), t("na", "na"), t("."), s(), // Error 3: manana -> mañana (n -> ñ duplicada)
      t("La"), s(),
      t("co"), t("ci"), t("ne"), t("ra"), s(),
      t("de"), s(),
      t("su"), s(),
      t("pa"), t("tro"), t("na"), t(","), s(),
      t("la"), s(),
      t("se"), t("ño"), t("ra"), s(),
      t("Gru"), t("baj", "bach"), t(","), s(), // Error 4: Grubaj -> Grubach (j -> ch)
      t("no"), s(),
      t("a"), t("pa"), t("re"), t("ció"), s(),
      t("en"), s(),
      t("a"), t("que"), t("lla"), s(),
      t("o", "o"), t("ca", "ca"), t("sion", "sión"), t("."), // Error 6: ocasion -> ocasión (falta tilde aguda)
    ]
  },
  {
    difficultyLevel: 5,
    description: "Moby Dick (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Llamadme Ismael. Hace algunos años —no importa cuántos exactamente—, teniendo poco o ningún dinero en el bolsillo y nada en particular que me interesara en tierra, pensé en navegar un poco por ahí.",
    bookTitle: "Moby Dick",
    bookAuthor: "Herman Melville",
    tokens: [
      t("Lla"), t("mad"), t("me"), s(),
      t("Iz", "Is"), t("mael"), t("."), s(), // Error 1: Izmael -> Ismael (z -> s)
      t("Ha"), t("ce"), s(),
      t("al"), t("gu"), t("nos"), s(),
      t("a"), t("ños"), s(),
      t("—"), s(),
      t("no"), s(),
      t("im"), t("por"), t("ta"), s(),
      t("cuán"), t("tos"), s(),
      t("es", "ex"), t("sac", "ac"), t("ta"), t("men"), t("te"), t("—"), t(","), s(), // Error 2: esactamente -> exactamente (s -> x)
      t("te"), t("nien"), t("do"), s(),
      t("po"), t("co"), s(),
      t("o"), s(),
      t("nin"), t("gún"), s(),
      t("di"), t("ne"), t("ro"), s(),
      t("en"), s(),
      t("el"), s(),
      t("bol"), t("si", "si"), t("yo", "llo"), s(), // Error 3: bolsiyo -> bolsillo (y -> ll)
      t("y"), s(),
      t("na"), t("da"), s(),
      t("en"), s(),
      t("par"), t("ti"), t("cu"), t("lar"), s(),
      t("que"), s(),
      t("me"), s(),
      t("in"), t("te"), t("re", "re"), t("za", "sa"), t("ra", "ra"), s(), // Error 4: interezara -> interesara (z -> s)
      t("en"), s(),
      t("tie"), t("rra"), t(","), s(),
      t("pen"), t("sé"), s(),
      t("en"), s(),
      t("na"), t("be", "ve"), t("gar"), s(), // Error 5: nabegar -> navegar (b -> v)
      t("un"), s(),
      t("po"), t("co"), s(),
      t("por"), s(),
      t("a"), t("hí"), t(".") // 6
    ]
  },
  {
    difficultyLevel: 5,
    description: "Cumbres Borrascosas (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Acabo de regresar de una visita a mi casero, el solitario vecino con el que habré de verme fastidiado. ¡Este es ciertamente un hermoso país! No creo que en toda Inglaterra hubiera podido encontrar un lugar tan apartado.",
    bookTitle: "Cumbres Borrascosas",
    bookAuthor: "Emily Brontë",
    tokens: [
      t("A"), t("ca"), t("bo"), s(),
      t("de"), s(),
      t("re"), t("gre"), t("sar"), s(),
      t("de"), s(),
      t("u"), t("na"), s(),
      t("vi"), t("si"), t("ta"), s(),
      t("a"), s(),
      t("mi"), s(),
      t("ca"), t("ze", "se"), t("ro"), t(","), s(), // Error 1: cazero -> casero (z -> s)
      t("el"), s(),
      t("so"), t("li"), t("ta"), t("rio"), s(),
      t("ve"), t("ci"), t("no"), s(),
      t("con"), s(),
      t("el"), s(),
      t("que"), s(),
      t("a", "ha"), t("bré"), s(), // Error 2: abré -> habré (falta h)
      t("de"), s(),
      t("ver"), t("me"), s(),
      t("fas"), t("ti"), t("bia", "dia"), t("do"), t("."), s(), // Error 3: fastibiado -> fastidiado (b -> d)
      t("¡"), t("Es"), t("te"), s(),
      t("es"), s(),
      t("cier"), t("ta"), t("men"), t("te"), s(),
      t("un"), s(),
      t("her"), t("mo"), t("so"), s(),
      t("pais", "país"), t("!"), s(), // Error 4: pais -> país (falta tilde hiato)
      t("No"), s(),
      t("cre"), t("o"), s(),
      t("que"), s(),
      t("en"), s(),
      t("to"), t("da"), s(),
      t("In"), t("gla"), t("te"), t("rra"), s(),
      t("hu", "hu"), t("vie", "bie"), t("ra"), s(), // Error 5: huviera -> hubiera (v -> b)
      t("po"), t("di"), t("do"), s(),
      t("en"), t("con"), t("trar"), s(),
      t("un"), s(),
      t("lu"), t("gar"), s(),
      t("tan"), s(),
      t("a"), t("par"), t("tá", "ta"), t("do"), t(".") // Error 6: apartádo -> apartado (tilde sobrante)
    ]
  }
];