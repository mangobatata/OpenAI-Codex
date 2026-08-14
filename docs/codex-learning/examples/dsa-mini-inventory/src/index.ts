import { addProduct, calculateInventoryValue, getLowStockProducts, getTopSellingProducts, Product } from "./inventory";

let products: Product[] = [];

products = addProduct(products, { sku: "REM-001", name: "Remera", price: 75000, stock: 4, sold: 20 });
products = addProduct(products, { sku: "ZAP-001", name: "Zapato", price: 180000, stock: 8, sold: 7 });

console.log("Stock bajo", getLowStockProducts(products));
console.log("Mas vendidos", getTopSellingProducts(products));
console.log("Valor inventario", calculateInventoryValue(products));
