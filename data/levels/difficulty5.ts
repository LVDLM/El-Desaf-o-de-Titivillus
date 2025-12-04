import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const LEVEL_5_POOL: LevelData[] = [
  // 1. Frankenstein - Fragmento del nudo
  {
    difficultyLevel: 5,
    description: "Frankenstein - El monstruo",
    totalErrors: 5,
    timeLimit: 85,
    originalText: "Víctor Frankenstein comprende en ese momento el horror que ha creado, rechaza con espanto el resultado de su experimento y huye de su laboratorio. Al volver, el monstruo ha desaparecido. Tras un período de convalecencia debido al exceso de trabajo, Víctor regresa a su Ginebra natal con su familia.",
    bookTitle: "Frankenstein",
    bookAuthor: "Mary Shelley",
    tokens: [
      t("Víc"), t("tor", "tor"), s(), // Error 1: Víctor -> Victor (falta tilde)
      t("Fran"), t("kens"), t("tein"), s(),
      t("com"), t("pren"), t("de"), s(),
      t("en"), s(),
      t("e"), t("se"), s(),
      t("mo"), t("men"), t("to"), s(),
      t("el"), s(),
      t("ho"), t("rror"), s(),
      t("que"), s(),
      t("ha"), s(),
      t("cre"), t("a"), t("do"), t(","), s(),
      t("re"), t("cha"), t("za", "sa"), s(), // Error 2: rechaza -> rechasa (z->s)
      t("con"), s(),
      t("es"), t("pan"), t("to"), s(),
      t("el"), s(),
      t("re"), t("sul"), t("ta"), t("do"), s(),
      t("de"), s(),
      t("su"), s(),
      t("ex"), t("pe"), t("ri"), t("men"), t("to"), s(),
      t("y"), s(),
      t("hu"), t("ye", "lle"), s(), // Error 3: huye -> hulle (y->ll)
      t("de"), s(),
      t("su"), s(),
      t("la"), t("bo"), t("ra"), t("to"), t("rio"), t("."), s(),
      t("Al"), s(),
      t("vol"), t("ver"), t(","), s(),
      t("el"), s(),
      t("mons"), t("truo"), s(),
      t("ha"), s(),
      t("de"), t("sa"), t("pa"), t("re"), t("ci"), t("do"), t("."), s(),
      t("Tras"), s(),
      t("un"), s(),
      t("pe"), t("río", "riodo"), t("do"), s(), // Error 4: período -> periodo (falta tilde, simplificado)
      t("de"), s(),
      t("con"), t("va"), t("le"), t("cen"), t("cia"), s(),
      t("de"), t("bi"), t("do"), s(),
      t("al"), s(),
      t("ex"), t("ce"), t("so"), s(),
      t("de"), s(),
      t("tra"), t("ba"), t("jo"), t(","), s(),
      t("Víc"), t("tor"), s(),
      t("re"), t("gre"), t("sa"), s(),
      t("a"), s(),
      t("su"), s(),
      t("Gi"), t("ne"), t("bra", "nebra"), s(), // Error 5: Ginebra -> Ginebra (sin G inicial)
      t("na"), t("tal"), s(),
      t("con"), s(),
      t("su"), s(),
      t("fa"), t("mi"), t("lia"), t(".")
    ]
  },

  // 2. Drácula - Fragmento del nudo
  {
    difficultyLevel: 5,
    description: "Drácula - El Conde recibe a Harker",
    totalErrors: 5,
    timeLimit: 85,
    originalText: "Yo soy Drácula; y le doy mi bienvenida, señor Harker, en mi casa. Pase; el aire de la noche está frío, y seguramente usted necesita comer y descansar. Mientras hablaba, puso la lámpara sobre un soporte en la pared, y saliendo, tomó mi equipaje.",
    bookTitle: "Drácula",
    bookAuthor: "Bram Stoker",
    tokens: [
      t("Yo"), s(),
      t("soy"), s(),
      t("Drá"), t("cu"), t("la"), t(";"), s(),
      t("y"), s(),
      t("le"), s(),
      t("doy"), s(),
      t("mi"), s(),
      t("bien"), t("ve"), t("ni"), t("da"), t(","), s(),
      t("se"), t("ñor"), s(),
      t("Har"), t("ker"), t(","), s(),
      t("en"), s(),
      t("mi"), s(),
      t("ca"), t("sa"), t("."), s(),
      t("Pa"), t("se"), t(";"), s(),
      t("el"), s(),
      t("ai"), t("re"), s(),
      t("de"), s(),
      t("la"), s(),
      t("no"), t("che"), s(),
      t("es"), t("tá", "ta"), s(), // Error 1: está -> esta (falta tilde)
      t("frí"), t("o"), t(","), s(),
      t("y"), s(),
      t("se"), t("gu"), t("ra"), t("men"), t("te"), s(),
      t("us"), t("ted"), s(),
      t("ne"), t("ce"), t("si"), t("ta", "cita"), s(), // Error 2: necesita -> nececita (s->c)
      t("co"), t("mer"), s(),
      t("y"), s(),
      t("des"), t("can"), t("sar"), t("."), s(),
      t("Mien"), t("tras"), s(),
      t("ha"), t("bla"), t("ba", "va"), t(","), s(), // Error 3: hablaba -> hablava (b->v)
      t("pu"), t("so"), s(),
      t("la"), s(),
      t("lám"), t("pa"), t("ra"), s(),
      t("so"), t("bre"), s(),
      t("un"), s(),
      t("so"), t("por"), t("te"), s(),
      t("en"), s(),
      t("la"), s(),
      t("pa"), t("red"), t(","), s(),
      t("y"), s(),
      t("sa"), t("lien", "llien"), t("do"), t(","), s(), // Error 4: saliendo -> salliendo (li->lli)
      t("to"), t("mó", "mo"), s(), // Error 5: tomó -> tomo (falta tilde)
      t("mi"), s(),
      t("e"), t("qui"), t("pa"), t("je"), t(".")
    ]
  },

  // 3. La guerra de los mundos - Fragmento del nudo
  {
    difficultyLevel: 5,
    description: "La guerra de los mundos - Contacto",
    totalErrors: 5,
    timeLimit: 85,
    originalText: "Avanzaban grupitos de dos o tres, se detenían, observaban y volvían a avanzar. Era la delegación. Se había efectuado una apresurada consulta, y como los marcianos eran, sin duda alguna, inteligentes, a pesar de su aspecto repulsivo, se resolvió tratar de comunicarse con ellos.",
    bookTitle: "La guerra de los mundos",
    bookAuthor: "H.G. Wells",
    tokens: [
      t("A"), t("van"), t("za"), t("ban", "van"), s(), // Error 1: Avanzaban -> Avanzavan (b->v)
      t("gru"), t("pi"), t("tos"), s(),
      t("de"), s(),
      t("dos"), s(),
      t("o"), s(),
      t("tres"), t(","), s(),
      t("se"), s(),
      t("de"), t("te"), t("ní"), t("an"), t(","), s(),
      t("ob"), t("ser"), t("va"), t("ban"), s(),
      t("y"), s(),
      t("vol"), t("ví", "bí"), t("an"), s(), // Error 2: volvían -> volbían (v->b)
      t("a"), s(),
      t("a"), t("van"), t("zar"), t("."), s(),
      t("E"), t("ra"), s(),
      t("la"), s(),
      t("de"), t("le"), t("ga"), t("ción"), t("."), s(),
      t("Se"), s(),
      t("ha"), t("bía", "vía"), s(), // Error 3: había -> havía (b->v, simplificado a vía)
      t("e"), t("fec"), t("tua"), t("do"), s(),
      t("u"), t("na"), s(),
      t("a"), t("pre"), t("su"), t("ra"), t("da"), s(),
      t("con"), t("sul"), t("ta"), t(","), s(),
      t("y"), s(),
      t("co"), t("mo"), s(),
      t("los"), s(),
      t("mar"), t("cia"), t("nos"), s(),
      t("e"), t("ran"), t(","), s(),
      t("sin"), s(),
      t("du"), t("da"), s(),
      t("al"), t("gu"), t("na"), t(","), s(),
      t("in"), t("te"), t("li"), t("gen"), t("tes"), t(","), s(),
      t("a"), s(),
      t("pe"), t("sar"), s(),
      t("de"), s(),
      t("su"), s(),
      t("as"), t("pec"), t("to"), s(),
      t("re"), t("pul"), t("si"), t("vo", "bo"), t(","), s(), // Error 4: repulsivo -> repulsibo (v->b)
      t("se"), s(),
      t("re"), t("sol"), t("vió", "bio"), s(), // Error 5: resolvió -> resolbio (vi->bi, simplificado)
      t("tra"), t("tar"), s(),
      t("de"), s(),
      t("co"), t("mu"), t("ni"), t("car"), t("se"), s(),
      t("con"), s(),
      t("e"), t("llos"), t(".")
    ]
  },

  // 4. El retrato de Dorian Gray - Fragmento del nudo
  {
    difficultyLevel: 5,
    description: "El retrato de Dorian Gray - Lord Henry",
    totalErrors: 5,
    timeLimit: 80,
    originalText: "Lord Henry salió al jardín y encontró a Dorian Gray con el rostro hundido en las grandes flores del lilo, bebiendo febrilmente su perfume fresco como si se tratase de vino. Se le acercó y le puso una mano en el hombro.",
    bookTitle: "El retrato de Dorian Gray",
    bookAuthor: "Oscar Wilde",
    tokens: [
      t("Lord"), s(),
      t("Hen"), t("ry"), s(),
      t("sa"), t("lió", "lio"), s(), // Error 1: salió -> salio (falta tilde)
      t("al"), s(),
      t("jar"), t("dín"), s(),
      t("y"), s(),
      t("en"), t("con"), t("tró", "tro"), s(), // Error 2: encontró -> encontro (falta tilde)
      t("a"), s(),
      t("Do"), t("rian"), s(),
      t("Gray"), s(),
      t("con"), s(),
      t("el"), s(),
      t("ros"), t("tro"), s(),
      t("hun"), t("di"), t("do"), s(),
      t("en"), s(),
      t("las"), s(),
      t("gran"), t("des"), s(),
      t("flo"), t("res"), s(),
      t("del"), s(),
      t("li"), t("lo"), t(","), s(),
      t("be"), t("bien", "vien"), t("do"), s(), // Error 3: bebiendo -> beviendo (b->v)
      t("fe"), t("bril"), t("men"), t("te"), s(),
      t("su"), s(),
      t("per"), t("fu"), t("me"), s(),
      t("fres"), t("co"), s(),
      t("co"), t("mo"), s(),
      t("si"), s(),
      t("se"), s(),
      t("tra"), t("ta"), t("se", "ze"), s(), // Error 4: tratase -> trataze (s->z)
      t("de"), s(),
      t("vi"), t("no"), t("."), s(),
      t("Se"), s(),
      t("le"), s(),
      t("a"), t("cer"), t("có", "co"), s(), // Error 5: acercó -> acerco (falta tilde)
      t("y"), s(),
      t("le"), s(),
      t("pu"), t("so"), s(),
      t("u"), t("na"), s(),
      t("ma"), t("no"), s(),
      t("en"), s(),
      t("el"), s(),
      t("hom"), t("bro"), t(".")
    ]
  },

  // 5. El extranjero - Fragmento del nudo
  {
    difficultyLevel: 5,
    description: "El extranjero - Marie en la playa",
    totalErrors: 5,
    timeLimit: 75,
    originalText: "Tenía los cabellos sobre los ojos y reía. Me icé a su lado sobre la balsa. El tiempo estaba espléndido y, como bromeando, dejé ir la cabeza hacia atrás y la posé sobre su vientre de María. No dijo nada y quedé así.",
    bookTitle: "El extranjero",
    bookAuthor: "Albert Camus",
    tokens: [
      t("Te"), t("ní"), t("a"), s(),
      t("los"), s(),
      t("ca"), t("be"), t("llos", "yos"), s(), // Error 1: cabellos -> cabeyos (ll->y)
      t("so"), t("bre"), s(),
      t("los"), s(),
      t("o"), t("jos"), s(),
      t("y"), s(),
      t("re"), t("í"), t("a"), t("."), s(),
      t("Me"), s(),
      t("i"), t("cé"), s(),
      t("a"), s(),
      t("su"), s(),
      t("la"), t("do"), s(),
      t("so"), t("bre"), s(),
      t("la"), s(),
      t("bal"), t("sa"), t("."), s(),
      t("El"), s(),
      t("tiem"), t("po"), s(),
      t("es"), t("ta"), t("ba", "va"), s(), // Error 2: estaba -> estaba (b->v)
      t("es"), t("plén"), t("di"), t("do", "do"), s(), // Error 3: espléndido -> esplendido (falta tilde)
      t("y"), t(","), s(),
      t("co"), t("mo"), s(),
      t("bro"), t("me"), t("an"), t("do"), t(","), s(),
      t("de"), t("jé", "je"), s(), // Error 4: dejé -> deje (falta tilde)
      t("ir"), s(),
      t("la"), s(),
      t("ca"), t("be"), t("za"), s(),
      t("ha"), t("cia", "zia"), s(), // Error 5: hacia -> hazia (c->z)
      t("a"), t("trás"), s(),
      t("y"), s(),
      t("la"), s(),
      t("po"), t("sé"), s(),
      t("so"), t("bre"), s(),
      t("su"), s(),
      t("vien"), t("tre"), s(),
      t("de"), s(),
      t("Ma"), t("rí"), t("a"), t("."), s(),
      t("No"), s(),
      t("di"), t("jo"), s(),
      t("na"), t("da"), s(),
      t("y"), s(),
      t("que"), t("dé"), s(),
      t("a"), t("sí"), t(".")
    ]
  }
];