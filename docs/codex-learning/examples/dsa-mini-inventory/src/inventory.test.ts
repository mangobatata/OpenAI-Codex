import { describe, expect, it } from "vitest";
import { addProduct, bestSalesWindow, binarySearchProductById, calculateInventoryValue, countProductsByCategory, findProductBySku, getLowStockProducts, hasTwoPricesWithBudget, Product, updateStock } from "./inventory";

const sample: Product[] = [
  { sku: "REM-001", name: "Remera", price: 75000, stock: 4, sold: 20, id: 1, category: "moda" },
  { sku: "ZAP-001", name: "Zapato", price: 180000, stock: 8, sold: 7, id: 2, category: "moda" }
];

describe("inventory", () => {
  it("finds a product by sku", () => {
    expect(findProductBySku(sample, "REM-001")?.name).toBe("Remera");
  });

  it("prevents duplicate sku", () => {
    expect(() => addProduct(sample, sample[0])).toThrow("SKU duplicado");
  });

  it("updates stock", () => {
    expect(updateStock(sample, "REM-001", 10)[0].stock).toBe(10);
  });

  it("gets low stock products", () => {
    expect(getLowStockProducts(sample, 5)).toHaveLength(1);
  });

  it("calculates inventory value", () => {
    expect(calculateInventoryValue(sample)).toBe(1740000);
  });

  it("counts products by category", () => {
    expect(countProductsByCategory(sample)).toEqual({ moda: 2 });
  });

  it("finds two prices that match a budget", () => {
    expect(hasTwoPricesWithBudget([50000, 75000, 100000, 180000], 175000)).toBe(true);
  });

  it("gets the best sales window", () => {
    expect(bestSalesWindow([10, 20, 5, 30, 15], 3)).toBe(50);
  });

  it("finds a product by sorted id", () => {
    expect(binarySearchProductById(sample, 2)?.name).toBe("Zapato");
  });
});
