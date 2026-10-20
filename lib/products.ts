//DARI AI
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
          return [
                    { id: "1", slug: "laptop", name: "Laptop", price: 12000000, category: "electronics" as const, inStock: true },
                    { id: "2", slug: "kaos", name: "Kaos", price: 85000, category: "fashion" as const, inStock: true },
                    { id: "3", slug: "kopi", name: "Kopi", price: 25000, category: "food" as const, inStock: false },
          ];
}

export async function getProductById(id: string) {
          await new Promise((resolve) => setTimeout(resolve, 2000)); // simulasi lambat
          const products = await getProducts();
          return products.find((p) => p.id === id) ?? null;
}

export async function getProductBySlug(slug: string) {
          const products = await getProducts();
          return products.find((p) => p.slug === slug) ?? null;
}


// DARI MODUL
// export async function getProducts() {
//           return [
//                     { id: "1", slug: "laptop", name: "Laptop", price: 12000000, category: "electronics" as
//                     const, inStock: true },
//                     { id: "2", slug: "kaos", name: "Kaos", price: 85000, category: "fashion" as const,
//                     inStock: true },
//                     { id: "3", slug: "kopi", name: "Kopi", price: 25000, category: "food" as const,
//                     inStock: false },
//           ];
// }

// export async function getProductBySlug(slug: string) {
//           const products = await getProducts();
//           return products.find((p) => p.slug === slug) ?? null;
// }