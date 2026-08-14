# Sliding Window Pattern

## Objetivo de este modulo

Resolver problemas de rangos consecutivos sin recalcular todo desde cero.

## Explicacion simple

Una ventana es un grupo de elementos consecutivos. Sliding Window mueve esa ventana y actualiza lo que entra y lo que sale.

## Analogia

Es como mirar una vidriera moviendo un marco. No miras toda la calle cada vez; moves el marco un paso y actualizas lo que entra y lo que sale.

## Ventana fija vs variable

| Tipo | Ejemplo |
| --- | --- |
| Fija | Mejor suma de 3 dias consecutivos |
| Variable | Substring mas largo sin repetir |

## Casos comunes

- Maxima suma de N elementos consecutivos.
- Promedio movil.
- Trafico por dia.
- Ventas por semana.
- Visitas en una tienda.

## Ejemplo TypeScript

```ts
function maxSubarraySum(numbers: number[], windowSize: number): number | null {
  if (numbers.length < windowSize) {
    return null;
  }

  let windowSum = 0;

  for (let i = 0; i < windowSize; i++) {
    windowSum += numbers[i];
  }

  let maxSum = windowSum;

  for (let i = windowSize; i < numbers.length; i++) {
    windowSum = windowSum - numbers[i - windowSize] + numbers[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([10, 20, 5, 30, 15], 2));
```

## Mini ejercicio

Dadas ventas diarias, encontrar cual fue la mejor racha de 3 dias consecutivos.

## Complejidad

Tiempo O(n), porque cada elemento entra y sale de la ventana una vez.
