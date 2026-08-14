# Caso practico n8n: Marketing Team con agentes IA

## Objetivo de este modulo

Disenar un equipo de marketing IA para negocio local o e-commerce usando n8n y revision humana.

## Explicacion simple

El flujo semanal lee objetivos, genera ideas, arma calendario, guarda en Sheets, crea eventos y avisa al equipo. No publica ni gasta dinero sin aprobacion.

## Analogia cotidiana

Es una reunion semanal de marketing convertida en workflow.

## Agentes conceptuales

| Agente | Tarea |
| --- | --- |
| Research Agent | Buscar ideas y tendencias |
| Strategy Agent | Organizar calendario |
| Copy Agent | Crear copies |
| Creative Brief Agent | Crear briefs visuales |
| Ads Analyst Agent | Leer metricas y sugerir mejoras |
| Calendar Agent | Organizar fechas |

## Flujo simple

1. Trigger semanal.
2. Leer nicho y objetivos desde Google Sheets.
3. Generar ideas de contenido.
4. Crear calendario semanal.
5. Guardar en Google Sheets.
6. Crear eventos en Google Calendar.
7. Enviar resumen por WhatsApp o Slack.

## Estructura Sheets

```txt
fecha | canal | formato | tema | copy | objetivo | estado | metrica | observaciones
```

## Prompt para IA

```txt
Actua como equipo de marketing IA para un negocio de moda en Paraguay.

Crea un calendario de contenido semanal con:
- 3 posts
- 2 reels
- 3 stories
- 2 ideas de anuncios

Usa tono claro, vendedor y cercano.
Clasifica cada pieza por objetivo:
- confianza
- venta
- educacion
- tendencia

Devuelve una tabla lista para Google Sheets.
```

## Seguridad

- No publicar anuncios pagos sin aprobacion humana.
- No gastar presupuesto automaticamente al inicio.
- No prometer resultados.
- Revisar copy antes de publicar.
- Validar datos antes de tomar decisiones.

## Como se usa paso a paso

1. Define nicho y objetivo semanal.
2. Crea hoja con parametros.
3. Genera ideas.
4. Revisa humano.
5. Programa calendario.

## Buenas practicas

Mantener estados: borrador, aprobado, programado, publicado. Separar ideas organicas de anuncios pagos.

## Errores comunes

Automatizar publicacion directa. Copiar tendencias sin adaptar marca. Ignorar metricas.

## Prompt recomendado

```txt
Disena un Marketing Team IA en n8n para un negocio local. Todo debe quedar en borrador y requerir aprobacion humana antes de publicar o gastar presupuesto.
```

## Mini ejercicio

Disena tres agentes para un negocio real tuyo: tarea, informacion necesaria y resultado.

## Checklist de comprension

- Entiendo los agentes conceptuales.
- Se armar una hoja de calendario.
- Se aplicar revision humana.

