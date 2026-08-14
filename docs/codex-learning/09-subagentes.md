# Subagentes

## Objetivo de este modulo

Aprender a dividir trabajo sin perder control.

## Explicacion simple

Un subagente es una ayuda especializada para investigar, revisar, testear o implementar una parte. Sirve cuando el trabajo puede separarse en entregas verificables.

## Analogia cotidiana

Es formar un equipo pequeno: una persona investiga, otra implementa, otra revisa.

## Conceptos clave

| Subagente | Tarea | Entrega esperada |
| --- | --- | --- |
| Investigador | Analiza documentacion | Resumen con fuentes |
| Implementador | Cambia codigo | Diff claro |
| Reviewer | Busca bugs | Hallazgos por severidad |
| Tester | Ejecuta pruebas | Resultado y fallas |

## Como se usa paso a paso

1. Divide por objetivo.
2. Define salida concreta.
3. Limita alcance.
4. Integra resultados.
5. Verifica con pruebas.

## Buenas practicas

Usa subagentes para investigacion paralela o reviews independientes. Manten una decision final central.

## Errores comunes

Delegar tareas ambiguas. Aceptar resultados sin evidencia.

## Prompt recomendado

```txt
Usa un subagente reviewer para buscar riesgos en este cambio. Quiero hallazgos concretos con archivo, linea, severidad y razon.
```

## Mini ejercicio

Disena tres subagentes para una migracion de autenticacion.

## Checklist de comprension

- Se cuando usar subagentes.
- Se pedir entregas verificables.
- Se evitar delegar demasiado.

