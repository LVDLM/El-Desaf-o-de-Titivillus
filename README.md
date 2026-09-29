# El Desafío de Titivillus

**El Desafío de Titivillus** es un juego interactivo de «encuentra las diferencias» textuales ambientado en un *scriptorium* medieval. En la tradición monástica, Titivillus era el demonio menor encargado de recolectar en un saco las sílabas omitidas, las letras trastocadas y las erratas cometidas por los amanuenses al transcribir textos sagrados y literarios.

En este desafío, el jugador asume el papel de un escriba corrector: frente a un texto literario canónico (el manuscrito modelo a la izquierda), debe examinar minuciosamente una copia corrupta por las artimañas del demonio (a la derecha) y señalar todas las erratas ortográficas, tipográficas, de espaciado y de puntuación antes de que se agote el tiempo del reloj de arena.

---

## 🎯 Objetivo Didáctico

El juego está diseñado con una premisa pedagógica clara y rigurosa: **el aprendizaje ortográfico mediante memoria visual e imitación textual**.

- **Sin teoría abstracta ni normas memorísticas**: No se presentan explicaciones gramaticales, definiciones de reglas normativas de acentuación ni tecnicismos lingüísticos.
- **Fijación por memoria visual**: Al cotejar directamente el modelo impecable con la copia errónea, el cerebro del jugador fija los patrones grafémicos correctos, la distribución de espacios y la colocación exacta de los signos auxiliares del español actual.
- **Aprendizaje por repetición e imitación**: Tras superar o fallar cada pergamino, el jugador repasa en el *Cuaderno de Titivillus* las formas correctas contextualizadas, reforzando la huella visual.
- **Textos clásicos y citas literarias**: Los pasajes proceden de obras históricas y universales de la literatura hispánica e internacional, en su gran mayoría en dominio público o seleccionadas en breves extractos con fines exclusivamente didácticos e instructivos de cotejo ortográfico (art. 32 LPI), indicando la autoría y fuente bibliográfica en cada manuscrito.

---

## 🕹️ Modos de Juego y Características

1. **Modo Corrector (Principal)**:
   - Vista dividida: Manuscrito original a la izquierda y copia corrupta interactiva a la derecha.
   - Clic interactivo sobre palabras erróneas, signos de puntuación incorrectos y huecos táctiles entre palabras.
   - Retroalimentación accesible: Doble subrayado, color de tinta bermellón y distintivo gráfico `✓` para aciertos; subrayado ondulado y vibración para fallos.
   - Control de tamaño de tipografía en el encabezado (`A-`, `A`, `A+`) para máxima legibilidad.
2. **Modo Escriba (Desbloqueable)**:
   - Transcripción manual directa desde el original para ejercitar la precisión ortográfica y la mecanografía.
3. **Modo Práctica (Sin Tiempo)**:
   - Opción seleccionable desde el menú principal para entrenar con calma, sin presión de cronómetro ni registro en tablas de clasificación.
4. **Cuaderno de Titivillus**:
   - Registro persistente en el navegador de las formas dudosas u omitidas por el jugador en niveles anteriores, utilizándolas para priorizar la aparición de manuscritos pertinentes en sesiones posteriores.

---

## 📐 Estructura de Niveles y Perfiles de Dificultad

La progresión de dificultad no se rige por un valor arbitrario, sino por **perfiles lingüísticos y tipográficos**:

| Perfil | Niveles | Extensión orientativa | Errores | Tipología de erratas |
| :--- | :--- | :--- | :--- | :--- |
| **Perfil 1** | 1 - 3 | 50 - 80 palabras | 3 - 4 | Errores muy visibles: letras cambiadas o duplicadas, tildes ausentes en palabras frecuentes. |
| **Perfil 2** | 4 - 6 | 80 - 130 palabras | 4 - 6 | Homófonos ortográficos (b/v, h, g/j, c/z, ll/y) y puntuación básica (coma omitida, signo indebido). |
| **Perfil 3** | 7 - 9 | 130 - 200 palabras | 6 - 8 | Errores de espaciado (palabras unidas, dobles espacios), omisión de signos de apertura (`¿`, `¡`), adición u omisión de palabras. |
| **Perfil 4** | 10+ | 180 - 250 palabras | 8 - 10 | Mezcla completa de todas las categorías con distractores léxicos (términos cultos o infrecuentes pero correctos según la RAE 2010). |

---

## 🏆 Configuración del Ranking Persistente (Supabase)

El juego incluye soporte opcional para una tabla de clasificación global conectada a **Supabase**. Si no se proporcionan credenciales en variables de entorno (`VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`), el juego opera automáticamente en modo *mock* local sin interrupciones.

