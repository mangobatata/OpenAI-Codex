const steps = [
  "npm install",
  "cp .env.example .env",
  "npx prisma generate",
  "npm run typecheck",
  "npm test"
];

console.log("Bootstrap educativo. Revisa cada comando antes de ejecutarlo en un proyecto real.
");

for (const step of steps) {
  console.log(`Paso sugerido: ${step}`);
}
