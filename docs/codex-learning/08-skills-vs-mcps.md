# Skills vs MCPs

## Objetivo de este modulo

Distinguir instrucciones especializadas de herramientas conectadas.

## Explicacion simple

Una Skill es conocimiento o procedimiento que Codex puede seguir. Un MCP expone herramientas o datos mediante un servidor. Pueden trabajar juntos: la Skill explica como actuar y el MCP permite hacer acciones.

## Analogia cotidiana

La Skill es el manual de cocina. El MCP es la cocina equipada.

## Conceptos clave

| Concepto | Skill | MCP |
| --- | --- | --- |
| Que es | Instrucciones reutilizables | Servidor de herramientas |
| Sirve para | Guiar un flujo | Consultar o ejecutar acciones |
| Ejemplo | Crear documentos | Consultar base de datos |
| Riesgo | Instrucciones malas | Acceso externo |

## Ejemplo practico

Skill: instrucciones para crear documentos con render y verificacion. MCP: herramienta para leer una tabla, enviar datos a una API o controlar una app conectada.

## Ejemplo conceptual TypeScript

```ts
type ToolRequest = { customerId: string };
type ToolResponse = { name: string; status: "active" | "inactive" };

async function getCustomer(input: ToolRequest): Promise<ToolResponse> {
  return { name: "Cliente Demo", status: "active" };
}
```

Un principiante no necesita construir MCPs al inicio; primero debe aprender a usarlos con permisos claros.

## Como se usa paso a paso

1. Si necesitas procedimiento, busca Skill.
2. Si necesitas datos externos, busca MCP o plugin.
3. Si necesitas ambos, combina con limites.

## Buenas practicas

Lee que permisos tiene cada herramienta. No confundas "saber como" con "tener acceso a".

## Errores comunes

Pedir una Skill cuando hace falta una cuenta conectada. Usar MCP sin revisar alcance.

## Prompt recomendado

```txt
Decime si esta tarea necesita una Skill, un MCP, ambos o ninguno, y por que.
```

## Mini ejercicio

Clasifica cinco tareas como Skill, MCP, ambos o ninguno.

## Checklist de comprension

- Se que es una Skill.
- Se que es un MCP.
- Entiendo su relacion con plugins.

