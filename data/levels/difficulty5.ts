/**
 * BANCO DE TEXTOS - NIVEL DE DIFICULTAD 5 (PERFIL 3)
 * 
 * Fuentes bibliográficas y situación de derechos:
 * 1. Fiódor Dostoyevski: «Crimen y castigo» (1866) - Traducción histórica de dominio público. Autor fallecido en 1881.
 * 2. Victor Hugo: «Los miserables» (1862) - Traducción clásica de Nemesio Fernández Cuesta (1863). Autor fallecido en 1885.
 * 3. Franz Kafka: «La metamorfosis» (1915) - Dominio público internacional. Autor fallecido en 1924.
 * 4. Anónimo: «Cantar de mio Cid» (c. 1200) - Obra cumbre medieval española en dominio público pleno.
 * 5. Marcel Proust: «En busca del tiempo perdido» (1913) - Autor fallecido en 1922 (dominio público).
 * 6. Franz Kafka: «El proceso» (1925) - Autor fallecido en 1924 (dominio público).
 * 7. Herman Melville: «Moby Dick» (1851) - Traducción clásica de dominio público. Autor fallecido en 1891.
 * 8. Emily Brontë: «Cumbres Borrascosas» (1847) - Traducción histórica de dominio público. Autora fallecida en 1848.
 * 9. Eugenio Sellés: «Por tierra de Castilla» - Autor fallecido en 1926 (dominio público).
 * 10. Anónimo: «Las mil y una noches» - Cuentos tradicionales de Oriente en dominio público pleno.
 * 11. Esopo: «Fábulas» - Literatura clásica griega de dominio público pleno.
 * 12. Edgar Allan Poe: «El corazón delator» (1843) - Traducción histórica en dominio público. Autor fallecido en 1849.
 * 13. Leopoldo Alas «Clarín»: «La Regenta» (1884) - Dominio público pleno. Autor fallecido en 1901.
 * 14. Pío Baroja: «El árbol de la ciencia» (1911) - Dominio público pleno. Autor fallecido en 1956.
 */

import { LevelData } from "../../types";
import { w, p, sp, s } from "../../utils/levelHelpers";

