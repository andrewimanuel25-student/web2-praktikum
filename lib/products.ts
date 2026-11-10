export type Product = { id: string; name: string; price: number };

// Disimpan di globalThis agar tidak ter-reset saat hot reload pada mode dev
const store = globalThis as unknown as { products?: Product[] };

store.products ??= [
          { id: "p1", name: "Keyboard", price: 250000 },
          { id: "p2", name: "Monitor", price: 1500000 },
          { id: "p3", name: "Headset", price: 350000 },
];

export async function getProducts(): Promise<Product[]> {
          return store.products!;
}

export async function addProductToStore(name: string, price: number): Promise<Product> {
          const newProduct: Product = { id: crypto.randomUUID(), name, price };
          store.products = [...store.products!, newProduct];
          return newProduct;
}
