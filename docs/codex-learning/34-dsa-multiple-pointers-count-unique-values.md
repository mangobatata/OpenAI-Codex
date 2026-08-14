# Multiple Pointers: Count Unique Values Challenge

## Enunciado

Escribir una funcion `countUniqueValues(numbers)` que reciba un array ordenado y devuelva cuantos valores unicos hay.

```ts
countUniqueValues([1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4]); // 4
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```

## Restricciones

El array viene ordenado. Puede estar vacio. Puede contener negativos.

## Casos borde

- Array vacio.
- Un solo elemento.
- Todos iguales.
- Todos distintos.

## Pistas

Usa un indice para la ultima posicion unica y otro para recorrer.

## Solucion TypeScript

```ts
function countUniqueValues(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  let uniqueIndex = 0;

  for (let currentIndex = 1; currentIndex < numbers.length; currentIndex++) {
    if (numbers[uniqueIndex] !== numbers[currentIndex]) {
      uniqueIndex++;
      numbers[uniqueIndex] = numbers[currentIndex];
    }
  }

  return uniqueIndex + 1;
}
```

## Nota

Esta solucion modifica el array. Tambien se puede resolver sin modificarlo usando un contador.

## Complejidad

Tiempo O(n), espacio O(1) si aceptamos modificar el array.
