# Herramientas de Desarrollo y Generación de Niveles (Tools)

Este directorio contiene utilidades y scripts auxiliares fuera de la compilación de la aplicación:

- **newPool5Specs.ts / newPool6Specs.ts**: Especificaciones de textos anotados con marcado de erratas, signos ausentes (`punct-missing`), omisiones de palabras (`word-missing`) y distractores léxicos.
- **generateAllPools.ts / emitPools.ts**: Parsers y generadores de código TypeScript que compilan las anotaciones a arrays de `TextToken[]` con funciones auxiliares (`w`, `p`, `sp`, `s`).
- **runBuildAll.ts**: Auditoría y verificación contra `utils/levelValidator.ts`.

> **Nota:** La aplicación no ejecuta ningún generador durante la compilación (`npm run build`). Los archivos de niveles en `data/levels/` son la fuente canónica estática y autónoma.
