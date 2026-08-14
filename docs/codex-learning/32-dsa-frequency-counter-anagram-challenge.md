# Frequency Counter: Anagram Challenge

## Enunciado

Escribir una funcion `validAnagram(a, b)` que reciba dos strings y devuelva `true` si son anagramas.

```ts
validAnagram("amor", "roma"); // true
validAnagram("caro", "roca"); // true
validAnagram("hola", "halo"); // true
validAnagram("hola", "chau"); // false
```

## Restricciones

Asumimos strings en minusculas y sin espacios. Si tu caso real tiene tildes, mayusculas o espacios, primero normaliza.

## Casos borde

- Strings de distinto largo.
- Strings vacios.
- Letras repetidas.
- Caracteres que aparecen en uno pero no en otro.

## Pista 1

Si los largos son distintos, no pueden ser anagramas.

## Pista 2

Conta las letras del primer string y luego desconta usando el segundo.

## Espacio para intentar

```ts
function validAnagram(a: string, b: string): boolean {
  // Intenta resolver antes de mirar la solucion.
}
```

## Solucion TypeScript

```ts
function validAnagram(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  const counter: Record<string, number> = {};

  for (const char of a) {
    counter[char] = (counter[char] ?? 0) + 1;
  }

  for (const char of b) {
    if (!counter[char]) {
      return false;
    }

    counter[char]--;
  }

  return true;
}
```

## Explicacion paso a paso

Primero descartamos largos distintos. Luego contamos caracteres de `a`. Despues recorremos `b`: si falta una letra o ya se consumio, devolvemos `false`; si existe, restamos uno.

## Complejidad Big O

Tiempo O(n), porque recorremos cada string una vez. Espacio O(k), donde k es la cantidad de caracteres distintos.
