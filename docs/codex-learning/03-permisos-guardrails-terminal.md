# Permisos, guardrails y bases de terminal

## Objetivo de este modulo

Usar la terminal con Codex sin romper el repositorio ni aprobar acciones riesgosas por inercia.

## Explicacion simple

Codex puede leer archivos, escribir archivos y ejecutar comandos segun permisos. El sandbox limita que puede tocar. Las aprobaciones existen para acciones fuera de permisos, con red, GUI o riesgo alto.

## Analogia cotidiana

Es como darle llaves a alguien. Leer es mirar una habitacion. Escribir es mover muebles. Ejecutar comandos puede encender maquinas.

## Conceptos clave

| Accion | Significado | Cuidado |
| --- | --- | --- |
| Leer | Ver archivos y salida de comandos | Datos sensibles |
| Escribir | Crear o modificar archivos | Cambios no deseados |
| Ejecutar | Correr herramientas | Efectos secundarios |
| Aprobar | Permitir algo restringido | Entender antes |

## Tabla de comandos

| Comando | Para que sirve | Riesgo | Cuando usar |
| --- | --- | --- | --- |
| `pwd` | Muestra carpeta actual | Bajo | Antes de operar |
| `ls` | Lista archivos | Bajo | Explorar |
| `git status` | Estado del repo | Bajo | Antes y despues |
| `git diff` | Ver cambios | Bajo | Revisar edits |
| `npm install` | Instala dependencias | Medio | Solo si hace falta |
| `npm run dev` | Levanta servidor | Medio | Probar app |
| `npm run build` | Compila | Bajo/medio | Verificar |
| `npm test` | Ejecuta tests | Bajo/medio | Validar cambios |
| `npm run typecheck` | Revisa tipos | Bajo | TypeScript |

## Comandos peligrosos

```bash
rm -rf
git reset --hard
git clean -fd
git checkout -- .
```

No los apruebes si no sabes exactamente que borran o revierten. Pueden eliminar archivos o descartar trabajo no guardado.

## Como se usa paso a paso

1. Pedi `git status`.
2. Pedi inspeccion de archivos.
3. Aprobacion solo si entendes proposito.
4. Verifica diff.
5. Ejecuta tests.

## Buenas practicas

No instales dependencias sin motivo. No ejecutes scripts desconocidos sin leerlos. No guardes secretos en prompts.

## Errores comunes

Aprobar comandos destructivos para "limpiar". Ignorar cambios existentes del usuario.

## Prompt recomendado

```txt
Antes de ejecutar comandos que escriban, instalen dependencias o borren archivos, explicame el riesgo y espera mi confirmacion.
```

## Mini ejercicio

Clasifica cinco comandos de tu proyecto en bajo, medio o alto riesgo.

## Checklist de comprension

- Se leer `git status`.
- Reconozco comandos destructivos.
- Entiendo sandbox y aprobaciones.

