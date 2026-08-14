# Modo de voz y mejores prompts

## Objetivo de este modulo

Aprender a dar instrucciones claras por voz o texto para que Codex trabaje con menos ambiguedad.

## Explicacion simple

La voz sirve para explicar intenciones, explorar ideas y coordinar. El texto sirve mejor para rutas, comandos, restricciones, listas exactas y criterios de aceptacion.

Segun la documentacion oficial de ChatGPT Work y Codex, Voice en Desktop puede usarse con Work o Codex y usa las herramientas y permisos de la experiencia activa.

## Analogia cotidiana

La voz es una reunion rapida. El texto es la orden de trabajo.

## Conceptos clave

| Situacion | Mejor canal |
| --- | --- |
| Brainstorming | Voz |
| Rutas de archivos | Texto |
| Restricciones delicadas | Texto |
| Revision final | Texto |

## Ejemplo practico

```txt
Objetivo:
Agregar validacion al formulario de registro.

Contexto:
Proyecto Nuxt + TypeScript.

Archivos o rutas:
app/components/RegisterForm.vue

Restricciones:
No tocar login ni billing.

Que debe hacer primero:
Inspeccionar el componente y tests relacionados.

Que debe verificar:
npm run typecheck y npm test si existen.

Que debe entregarme al final:
Resumen de cambios y riesgos.
```

## Como se usa paso a paso

1. Deci el resultado esperado.
2. Agrega contexto del proyecto.
3. Define rutas permitidas.
4. Nombra restricciones.
5. Pedi verificacion.
6. Pedi resumen final.

## Buenas practicas

Usa verbos concretos: inspecciona, implementa, verifica, resume. Para bugs, inclui comportamiento esperado y observado.

## Errores comunes

Pedir "mejora esto" sin explicar criterio. Dictar nombres de archivos largos por voz sin confirmarlos por texto.

## Prompt recomendado

```txt
Primero explora el codigo relacionado y explicame el plan breve. Despues implementa solo lo necesario, ejecuta verificaciones disponibles y resume cambios.
```

## Mini ejercicio

Transforma una idea vaga en un prompt con objetivo, contexto, rutas, restricciones y verificacion.

## Checklist de comprension

- Se cuando usar voz.
- Se cuando escribir.
- Puedo armar un prompt accionable.

