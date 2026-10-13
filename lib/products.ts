import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
          return [
          { id: "1", name: "Laptop", price: 12000000, category: "electronics", inStock: true },
          { id: "2", name: "Kaos", price: 85000, category: "fashion", inStock: true },
          { id: "3", name: "Kopi", price: 25000, category: "food", inStock: false },
          ];
}

export async function getProductById(id: string) {
          await new Promise((resolve) => setTimeout(resolve, 2000)); // simulasi lambat
          const products = await getProducts();
          return products.find((p) => p.id === id) ?? null;
}