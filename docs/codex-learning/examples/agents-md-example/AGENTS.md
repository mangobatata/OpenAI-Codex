# AGENTS.md

## Proyecto

SaaS multi-tenant con Nuxt, Node.js, TypeScript, Prisma y dashboard operativo.

## Reglas de arquitectura

- Mantener separacion entre frontend, API, dominio y persistencia.
- Toda consulta de datos de cliente debe filtrar por `tenantId`.
- No duplicar logica de permisos en componentes UI.
- Validar inputs en el borde de la API.

## Reglas de testing

- Ejecutar `npm run typecheck` para cambios TypeScript.
- Ejecutar `npm test` cuando se toque logica de negocio.
- Agregar tests para reglas multi-tenant, permisos y billing.

## Reglas de UI

- Dashboard claro, denso y escaneable.
- No crear landing pages para tareas internas.
- Mantener consistencia con componentes existentes.
- Evitar estados vacios sin accion siguiente.

## Reglas de seguridad y permisos

- No escribir secretos en el repo.
- No subir `.env`.
- No tocar billing, auth o permisos sin explicar riesgos.
- No usar datos reales en tests.
- No ejecutar comandos destructivos sin aprobacion explicita.

## Git

- Mantener cambios pequenos y revisables.
- Revisar `git status` antes y despues.
- Usar prefijos como `feat:`, `fix:`, `docs:` y `test:`.
