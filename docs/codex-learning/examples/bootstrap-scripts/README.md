# Ejemplo bootstrap scripts

## Que hace cada script

`bootstrap.ts` imprime una secuencia segura de pasos sugeridos para preparar un proyecto. No ejecuta comandos automaticamente.

`check-env.ts` revisa variables de entorno minimas como `DATABASE_URL` y `AUTH_SECRET`.

`package.example.json` muestra scripts posibles para adaptar a un proyecto real.

## Como adaptarlo

Cambia variables requeridas, comandos y herramienta de tests segun tu stack. No sobrescribas `.env` existente y no corras migraciones contra produccion.