En el cliente, `services/supabaseClient.ts` valida y restringe estrictamente que las puntuaciones enviadas se encuentren dentro del rango admisible (`0 < score <= 72000`).

Para configurar la base de datos en Supabase con máxima seguridad en el backend, ejecuta el siguiente script SQL en el **SQL Editor** del panel de control de Supabase:

```sql
-- 1. Creación de la tabla de clasificación
CREATE TABLE IF NOT EXISTS public.leaderboard (
  id BIGSERIAL PRIMARY KEY,
  username TEXT NOT NULL CHECK (char_length(trim(username)) > 0 AND char_length(username) <= 30),
  score INTEGER NOT NULL CHECK (score > 0 AND score <= 72000),
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar Seguridad a Nivel de Fila (Row Level Security - RLS)
ALTER TABLE public.leaderboard ENABLE ROW LEVEL SECURITY;

-- 3. Política de lectura pública (cualquier visitante puede consultar el ranking)
CREATE POLICY "Permitir lectura publica del ranking"
  ON public.leaderboard
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- 4. Política de solo inserción (cualquier visitante puede registrar su puntuación)
--    Enfuerza la validación estricta del rango de puntuación en el servidor
CREATE POLICY "Permitir solo insercion publica"
  ON public.leaderboard
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    score > 0 AND score <= 72000 AND
    char_length(trim(username)) > 0 AND char_length(username) <= 30
  );

-- NOTA DE SEGURIDAD:
-- Al no crear ninguna política para UPDATE ni DELETE, Supabase bloquea por defecto
-- toda modificación o eliminación de puntuaciones por parte de clientes anónimos o autenticados.

-- 5. Índice optimizado para la consulta del Top 10
CREATE INDEX IF NOT EXISTS idx_leaderboard_score_desc
  ON public.leaderboard (score DESC, created_at ASC);
```

---

## 🛠️ Cómo Añadir Nuevos Niveles

Todos los manuscritos del juego residen en el directorio `data/levels/`:
- `difficulty1.ts` (Perfil 1: niveles 1-2)
- `difficulty2.ts` (Perfil 1/2: nivel 2)
- `difficulty3.ts` (Perfil 2: nivel 3)
- `difficulty4.ts` (Perfil 2: nivel 4)
- `difficulty5.ts` (Perfil 3: niveles 5-9)
- `difficulty6.ts` (Perfil 4: nivel 10+)
- `tutorial.ts` (Nivel 0 de instrucción)

La fuente canónica única consumida por el motor de juego es `services/staticLevelService.ts`.

### Constructores de Tokens (`utils/levelHelpers.ts`)

Para mantener la coherencia y exactitud del recuento de errores, utiliza los siguientes constructores:

```typescript
import { w, p, sp, s } from "../../utils/levelHelpers";

// 1. Palabra normal correcta:
w("palabra")

// 2. Palabra con errata:
w("erronea", "correcta", "letter") // o "homophone", "accent", etc.

// 3. Palabra correcta que actúa como distractor léxico:
w("hierático", undefined, undefined, true)

// 4. Signo de puntuación correcto:
p(",")

// 5. Signo de puntuación con error (signo incorrecto o signo ausente):
p("!", ".", "punct-wrong")
p("", "¿", "punct-missing")

// 6. Hueco de espaciado interactivo con error:
sp(true, " ", "space-extra", "  ") // Doble espacio
sp(true, "", "space-extra", " ")   // Espacio indebido antes de coma
sp(true, "palabra", "word-missing") // Palabra omitida

// 7. Espacio normal entre palabras:
s()
```

### Plantilla de Nivel (`LevelData`)

```typescript
{
  difficultyLevel: 1,
  profile: "perfil_1",
  description: "Título del fragmento",
  totalErrors: 3, // Debe coincidir EXACTAMENTE con el número de tokens con error
  timeLimit: 60,  // Tiempo base en segundos (o calculado proporcionalmente)
  originalText: "Texto original íntegro y correcto.",
  bookTitle: "Título de la Obra",
  bookAuthor: "Nombre del Autor",
  tokens: [
    w("Texto"), s(),
    w("orijinal", "original", "homophone"), s(), // Error 1
    w("íntegro"), s(),
    w("y"), s(),
    w("correcto"), p(".")
  ]
}
```

---

## 🚀 Cómo Ejecutar la Aplicación

### Requisitos previos
- **Node.js** (versión 18 o superior recomendada)
- Gestor de paquetes **npm** o **bun**

### Pasos de ejecución

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   Visita `http://localhost:3000` en tu navegador web.

4. **Compilación de producción**:
   ```bash
   npm run build
   ```

*Nota: La aplicación es 100% autónoma y estática; no requiere configurar ninguna clave de API ni servicios externos para la experiencia de juego principal.*
