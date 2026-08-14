export type Product = {
  sku: string;
  name: string;
  price: number;
  stock: number;
  sold: number;
  id?: number;
  category?: string;
};

export function addProduct(products: Product[], product: Product): Product[] {
  if (products.some((item) => item.sku === product.sku)) {
    throw new Error(`SKU duplicado: ${product.sku}`);
  }
  return [...products, product];
}

export function findProductBySku(products: Product[], sku: string): Product | undefined {
  const bySku = new Map(products.map((product) => [product.sku, product]));
  return bySku.get(sku);
}

export function updateStock(products: Product[], sku: string, stock: number): Product[] {
  if (stock < 0) throw new Error("El stock no puede ser negativo");
  return products.map((product) => product.sku === sku ? { ...product, stock } : product);
}

export function getLowStockProducts(products: Product[], limit = 5): Product[] {
  return products.filter((product) => product.stock <= limit);
}

export function getTopSellingProducts(products: Product[], limit = 3): Product[] {
  return [...products].sort((a, b) => b.sold - a.sold).slice(0, limit);
}

export function calculateInventoryValue(products: Product[]): number {
  return products.reduce((total, product) => total + product.price * product.stock, 0);
}


export function countProductsByCategory(products: Product[]): Record<string, number> {
  const counter: Record<string, number> = {};

  for (const product of products) {
    const category = product.category ?? "sin-categoria";
    counter[category] = (counter[category] ?? 0) + 1;
  }

  return counter;
}

export function hasTwoPricesWithBudget(prices: number[], budget: number): boolean {
  let left = 0;
  let right = prices.length - 1;

  while (left < right) {
    const sum = prices[left] + prices[right];

    if (sum === budget) return true;
    if (sum < budget) left++;
    else right--;
  }

  return false;
}

export function bestSalesWindow(sales: number[], windowSize: number): number | null {
  if (windowSize <= 0 || sales.length < windowSize) return null;

  let windowSum = 0;
  for (let i = 0; i < windowSize; i++) {
    windowSum += sales[i];
  }

  let best = windowSum;
  for (let i = windowSize; i < sales.length; i++) {
    windowSum = windowSum - sales[i - windowSize] + sales[i];
    best = Math.max(best, windowSum);
  }

  return best;
}

export function binarySearchProductById(products: Product[], id: number): Product | undefined {
  let left = 0;
  let right = products.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const currentId = products[middle].id;

    if (currentId === id) return products[middle];
    if (currentId === undefined || currentId < id) left = middle + 1;
    else right = middle - 1;
  }

  return undefined;
}
