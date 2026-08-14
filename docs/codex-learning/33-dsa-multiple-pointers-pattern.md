# Multiple Pointers Pattern

## Objetivo de este modulo

Resolver problemas con dos posiciones que avanzan sobre una estructura, normalmente un array ordenado.

## Explicacion simple

Usar dos punteros significa mantener dos indices. Pueden empezar en extremos opuestos o avanzar juntos desde el inicio.

## Analogia

Imagina que dos personas revisan una fila: una empieza desde el inicio y otra desde el final. En vez de que una sola persona revise todo muchas veces, ambas se acercan al centro.

## Cuando usarlo

- Arrays ordenados.
- Buscar pares con cierta suma.
- Contar valores unicos.
- Comparar extremos.

## Cuando no usarlo

Si los datos no estan ordenados y el orden importa, tal vez necesites ordenar primero o usar otro patron.

## Ejemplo TypeScript

```ts
function hasPairWithSum(numbers: number[], target: number): boolean {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }

  return false;
}

console.log(hasPairWithSum([1, 2, 4, 6, 9], 10));
```

## Mini ejercicio

Dado un array ordenado de precios, encontrar si existen dos productos que juntos sumen un presupuesto exacto.

## Checklist

- El array esta ordenado.
- Se que mueve cada puntero.
- Entiendo por que reduzco comparaciones.
