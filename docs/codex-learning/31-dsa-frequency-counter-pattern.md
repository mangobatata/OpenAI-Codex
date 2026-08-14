# Frequency Counter Pattern

## Objetivo de este modulo

Usar conteos para comparar datos sin loops anidados innecesarios.

## Explicacion simple

Frequency Counter crea una tabla de conteos: cuantas veces aparece cada valor. Puede implementarse con objetos, `Record`, `Map` o `Set` segun el caso.

## Cuando usarlo

Sirve para anagramas, productos repetidos, duplicados, listas comparadas, estados de pedidos y frecuencia de clientes por WhatsApp.

## Cuando no usarlo

No es ideal si necesitas mantener orden exacto, comparar posiciones o trabajar con datos que cambian todo el tiempo y requieren estructura mas especializada.

## Ejemplo TypeScript

```ts
function countProducts(products: string[]): Record<string, number> {
  const counter: Record<string, number> = {};

  for (const product of products) {
    counter[product] = (counter[product] ?? 0) + 1;
  }

  return counter;
}

console.log(countProducts(["remera", "zapato", "remera"]));
```

Salida esperada:

```ts
{
  remera: 2,
  zapato: 1
}
```

## Por que evita loops anidados

En vez de comparar cada elemento contra todos los demas, contas una vez y consultas despues. Eso suele pasar de O(n²) a O(n).

## Mini ejercicio

Dada una lista de estados de pedidos:

```txt
["PENDING", "COMPLETED", "PENDING", "CANCELLED"]
```

Crear una funcion que devuelva cuantos pedidos hay por estado.

## Prompt recomendado

```txt
Ayudame a resolver este ejercicio usando Frequency Counter. Primero explicame input/output, luego dame pseudocodigo y despues TypeScript.
```
