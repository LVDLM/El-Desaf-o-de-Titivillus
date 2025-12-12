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
  },
  {
    difficultyLevel: 5,
    description: "Por tierra de Castilla (Frag.)",
    totalErrors: 6,
    timeLimit: 100,
    originalText: "Blanqueada con las escarchas de los primeros fríos invernales, la planicie de Castilla parece la sábana con que Dios cubre piadosamente el cadáver de la vieja España. Ni un repliegue la arruga. Toda igual, toda tendida de punta a punta, es una tierra planchada por la Naturaleza.",
    bookTitle: "Por tierra de Castilla",
    bookAuthor: "Eugenio Sellés",
    tokens: [
      t("Blan"), t("que"), t("a"), t("da"), s(),
      t("con"), s(), t("las"), s(),
      t("es"), t("car"), t("chas"), s(),
      t("de"), s(), t("los"), s(),
      t("pri"), t("me"), t("ros"), s(),
      t("frí"), t("os"), s(),
      t("im", "in"), t("ber", "ver"), t("na"), t("les"), t(","), s(), // Error 1: imbernales -> invernales
      t("la"), s(),
      t("pla"), t("ni", "ni"), t("sie", "cie"), s(), // Error 2: planisie -> planicie
      t("de"), s(), t("Cas"), t("ti"), t("lla"), s(),
      t("pa"), t("re"), t("ce"), s(),
      t("la"), s(),
      t("sa", "sá"), t("ba"), t("na"), s(), // Error 3: sabana -> sábana
      t("con"), s(), t("que"), s(),
      t("Dios"), s(),
      t("cu"), t("bre"), s(),
      t("pia"), t("do"), t("sa"), t("men"), t("te"), s(),
      t("el"), s(),
      t("ca"), t("da", "dá"), t("ver"), s(), // Error 4: cadaver -> cadáver
      t("de"), s(), t("la"), s(),
      t("bie", "vie"), t("ja"), s(), // Error 5: bieja -> vieja
      t("Es"), t("pa"), t("ña"), t("."), s(),
      t("Ni"), s(), t("un"), s(),
      t("re"), t("plie"), t("gue"), s(),
      t("la"), s(),
      t("a"), t("rru"), t("ga"), t("."), s(),
      t("To"), t("da"), s(),
      t("i"), t("gual"), t(","), s(),
      t("to"), t("da"), s(),
      t("ten"), t("di"), t("da"), s(),
      t("de"), s(),
      t("pun"), t("ta"), s(),
      t("a"), s(),
      t("pun"), t("ta"), t(","), s(),
      t("es"), s(), t("u"), t("na"), s(),
      t("tie"), t("rra"), s(),
      t("plan"), t("cha"), t("da"), s(),
      t("por"), s(),
      t("la"), s(),
      t("Na"), t("tu"), t("ra"), t("le", "le"), t("sa", "za"), t(".") // Error 6: Naturalesa -> Naturaleza
    ]
  },
  {
    difficultyLevel: 5,
    description: "Las mil y una noches (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "[...] llegó a una ciudad en donde vio un palacio del rey, a la puerta del cual había colgadas cuarenta cabezas menos una. Y preguntó a la gente: \"¿Por qué están colgadas ahí esas cabezas?\" Le contestaron: \"El rey tiene una hija muy fuerte en la lucha personal. Quien entre y la venza, se casará con ella; pero a quien no la venza, se le cortará la cabeza\".",
    bookTitle: "Las mil y una noches",
    bookAuthor: "Anónimo",
    tokens: [
      t("[...]"), s(),
      t("lle"), t("gó"), s(),
      t("a"), s(), t("u"), t("na"), s(),
      t("siu", "ciu"), t("dad"), s(), // Error 1: siudad -> ciudad
      t("en"), s(), t("don"), t("de"), s(),
      t("vio"), s(), t("un"), s(),
      t("pa"), t("la"), t("cio"), s(),
      t("del"), s(), t("rey"), t(","), s(),
      t("a"), s(), t("la"), s(),
      t("puer"), t("ta"), s(),
      t("del"), s(), t("cual"), s(),
      t("ha", "ha"), t("ví", "bí"), t("a"), s(), // Error 2: havía -> había
      t("col"), t("ga"), t("das"), s(),
      t("cua"), t("ren"), t("ta"), s(),
      t("ca"), t("be", "be"), t("sas", "zas"), s(), // Error 3: cabesas -> cabezas
      t("me"), t("nos"), s(), t("u"), t("na"), t("."), s(),
      t("Y"), s(), t("pre"), t("gun"), t("tó"), s(),
      t("a"), s(), t("la"), s(),
      t("gen"), t("te"), t(":"), s(),
      t("\""), t("¿"), t("Por"), s(), t("qué"), s(),
      t("es"), t("tán"), s(),
      t("col"), t("ga"), t("das"), s(),
      t("a"), t("hí"), s(),
      t("e"), t("sas"), s(),
      t("ca"), t("be"), t("zas"), t("?"), t("\""), s(),
      t("Le"), s(), t("con"), t("tes"), t("ta"), t("ron"), t(":"), s(),
      t("\""), t("El"), s(), t("rey"), s(),
      t("tie"), t("ne"), s(),
      t("u"), t("na"), s(),
      t("hi"), t("ja"), s(),
      t("muy"), s(),
      t("fuer"), t("te"), s(),
      t("en"), s(), t("la"), s(),
      t("lu"), t("cha"), s(),
      t("per"), t("so"), t("nal"), t("."), s(),
      t("Quien"), s(),
      t("en"), t("tre"), s(),
      t("y"), s(),
      t("la"), s(),
      t("ven", "ven"), t("sa", "za"), t(","), s(), // Error 4: vensa -> venza
      t("se"), s(),
      t("ca"), t("sa", "sá"), t("ra", "rá"), s(), // Error 5: casara -> casará
      t("con"), s(),
      t("e"), t("lla"), t(";"), s(),
      t("pe"), t("ro"), s(),
      t("a"), s(),
      t("quien"), s(),
      t("no"), s(),
      t("la"), s(),
      t("ven"), t("za"), t(","), s(),
      t("se"), s(), t("le"), s(),
      t("cor"), t("ta", "tá"), t("ra", "rá"), s(), // Error 6: cortara -> cortará
      t("la"), s(),
      t("ca"), t("be"), t("za"), t("\""), t(".")
    ]
  },
  {
    difficultyLevel: 5,
    description: "El abeto y el espino",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Disputaban entre sí el abeto y el espino. Se jactaba el abeto diciendo: —Soy hermoso, esbelto y alto, y sirvo para construir las naves y los techos de los templos. ¿Cómo tienes la osadía de compararte a mí? —¡Si recordaras —replicó el espino— las hachas y las sierras que te cortan, preferirías la suerte del espino!",
    bookTitle: "Fábulas",
    bookAuthor: "Esopo",
    tokens: [
      t("Dis"), t("pu"), t("ta", "ta"), t("van", "ban"), s(), // Error 1: Disputavan -> Disputaban
      t("en"), t("tre"), s(),
      t("sí"), s(),
      t("el"), s(),
      t("a"), t("be"), t("to"), s(),
      t("y"), s(),
      t("el"), s(),
      t("es"), t("pi"), t("no"), t("."), s(),
      t("Se"), s(),
      t("jac"), t("ta", "ta"), t("va", "ba"), s(), // Error 2: jactava -> jactaba
      t("el"), s(),
      t("a"), t("be"), t("to"), s(),
      t("di"), t("cien"), t("do"), t(":"), s(),
      t("—"), t("Soy"), s(),
      t("her"), t("mo"), t("so"), t(","), s(),
      t("es"), t("bel"), t("to"), s(),
      t("y"), s(),
      t("al"), t("to"), t(","), s(),
      t("y"), s(),
      t("sir"), t("vo"), s(),
      t("pa"), t("ra"), s(),
      t("con", "cons"), t("truir"), s(), // Error 3: contruir -> construir
      t("las"), s(),
      t("na"), t("ves"), s(),
      t("y"), s(),
      t("los"), s(),
      t("te"), t("chos"), s(),
      t("de"), s(),
      t("los"), s(),
      t("tem"), t("plos"), t("."), s(),
      t("¿"), t("Có"), t("mo"), s(),
      t("tie"), t("nes"), s(),
      t("la"), s(),
      t("o"), t("sa"), t("dia", "día"), s(), // Error 4: osadia -> osadía
      t("de"), s(),
      t("com"), t("pa"), t("rar"), t("te"), s(),
      t("a"), s(),
      t("mí"), t("?"), s(),
      t("—"), t("¡"), t("Si"), s(),
      t("re"), t("cor"), t("da"), t("ras"), s(),
      t("—"), t("re"), t("pli"), t("có"), s(),
      t("el"), s(),
      t("es"), t("pi"), t("no"), t("—"), s(),
      t("las"), s(),
      t("a", "ha"), t("chas"), s(), // Error 5: achas -> hachas
      t("y"), s(),
      t("las"), s(),
      t("sie"), t("rras"), s(),
      t("que"), s(),
      t("te"), s(),
      t("cor"), t("tan"), t(","), s(),
      t("pre"), t("fe"), t("ri", "ri"), t("rias", "rías"), s(), // Error 6: preferirias -> preferirías
      t("la"), s(),
      t("suer"), t("te"), s(),
      t("del"), s(),
      t("es"), t("pi"), t("no"), t("!")
    ]
  },
  {
    difficultyLevel: 5,
    description: "El corazón delator (Frag.)",
    totalErrors: 6,
    timeLimit: 120,
    originalText: "Me es imposible decir cómo me ocurrió primeramente la idea; pero una vez concebida, no pude desecharla ni de día ni de noche. No me proponía objeto alguno ni me dejaba llevar de una pasión. Amaba al buen anciano, pues jamás me había hecho daño alguno, ni menos insultado; no envidiaba su oro; pero tenía una cosa desagradable. ¡Era uno de sus ojos, sí, esto es! Asemejábase al de un buitre y tenía el color azul pálido.",
    bookTitle: "Historias extraordinarias",
    bookAuthor: "Edgar Allan Poe",
    tokens: [
      t("Me"), s(),
      t("es"), s(),
      t("in", "im"), t("po"), t("si"), t("ble"), s(), // Error 1: inposible -> imposible
      t("de"), t("cir"), s(),
      t("có"), t("mo"), s(),
      t("me"), s(),
      t("o"), t("cu"), t("rrió"), s(),
      t("pri"), t("me"), t("ra"), t("men"), t("te"), s(),
      t("la"), s(),
      t("i"), t("dea"), t(";"), s(),
      t("pe"), t("ro"), s(),
      t("u"), t("na"), s(),
      t("vez"), s(),
      t("con"), t("ce", "ce"), t("vi", "bi"), t("da"), t(","), s(), // Error 2: concevida -> concebida
      t("no"), s(),
      t("pu"), t("de"), s(),
      t("de"), t("se"), t("char"), t("la"), s(),
      t("ni"), s(),
      t("de"), s(),
      t("dí"), t("a"), s(),
      t("ni"), s(),
      t("de"), s(),
      t("no"), t("che"), t("."), s(),
      t("No"), s(),
      t("me"), s(),
      t("pro"), t("po"), t("ní"), t("a"), s(),
      t("ob"), t("je"), t("to"), s(),
      t("al"), t("gu"), t("no"), s(),
      t("ni"), s(),
      t("me"), s(),
      t("de"), t("ja"), t("ba"), s(),
      t("lle"), t("var"), s(),
      t("de"), s(),
      t("u"), t("na"), s(),
      t("pa"), t("sion", "sión"), t("."), s(), // Error 3: pasion -> pasión
      t("A"), t("ma"), t("ba"), s(),
      t("al"), s(),
      t("buen"), s(),
      t("an"), t("cia"), t("no"), t(","), s(),
      t("pues"), s(),
      t("ja"), t("más"), s(),
      t("me"), s(),
      t("ha"), t("bía"), s(),
      t("he"), t("cho"), s(),
      t("da"), t("ño"), s(),
      t("al"), t("gu"), t("no"), t(","), s(),
      t("ni"), s(),
      t("me"), t("nos"), s(),
      t("in"), t("sul"), t("ta"), t("do"), t(";"), s(),
      t("no"), s(),
      t("en"), t("vi", "vi"), t("dia", "dia"), t("va", "ba"), s(), // Error 4: envidiava -> envidiaba
      t("su"), s(),
      t("o"), t("ro"), t(";"), s(),
      t("pe"), t("ro"), s(),
      t("te"), t("ní"), t("a"), s(),
      t("u"), t("na"), s(),
      t("co"), t("sa"), s(),
      t("de"), t("sa"), t("gra"), t("da"), t("ble"), t("."), s(),
      t("¡"), t("E"), t("ra"), s(),
      t("u"), t("no"), s(),
      t("de"), s(),
      t("sus"), s(),
      t("o"), t("jos"), t(","), s(),
      t("sí"), t(","), s(),
      t("es"), t("to"), s(),
      t("es"), t("!"), s(),
      t("A"), t("se"), t("me"), t("ja", "já"), t("ba", "ba"), t("se"), s(), // Error 5: Asemejabase -> Asemejábase
      t("al"), s(),
      t("de"), s(),
      t("un"), s(),
      t("bui"), t("tre"), s(),
      t("y"), s(),
      t("te"), t("ní"), t("a"), s(),
      t("el"), s(),
      t("co"), t("lor"), s(),
      t("a"), t("zul"), s(),
      t("pa", "pá"), t("li"), t("do"), t(".") // Error 6: palido -> pálido
    ]
  }
];