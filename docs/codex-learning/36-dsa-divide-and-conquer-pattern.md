# Divide and Conquer Pattern

## Objetivo de este modulo

Aprender a dividir un problema grande en partes pequenas para resolverlo con mayor eficiencia.

## Explicacion simple

Divide and Conquer separa un problema, resuelve una parte y descarta lo que ya no sirve. La busqueda binaria es el ejemplo clasico.

## Analogia

Si buscas una palabra en un diccionario, no lees pagina por pagina. Abris por la mitad, decidis si ir antes o despues, y repetis.

## Cuando usarlo

- Datos ordenados.
- Busquedas eficientes.
- Problemas que pueden partirse en mitades.
- Algoritmos como merge sort o quick sort.

## Cuando no conviene

Si los datos no estan ordenados o partir el problema cuesta mas que recorrerlo simple.

## Ejemplo TypeScript

```ts
function binarySearch(numbers: number[], target: number): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (numbers[middle] === target) {
      return middle;
    }

    if (numbers[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));
```

## Mini ejercicio

Dada una lista ordenada de IDs de productos, encontrar la posicion de un ID usando busqueda binaria.

## Complejidad

Tiempo O(log n), porque en cada paso descartamos aproximadamente la mitad.
