// import { getProducts } from "@/lib/products";
// import ProductCard from "@/components/ProductCard";

// export default async function ProductsPage() {
//           const products = await getProducts();
//           return (
//                     <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                     ))}
//                     </main>
//           );
// }

import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Katalog Produk (SSG)</h1>
        <p className="text-sm text-gray-500 mb-6">Halaman ini di-generate secara statis saat build.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              {/* Me-render kartu produk */}
              <ProductCard product={product} />
              
              {/* Tautan Tambahan untuk Menuju Detail Sesuai Tugas Mandiri */}
              <Link 
                href={`/products/slug-${product.slug}`}
                className="mt-2 text-sm text-blue-600 hover:underline font-medium text-center"
              >
                Lihat Detail {product.name} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}