# OpenAI Codex Learning Hub

Una guia practica y progresiva para aprender a usar OpenAI Codex, ChatGPT Work y automatizaciones modernas desde cero, con enfoque profesional, seguro y aplicado a proyectos reales.

## Para que sirve este material

Este repositorio funciona como portada, indice y laboratorio de aprendizaje. Esta pensado para una persona principiante que usa Windows + WSL y quiere aprender Codex Desktop con buenos habitos: prompts claros, seguridad operativa, trabajo por fases, automatizaciones simuladas y fundamentos de programacion con TypeScript.

## Que vas a aprender

- Codex Desktop y trabajo con repositorios locales.
- Ventana de contexto, compactacion y continuidad entre sesiones.
- Prompts efectivos para programacion, debugging, documentacion y revision.
- Permisos, guardrails, sandbox, terminal y seguridad operativa.
- Uso de `AGENTS.md` como instrucciones del proyecto.
- Plugins, Skills, MCPs, Computer Use y automatizaciones.
- Worktrees para trabajo paralelo.
- Scripts de bootstrap para preparar entornos.
- Automatizaciones no-code/low-code con n8n.
- Fundamentos de DSA y patrones de resolucion de problemas con TypeScript.

## Ruta recomendada de estudio

### Nivel 1: Fundamentos de Codex

1. [Contexto y compactacion](docs/codex-learning/01-contexto-y-compactacion.md)
2. [Modo de voz y mejores prompts](docs/codex-learning/02-modo-voz-y-prompts.md)
3. [Permisos, guardrails y terminal](docs/codex-learning/03-permisos-guardrails-terminal.md)
4. [AGENTS.md e instrucciones del proyecto](docs/codex-learning/04-agents-md-instrucciones-proyecto.md)
5. [Cinco primitivas practicas](docs/codex-learning/05-cinco-primitivas-practicas.md)

### Nivel 2: Herramientas avanzadas

6. [Plugins y directorio de plugins](docs/codex-learning/06-plugins-directorio.md)
7. [Computer Use](docs/codex-learning/07-computer-use.md)
8. [Skills vs MCPs](docs/codex-learning/08-skills-vs-mcps.md)
9. [Subagentes](docs/codex-learning/09-subagentes.md)
10. [Cuando usar cada herramienta](docs/codex-learning/10-cuando-usar-cada-herramienta.md)

### Nivel 3: Automatizacion y trabajo profesional

11. [Automatizaciones en Codex](docs/codex-learning/11-automatizaciones-codex.md)
12. [Worktrees y trabajo paralelo](docs/codex-learning/12-worktrees-trabajo-paralelo.md)
13. [Entornos y scripts de bootstrap](docs/codex-learning/13-entornos-bootstrap.md)
14. [Seguridad, costos, tokens y uso responsable](docs/codex-learning/17-seguridad-costos-tokens-uso-responsable.md)

### Nivel 4: Casos practicos con n8n

15. [Agente de turnos con n8n](docs/codex-learning/14-caso-practico-n8n-agente-turnos.md)
16. [Marketing Team con n8n](docs/codex-learning/15-caso-practico-n8n-marketing-team.md)
17. [De n8n a SaaS](docs/codex-learning/16-de-n8n-a-saas.md)

### Nivel 5: DSA con TypeScript

18. [Introduccion a DSA con TypeScript](docs/codex-learning/26-dsa-typescript-introduccion.md)
19. [Roadmap DSA con TypeScript](docs/codex-learning/27-roadmap-dsa-typescript.md)
20. [Ejercicios DSA aplicados a negocios](docs/codex-learning/28-dsa-ejercicios-negocios.md)
21. [Proyecto DSA: mini inventario](docs/codex-learning/29-proyecto-dsa-mini-inventario.md)
22. [Patrones de resolucion de problemas](docs/codex-learning/30-dsa-patrones-resolucion-problemas.md)
23. [Frequency Counter Pattern](docs/codex-learning/31-dsa-frequency-counter-pattern.md)
24. [Anagram Challenge](docs/codex-learning/32-dsa-frequency-counter-anagram-challenge.md)
25. [Multiple Pointers Pattern](docs/codex-learning/33-dsa-multiple-pointers-pattern.md)
26. [Count Unique Values Challenge](docs/codex-learning/34-dsa-multiple-pointers-count-unique-values.md)
27. [Sliding Window Pattern](docs/codex-learning/35-dsa-sliding-window-pattern.md)
28. [Divide and Conquer Pattern](docs/codex-learning/36-dsa-divide-and-conquer-pattern.md)

## Casos practicos

### n8n: agente de turnos

Carpeta: [docs/codex-learning/examples/n8n-turnos](docs/codex-learning/examples/n8n-turnos/)

Incluye un workflow demo seguro para entender como conectar WhatsApp, n8n, IA, Google Calendar y Google Sheets sin usar credenciales reales ni enviar mensajes reales.

### n8n: Marketing Team IA

Carpeta: [docs/codex-learning/examples/n8n-marketing-team](docs/codex-learning/examples/n8n-marketing-team/)

Incluye un flujo simulado para generar ideas, calendario de contenido, briefs creativos y reportes basicos.

### DSA: mini inventario en TypeScript

Carpeta: [docs/codex-learning/examples/dsa-mini-inventory](docs/codex-learning/examples/dsa-mini-inventory/)

Ejemplo practico para aprender estructuras de datos, algoritmos y patrones usando un caso de inventario.

### AGENTS.md profesional

Carpeta: [docs/codex-learning/examples/agents-md-example](docs/codex-learning/examples/agents-md-example/)

Ejemplo de instrucciones de proyecto para guiar a Codex en un SaaS moderno.

### Scripts de bootstrap

Carpeta: [docs/codex-learning/examples/bootstrap-scripts](docs/codex-learning/examples/bootstrap-scripts/)

Ejemplos educativos para preparar entornos de trabajo de forma mas ordenada.

## Como usar este proyecto con Codex Desktop

Abri este proyecto desde ChatGPT Desktop seleccionando la carpeta:

```txt
/home/brite/repos/OpenAI-Codex
```

Despues podes pedir:

```txt
Lee el README principal y ayudame a estudiar el curso por etapas. Empeza por el modulo 01 y dame un ejercicio corto antes de pasar al siguiente.
```

Para practicar con bajo consumo de contexto:

```txt
Trabaja con alcance limitado. Lee solo el modulo que estoy estudiando y los ejemplos relacionados. Dame respuestas cortas, ejercicios concretos y resumen de continuidad al cerrar.
```

## Buenas practicas de seguridad

- No pegues claves API, tokens ni secretos en prompts.
- No subas `.env` ni datos reales.
- No apruebes comandos destructivos sin entenderlos.
- Revisa `git status` y `git diff` antes de aceptar cambios.
- Usa ramas o worktrees para tareas grandes.
- No conectes WhatsApp, Calendar, Sheets, Ads o pagos reales sin aprobacion humana.
- Mantene workflows n8n en modo demo hasta validar el flujo.

## Indice interno del curso

La guia completa vive en [docs/codex-learning/README.md](docs/codex-learning/README.md).
