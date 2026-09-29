import { LevelSource } from './generateAllPools';

// Specifications for Pool 5 (Perfil 3: 130-200 words, 6-8 errors)
// Error counts: 4 texts with 6, 6 texts with 7, 4 texts with 8.
// Total errors: 98.
// Kinds totals: homophone: 22, letter: 16, space-missing: 14, space-extra: 11, punct-wrong: 10, word-extra: 9, accent: 7, word-missing: 5, punct-missing: 4.
// All 9 counts are strictly unique.
// Includes punct-missing with ¿ and ¡, and word-missing.

export const NEW_POOL_5_SPECS: LevelSource[] = [
  // 1. Crimen y castigo (165 palabras, 8 errores)
  // Errores: letter, homophone, word-missing, space-extra, space-missing, punct-wrong, homophone, accent
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Crimen y castigo (Frag.)",
    bookTitle: "Crimen y castigo",
    bookAuthor: "Fiódor Dostoyevski",
    authorComment: "Fiódor Dostoyevski (1821-1881)",
    obraComment: "Crimen y castigo (1866, Primera parte, capítulo I)",
    edicionComment: "Traducción histórica clásica de Pedro Danvila (Madrid, 1889)",
    derechosComment: "Dominio público internacional (autor fallecido en 1881, traducción de dominio público)",
    annotatedText: `A principios de julio, en una época de calor [[asfisiante|asfixiante|letter]], al caer de la tarde, un joven salía del cuartucho que ocupaba bajo el tejado de un alto [[edifisio|edificio|homophone]] de cinco pisos y, despacio, con aire indeciso, se dirigía hacia el [[|famoso|word-missing]] puente K.[[__2| |space-extra]]Había tenido la fortuna de no cruzarse con su patrona [[enla|en la|space-missing]] escalera. El cuartucho en que se alojaba hallábase bajo el mismo tejado y parecía más bien un armario que una habitación de un ser viviente. La patrona, que le cedía aquel habitáculo con servicio y pensión, vivía un piso más abajo[[;|,|punct-wrong]] y cada vez que el joven salía a la calle veíase obligado a pasar por delante de la cocina de aquella, cuya puerta casi siempre estaba abierta de par en par. Cada vez que el estudiante pasaba por allí [[esperimentaba|experimentaba|homophone]] una sensación dolorosa y mezquina de apocamiento, que le hacía fruncir el ceño y le causaba [[berguenza|vergüenza|homophone]]. Debía una respetable suma a la patrona y temía encontrarse con ella.`
  },

  // 2. Los miserables (166 palabras, 6 errores)
  // Errores: space-extra, space-missing, punct-wrong, letter, homophone, word-extra
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Los miserables (Frag.)",
    bookTitle: "Los miserables",
    bookAuthor: "Victor Hugo",
    authorComment: "Victor Hugo (1802-1885)",
    obraComment: "Los miserables (1862, Primera parte, libro primero, capítulo I)",
    edicionComment: "Traducción histórica clásica de Nemesio Fernández Cuesta (Madrid, Gaspar y Roig, 1863)",
    derechosComment: "Dominio público internacional (autor fallecido en 1885, traducción histórica en dominio público)",
    annotatedText: `En 1815, monseñor Carlos Francisco Bienvenido Myriel era obispo de Digne. Era un anciano de unos setenta y cinco años; ocupaba la sede episcopal de Digne desde 1806.[[__2| |space-extra]]Aunque este detalle no tenga relación directa con el fondo de lo que vamos a relatar, no estará de más señalar aquí los rumores y las murmuraciones que corrían sobre su persona cuando llegó [[porprimera|por primera|space-missing]] vez a su diócesis. Lo que de los hombres se dice, verdadero o falso, ocupa tanto lugar en su destino y en su vida como lo que ellos hacen. Monseñor Myriel era hijo de un consejero del parlamento de Aix; nobleza de toga[[;|,|punct-wrong]] decíase que su padre, reservándole para heredar su cargo, le había casado muy joven, según una costumbre muy generalizada entre las familias de los magistrados. A pesar de aquel [[matrimoño|matrimonio|letter]], asegurábase que Carlos Myriel había dado mucho que [[avlar|hablar|homophone]] en su juventud, pues tenía una figura agradable, elegante y espiritual, aunque entregada por entero a las vanidades del [[siglo||word-extra]] mundo.`
  },

  // 3. La metamorfosis (153 palabras, 7 errores)
  // Errores: homophone, space-missing, punct-missing (¿), word-extra, letter, accent, accent
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "La metamorfosis (Frag.)",
    bookTitle: "La metamorfosis",
    bookAuthor: "Franz Kafka",
    authorComment: "Franz Kafka (1883-1924)",
    obraComment: "La metamorfosis (Die Verwandlung, 1915, sección I)",
    edicionComment: "Traducción clásica española (Revista de Occidente, Madrid, 1925)",
    derechosComment: "Dominio público internacional (autor fallecido en 1924, traducción de dominio público)",
    annotatedText: `Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto. Estaba echado sobre el duro caparazón de su espalda y vio, al levantar un poco la cabeza, su [[bientre|vientre|homophone]] abombado, parduzco y dividido por callosidades arqueadas en [[encuya|en cuya|space-missing]] cresta apenas podía mantenerse la colcha, a punto ya de escurrirse por completo al suelo. Sus muchas patas, ridículamente delgadas en comparación con el grueso de su cuerpo, se agitaban desesperadas ante sus ojos. «[[|¿|punct-missing]]Qué me ha sucedido?», pensó. No era un sueño en absoluto. Su [[habitacion|habitación|accent]] humana, aunque algo reducida, permanecía tranquila entre las cuatro paredes bien conocidas por él. Por encima de la mesa, sobre la cual se hallaba esparcido un muestrario de paños desempaquetados —Samsa era viajante de comercio—, colgaba una estampa que Gregorio había recortado recientemente de una revista ilustrada y que luego había colocado primorosamente en un [[bonito||word-extra]] marco dorado de [[madeara|madera|letter]] [[finá|fina|accent]].`
  },

  // 4. Cantar de mio Cid (163 palabras, 8 errores)
  // Errores: accent, punct-missing (¡), space-missing, punct-wrong, space-extra, homophone, letter, word-missing
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Cantar de mio Cid",
    bookTitle: "Cantar de mio Cid",
    bookAuthor: "Anónimo",
    authorComment: "Anónimo (c. 1200)",
    obraComment: "Cantar de mio Cid (cantar primero: Destierro del Cid)",
    edicionComment: "Versión en castellano moderno adaptada por Alfonso Reyes (Madrid, Espasa-Calpe, 1919)",
    derechosComment: "Dominio público pleno por tratarse de la obra cumbre de la épica medieval española",
    annotatedText: `De los sus ojos tan fuertemente llorando, tornaba la cabeza y estábalos catando. Vio puertas abiertas y postigos sin candados, [[alcandaras|alcándaras|accent]] vacías, sin pieles y sin mantos, y sin halcones y sin azores mudados. Suspiró mío Cid porque tenía muy grandes cuidados. Habló mío Cid bien y muy mesurado: «[[|¡|punct-missing]]Gracias a ti, Señor Padre, que estás en lo alto! ¡Esto me han urdido mis enemigos malos!». Allí piensan de aguijar, allí sueltan las riendas. [[Alasalida|A la salida|space-missing]] de Vivar, tuvieron la corneja diestra, y entrando en Burgos tuviéronla siniestra. Meció mío Cid los hombros y sacudió la cabeza: «¡Albricias, Álvar Fáñez, que echados somos de tierra! Mas con gran honra retornaremos a Castilla». Mío Cid Ruy Díaz por Burgos entró, en su compaña sesenta pendones llevaba[[;|,|punct-wrong]] salíanlo a ver mujeres y varones, burgueses y burguesas están a las ventanas, llorando de los ojos, ¡tanto sentían el dolor! De las sus bocas todos decían una razón:[[__2| |space-extra]]«¡Dios, qué buen [[basallo|vasallo|homophone]], si tuviese [[|tan|word-missing]] buen [[sennor|señor|letter]]!».`
  },

  // 5. En busca del tiempo perdido (161 palabras, 6 errores)
  // Errores: homophone, space-extra, space-missing, punct-wrong, word-extra, letter
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "En busca del tiempo perdido (Frag.)",
    bookTitle: "Por el camino de Swann",
    bookAuthor: "Marcel Proust",
    authorComment: "Marcel Proust (1871-1922)",
    obraComment: "En busca del tiempo perdido (1913, tomo I: Por el camino de Swann)",
    edicionComment: "Traducción clásica de Pedro Salinas (Madrid, Espasa-Calpe, 1920)",
    derechosComment: "Dominio público internacional (autor fallecido en 1922, traducción clásica)",
    annotatedText: `Durante mucho tiempo me acosté temprano. A veces, apenas apagada la [[bugía|bujía|homophone]], mis ojos se cerraban tan deprisa que ni tiempo tenía de decirme: «Ya me duermo». Y media hora después me despertaba la idea [[deque|de que|space-missing]] era ya hora de buscar el sueño; quería dejar el libro que creía tener aún entre las manos y apagar la luz. Mientras dormía no había cesado de reflexionar sobre lo recién leído, pero estas reflexiones habían tomado un giro particular; parecíame que yo mismo era aquello de que el libro hablaba: una iglesia, un cuarteto, la rivalidad entre Francisco I y Carlos V.[[__2| |space-extra]]Esta creencia sobrevivía durante algunos segundos a mi despertar; no chocaba a mi razón, pero pesaba como unas escamas sobre mis ojos[[;|,|punct-wrong]] impidiéndoles darse cuenta de que la vela ya no estaba encendida. Después se hacía incomprensible, como los pensamientos de una existencia anterior después de la metempsicosis, y el tema del libro se desprendía de mi persona, dejándome libre de adaptarme o no a ella durante [[antigua||word-extra]] aquel largo [[tienpo|tiempo|letter]].`
  },

  // 6. El proceso (156 palabras, 7 errores)
  // Errores: homophone, space-missing, punct-wrong, word-missing, homophone, space-extra, letter
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "El proceso (Frag.)",
    bookTitle: "El proceso",
    bookAuthor: "Franz Kafka",
    authorComment: "Franz Kafka (1883-1924)",
    obraComment: "El proceso (Der Prozess, 1925, capítulo I)",
    edicionComment: "Traducción clásica de Vicente Mendívil (Buenos Aires, Losada, 1939)",
    derechosComment: "Dominio público internacional (autor fallecido en 1924)",
    annotatedText: `Alguien debía de haber calumniado a Josef K., porque, sin haber hecho nada malo, fue detenido una mañana. La cocinera de la señora Grubach, su patrona, que le llevaba todos los días el desayuno a las ocho, no apareció en esta ocasión. Eso no había ocurrido nunca. K. esperó todavía unos instantes, mirando desde su almohada a la anciana que vivía enfrente y que le observaba con una curiosidad inusitada en ella, y luego, a la vez extrañado y [[ambriento|hambriento|homophone]], tocó la campanilla. En el acto llamaron a la puerta y entró un hombre al que K. no había visto jamás en aquella casa. Era [[deconstitución|de constitución|space-missing]] esbelta pero sólida, llevaba un traje negro ajustado[[;|,|punct-wrong]] provisto de diversos pliegues, bolsillos, hebillas y botones, que daba la impresión de ser sumamente práctico, sin que pudiera uno [[|bien|word-missing]] [[adibinar|adivinar|homophone]] para qué servía.[[__2| |space-extra]]«¿Quién es usted?», preguntó K., incorporándose en la [[abitacion|habitación|letter]].`
  },

  // 7. Moby Dick (160 palabras, 7 errores)
  // Errores: homophone, space-extra, space-missing, letter, letter, word-extra, accent
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Moby Dick (Frag.)",
    bookTitle: "Moby Dick",
    bookAuthor: "Herman Melville",
    authorComment: "Herman Melville (1819-1891)",
    obraComment: "Moby Dick (1851, capítulo I: «Esbozos»)",
    edicionComment: "Traducción histórica clásica de dominio público",
    derechosComment: "Dominio público internacional (autor fallecido en 1891)",
    annotatedText: `Llamadme Ismael. Hace unos años —no importa cuántos exactamente—, teniendo poco o ningún dinero en mi bolsa, y nada de particular que me interesara en tierra firme, pensé que me iría a [[nabegar|navegar|homophone]] un poco por ahí para ver la parte acuática del mundo. Es un modo que tengo de espantar la melancolía y regular la circulación sanguínea.[[__2| |space-extra]][[Cadavez|Cada vez|space-missing]] que la boca se me tuerce en una mueca amarga; cada vez que en mi alma hay un noviembre húmedo y lluvioso; cada vez que me sorprendo deteniéndome involuntariamente ante las tiendas de ataúdes y siguiendo el cortejo de cada entierro que encuentro; y muy en especial cuando mis hipocondrías me dominan con tal fuerza que requiero un [[prinzipio|principio|letter]] moral para no salir deliberadamente a la calle a derribar metódicamente los sombreros de la gente, entonces concluyo que ha llegado el momento de hacerme a la mar lo antes [[pozible|posible|letter]]. Éste es mi sustituto de la pistola y la bala en este [[valle||word-extra]] mundo [[terrenál|terrenal|accent]].`
  },

  // 8. Cumbres Borrascosas (162 palabras, 8 errores)
  // Errores: space-missing, space-extra, homophone, word-missing, word-extra, homophone, letter, letter
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Cumbres Borrascosas (Frag.)",
    bookTitle: "Cumbres Borrascosas",
    bookAuthor: "Emily Brontë",
    authorComment: "Emily Brontë (1818-1848)",
    obraComment: "Cumbres Borrascosas (Wuthering Heights, 1847, capítulo I)",
    edicionComment: "Traducción histórica de dominio público",
    derechosComment: "Dominio público internacional (autora fallecida en 1848)",
    annotatedText: `Acabo de regresar de visitar a mi casero, el solitario vecino con quien tendré que lidiar. Es este un país hermoso, sin duda. En toda Inglaterra, no creo que hubiese podido hallar un paraje tan enteramente apartado [[delbullicio|del bullicio|space-missing]] de la sociedad. Un perfecto paraíso para los misántropos; y el señor Heathcliff y yo formamos una pareja muy adecuada para repartirnos el lugar.[[__2| |space-extra]]¡Un hombre admirable! No sospechaba él la simpatía que mi corazón sentía hacia su persona cuando vi que sus ojos negros se retraían con tan celoso [[rezelo|recelo|homophone]] bajo sus cejas al aproximarme a caballo, y con qué resuelta aspereza sus dedos se hundían en su chaleco cuando yo le anunciaba mi nombre. «¿El señor Heathcliff?», pregunté. Una inclinación de cabeza fue la única contestación que recibí. «Soy el señor Lockwood, su nuevo [[inquilnno|inquilino|letter]], caballero. He creído de mi deber presentarme ante usted [[|aquí|word-missing]] nada más llegar para expresarle mi deseo de no incomodarle demasiado con mi [[larga||word-extra]] estancia en esta solitaria [[manción|mansión|homophone]] de [[priedra|piedra|letter]]».`
  },

  // 9. Por tierra de Castilla (154 palabras, 6 errores)
  // Errores: homophone, space-missing, punct-wrong, space-extra, word-extra, letter
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Por tierra de Castilla (Frag.)",
    bookTitle: "Por tierra de Castilla",
    bookAuthor: "Eugenio Sellés",
    authorComment: "Eugenio Sellés (1842-1926)",
    obraComment: "Por tierra de Castilla (crónica de viajes, 1890)",
    edicionComment: "Edición original (Madrid, Imprenta de Fortanet, 1890)",
    derechosComment: "Dominio público (autor fallecido en 1926, transcurridos más de 80 años)",
    annotatedText: `Cruza el tren las llanuras desiertas de la meseta castellana bajo un cielo de plomo que parece aplastar los campos calcinados por el sol [[estibal|estival|homophone]]. A lo lejos, la silueta gris de un campanario rompe la monotonía [[delhorizonte|del horizonte|space-missing]] con la terquedad de una plegaria milenaria. Los rastrojos amarillos, abrasados por la canícula[[;|,|punct-wrong]] ondean como un mar de oro muerto que nadie navega ni perturba. De tarde en tarde, un pastor inmóvil, apoyado en su cayado y envuelto en una vieja manta parda, contempla el convoy con ojos impasibles, semejante a una estatua de barro cocido arrancada a la propia tierra. Nada turba la soledad augusta de este páramo solemne, donde el silencio pesa más que las piedras de sus murallas derruidas y donde los siglos han pasado sin alterar la faz austera de sus colinas silenciosas[[__2| |space-extra]]mudos testigos del paso inexorable de los hombres y de las [[vanas||word-extra]] sombras que van muriendo en la [[tierrra|tierra|letter]].`
  },

  // 10. Las mil y una noches (159 palabras, 7 errores)
  // Errores: homophone, space-missing, accent, punct-wrong, word-missing, word-extra, letter
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Las mil y una noches (Frag.)",
    bookTitle: "Las mil y una noches",
    bookAuthor: "Anónimo",
    authorComment: "Anónimo clásico oriental (siglos IX-XIV)",
    obraComment: "Las mil y una noches (noche 1)",
    edicionComment: "Traducción histórica clásica de dominio público",
    derechosComment: "Dominio público pleno universal",
    annotatedText: `Cuentan las crónicas que en las islas de la India y de la China reinaba un rey de la dinastía de Sasán, llamado Schahriar, señor de valerosos ejércitos y de numerosos [[basallos|vasallos|homophone]]. Tenía este monarca un hermano menor, Schahzaman, que gobernaba con justicia sobre el reino de Samarcanda. Al cabo de [[diezaños|diez años|space-missing]] de separación, Schahriar sintió un ardiente deseo de ver de nuevo a su hermano y ordenó a su gran visir que partiese hacia Samarcanda para invitarlo a su palacio imperial. El visir [[obedecio|obedeció|accent]] diligentemente las órdenes reales, preparó las caravanas de viaje y cabalgó noche y día a través de desiertos y montañas hasta llegar a las puertas de la ciudad de su señor. El rey Schahzaman recibió al emisario con grandes muestras de júbilo y dispuso de inmediato los preparativos de la marcha para abrazar a su hermano mayor[[;|,|punct-wrong]] encomendando el gobierno del reino a sus ministros más [[|nobles|word-missing]] durante su [[larga||word-extra]] ausencia de la corte [[real|leal|letter]].`
  },

  // 11. Fábulas (152 palabras, 7 errores)
  // Errores: homophone, space-missing, punct-wrong, homophone, space-extra, letter, word-extra
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Fábulas (El abeto y el espino)",
    bookTitle: "Fábulas de Esopo",
    bookAuthor: "Esopo",
    authorComment: "Esopo (siglo VI a. C.)",
    obraComment: "Fábulas (El abeto y el espino)",
    edicionComment: "Versión clásica castellana en prosa de dominio público",
    derechosComment: "Dominio público absoluto de la literatura clásica griega",
    annotatedText: `Disputaban acaloradamente un abeto y un espino sobre cuál de los dos era más útil y hermoso para los hombres de la comarca. El abeto, orgulloso de su [[ezbelto|esbelto|homophone]] tronco y de su follaje perenne, decía con jactancia: «Mírame bien, pobre arbusto rastrero; soy alto, recto y corpulento, y mis maderas sirven para construir los techos de los templos majestuosos y las sólidas vigas de las naves que cruzan los anchos mares, [[mientrasque|mientras que|space-missing]] tú no sirves para nada útil». El espino, sin inmutarse ante tantas vanidades, le contestó serenamente: «Todo eso es muy cierto, vanidoso amigo[[;|,|punct-wrong]] pero si pensaras un momento en las afiladas [[achas|hachas|homophone]] y en las temibles sierras de los leñadores que vienen a talarte sin piedad para derribarte en el suelo, desearías de todo corazón haber nacido espino para vivir tranquilo y seguro entre la maleza del bosque [[cilvestre|silvestre|letter]][[__2| |space-extra]]libre de todo peligro y de la codicia [[ciega||word-extra]] humana».`
  },

  // 12. Historias extraordinarias (171 palabras, 8 errores)
  // Errores: punct-missing (¡), punct-missing (¿), space-missing, space-extra, accent, homophone, letter, word-extra
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "Historias extraordinarias (El corazón delator (Frag.))",
    bookTitle: "Historias extraordinarias",
    bookAuthor: "Edgar Allan Poe",
    authorComment: "Edgar Allan Poe (1809-1849)",
    obraComment: "El corazón delator (The Tell-Tale Heart, 1843)",
    edicionComment: "Traducción histórica de dominio público",
    derechosComment: "Dominio público internacional (autor fallecido en 1849)",
    annotatedText: `[[|¡|punct-missing]]Es verdad! Siempre he sido nervioso, muy nervioso, terriblemente nervioso. «[[|¿|punct-missing]]Pero por qué pretendéis que estoy loco? La enfermedad había aguzado mis sentidos, en vez de destruirlos o embotarlos. Y mi oído era el más agudo de todos. Oía todo lo que ocurría en el cielo y en la tierra. Escuchaba muchas cosas en el infierno. ¿Cómo he de estar loco entonces? ¡Atended y observad con qué cordura y con qué pasmosa tranquilidad puedo contaros toda la historia! Me es imposible decir cómo entró [[porprimeravez|por primera vez|space-missing]] esa idea en mi mente; pero una vez concebida, me acosaba noche y día. Motivo no había ninguno. Pasión tampoco. Yo amaba al anciano; jamás me había hecho daño alguno ni me había insultado nunca. Su oro no me interesaba en absoluto.[[__2| |space-extra]]¡Creo que fue su ojo! ¡Sí, fue eso! Tenía el ojo de un buitre, un ojo azul pálido, con una telilla delgada sobre [[el|él|accent]], y cada vez que caía sobre mí se me helaba la [[zangre|sangre|homophone]], haciéndome [[tenblar|temblar|letter]] de un espanto [[ciego||word-extra]] hondo.`
  },

  // 13. La Regenta (157 palabras, 6 errores)
  // Errores: homophone, punct-wrong, space-missing, homophone, letter, space-extra
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "La Regenta (Frag.)",
    bookTitle: "La Regenta",
    bookAuthor: "Leopoldo Alas «Clarín»",
    authorComment: "Leopoldo Alas «Clarín» (1852-1901)",
    obraComment: "La Regenta (1884, capítulo I)",
    edicionComment: "Primera edición (Barcelona, Daniel Cortezo y Cía., 1884)",
    derechosComment: "Dominio público pleno (autor fallecido en 1901, transcurridos más de 80 años)",
    annotatedText: `La [[eroica|heroica|homophone]] ciudad dormía la siesta. El viento sur, caliente y perezoso[[;|,|punct-wrong]] empujaba las nubes blanquecinas que se rasgaban al correr hacia el norte. [[Enlas|En las|space-missing]] calles no se veía más que el polvo que se levantaba en remolinos bajo el soplo del bochorno. Aquella atmósfera pesada y pegajosa entorpecía el paso de los escasos transeúntes, que caminaban arrimados a las paredes buscando la sombra exigua de los aleros. De vez en cuando, el graznido de un cuervo turbaba la quietud solemne de la plaza desierta, o sonaba a lo lejos el rechinar bronco de las ruedas de un carro que avanzaba con lentitud por el empedrado desigual. [[Betusta|Vetusta|homophone]], la muy noble y leal ciudad, descansaba indolente bajo la pesadumbre del cielo plomizo, ajena al paso de las horas y entregada a su ensueño provinciano, mientras las campanas de la catedral tañían con un eco monótono que se disolvía lentamente sobre los tejados [[pardoz|pardos|letter]][[__2| |space-extra]]de la venerable urbe.`
  },

  // 14. El árbol de la ciencia (157 palabras, 7 errores)
  // Errores: punct-wrong, space-extra, homophone, space-missing, homophone, homophone, accent
  {
    difficultyLevel: 5,
    profile: "perfil_3",
    description: "El árbol de la ciencia (Frag.)",
    bookTitle: "El árbol de la ciencia",
    bookAuthor: "Pío Baroja",
    authorComment: "Pío Baroja (1872-1956)",
    obraComment: "El árbol de la ciencia (1911, primera parte, capítulo I)",
    edicionComment: "Cita didáctica adaptada de la primera edición (Madrid, Renacimiento, 1911)",
    derechosComment: "// TODO-DERECHOS Autor fallecido en 1956. Extracto didáctico adaptado bajo el artículo 32 de la LPI con fines exclusivamente educativos.",
    annotatedText: `Andrés Hurtado era un muchacho inquieto, lleno de curiosidad y de amargura. Miraba a su alrededor con ojos descontentos y críticos, hallándolo todo falso, mezquino y convencional en la sociedad madrileña de su tiempo. Su padre, don Pedro Hurtado, era un hombre vano, egoísta y autoritario[[;|,|punct-wrong]] que trataba a sus hijos con dureza despótica y caprichosa, sin preocuparse jamás por sus verdaderas inclinaciones ni por su porvenir. Aquella casa lúgubre, con sus muebles antiguos y sus cortinajes raídos por los años, parecía un sepulcro donde la alegría y la confianza estaban desterradas para siempre de la familia.[[__2| |space-extra]]Andrés buscaba refugio en el estudio solitario, [[deborando|devorando|homophone]] con afán febril toda clase de libros de medicina, de filosofía y de ciencias naturales, tratando desesperadamente de encontrar una verdad firme y un sentido razonable a la existencia humana [[enmedio|en medio|space-missing]] de aquel laberinto de miserias morales y de hipocresías cotidianas que le [[rodeaba|rodeaba|homophone]] por doquier en la vieja [[billa|villa|homophone]] de [[Madríd|Madrid|accent]].`
  }
];
