# Seguridad, costos, tokens y uso responsable

## Objetivo de este modulo

Aprender a usar Codex, ChatGPT Work y ChatGPT de forma segura, eficiente y economica, sin perder calidad.

## Explicacion simple

Un token es una unidad pequena de texto que el modelo procesa. Puede ser una palabra corta, parte de una palabra, signos o fragmentos de codigo. "Gastar tokens" significa usar capacidad del modelo para leer entrada, razonar sobre ella y producir salida.

En productos como Codex o ChatGPT Work, el costo o consumo exacto depende de plan, modelo, tarea, herramientas y configuracion disponible. La idea practica es simple: cuanto mas texto entra y mas texto sale, mas trabajo hace el modelo.

OpenAI documenta el uso con categorias como `input_tokens`, `output_tokens` y `total_tokens` en APIs. En la practica, prompts largos, archivos grandes, logs enormes y respuestas extensas aumentan consumo.

## Analogia cotidiana

Es como pedirle a un consultor que lea papeles y escriba un informe. Si le das una carpeta gigante y pedis un informe de 30 paginas, consume mas tiempo que si le das tres paginas clave y pedis una decision corta.

## Conceptos clave

| Concepto | Que significa | Ejemplo |
| --- | --- | --- |
| Tokens de entrada | Lo que el modelo lee | Prompt, archivos, logs, contexto |
| Tokens de salida | Lo que el modelo responde | Explicaciones, codigo, resumenes |
| Contexto | Informacion activa disponible | Mensajes, snippets, resultados |
| Alcance | Limite de la tarea | Rutas, feature, modulo |

## Que hace que Codex consuma mas

- Leer muchos archivos innecesarios.
- Pegar logs completos.
- Pedir respuestas demasiado largas.
- Pedir que reexplique todo muchas veces.
- Ejecutar tareas sin foco.
- No usar rutas especificas.
- No resumir el estado antes de continuar.
- Pedir cambios grandes sin dividirlos.
- Reabrir temas anteriores sin resumen.
- Hacer debugging infinito sin hipotesis.

## Tabla de situaciones

| Situacion | Consume mucho porque | Mejor practica |
| --- | --- | --- |
| "Revisa todo el proyecto" | Puede leer demasiados archivos | Pedir primero mapa del repo |
| Pegar logs enormes | Mete ruido en contexto | Pegar solo error relevante |
| Pedir feature gigante | Mucha exploracion y cambios | Dividir en fases |
| Pedir explicacion larga siempre | Aumenta salida | Pedir resumen ejecutivo |
| Repetir contexto manualmente | Duplica tokens | Usar resumen de continuidad |

## Como reducir consumo sin perder calidad

Trabaja por fases: exploracion, plan, implementacion, verificacion y cierre. En cada fase, pedi una salida proporcional. No necesitas una explicacion larga para cada comando si solo queres avanzar.

Usa rutas concretas. Si el problema esta en `app/components/BillingTable.vue`, no pidas revisar todo `app/`. Si hay un error de build, pega las ultimas 30 a 80 lineas relevantes, no miles de lineas.

## Como pedirle a Codex que ahorre contexto

```txt
Trabaja con bajo consumo de contexto.
Primero inspecciona solo:
- package.json
- README.md
- AGENTS.md si existe
- archivos directamente relacionados con la tarea

No leas carpetas completas si no hace falta.
No pegues logs largos en la respuesta.
Resume hallazgos en bullets cortos.
```

Otro prompt util:

```txt
Antes de implementar, dime que archivos exactos necesitas leer y por que.
Manten el alcance limitado a esta tarea.
No revises areas no relacionadas.
```

Para debugging:

```txt
Si encuentras un error, no hagas debugging infinito.
Haz maximo 2 intentos razonables, resume lo aprendido y preguntame antes de seguir.
```

## Como evitar que Codex relea todo el repo

Pedi una inspeccion progresiva:

1. `git status` para saber si hay cambios.
2. `package.json` para entender scripts y stack.
3. `README.md` y `AGENTS.md` si existen.
4. `rg` para buscar simbolos concretos.
5. Archivos directamente relacionados.
6. `git diff` para revisar solo cambios actuales.

Ejemplo:

```txt
No releas todo el repositorio. Usa rg para ubicar referencias a `createInvoice`, lee solo los archivos donde se define y se usa, y luego proponeme el cambio minimo.
```

## Comandos utiles

```bash
git status
git diff
git diff --stat
git log --oneline -5
```

`git status` muestra archivos modificados, nuevos o pendientes. Revisalo antes de editar para no pisar trabajo ajeno.

`git diff` muestra cambios exactos. Revisalo antes de aceptar una implementacion.

`git diff --stat` muestra resumen por archivo. Sirve para detectar si Codex toco demasiado.

