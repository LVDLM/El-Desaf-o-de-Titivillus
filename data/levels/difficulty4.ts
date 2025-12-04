import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const LEVEL_4_POOL: LevelData[] = [
  {
    difficultyLevel: 4,
    description: "Cantar de mio Cid",
    totalErrors: 6,
    timeLimit: 90,
    originalText: "De los sus ojos tan fuertemente llorando, tornaba la cabeza y estábalos catando.",
    bookTitle: "Cantar de mio Cid",
    bookAuthor: "Anónimo",
    tokens: [
      t("De"), s(), t("los"), s(), t("sus"), s(), 
      t("o"), t("jos"), s(),
      t("tam", "tan"), s(), // Error: tam -> tan
      t("fuer"), t("ti", "te"), t("men"), t("te"), s(), // Error: ti -> te
      t("yo", "llo"), t("ran"), t("do"), t(","), s(), // Error: yo -> llo
      t("tor"), t("na"), t("va", "ba"), s(), // Error: va -> ba
      t("la"), s(),
      t("ca"), t("ve", "be"), t("za"), s(), // Error: ve -> be
      t("y"), s(),
      t("es"), t("ta", "tá"), t("ba"), t("los"), s(), // Error: ta -> tá
      t("ca"), t("tan"), t("do"), t(".")
    ]
  },
  {
    difficultyLevel: 4,
    description: "En busca del tiempo perdido (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "A veces, apenas había apagado la bujía, cerrábanse mis ojos tan presto, que ni tiempo tenía para decirme: 'Ya me duermo'. Y media hora después despertábame la idea de que ya era hora de ir a buscar el sueño.",
    bookTitle: "En busca del tiempo perdido",
    bookAuthor: "Marcel Proust",
    tokens: [
      t("A"), s(), t("ve"), t("ces"), t(","), s(),
      t("a"), t("pe"), t("nas"), s(),
      t("ha"), t("bía"), s(),
      t("a"), t("pa"), t("ga"), t("do"), s(),
      t("la"), s(),
      t("bu", "bu"), t("jia", "jía"), t(","), s(), // Error: bujia -> bujía
      t("se", "ce"), t("rrá", "rrá"), t("ban", "ban"), t("se", "se"), s(), // Error: serrábanse -> cerrábanse
      t("mis"), s(),
      t("o"), t("jos"), s(),
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
      t("dez", "des"), t("per"), t("tá"), t("ba", "ba"), t("me", "me"), s(), // Error: dezpertábame -> despertábame
      t("la"), s(),
      t("i"), t("dea"), s(),
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
    difficultyLevel: 4,
    description: "Ulises (Frag.)",
    totalErrors: 5,
    timeLimit: 100,
    originalText: "Majestuoso y rechoncho, Buck Mulligan apareció en lo alto de la escalera, portando un cuenco de espuma de afeitar. Una bata amarilla, sin ceñir, se mantenía suavemente hinchada a su espalda.",
    bookTitle: "Ulises",
    bookAuthor: "James Joyce",
    tokens: [
      t("Ma"), t("jes"), t("tuo"), t("zo", "so"), s(), // Error: Majestuozo -> Majestuoso
      t("y"), s(),
      t("ren", "re"), t("chon", "chon"), t("cho", "cho"), t(","), s(), // Error: renchoncho -> rechoncho
      t("Buck"), s(),
      t("Mu"), t("lli"), t("gan"), s(),
      t("a"), t("pa"), t("re"), t("cio", "ció"), s(), // Error: aparecio -> apareció
      t("en"), s(),
      t("lo"), s(),
      t("al"), t("to"), s(),
      t("de"), s(),
      t("la"), s(),
      t("es"), t("ca"), t("le"), t("ra"), t(","), s(),
      t("por"), t("tán", "tan"), t("do", "do"), s(), // Error: portándo -> portando
      t("un"), s(),
      t("cuen"), t("co"), s(),
      t("de"), s(),
      t("es"), t("pu"), t("ma"), s(),
      t("de"), s(),
      t("a"), t("fei"), t("tar"), t("."), s(),
      t("U"), t("na"), s(),
      t("ba"), t("ta"), s(),
      t("a"), t("ma"), t("ri"), t("lla"), t(","), s(),
      t("sin"), s(),
      t("ce"), t("ñir"), t(","), s(),
      t("se"), s(),
      t("man"), t("te"), t("nía"), s(),
      t("sua"), t("ve"), t("men"), t("te"), s(),
      t("in", "hin"), t("cha", "cha"), t("da", "da"), s(), // Error: inchada -> hinchada
      t("a"), s(),
      t("su"), s(),
      t("es"), t("pal"), t("da"), t(".")
    ]
  },
  {
    difficultyLevel: 4,
    description: "El proceso (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Alguien debía de haber calumniado a Josef K., porque sin haber hecho nada malo fue detenido una mañana. La cocinera de su patrona, la señora Grubach, no apareció en aquella ocasión.",
    bookTitle: "El proceso",
    bookAuthor: "Franz Kafka",
    tokens: [
      t("Al"), t("guien"), s(),
      t("de"), t("bí"), t("a"), s(),
      t("de"), s(),
      t("a", "ha"), t("ber"), s(), // Error: aber -> haber
      t("ca"), t("lu", "lum"), t("nia", "nia"), t("do", "do"), s(), // Error: caluniado -> calumniado
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
      t("ma"), t("ña"), t("na"), t("."), s(),
      t("La"), s(),
      t("co"), t("ci"), t("ne"), t("ra"), s(),
      t("de"), s(),
      t("su"), s(),
      t("pa"), t("tro"), t("na"), t(","), s(),
      t("la"), s(),
      t("se"), t("ño"), t("ra"), s(),
      t("Gru"), t("baj", "bach"), t(","), s(), // Error: Grubaj -> Grubach
      t("no"), s(),
      t("a"), t("pa"), t("re"), t("ció"), s(),
      t("en"), s(),
      t("a"), t("que"), t("lla"), s(),
      t("o"), t("ca"), t("sión", "sión"), t("."), // Correct
      t("E", "E"), t("so", "so"), s(), 
      t("no"), s(), 
      t("ha", "ha"), t("bí", "bí"), t("a", "a"), s(), 
      t("su", "su"), t("ce", "ce"), t("di", "di"), t("do", "do"), s(), 
      t("nun", "nun"), t("ca", "ca"), t(".")
    ]
  },
  {
    difficultyLevel: 4,
    description: "Moby Dick (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Llamadme Ismael. Hace algunos años —no importa cuántos exactamente—, teniendo poco o ningún dinero en el bolsillo y nada en particular que me interesara en tierra, pensé en navegar un poco por ahí.",
    bookTitle: "Moby Dick",
    bookAuthor: "Herman Melville",
    tokens: [
      t("Lla"), t("mad"), t("me"), s(),
      t("Iz", "Is"), t("mael", "mael"), t("."), s(), // Error: Izmael -> Ismael
      t("Ha"), t("ce"), s(),
      t("al"), t("gu"), t("nos"), s(),
      t("a"), t("ños"), s(),
      t("—"), s(),
      t("no"), s(),
      t("im"), t("por"), t("ta"), s(),
      t("cuán"), t("tos"), s(),
      t("e", "ex"), t("sac", "ac"), t("ta", "ta"), t("men", "men"), t("te", "te"), t("—"), t(","), s(), // Error: esactamente -> exactamente
      t("te"), t("nien"), t("do"), s(),
      t("po"), t("co"), s(),
      t("o"), s(),
      t("nin"), t("gún"), s(),
      t("di"), t("ne"), t("ro"), s(),
      t("en"), s(),
      t("el"), s(),
      t("bol"), t("si"), t("llo"), s(),
      t("y"), s(),
      t("na"), t("da"), s(),
      t("en"), s(),
      t("par"), t("ti"), t("cu"), t("lar"), s(),
      t("que"), s(),
      t("me"), s(),
      t("in"), t("te"), t("re", "re"), t("za", "sa"), t("ra", "ra"), s(), // Error: interezara -> interesara
      t("en"), s(),
      t("tie"), t("rra"), t(","), s(),
      t("pen"), t("sé"), s(),
      t("en"), s(),
      t("na"), t("be", "ve"), t("gar", "gar"), s(), // Error: nabegar -> navegar
      t("un"), s(),
      t("po"), t("co"), s(),
      t("por"), s(),
      t("a"), t("y", "hí"), t(".") // Error: ay -> ahí
    ]
  },
  {
    difficultyLevel: 4,
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
      t("ca"), t("ze", "se"), t("ro", "ro"), t(","), s(), // Error: cazero -> casero
      t("el"), s(),
      t("so"), t("li"), t("ta"), t("rio"), s(),
      t("ve"), t("ci"), t("no"), s(),
      t("con"), s(),
      t("el"), s(),
      t("que"), s(),
      t("a", "ha"), t("bré", "bré"), s(), // Error: abré -> habré
      t("de"), s(),
      t("ver"), t("me"), s(),
      t("fas"), t("ti"), t("bia", "dia"), t("do", "do"), t("."), s(), // Error: fastibiado -> fastidiado
      t("¡"), t("Es"), t("te"), s(),
      t("es"), s(),
      t("cier"), t("ta"), t("men"), t("te"), s(),
      t("un"), s(),
      t("her"), t("mo"), t("so"), s(),
      t("pa"), t("ís"), t("!"), s(),
      t("No"), s(),
      t("cre"), t("o"), s(),
      t("que"), s(),
      t("en"), s(),
      t("to"), t("da"), s(),
      t("In"), t("gla"), t("te"), t("rra"), s(),
      t("hu"), t("vie", "bie"), t("ra", "ra"), s(), // Error: huviera -> hubiera
      t("po"), t("di"), t("do"), s(),
      t("en"), t("con"), t("trar"), s(),
      t("un"), s(),
      t("lu"), t("gar"), s(),
      t("tan"), s(),
      t("a"), t("par"), t("tá", "ta"), t("do", "do"), t(".") // Error: apartádo -> apartado
    ]
  }
];