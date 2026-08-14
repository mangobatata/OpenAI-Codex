# Cuando usar cada herramienta

## Objetivo de este modulo

Elegir la herramienta correcta para cada necesidad.

## Explicacion simple

Chat sirve para respuestas rapidas. Work sirve para entregables largos. Codex Desktop sirve para desarrollo con repositorios locales. Plugins conectan servicios. n8n automatiza flujos no-code/low-code.

## Matriz de decision

| Necesidad | Herramienta recomendada | Por que | Riesgo |
| --- | --- | --- | --- |
| Aprender un concepto | Chat normal | Rapido y conversacional | Bajo |
| Crear reporte largo | ChatGPT Work | Orientado a entregables | Medio |
| Modificar codigo | Codex Desktop | Lee repo y ejecuta tests | Medio |
| Usar terminal avanzada | Codex CLI | Flujo tecnico directo | Medio |
| Revisar UI | Computer Use | Interaccion visual | Medio |
| Conectar WhatsApp con Calendar | n8n | Workflow visual | Alto si es real |
| Automatizar tarea semanal | Automatizaciones | Recurrencia o monitoreo | Medio |
| Trabajar dos features | Worktrees | Aisla ramas | Medio |
| Revisar PR remoto | Plugin GitHub | Acceso a repo remoto | Medio |
| Consultar DB | MCP | Herramienta estructurada | Alto |

## Como se usa paso a paso

1. Define si queres aprender, crear, modificar o automatizar.
2. Evalua si hay cuentas externas.
3. Evalua riesgo de escritura.
4. Elige herramienta minima.
5. Verifica resultado.

## Buenas practicas

Usa la herramienta mas simple que resuelva la tarea. Para cuentas reales, empieza en modo lectura o sandbox.

## Errores comunes

Usar Computer Use para todo. Conectar plugins antes de definir permisos. Automatizar tareas sin revision.

## Prompt recomendado

```txt
Antes de actuar, recomendame la herramienta adecuada para esta tarea y explicame riesgos y permisos.
```

## Mini ejercicio

Clasifica diez tareas de tu semana con esta matriz.

## Checklist de comprension

- Se diferenciar Chat, Work y Codex.
- Se cuando usar n8n.
- Se evaluar riesgo por herramienta.

