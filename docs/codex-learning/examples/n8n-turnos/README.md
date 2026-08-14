# Workflow demo n8n: agente de turnos

## Que ensena

Este workflow muestra un agente de turnos completamente simulado: recibe un mensaje falso de WhatsApp, genera una interpretacion IA falsa, evalua datos faltantes, simula disponibilidad de Calendar, simula una fila de Sheets y prepara una respuesta final.

## Como importarlo

1. Abri n8n en un ambiente de prueba.
2. Importa `workflow-turnos-demo.json`.
3. Ejecuta con `Manual Trigger`.
4. Revisa cada nodo de izquierda a derecha.

## Nodos usados

Solo usa `Manual Trigger`, `Set` e `IF`. No usa credenciales, WhatsApp real, Calendar real ni Sheets real.

## Como leer cada paso

- El primer `Set` contiene el mensaje simulado.
- El segundo `Set` representa la salida de IA.
- El primer `IF` decide si faltan datos.
- Los siguientes `Set` simulan Calendar, evento, Sheets y respuesta.

## Para produccion

Reemplazar datos simulados por proveedor WhatsApp Business API, nodo OpenAI real, Google Calendar y Google Sheets. Antes de activar, agregar validaciones, logs, manejo de errores, rate limits y aprobacion humana para cambios sensibles.

## Aprobacion humana

Requerida antes de enviar mensajes reales, crear eventos reales, guardar datos personales o cambiar horarios.
