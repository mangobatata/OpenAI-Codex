# AGENTS.md e instrucciones del proyecto

## Objetivo de este modulo

Aprender a escribir instrucciones persistentes para que Codex trabaje siguiendo las reglas del proyecto.

## Explicacion simple

`AGENTS.md` es un archivo de instrucciones para agentes en un repositorio. Puede explicar arquitectura, comandos, estilo, testing, seguridad y limites. Codex puede usarlo como guia cuando trabaja dentro del proyecto.

## Analogia cotidiana

Es el manual interno para cualquier nuevo miembro del equipo.

## Conceptos clave

| Seccion | Para que sirve |
| --- | --- |
| Arquitectura | Evita cambios fuera de patron |
| Testing | Define verificaciones |
| UI | Mantiene consistencia |
| Seguridad | Evita secretos y acciones riesgosas |

## Ejemplo practico

```md
# AGENTS.md

## Proyecto
SaaS multi-tenant con Nuxt, Node.js, TypeScript y Prisma.

## Reglas
- No mezclar datos entre tenants.
- Validar permisos del usuario en cada accion sensible.
- No tocar billing sin tests.
- Usar TypeScript estricto.

## Comandos
- npm run typecheck
- npm test
- npm run build

## UI
- Dashboard denso, claro y consistente.
- No crear landing pages si la tarea pide herramienta interna.

## Seguridad
- Nunca escribir secretos en el repo.
- Revisar queries Prisma por `tenantId`.

## Commits
- Usar mensajes claros: feat:, fix:, docs:, test:.
```

## Como se usa paso a paso

1. Crea `AGENTS.md` en la raiz.
2. Agrega comandos reales.
3. Explica carpetas importantes.
4. Define reglas de seguridad.
5. Actualizalo cuando cambie el proyecto.

## Buenas practicas

Mantenelo corto y accionable. Inclui reglas verificables, no preferencias vagas.

## Errores comunes

Poner instrucciones contradictorias. Incluir secretos. No actualizar comandos obsoletos.

## Prompt recomendado

```txt
Lee AGENTS.md antes de modificar codigo y segu sus reglas. Si alguna instruccion contradice la tarea, avisame antes de editar.
```

## Mini ejercicio

Escribi cinco reglas para un proyecto e-commerce multi-tenant.

## Checklist de comprension

- Se para que sirve AGENTS.md.
- Se que incluir y que evitar.
- Puedo crear reglas profesionales.

