# Ejemplo bootstrap scripts

## Objetivo

Preparar un worktree nuevo con pasos repetibles.

## Script conceptual

```ts
const steps = [
  "npm install",
  "cp .env.example .env",
  "npx prisma generate",
  "npm run typecheck",
  "npm test"
];

for (const step of steps) {
  console.log(`Ejecutar: ${step}`);
}
```

## Buenas practicas

- No sobrescribir `.env` existente.
- No correr migraciones en produccion.
- Documentar errores frecuentes.

