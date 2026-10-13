import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
          const products = await getProducts();
          return (
                    <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
                    </main>
          );
}