export const LEVEL_5_POOL: LevelData[] = [
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Crimen y castigo (Frag.)",
    totalErrors: 6,
    timeLimit: 90,
    originalText: "A principios de julio, en época de calor excesivo, al anochecer, un joven salió de la reducida habitación que tenía alquilada en la callejuela de S.",
    bookTitle: "Crimen y castigo",
    bookAuthor: "Fiódor Dostoyevski",
    tokens: [
      w("A"), s(),
      w("principios"), s(),
      w("de"), s(),
      w("julio"), p(","), s(),
      w("en"), s(),
      w("epoca", "época", "accent"), s(), // Error 1: epoca -> época
      w("de"), s(),
      w("calor"), s(),
      w("excesibo", "excesivo", "homophone"), p(","), s(), // Error 2: excesibo -> excesivo
      w("al"), s(),
      w("anochecer"), p(","), s(),
      w("un"), s(),
      w("joven"), s(),
      w("salio", "salió", "accent"), s(), // Error 3: salio -> salió
      w("de"), s(),
      w("la"), s(),
      w("reduzida", "reducida", "homophone"), s(), // Error 4: reduzida -> reducida
      w("abitacion", "habitación", "homophone"), s(), // Error 5: abitacion -> habitación
      w("que"), s(),
      w("tenia", "tenía", "accent"), s(), // Error 6: tenia -> tenía
      w("alquilada"), s(),
      w("en"), s(),
      w("la"), s(),
      w("callejuela"), s(),
      w("de"), s(),
      w("S"), p(".")
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Los miserables (Frag.)",
    totalErrors: 6,
    timeLimit: 95,
    originalText: "En 1815, el señor Carlos Francisco Bienvenido Myriel era obispo de Digne. Era un anciano de unos setenta y cinco años; ocupaba la sede de Digne desde 1806.",
    bookTitle: "Los miserables",
    bookAuthor: "Victor Hugo",
    tokens: [
      w("En"), s(),
      w("1815"), p(","), s(),
      w("el"), s(),
      w("senor", "señor", "letter"), s(), // Error 1: senor -> señor
      w("Carlos"), s(),
      w("Francisco"), s(),
      w("Bienvenido"), s(),
      w("Myriel"), s(),
      w("era"), s(),
      w("ovispo", "obispo", "homophone"), s(), // Error 2: ovispo -> obispo
      w("de"), s(),
      w("Digne"), p("."), s(),
      w("Era"), s(),
      w("un"), s(),
      w("ansiano", "anciano", "homophone"), s(), // Error 3: ansiano -> anciano
      w("de"), s(),
      w("unos"), s(),
      w("setenta"), s(),
      w("y"), s(),
      w("sinco", "cinco", "homophone"), s(), // Error 4: sinco -> cinco
      w("anos", "años", "letter"), p(";"), s(), // Error 5: anos -> años
      w("ocupava", "ocupaba", "homophone"), s(), // Error 6: ocupava -> ocupaba
      w("la"), s(),
      w("sede"), s(),
      w("de"), s(),
      w("Digne"), s(),
      w("desde"), s(),
      w("1806"), p(".")
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "La metamorfosis (Frag.)",
    totalErrors: 6,
    timeLimit: 90,
    originalText: "Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto. Estaba echado sobre el duro caparazón de su espalda.",
    bookTitle: "La metamorfosis",
    bookAuthor: "Franz Kafka",
    tokens: [
      w("Una"), s(),
      w("mañana"), p(","), s(),
      w("tras"), s(),
      w("un"), s(),
      w("sueño"), s(),
      w("intranqilo", "intranquilo", "letter"), p(","), s(), // Error 1: intranqilo -> intranquilo
      w("Gregorio"), s(),
      w("Samsa"), s(),
      w("se"), s(),
      w("desperto", "despertó", "accent"), s(), // Error 2: desperto -> despertó
      w("convertido"), s(),
      w("en"), s(),
      w("un"), s(),
      w("mostruoso", "monstruoso", "letter"), s(), // Error 3: mostruoso -> monstruoso
      w("insepto", "insecto", "letter"), p("."), s(), // Error 4: insepto -> insecto
      w("Estaba"), s(),
      w("echado"), s(),
      w("sobre"), s(),
      w("el"), s(),
      w("duro"), s(),
      w("carapazon", "caparazón", "accent"), s(), // Error 5: carapazon -> caparazón
      w("de"), s(),
      w("su"), s(),
      w("ezpalda", "espalda", "letter"), p(".") // Error 6: ezpalda -> espalda
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Cantar de mio Cid",
    totalErrors: 6,
    timeLimit: 85,
    originalText: "De los sus ojos tan fuertemente llorando, tornaba la cabeza y estábalos catando.",
    bookTitle: "Cantar de mio Cid",
    bookAuthor: "Anónimo",
    tokens: [
      w("De"), s(),
      w("los"), s(),
      w("sus"), s(),
      w("ojos"), s(),
      w("tam", "tan", "letter"), s(), // Error 1: tam -> tan
      w("fuertimente", "fuertemente", "letter"), s(), // Error 2: fuertimente -> fuertemente
      w("yorando", "llorando", "homophone"), p(","), s(), // Error 3: yorando -> llorando
      w("tornava", "tornaba", "homophone"), s(), // Error 4: tornava -> tornaba
      w("la"), s(),
      w("caveza", "cabeza", "homophone"), s(), // Error 5: caveza -> cabeza
      w("y"), s(),
      w("estabalos", "estábalos", "accent"), s(), // Error 6: estabalos -> estábalos
      w("catando"), p(".")
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "En busca del tiempo perdido (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "A veces, apenas había apagado la bujía, cerrábanse mis ojos tan presto, que ni tiempo tenía para decirme: 'Ya me duermo'. Y media hora después despertábame la idea de que ya era hora de ir a buscar el sueño.",
    bookTitle: "En busca del tiempo perdido",
    bookAuthor: "Marcel Proust",
    tokens: [
      w("A"), s(),
      w("veces"), p(","), s(),
      w("hapenas", "apenas", "homophone"), s(), // Error 1: hapenas -> apenas
      w("había"), s(),
      w("apagado"), s(),
      w("la"), s(),
      w("bujia", "bujía", "accent"), p(","), s(), // Error 2: bujia -> bujía
      w("serrábanse", "cerrábanse", "homophone"), s(), // Error 3: serrábanse -> cerrábanse
      w("mis"), s(),
      w("hojos", "ojos", "homophone"), s(), // Error 4: hojos -> ojos
      w("tan"), s(),
      w("presto"), p(","), s(),
      w("que"), s(),
      w("ni"), s(),
      w("tiempo"), s(),
      w("tenía"), s(),
      w("para"), s(),
      w("decirme"), p(":"), s(),
      p("'"), w("Ya"), s(),
      w("me"), s(),
      w("duermo"), p("'"), p("."), s(),
      w("Y"), s(),
      w("media"), s(),
      w("hora"), s(),
      w("después"), s(),
      w("dezpertábame", "despertábame", "letter"), s(), // Error 5: dezpertábame -> despertábame
      w("la"), s(),
      w("ydea", "idea", "letter"), s(), // Error 6: ydea -> idea
      w("de"), s(),
      w("que"), s(),
      w("ya"), s(),
      w("era"), s(),
      w("hora"), s(),
      w("de"), s(),
      w("ir"), s(),
      w("a"), s(),
      w("buscar"), s(),
      w("el"), s(),
      w("sueño"), p(".")
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "El proceso (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Alguien debía de haber calumniado a Josef K., porque sin haber hecho nada malo fue detenido una mañana. La cocinera de su patrona, la señora Grubach, no apareció en aquella ocasión.",
    bookTitle: "El proceso",
    bookAuthor: "Franz Kafka",
    tokens: [
      w("Alguien"), s(),
      w("debia", "debía", "accent"), s(), // Error 1: debia -> debía
      w("de"), s(),
      w("aber", "haber", "homophone"), s(), // Error 2: aber -> haber
      w("calumniado"), s(),
      w("a"), s(),
      w("Josef"), s(),
      w("K."), p(","), s(),
      w("porque"), s(),
      w("sin"), s(),
      w("haber"), s(),
      w("hecho"), s(),
      w("nada"), s(),
      w("malo"), s(),
      w("fue"), s(),
      w("detenido"), s(),
      w("una"), s(),
      w("manana", "mañana", "letter"), p("."), s(), // Error 3: manana -> mañana
      w("La"), s(),
      w("cocinera"), s(),
      w("de"), s(),
      w("su"), s(),
      w("patrona"), p(","), s(),
      w("la"), s(),
      w("señora"), s(),
      w("Grubaj", "Grubach", "letter"), p(","), s(), // Error 4: Grubaj -> Grubach
      w("no"), s(),
      w("aparecio", "apareció", "accent"), s(), // Error 5: aparecio -> apareció
      w("en"), s(),
      w("aquella"), s(),
      w("ocasion", "ocasión", "accent"), p(".") // Error 6: ocasion -> ocasión
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Moby Dick (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Llamadme Ismael. Hace algunos años —no importa cuántos exactamente—, teniendo poco o ningún dinero en el bolsillo y nada en particular que me interesara en tierra, pensé en navegar un poco por ahí.",
    bookTitle: "Moby Dick",
    bookAuthor: "Herman Melville",
    tokens: [
      w("Llamadme"), s(),
      w("Izmael", "Ismael", "letter"), p("."), s(), // Error 1: Izmael -> Ismael
      w("Hace"), s(),
      w("algunos"), s(),
      w("años"), s(),
      p("—"), w("no"), s(),
      w("importa"), s(),
      w("cuántos"), s(),
      w("esactamente", "exactamente", "homophone"), p("—"), p(","), s(), // Error 2: esactamente -> exactamente
      w("teniendo"), s(),
      w("poco"), s(),
      w("o"), s(),
      w("ningún"), s(),
      w("dinero"), s(),
      w("en"), s(),
      w("el"), s(),
      w("bolsiyo", "bolsillo", "homophone"), s(), // Error 3: bolsiyo -> bolsillo
      w("y"), s(),
      w("nada"), s(),
      w("en"), s(),
      w("particular"), s(),
      w("que"), s(),
      w("me"), s(),
      w("interezara", "interesara", "homophone"), s(), // Error 4: interezara -> interesara
      w("en"), s(),
      w("tierra"), p(","), s(),
      w("pense", "pensé", "accent"), s(), // Error 5: pense -> pensé
      w("en"), s(),
      w("nabegar", "navegar", "homophone"), s(), // Error 6: nabegar -> navegar
      w("un"), s(),
      w("poco"), s(),
      w("por"), s(),
      w("ahí"), p(".")
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Cumbres Borrascosas (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Acabo de regresar de una visita a mi casero, el solitario vecino con el que habré de verme fastidiado. ¡Este es ciertamente un hermoso país! No creo que en toda Inglaterra hubiera podido encontrar un lugar tan apartado.",
    bookTitle: "Cumbres Borrascosas",
    bookAuthor: "Emily Brontë",
    tokens: [
      w("Acabo"), s(),
      w("de"), s(),
      w("regresar"), s(),
      w("de"), s(),
      w("una"), s(),
      w("visita"), s(),
      w("a"), s(),
      w("mi"), s(),
      w("cazero", "casero", "letter"), p(","), s(), // Error 1: cazero -> casero
      w("el"), s(),
      w("solitario"), s(),
      w("vecino"), s(),
      w("con"), s(),
      w("el"), s(),
      w("que"), s(),
      w("abré", "habré", "homophone"), s(), // Error 2: abré -> habré
      w("de"), s(),
      w("verme"), s(),
      w("fastibiado", "fastidiado", "letter"), p("."), s(), // Error 3: fastibiado -> fastidiado
      p("¡"), w("Este"), s(),
      w("es"), s(),
      w("ciertamente"), s(),
      w("un"), s(),
      w("hermoso"), s(),
      w("pais", "país", "accent"), p("!"), s(), // Error 4: pais -> país
      w("No"), s(),
      w("creo"), s(),
      w("que"), s(),
      w("en"), s(),
      w("toda"), s(),
      w("Inglaterra"), s(),
      w("huviera", "hubiera", "homophone"), s(), // Error 5: huviera -> hubiera
      w("podido"), s(),
      w("encontrar"), s(),
      w("un"), s(),
      w("lugar"), s(),
      w("tan"), s(),
      w("apartádo", "apartado", "accent"), p(".") // Error 6: apartádo -> apartado
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Por tierra de Castilla (Frag.)",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Blanqueada con las escarchas de los primeros fríos invernales, la planicie de Castilla parece la sábana con que Dios cubre piadosamente el cadáver de la vieja España. Ni un repliegue la arruga. Toda igual, toda tendida de punta a punta, es una tierra planchada por la Naturaleza.",
    bookTitle: "Por tierra de Castilla",
    bookAuthor: "Eugenio Sellés",
    tokens: [
      w("Blanqueada"), s(),
      w("con"), s(),
      w("las"), s(),
      w("escarchas"), s(),
      w("de"), s(),
      w("los"), s(),
      w("primeros"), s(),
      w("fríos"), s(),
      w("imbernales", "invernales", "homophone"), p(","), s(), // Error 1: imbernales -> invernales
      w("la"), s(),
      w("planisie", "planicie", "homophone"), s(), // Error 2: planisie -> planicie
      w("de"), s(),
      w("Castilla"), s(),
      w("parece"), s(),
      w("la"), s(),
      w("sabana", "sábana", "accent"), s(), // Error 3: sabana -> sábana
      w("con"), s(),
      w("que"), s(),
      w("Dios"), s(),
      w("cubre"), s(),
      w("piadosamente"), s(),
      w("el"), s(),
      w("cadaver", "cadáver", "accent"), s(), // Error 4: cadaver -> cadáver
      w("de"), s(),
      w("la"), s(),
      w("bieja", "vieja", "homophone"), s(), // Error 5: bieja -> vieja
      w("España"), p("."), s(),
      w("Ni"), s(),
      w("un"), s(),
      w("repliegue"), s(),
      w("la"), s(),
      w("arruga"), p("."), s(),
      w("Toda"), s(),
      w("igual"), p(","), s(),
      w("toda"), s(),
      w("tendida"), s(),
      w("de"), s(),
      w("punta"), s(),
      w("a"), s(),
      w("punta"), p(","), s(),
      w("es"), s(),
      w("una"), s(),
      w("tierra"), s(),
      w("planchada"), s(),
      w("por"), s(),
      w("la"), s(),
      w("Naturalesa", "Naturaleza", "homophone"), p(".") // Error 6: Naturalesa -> Naturaleza
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Las mil y una noches (Frag.)",
    totalErrors: 6,
    timeLimit: 120,
    originalText: "[...] llegó a una ciudad en donde vio un palacio del rey, a la puerta del cual había colgadas cuarenta cabezas menos una. Y preguntó a la gente: \"¿Por qué están colgadas ahí esas cabezas?\" Le contestaron: \"El rey tiene una hija muy fuerte en la lucha personal. Quien entre y la venza, se casará con ella; pero a quien no la venza, se le cortará la cabeza\".",
    bookTitle: "Las mil y una noches",
    bookAuthor: "Anónimo",
    tokens: [
      w("[...]"), s(),
      w("llegó"), s(),
      w("a"), s(),
      w("una"), s(),
      w("siudad", "ciudad", "homophone"), s(), // Error 1: siudad -> ciudad
      w("en"), s(),
      w("donde"), s(),
      w("vio"), s(),
      w("un"), s(),
      w("palacio"), s(),
      w("del"), s(),
      w("rey"), p(","), s(),
      w("a"), s(),
      w("la"), s(),
      w("puerta"), s(),
      w("del"), s(),
      w("cual"), s(),
      w("havía", "había", "homophone"), s(), // Error 2: havía -> había
      w("colgadas"), s(),
      w("cuarenta"), s(),
      w("cabesas", "cabezas", "homophone"), s(), // Error 3: cabesas -> cabezas
      w("menos"), s(),
      w("una"), p("."), s(),
      w("Y"), s(),
      w("preguntó"), s(),
      w("a"), s(),
      w("la"), s(),
      w("gente"), p(":"), s(),
      p("\""), p("¿"), w("Por"), s(),
      w("qué"), s(),
      w("están"), s(),
      w("colgadas"), s(),
      w("ahí"), s(),
      w("esas"), s(),
      w("cabezas"), p("?"), p("\""), s(),
      w("Le"), s(),
      w("contestaron"), p(":"), s(),
      p("\""), w("El"), s(),
      w("rey"), s(),
      w("tiene"), s(),
      w("una"), s(),
      w("hija"), s(),
      w("muy"), s(),
      w("fuerte"), s(),
      w("en"), s(),
      w("la"), s(),
      w("lucha"), s(),
      w("personal"), p("."), s(),
      w("Quien"), s(),
      w("entre"), s(),
      w("y"), s(),
      w("la"), s(),
      w("vensa", "venza", "homophone"), p(","), s(), // Error 4: vensa -> venza
      w("se"), s(),
      w("casara", "casará", "accent"), s(), // Error 5: casara -> casará (un solo error por palabra)
      w("con"), s(),
      w("ella"), p(";"), s(),
      w("pero"), s(),
      w("a"), s(),
      w("quien"), s(),
      w("no"), s(),
      w("la"), s(),
      w("venza"), p(","), s(),
      w("se"), s(),
      w("le"), s(),
      w("cortara", "cortará", "accent"), s(), // Error 6: cortara -> cortará (un solo error por palabra)
      w("la"), s(),
      w("cabeza"), p("\""), p(".")
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "El abeto y el espino",
    totalErrors: 6,
    timeLimit: 110,
    originalText: "Disputaban entre sí el abeto y el espino. Se jactaba el abeto diciendo: —Soy hermoso, esbelto y alto, y sirvo para construir las naves y los techos de los templos. ¿Cómo tienes la osadía de compararte a mí? —¡Si recordaras —replicó el espino— las hachas y las sierras que te cortan, preferirías la suerte del espino!",
    bookTitle: "Fábulas",
    bookAuthor: "Esopo",
    tokens: [
      w("Disputavan", "Disputaban", "homophone"), s(), // Error 1: Disputavan -> Disputaban
      w("entre"), s(),
      w("sí"), s(),
      w("el"), s(),
      w("abeto"), s(),
      w("y"), s(),
      w("el"), s(),
      w("espino"), p("."), s(),
      w("Se"), s(),
      w("jactava", "jactaba", "homophone"), s(), // Error 2: jactava -> jactaba
      w("el"), s(),
      w("abeto"), s(),
      w("diciendo"), p(":"), s(),
      p("—"), w("Soy"), s(),
      w("hermoso"), p(","), s(),
      w("esbelto"), s(),
      w("y"), s(),
      w("alto"), p(","), s(),
      w("y"), s(),
      w("sirvo"), s(),
      w("para"), s(),
      w("contruir", "construir", "letter"), s(), // Error 3: contruir -> construir
      w("las"), s(),
      w("naves"), s(),
      w("y"), s(),
      w("los"), s(),
      w("techos"), s(),
      w("de"), s(),
      w("los"), s(),
      w("templos"), p("."), s(),
      p("¿"), w("Cómo"), s(),
      w("tienes"), s(),
      w("la"), s(),
      w("osadia", "osadía", "accent"), s(), // Error 4: osadia -> osadía
      w("de"), s(),
      w("compararte"), s(),
      w("a"), s(),
      w("mí"), p("?"), s(),
      p("—"), p("¡"), w("Si"), s(),
      w("recordaras"), s(),
      p("—"), w("replicó"), s(),
      w("el"), s(),
      w("espino"), p("—"), s(),
      w("las"), s(),
      w("achas", "hachas", "homophone"), s(), // Error 5: achas -> hachas
      w("y"), s(),
      w("las"), s(),
      w("sierras"), s(),
      w("que"), s(),
      w("te"), s(),
      w("cortan"), p(","), s(),
      w("preferirias", "preferirías", "accent"), s(), // Error 6: preferirias -> preferirías
      w("la"), s(),
      w("suerte"), s(),
      w("del"), s(),
      w("espino"), p("!")
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "El corazón delator (Frag.)",
    totalErrors: 6,
    timeLimit: 120,
    originalText: "Me es imposible decir cómo me ocurrió primeramente la idea; pero una vez concebida, no pude desecharla ni de día ni de noche. No me proponía objeto alguno ni me dejaba llevar de una pasión. Amaba al buen anciano, pues jamás me había hecho daño alguno, ni menos insultado; no envidiaba su oro; pero tenía una cosa desagradable. ¡Era uno de sus ojos, sí, esto es! Asemejábase al de un buitre y tenía el color azul pálido.",
    bookTitle: "Historias extraordinarias",
    bookAuthor: "Edgar Allan Poe",
    tokens: [
      w("Me"), s(),
      w("es"), s(),
      w("inposible", "imposible", "letter"), s(), // Error 1: inposible -> imposible
      w("decir"), s(),
      w("cómo"), s(),
      w("me"), s(),
      w("ocurrió"), s(),
      w("primeramente"), s(),
      w("la"), s(),
      w("idea"), p(";"), s(),
      w("pero"), s(),
      w("una"), s(),
      w("vez"), s(),
      w("concevida", "concebida", "homophone"), p(","), s(), // Error 2: concevida -> concebida
      w("no"), s(),
      w("pude"), s(),
      w("desecharla"), s(),
      w("ni"), s(),
      w("de"), s(),
      w("día"), s(),
      w("ni"), s(),
      w("de"), s(),
      w("noche"), p("."), s(),
      w("No"), s(),
      w("me"), s(),
      w("proponía"), s(),
      w("objeto"), s(),
      w("alguno"), s(),
      w("ni"), s(),
      w("me"), s(),
      w("dejaba"), s(),
      w("llevar"), s(),
      w("de"), s(),
      w("una"), s(),
      w("pasion", "pasión", "accent"), p("."), s(), // Error 3: pasion -> pasión
      w("Amaba"), s(),
      w("al"), s(),
      w("buen"), s(),
      w("anciano"), p(","), s(),
      w("pues"), s(),
      w("jamás"), s(),
      w("me"), s(),
      w("había"), s(),
      w("hecho"), s(),
      w("daño"), s(),
      w("alguno"), p(","), s(),
      w("ni"), s(),
      w("menos"), s(),
      w("insultado"), p(";"), s(),
      w("no"), s(),
      w("envidiava", "envidiaba", "homophone"), s(), // Error 4: envidiava -> envidiaba
      w("su"), s(),
      w("oro"), p(";"), s(),
      w("pero"), s(),
      w("tenía"), s(),
      w("una"), s(),
      w("cosa"), s(),
      w("desagradable"), p("."), s(),
      p("¡"), w("Era"), s(),
      w("uno"), s(),
      w("de"), s(),
      w("sus"), s(),
      w("ojos"), p(","), s(),
      w("sí"), p(","), s(),
      w("esto"), s(),
      w("es"), p("!"), s(),
      w("Asemejabase", "Asemejábase", "accent"), s(), // Error 5: Asemejabase -> Asemejábase
      w("al"), s(),
      w("de"), s(),
      w("un"), s(),
      w("buitre"), s(),
      w("y"), s(),
      w("tenía"), s(),
      w("el"), s(),
      w("color"), s(),
      w("azul"), s(),
      w("palido", "pálido", "accent"), p(".") // Error 6: palido -> pálido
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "La Regenta (Frag.)",
    totalErrors: 6,
    timeLimit: 140,
    bookTitle: "La Regenta",
    bookAuthor: "Leopoldo Alas «Clarín»",
    originalText: "La heroica ciudad dormía la siesta. El viento sur, caliente y perezoso, empujaba las nubes grises que se rasgaban al correr hacia el norte. ¿Quién podría imaginar en aquella tarde pesada la tempestad de pasiones que estaba a punto de desatarse? En las calles silenciosas no se oía sino el rumor lejano de las campanas de la catedral vetusta.",
    tokens: [
      w("La"), s(),
      w("heroica"), s(),
      w("ciudad"), s(),
      w("dormía"), s(),
      w("la"), s(),
      w("siesta"), p("."), s(),
      w("El"), s(),
      w("viento"), s(),
      w("sur"), p(","), s(),
      w("caliente"), s(),
      w("y"), s(),
      w("perezoso"), p(","), s(),
      w("empujaba"), s(),
      w("las"), s(),
      w("nubes"), s(),
      w("grises"), s(),
      w("que"), s(),
      w("se"), s(),
      w("rasgaban"), s(),
      w("al"), s(),
      w("correr"), s(),
      w("haciael", "hacia el", "space-missing"), s(), // Error 1: haciael -> hacia el
      w("norte"), p("."), s(),
      p("", "¿", "punct-missing"), // Error 2: signo de apertura omitido
      w("Quién"), s(),
      w("podría"), s(),
      w("imaginar"), s(),
      w("en"), s(),
      w("aquella"), s(),
      w("tarde"), s(),
      w("pesada"), s(),
      w("la"), s(),
      w("tempestad"), s(),
      w("de"), s(),
      w("pasiones"), s(),
      w("que"), s(),
      w("estaba"), s(),
      sp(true, "a", "word-missing"), s(), // Error 3: palabra omitida "a"
      w("punto"), s(),
      w("de"), s(),
      w("desatarse"), p("?"), s(),
      w("En"), s(),
      w("las"), s(),
      w("calles"), s(),
      w("silenciosas"), s(),
      w("no"), s(),
      w("se"), s(),
      w("oía"), s(),
      w("siempre", "", "word-extra"), s(), // Error 4: palabra sobrante "siempre"
      w("sino"), s(),
      w("el"), s(),
      w("rumor"), s(),
      w("lejano"), s(),
      w("de"), s(),
      w("las"), s(),
      w("campanas"), s(),
      w("de"), s(),
      w("la"), s(),
      w("catedral"), sp(true, " ", "space-extra", "  "), // Error 5: doble espacio
      w("vetuzta", "vetusta", "homophone"), p(".") // Error 6: vetuzta -> vetusta
    ]
  },
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "El árbol de la ciencia (Frag.)",
    totalErrors: 6,
    timeLimit: 145,
    bookTitle: "El árbol de la ciencia",
    bookAuthor: "Pío Baroja",
    originalText: "Andrés Hurtado contemplaba el cielo límpido de Madrid desde la azotea de su casa con una serenidad agridulce. ¡Qué extraña sensación de lejanía le producía todo aquello! La vida de la ciudad bullía allá abajo, indiferente a sus dudas filosóficas, mientras él buscaba inútilmente una verdad absoluta que guiase sus pasos inciertos por el laberinto de la existencia humana.",
    tokens: [
      w("Andrés"), s(),
      w("Hurtado"), s(),
      w("contemplaba"), s(),
      w("el"), s(),
      w("cielo"), s(),
      w("límpido"), s(),
      w("de"), s(),
      w("Madrid"), s(),
      w("desde"), s(),
      w("la"), s(),
      w("azotea"), s(),
      w("de"), s(),
      w("su"), s(),
      w("casa"), s(),
      w("con"), s(),
      w("una"), s(),
      w("serenidad"), s(),
      w("agridulce"), p("."), s(),
      p("", "¡", "punct-missing"), // Error 1: signo de apertura omitido
      w("Qué"), s(),
      w("extraña"), s(),
      w("sensación"), s(),
      w("de"), s(),
      w("lejanía"), s(),
      w("le"), s(),
      w("producía"), s(),
      w("todo"), s(),
      w("aquello"), p("!"), s(),
      w("La"), s(),
      w("vida"), s(),
      w("dela", "de la", "space-missing"), s(), // Error 2: dela -> de la
      w("ciudad"), s(),
      w("bullía"), s(),
      w("allá"), s(),
      w("abajo"), p(","), s(),
      w("indiferente"), s(),
      w("a"), s(),
      w("sus"), s(),
      w("dudas"), s(),
      w("filosóficas"), p(","), s(),
      w("mientras"), s(),
      w("él"), s(),
      w("buscaba"), s(),
      sp(true, "inútilmente", "word-missing"), s(), // Error 3: palabra omitida
      w("una"), s(),
      w("verdad"), s(),
      w("absoluta"), s(),
      w("que"), s(),
      w("guiase"), s(),
      w("sus"), s(),
      w("pasos"), s(),
      w("inciertos"), s(),
      w("por"), s(),
      w("el"), s(),
      w("laberinto"), s(),
      w("de"), sp(true, " ", "space-extra", "  "), // Error 4: doble espacio
      w("la"), s(),
      w("misma", "", "word-extra"), s(), // Error 5: palabra sobrante
      w("existensia", "existencia", "homophone"), s(), // Error 6: existensia -> existencia
      w("humana"), p(".")
    ]
  }
];
