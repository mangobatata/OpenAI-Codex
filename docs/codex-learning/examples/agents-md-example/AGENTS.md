# AGENTS.md

## Proyecto

SaaS multi-tenant con Nuxt, Node.js, TypeScript, Prisma y dashboard operativo.

## Reglas de arquitectura

- Mantener separacion entre frontend, API, dominio y persistencia.
- Toda consulta de datos de cliente debe filtrar por `tenantId`.
- No duplicar logica de permisos en componentes UI.

## Reglas de testing

- Ejecutar `npm run typecheck` para cambios TypeScript.
- Ejecutar `npm test` cuando se toque logica de negocio.
- Agregar tests para reglas multi-tenant o permisos.

## Reglas de UI

- Dashboard claro, denso y escaneable.
- No crear landing pages para tareas internas.
- Mantener consistencia con componentes existentes.

## Reglas de seguridad

- No escribir secretos en el repo.
- No tocar billing, auth o permisos sin explicar riesgos.
- No usar datos reales en tests.

## Commits

- Usar prefijos como `feat:`, `fix:`, `docs:` y `test:`.

