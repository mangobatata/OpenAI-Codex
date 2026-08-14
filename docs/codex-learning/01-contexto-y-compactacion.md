# Ventana de contexto y compactacion

## Objetivo de este modulo

Entender que recuerda Codex durante una tarea, que puede olvidar y como mantener continuidad en trabajos largos.

## Explicacion simple

La ventana de contexto es la informacion que Codex puede tener presente en un momento: tus mensajes, partes de archivos leidos, resultados de comandos, instrucciones del proyecto y decisiones recientes. No es memoria infinita.

La compactacion resume una conversacion larga para liberar espacio. Conserva lo importante si estaba claro, pero puede perder detalles pequenos, rutas exactas o decisiones ambiguas.

## Analogia cotidiana

Es como trabajar con una libreta. Mientras la pagina esta abierta, ves todo. Cuando se llena, haces un resumen en una hoja nueva. Si el resumen es bueno, seguis bien; si es vago, perdes detalles.

## Conceptos clave

| Concepto | Significado | Riesgo |
| --- | --- | --- |
| Contexto | Informacion activa del chat | Saturarlo con ruido |
| Compactacion | Resumen automatico o manual | Perder matices |
| Continuidad | Capacidad de seguir sin reiniciar | Omitir pendientes |

## Ejemplo practico

Antes de una pausa larga, pedi:

```txt
Antes de seguir, crea un resumen de continuidad con:
1. Objetivo actual.
2. Decisiones tomadas.
3. Archivos modificados.
4. Pendientes.
5. Comandos ejecutados.
6. Riesgos o advertencias.
```

## Como se usa paso a paso

1. Define el objetivo.
2. Pide que Codex inspeccione archivos relevantes.
3. Mantene decisiones importantes en mensajes claros.
4. Cada cierto tiempo, pedi resumen.
5. Al continuar, pega o referencia el resumen y pedi no arrancar de cero.

## Buenas practicas

Pedi rutas absolutas, lista de archivos tocados, estado de tests y decisiones pendientes. Evita mezclar varias tareas no relacionadas en el mismo chat.

## Errores comunes

Decir "segui con eso" despues de muchas horas sin resumir. Confiar en que Codex recordara detalles exactos que nunca fueron escritos claramente.

## Prompt recomendado

```txt
Continuemos desde el resumen anterior. No arranques de cero. Primero verifica el estado actual del repo, compara con los pendientes y luego segui con el proximo paso.
```

## Mini ejercicio

Escribi un resumen de continuidad de un proyecto real tuyo con objetivo, archivos, decisiones y pendientes.

## Checklist de comprension

- Entiendo que el contexto no es memoria infinita.
- Se pedir un resumen util.
- Se continuar despues de una compactacion.

