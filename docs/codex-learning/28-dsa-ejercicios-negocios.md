# Ejercicios DSA aplicados a negocios

## Objetivo de este modulo

Practicar DSA con problemas reales de productos, clientes, pedidos, turnos y stock.

## 1. Lista de productos mas vendidos

Enunciado: ordenar productos por ventas. Input: productos con `name` y `sold`. Output: nombres ordenados. Pista: usa `sort`.

```ts
type Product = { name: string; sold: number };
const products: Product[] = [{ name: "Remera", sold: 20 }, { name: "Zapato", sold: 8 }];
const top = [...products].sort((a, b) => b.sold - a.sold);
console.log(top.map((p) => p.name));
```

Explicacion: copiamos el array para no mutar el original, ordenamos por ventas descendentes y devolvemos nombres.

## 2. Buscar cliente por WhatsApp

Input: lista de clientes. Output: cliente encontrado. Pista: usa `Map`.

```ts
type Customer = { name: string; phone: string };
const customers: Customer[] = [{ name: "Ana", phone: "0981" }];
const byPhone = new Map(customers.map((c) => [c.phone, c]));
console.log(byPhone.get("0981"));
```

## 3. Contar pedidos por estado

```ts
const orders = ["paid", "pending", "paid", "cancelled"];
const counts: Record<string, number> = {};
for (const status of orders) counts[status] = (counts[status] ?? 0) + 1;
console.log(counts);
```

## 4. Detectar productos duplicados

```ts
const skus = ["A1", "B2", "A1"];
const seen = new Set<string>();
const duplicates = new Set<string>();
for (const sku of skus) seen.has(sku) ? duplicates.add(sku) : seen.add(sku);
console.log([...duplicates]);
```

## 5. Ordenar productos por precio

```ts
const prices = [{ name: "A", price: 50 }, { name: "B", price: 20 }];
console.log([...prices].sort((a, b) => a.price - b.price));
```

## 6. Simular fila de turnos

```ts
const queue: string[] = [];
queue.push("Ana");
queue.push("Luis");
console.log(queue.shift());
```

## 7. Historial tipo undo

```ts
const history: string[] = [];
history.push("crear producto");
history.push("editar precio");
console.log(history.pop());
```

## 8. Recomendar productos por categoria

```ts
const catalog = [{ name: "Remera", category: "moda" }, { name: "Perfume", category: "belleza" }];
console.log(catalog.filter((p) => p.category === "moda"));
```

## 9. Calcular stock disponible

```ts
const item = { stock: 20, reserved: 3 };
console.log(item.stock - item.reserved);
```

## 10. Detectar clientes frecuentes

```ts
const phones = ["0981", "0982", "0981", "0981"];
const count = new Map<string, number>();
for (const phone of phones) count.set(phone, (count.get(phone) ?? 0) + 1);
console.log([...count.entries()].filter(([, total]) => total >= 2));
```

## Mini ejercicio

Elegi uno y pedile a Codex que te lo explique con dibujo, paso a paso y version alternativa.
