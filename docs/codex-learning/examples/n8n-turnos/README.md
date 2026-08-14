# Ejemplo n8n turnos

## Objetivo

Simular un flujo de turnos antes de conectar WhatsApp, Calendar o Sheets reales.

## Datos de prueba

```txt
Hola, quiero agendar una limpieza dental para el viernes de tarde.
```

## Resultado esperado

El nodo IA devuelve JSON con intencion, servicio, fecha, rango horario y datos faltantes. El workflow no confirma hasta consultar disponibilidad simulada.

## Checklist

- Usar ambiente de prueba.
- No enviar WhatsApp real.
- No crear evento real.
- Revisar respuesta antes de activar.

