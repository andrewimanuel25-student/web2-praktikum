import { Suspense } from "react";
import { getProductById } from "@/lib/products";
import ProductSkeleton from "@/components/ProductSkeleton";

async function ProductDetail({ id }: { id: string }) {
  const product = await getProductById(id);
  
  if (!product) {
    return <p className="text-red-500 font-semibold">Produk tidak ditemukan.</p>;
  }

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-sm max-w-md">
      <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
      <p className="text-lg text-blue-600 font-medium mt-1">
        Rp{product.price.toLocaleString("id-ID")}
      </p>
    </div>
  );
}

// Tambahkan async di fungsi utama ini
export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> // Ubah tipe data menjadi Promise
}) {
  // Await params terlebih dahulu sebelum mengambil id
  const { id } = await params; 

  return (
    <main className="p-8">
      <p className="text-sm text-gray-500 mb-4">
        Header halaman muncul instan — detail menyusul.
      </p>
      
      <Suspense fallback={<ProductSkeleton />}>
        <ProductDetail id={id} />
      </Suspense>
    </main>
  );
}