`git log --oneline -5` muestra los ultimos commits. Sirve para entender contexto reciente sin leer historial gigante.

## Seguridad operativa al usar Codex

No apruebes comandos destructivos sin entenderlos. No compartas secretos en prompts. No pegues claves API. No subas `.env`. No permitas cambios fuera del proyecto. No des permisos amplios sin necesidad.

Revisa `git diff` antes de aceptar cambios. Usa ramas o worktrees para tareas grandes. Hace commits pequenos. Verifica tests antes de cerrar.

Evita automatizaciones que gasten dinero sin aprobacion humana. Evita automatizaciones que publiquen, borren, creen campanas, creen eventos reales o envien mensajes reales sin confirmacion.

## Checklist antes de aprobar acciones de Codex

- Entiendo que comando quiere ejecutar.
- El comando escribe, borra o instala algo.
- Afecta solo la carpeta del proyecto.
- Puede borrar archivos.
- Puede exponer secretos.
- Puede gastar dinero.
- Puede enviar mensajes reales.
- Puede crear campanas, anuncios o eventos reales.
- Tengo cambios sin commitear.
- Conviene hacer backup, rama o worktree.

Si una respuesta es "no se" o "tal vez", pedi explicacion antes de aprobar.

## Como usar ChatGPT Work sin gastar de mas

Usa Work para tareas que realmente necesitan archivos, documentos, analisis o proyectos largos. Usa Chat normal para dudas simples. Usa Codex para codigo y repos. Usa n8n para automatizaciones repetitivas.

No uses Computer Use si basta con leer archivos, usar una API o ver un screenshot. No pidas imagenes, documentos o analisis largos si solo necesitas una decision corta. Pedi "respuesta corta", "solo pasos accionables" o "resumen ejecutivo" cuando corresponda.

## Tabla de herramienta eficiente

| Necesidad | Herramienta eficiente |
| --- | --- |
| Duda conceptual simple | Chat normal |
| Modificar codigo | Codex |
| Crear documentacion larga | Work o Codex con archivos |
| Automatizacion repetitiva | n8n |
| Controlar una app visual | Computer Use solo si hace falta |
| Revisar dashboard visual | Browser/Computer Use o screenshots |

## Como decidir si abrir chat nuevo

Segui en el mismo chat si el objetivo, archivos y decisiones siguen siendo los mismos. Abri un chat nuevo si cambias de feature, de area del repo, de cliente, de automatizacion o si la conversacion ya esta muy cargada y tenes un buen resumen de continuidad.

Antes de abrir chat nuevo, prepara contexto minimo:

```txt
Objetivo:
Estado actual:
Archivos relevantes:
Decisiones tomadas:
Pendientes:
Comandos ya ejecutados:
Restricciones:
```

## Buenas practicas estilo equipo profesional

- Tareas pequenas y bien definidas.
- Un chat por objetivo.
- Resumen al cerrar cada fase.
- Commits frecuentes.
- Worktrees para trabajo paralelo.
- Revision humana antes de acciones externas.
- Logs minimos.
- Prompts con restricciones claras.
- Separar exploracion, implementacion y verificacion.
- No mezclar cinco objetivos en un mismo mensaje.

## Errores comunes

Pedir "mejora todo el dashboard" sin dividir. Pegar logs completos. Aprobar instalaciones sin leer. Pedir explicaciones largas de cada paso. Seguir debuggeando sin limite despues de varios intentos fallidos.

## Prompt recomendado

```txt
Trabaja de forma eficiente y segura:
- limita el alcance a esta tarea,
- lee solo archivos relevantes,
- usa rg antes de abrir muchos archivos,
- evita logs largos,
- haz cambios pequenos,
- ejecuta verificaciones disponibles,
- resume al final cambios, pruebas y riesgos.
```

## Mini ejercicio

Toma esta tarea grande:

```txt
Mejorar todo el dashboard.
```

Dividila en cinco tareas pequenas:

1. Revisar layout responsive del dashboard principal.
2. Mejorar tabla de metricas sin tocar filtros.
3. Corregir estados vacios y loading.
4. Revisar contraste y jerarquia visual.
5. Ejecutar QA visual y tests disponibles.

Prompt eficiente para la primera tarea:

```txt
Quiero mejorar solo el layout responsive del dashboard principal.
Primero ubica el componente con rg, lee solo los archivos directamente relacionados y proponeme un plan breve.
No toques filtros, datos ni backend.
Despues implementa el cambio minimo y verifica que no haya solapamientos.
```

## Checklist de comprension

- Entiendo que son tokens.
- Se por que los logs largos consumen mas.
- Se pedirle a Codex que limite el alcance.
- Se cuando usar Chat normal, Work o Codex.
- Se revisar comandos antes de aprobar.
- Se evitar acciones que gasten dinero o envien mensajes reales.
- Se cerrar una fase con resumen.
