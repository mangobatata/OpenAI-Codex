const requiredEnv = ["DATABASE_URL", "AUTH_SECRET"];

let hasError = false;

for (const name of requiredEnv) {
  if (!process.env[name]) {
    console.error(`Falta variable requerida: ${name}`);
    hasError = true;
  }
}

if (!hasError) {
  console.log("Variables minimas presentes.");
}

process.exitCode = hasError ? 1 : 0;
