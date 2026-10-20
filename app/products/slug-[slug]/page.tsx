import { getProductBySlug, getProducts } from "@/lib/products";

export async function generateStaticParams() {
          const products = await getProducts();
          return products.map((p) => ({ slug: p.slug }));
}

export const revalidate = 60; // detik — menjadikan halaman ISR

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
          const product = await getProductBySlug(params.slug);
          if (!product) return <p className="p-8">Produk tidak ditemukan.</p>;
          return (
                    <main className="p-8">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p>Rp{product.price.toLocaleString("id-ID")}</p>
                    <p className="text-xs text-gray-400 mt-4">
                    Halaman ini statis, diregenerasi otomatis setiap {60} detik (ISR).
                    </p>
                    </main>
          );
}