# Plugins y directorio de plugins

## Objetivo de este modulo

Entender cuando conectar herramientas externas y que riesgos revisar.

## Explicacion simple

Un plugin agrega capacidades conectadas: leer GitHub, enviar mensajes a Slack, consultar Drive, crear tareas en Linear o desplegar en Vercel. Un plugin instalado esta disponible; uno recomendado puede sugerirse, pero requiere instalacion/conexion.

## Analogia cotidiana

Codex es el trabajador; los plugins son credenciales temporales para entrar a otras oficinas.

## Conceptos clave

| Necesidad | Plugin posible | Riesgo | Revision humana |
| --- | --- | --- | --- |
| Revisar PR | GitHub | Cambiar codigo remoto | Antes de merge |
| Avisar equipo | Slack | Enviar mensaje publico | Antes de enviar |
| Leer docs | Google Drive | Exponer archivos | Seleccionar carpeta |
| Crear tareas | Linear | Duplicar o alterar backlog | Revisar campos |
| Monitorear errores | Sentry | Datos sensibles | Limitar proyecto |
| Deploy | Vercel | Publicar cambios | Aprobar deploy |
| Ads | Meta Ads si existe | Gasto real | Aprobacion obligatoria |
| n8n | Webhook/API | Ejecutar workflow | Ambiente de prueba |

## Como se usa paso a paso

1. Define la necesidad.
2. Pregunta si hay plugin instalado.
3. Revisa permisos.
4. Usa datos minimos.
5. Pide confirmacion antes de acciones externas.

## Buenas practicas

Conecta solo lo necesario. Usa entornos de prueba. No automatices gastos ni mensajes externos al inicio.

## Errores comunes

Instalar plugins "por si acaso". Dar acceso amplio a cuentas reales.

## Prompt recomendado

```txt
Si esta tarea necesita una herramienta externa, decime que plugin usarias, que permiso requiere y que riesgo tiene antes de actuar.
```

## Mini ejercicio

Elegi tres herramientas que usas y escribi que permiso minimo le darias a Codex.

## Checklist de comprension

- Distingo plugin instalado y recomendado.
- Se evaluar permisos.
- Se cuando pedir revision humana.

