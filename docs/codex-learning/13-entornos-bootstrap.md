# Entornos de worktree y scripts de bootstrap

## Objetivo de este modulo

Preparar un worktree nuevo de forma repetible.

## Explicacion simple

Bootstrap significa preparar el entorno: instalar dependencias, crear `.env`, generar Prisma, correr migraciones, typecheck, tests y dev server.

## Analogia cotidiana

Antes de cocinar, preparas mesa, ingredientes y utensilios.

## Comandos

```bash
npm install
cp .env.example .env
npx prisma generate
npm run typecheck
npm test
npm run dev
```

`npm install` instala paquetes. `cp` crea archivo de entorno local desde ejemplo. `prisma generate` prepara cliente Prisma. `typecheck` revisa tipos. `test` corre pruebas. `dev` levanta app local.

## Ejemplo TypeScript simple

```ts
const requiredEnv = ["DATABASE_URL", "AUTH_SECRET"];

for (const name of requiredEnv) {
  if (!process.env[name]) {
    console.error(`Falta ${name}`);
    process.exitCode = 1;
  }
}
```

## Como se usa paso a paso

1. Lee README y AGENTS.md.
2. Instala dependencias solo si hace falta.
3. Crea `.env` local sin secretos reales en git.
4. Ejecuta verificaciones.
5. Documenta errores.

## Buenas practicas

Automatiza lo repetible. Mantene scripts idempotentes. No sobrescribas `.env` real.

## Errores comunes

Instalar sin mirar lockfile. Copiar secretos. Correr migraciones contra produccion.

## Prompt recomendado

```txt
Ayudame a preparar este worktree. Primero lee README/AGENTS.md, luego proponeme comandos de bootstrap y no ejecutes nada que toque servicios externos sin confirmacion.
```

## Mini ejercicio

Escribi una lista de variables requeridas para tu proyecto.

## Checklist de comprension

- Se que es bootstrap.
- Se preparar `.env`.
- Se evitar tocar produccion.

