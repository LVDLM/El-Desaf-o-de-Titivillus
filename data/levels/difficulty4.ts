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
      t("tam", "tan"), s(), // 1
      t("fuer"), t("ti", "te"), t("men"), t("te"), s(), // 2
      t("yo", "llo"), t("ran"), t("do"), t(","), s(), // 3
      t("tor"), t("na"), t("va", "ba"), s(), // 4
      t("la"), s(),
      t("ca"), t("ve", "be"), t("za"), s(), // 5
      t("y"), s(),
      t("es"), t("ta", "tá"), t("ba"), t("los"), s(), // 6
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
      t("a", "ha"), t("pe", "pe"), t("nas", "nas"), s(), // 1. apenas -> hapenas
      t("ha"), t("bía"), s(),
      t("a"), t("pa"), t("ga"), t("do"), s(),
      t("la"), s(),
      t("bu", "bu"), t("jia", "jía"), t(","), s(), // 2
      t("se", "ce"), t("rrá", "rrá"), t("ban", "ban"), t("se", "se"), s(), // 3
      t("mis"), s(),
      t("ho", "o"), t("jos"), s(), // 4. hojos -> ojos
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
      t("dez", "des"), t("per"), t("tá"), t("ba", "ba"), t("me", "me"), s(), // 5
      t("la"), s(),
      t("y", "i"), t("dea"), s(), // 6. ydea -> idea
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
      t("Ma"), t("jes"), t("tuo"), t("zo", "so"), s(), // 1
      t("y"), s(),
      t("ren", "re"), t("chon", "chon"), t("cho", "cho"), t(","), s(), // 2
      t("Buck"), s(),
      t("Mu"), t("lli"), t("gan"), s(),
      t("a"), t("pa"), t("re"), t("cio", "ció"), s(), // 3
      t("en"), s(),
      t("lo"), s(),
      t("al"), t("to"), s(),
      t("de"), s(),
      t("la"), s(),
      t("es"), t("ca"), t("le"), t("ra"), t(","), s(),
      t("por"), t("tán", "tan"), t("do", "do"), s(), // 4
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
      t("in", "hin"), t("cha", "cha"), t("da", "da"), s(), // 5
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
      t("de"), t("bi", "bí"), t("a"), s(), // 1. debia -> debía
      t("de"), s(),
      t("a", "ha"), t("ber"), s(), // 2
      t("ca"), t("lu", "lum"), t("nia", "nia"), t("do", "do"), s(), // 3
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
      t("ma", "ma"), t("na", "ña"), t("na", "na"), t("."), s(), // 4. manana -> mañana
      t("La"), s(),
      t("co"), t("ci"), t("ne"), t("ra"), s(),
      t("de"), s(),
      t("su"), s(),
      t("pa"), t("tro"), t("na"), t(","), s(),
      t("la"), s(),
      t("se"), t("ño"), t("ra"), s(),
      t("Gru"), t("baj", "bach"), t(","), s(), // 5
      t("no"), s(),
      t("a"), t("pa"), t("re"), t("ció"), s(),
      t("en"), s(),
      t("a"), t("que"), t("lla"), s(),
      t("o", "o"), t("ca", "ca"), t("sion", "sión"), t("."), // 6. ocasion -> ocasión
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
      t("Iz", "Is"), t("mael", "mael"), t("."), s(), // 1
      t("Ha"), t("ce"), s(),
      t("al"), t("gu"), t("nos"), s(),
      t("a"), t("ños"), s(),
      t("—"), s(),
      t("no"), s(),
      t("im"), t("por"), t("ta"), s(),
      t("cuán"), t("tos"), s(),
      t("e", "ex"), t("sac", "ac"), t("ta", "ta"), t("men", "men"), t("te", "te"), t("—"), t(","), s(), // 2
      t("te"), t("nien"), t("do"), s(),
      t("po"), t("co"), s(),
      t("o"), s(),
      t("nin"), t("gún"), s(),
      t("di"), t("ne"), t("ro"), s(),
      t("en"), s(),
      t("el"), s(),
      t("bol"), t("si", "si"), t("yo", "llo"), s(), // 3. bolsiyo -> bolsillo
      t("y"), s(),
      t("na"), t("da"), s(),
      t("en"), s(),
      t("par"), t("ti"), t("cu"), t("lar"), s(),
      t("que"), s(),
      t("me"), s(),
      t("in"), t("te"), t("re", "re"), t("za", "sa"), t("ra", "ra"), s(), // 4
      t("en"), s(),
      t("tie"), t("rra"), t(","), s(),
      t("pen"), t("sé"), s(),
      t("en"), s(),
      t("na"), t("be", "ve"), t("gar", "gar"), s(), // 5
      t("un"), s(),
      t("po"), t("co"), s(),
      t("por"), s(),
      t("a"), t("y", "hí"), t(".") // 6
    ]
  },
    // 1. Frankenstein - Fragmento inicial
  {
    difficultyLevel: 4,
    description: "Frankenstein - Inicio",
    totalErrors: 4,
    timeLimit: 70,
    originalText: "Soy natural de Ginebra, y mi familia es una de las más distinguidas de aquella república. Mis antepasados habían sido durante muchos años consejeros y síndicos, y mi padre había ocupado con honor y reputación varios cargos públicos.",
    bookTitle: "Frankenstein",
    bookAuthor: "Mary Shelley",
    tokens: [
      t("Soy"), s(),
      t("na"), t("tu"), t("ral"), s(),
      t("de"), s(),
      t("Gi"), t("ne"), t("bra", "nebra"), t(","), s(), // Error 1: Ginebra -> Ginebra (Ji->Gi, pero aquí G->sin G)
      t("y"), s(),
      t("mi"), s(),
      t("fa"), t("mi"), t("lia"), s(),
      t("es"), s(),
      t("u"), t("na"), s(),
      t("de"), s(),
      t("las"), s(),
      t("más", "mas"), s(), // Error 2: más -> mas (falta tilde)
      t("dis"), t("tin"), t("gui"), t("das"), s(),
      t("de"), s(),
      t("a"), t("que"), t("lla"), s(),
      t("re"), t("pú"), t("bli"), t("ca"), t("."), s(),
      t("Mis"), s(),
      t("an"), t("te"), t("pa"), t("sa"), t("dos"), s(),
      t("ha"), t("bían", "avían"), s(), // Error 3: habían -> avían (h desaparece)
      t("si"), t("do"), s(),
      t("du"), t("ran"), t("te"), s(),
      t("mu"), t("chos"), s(),
      t("a"), t("ños"), s(),
      t("con"), t("se"), t("je"), t("ros"), s(),
      t("y"), s(),
      t("sín"), t("di"), t("cos"), t(","), s(),
      t("y"), s(),
      t("mi"), s(),
      t("pa"), t("dre"), s(),
      t("ha"), t("bía", "vía"), s(), // Error 4: había -> havía -> vía (simplificado a vía)
      t("o"), t("cu"), t("pa"), t("do"), s(),
      t("con"), s(),
      t("ho"), t("nor"), s(),
      t("y"), s(),
      t("re"), t("pu"), t("ta"), t("ción"), s(),
      t("va"), t("rios"), s(),
      t("car"), t("gos"), s(),
      t("pú"), t("bli"), t("cos"), t(".")
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
      t("ca"), t("ze", "se"), t("ro", "ro"), t(","), s(), // 1
      t("el"), s(),
      t("so"), t("li"), t("ta"), t("rio"), s(),
      t("ve"), t("ci"), t("no"), s(),
      t("con"), s(),
      t("el"), s(),
      t("que"), s(),
      t("a", "ha"), t("bré", "bré"), s(), // 2
      t("de"), s(),
      t("ver"), t("me"), s(),
      t("fas"), t("ti"), t("bia", "dia"), t("do", "do"), t("."), s(), // 3
      t("¡"), t("Es"), t("te"), s(),
      t("es"), s(),
      t("cier"), t("ta"), t("men"), t("te"), s(),
      t("un"), s(),
      t("her"), t("mo"), t("so"), s(),
      t("pais", "país"), t("!"), s(), // 4. pais -> país
      t("No"), s(),
      t("cre"), t("o"), s(),
      t("que"), s(),
      t("en"), s(),
      t("to"), t("da"), s(),
      t("In"), t("gla"), t("te"), t("rra"), s(),
      t("hu"), t("vie", "bie"), t("ra", "ra"), s(), // 5
      t("po"), t("di"), t("do"), s(),
      t("en"), t("con"), t("trar"), s(),
      t("un"), s(),
      t("lu"), t("gar"), s(),
      t("tan"), s(),
      t("a"), t("par"), t("tá", "ta"), t("do", "do"), t(".") // 6
    ]
  },

    // 2. Drácula - Fragmento inicial
  {
    difficultyLevel: 4,
    description: "Drácula - Inicio del diario",
    totalErrors: 4,
    timeLimit: 65,
    originalText: "Dejé Múnich a las ocho y media de la tarde del primero de mayo, llegando a Viena a la mañana siguiente temprano. Debería haber llegado a las seis cuarenta y seis, pero el tren llevaba una hora de retraso.",
    bookTitle: "Drácula",
    bookAuthor: "Bram Stoker",
    tokens: [
      t("De"), t("jé"), s(),
      t("Mú"), t("nich", "nich"), s(), // Error 1: Múnich -> Munich (falta tilde)
      t("a"), s(),
      t("las"), s(),
      t("o"), t("cho"), s(),
      t("y"), s(),
      t("me"), t("dia"), s(),
      t("de"), s(),
      t("la"), s(),
      t("tar"), t("de"), s(),
      t("del"), s(),
      t("pri"), t("me"), t("ro"), s(),
      t("de"), s(),
      t("ma"), t("yo"), t(","), s(),
      t("lle"), t("gan", "yegan"), t("do"), s(), // Error 2: llegando -> yegando (ll->y)
      t("a"), s(),
      t("Vie"), t("na"), s(),
      t("a"), s(),
      t("la"), s(),
      t("ma"), t("ña"), t("na"), s(),
      t("si"), t("guien"), t("te"), s(),
      t("tem"), t("pra"), t("no"), t("."), s(),
      t("De"), t("be"), t("ría", "vería"), s(), // Error 3: Debería -> Devería (b->v)
      t("ha"), t("ber"), s(),
      t("lle"), t("ga"), t("do"), s(),
      t("a"), s(),
      t("las"), s(),
      t("seis"), s(),
      t("cua"), t("ren"), t("ta"), s(),
      t("y"), s(),
      t("seis"), t(","), s(),
      t("pe"), t("ro"), s(),
      t("el"), s(),
      t("tren"), s(),
      t("lle"), t("va"), t("ba", "va"), s(), // Error 4: llevaba -> lleva (desaparece -ba)
      t("u"), t("na"), s(),
      t("ho"), t("ra"), s(),
      t("de"), s(),
      t("re"), t("tra"), t("so"), t(".")
    ]
  },

  // 3. La guerra de los mundos - Fragmento inicial
  {
    difficultyLevel: 4,
    description: "La guerra de los mundos - Inicio",
    totalErrors: 4,
    timeLimit: 75,
    originalText: "Nadie habría creído, en los últimos años del siglo diecinueve, que los asuntos humanos eran observados aguda y atentamente por inteligencias más desarrolladas que la del hombre y, sin embargo, tan mortales como él.",
    bookTitle: "La guerra de los mundos",
    bookAuthor: "H.G. Wells",
    tokens: [
      t("Na"), t("die"), s(),
      t("ha"), t("bría", "vría"), s(), // Error 1: habría -> havría -> vría
      t("cre"), t("í"), t("do"), t(","), s(),
      t("en"), s(),
      t("los"), s(),
      t("úl"), t("ti"), t("mos", "timos"), s(), // Error 2: últimos -> ultimos (falta tilde)
      t("a"), t("ños"), s(),
      t("del"), s(),
      t("si"), t("glo"), s(),
      t("die"), t("ci"), t("nue"), t("ve"), t(","), s(),
      t("que"), s(),
      t("los"), s(),
      t("a"), t("sun"), t("tos"), s(),
      t("hu"), t("ma"), t("nos"), s(),
      t("e"), t("ran"), s(),
      t("ob"), t("ser"), t("va", "ba"), t("dos"), s(), // Error 3: observados -> obserba dos (v->b)
      t("a"), t("gu"), t("da"), s(),
      t("y"), s(),
      t("a"), t("ten"), t("ta"), t("men"), t("te"), s(),
      t("por"), s(),
      t("in"), t("te"), t("li"), t("gen"), t("cias"), s(),
      t("más", "mas"), s(), // Error 4: más -> mas (falta tilde)
      t("de"), t("sa"), t("rro"), t("lla"), t("das"), s(),
      t("que"), s(),
      t("la"), s(),
      t("del"), s(),
      t("hom"), t("bre"), s(),
      t("y"), t(","), s(),
      t("sin"), s(),
      t("em"), t("bar"), t("go"), t(","), s(),
      t("tan"), s(),
      t("mor"), t("ta"), t("les"), s(),
      t("co"), t("mo"), s(),
      t("él"), t(".")
    ]
  },

  // 4. El retrato de Dorian Gray - Fragmento inicial
  {
    difficultyLevel: 4,
    description: "El retrato de Dorian Gray - Inicio",
    totalErrors: 4,
    timeLimit: 75,
    originalText: "El estudio estaba lleno del intenso perfume de las rosas, y cuando la ligera brisa de verano agitaba los árboles del jardín, entraba por la puerta abierta el pesado aroma de las lilas o el más delicado perfume del espino rosa.",
    bookTitle: "El retrato de Dorian Gray",
    bookAuthor: "Oscar Wilde",
    tokens: [
      t("El"), s(),
      t("es"), t("tu"), t("dio"), s(),
      t("es"), t("ta"), t("ba"), s(),
      t("lle","ye"), t("no"), s(), // Error 1: lleno -> yeno (ll->y)
      t("del"), s(),
      t("in"), t("ten"), t("so"), s(),
      t("per"), t("fu"), t("me"), s(),
      t("de"), s(),
      t("las"), s(),
      t("ro"), t("sas"), t(","), s(),
      t("y"), s(),
      t("cuan"), t("do"), s(),
      t("la"), s(),
      t("li"), t("ge","je"), t("ra"), s(), // Error 2: ligera -> lijera (g->j)
      t("bri"), t("sa"), s(),
      t("de"), s(),
      t("ve"), t("ra"), t("no"), s(),
      t("a"), t("gi"), t("ta"), t("ba"), s(),
      t("los"), s(),
      t("ár","ar"), t("bo"), t("les"), s(), // Error 3: árboles -> arboles (falta tilde)
      t("del"), s(),
      t("jar"), t("dín"), t(","), s(),
      t("en"), t("tra"), t("ba"), s(),
      t("por"), s(),
      t("la"), s(),
      t("puer"), t("ta"), s(),
      t("a"), t("bier"), t("ta"), s(),
      t("el"), s(),
      t("pe"), t("sa"), t("do"), s(),
      t("a"), t("ro"), t("ma"), s(),
      t("de"), s(),
      t("las"), s(),
      t("li"), t("las"), s(),
      t("o"), s(),
      t("el"), s(),
      t("más", "mas"), s(), // Error 4: más -> mas (falta tilde)
      t("de"), t("li"), t("ca"), t("do"), s(),
      t("per"), t("fu"), t("me"), s(),
      t("del"), s(),
      t("es"), t("pi"), t("no"), s(),
      t("ro"), t("sa"), t(".")
    ]
  },

  // 5. El extranjero - Fragmento inicial
  {
    difficultyLevel: 4,
    description: "El extranjero - Inicio",
    totalErrors: 4,
    timeLimit: 65,
    originalText: "Hoy ha muerto mamá. O quizá ayer, no lo sé. Recibí un telegrama del asilo: 'Madre fallecida. Entierro mañana. Sentidas condolencias'. Pero no quiere decir nada. Quizá haya sido ayer.",
    bookTitle: "El extranjero",
    bookAuthor: "Albert Camus",
    tokens: [
      t("Hoy"), s(),
      t("ha"), s(),
      t("muer"), t("to"), s(),
      t("ma"), t("má"), t("."), s(),
      t("O"), s(),
      t("qui"), t("zá", "za"), s(), // Error 1: quizá -> quiza (falta tilde)
      t("a"), t("yer"), t(","), s(),
      t("no"), s(),
      t("lo"), s(),
      t("sé"), t("."), s(),
      t("Re"), t("ci"), t("bí", "bi"), s(), // Error 2: Recibí -> Recibi (falta tilde)
      t("un"), s(),
      t("te"), t("le"), t("gra"), t("ma"), s(),
      t("del"), s(),
      t("a"), t("si"), t("lo"), t(":"), s(),
      t("'"), t("Ma"), t("dre"), s(),
      t("fa"), t("lle","ye"), t("ci"), t("da"), t("."), s(), // Error 3: fallecida -> fayecida (ll->y)
      t("En"), t("tie"), t("rro"), s(),
      t("ma"), t("ña"), t("na"), t("."), s(),
      t("Sen"), t("ti"), t("das"), s(),
      t("con"), t("do"), t("len"), t("cias"), t("'"), t("."), s(),
      t("Pe"), t("ro"), s(),
      t("no"), s(),
      t("quie"), t("re"), s(),
      t("de"), t("cir"), s(),
      t("na"), t("da"), t("."), s(),
      t("Qui"), t("zá", "za"), s(), // Error 4: Quizá -> Quiza (falta tilde) - segunda vez
      t("ha"), t("ya"), s(),
      t("si"), t("do"), s(),
      t("a"), t("yer"), t(".")
    ]
  }
];