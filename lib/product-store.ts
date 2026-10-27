import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";

export type Product = {
          id: string;
          name: string;
          description: string;
          price: number;
          category: string;
};

export type ProductInput = Omit<Product, "id">;

const dataFile = path.join(
          process.cwd(),
          "data",
          "products.json"
);

async function readProducts(): Promise<Product[]> {
          const content = await readFile(dataFile, "utf8");
          return JSON.parse(content) as Product[];
}

export async function getProducts(): Promise<Product[]>
{
          return readProducts();
}

export async function getProductById(id: string): Promise<Product | null>
{
          const products = await readProducts();
          return products.find((product) => product.id === id) ?? null;
}