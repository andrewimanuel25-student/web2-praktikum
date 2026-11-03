import Link from "next/link";
import { getProducts } from "@/lib/product-store";
import DeleteProductButton from "@/components/products/DeleteProductButton";

export const runtime = "nodejs";

export default async function ProductsPage() {
          // Mengambil data produk secara real-time dari database MySQL
          const products = await getProducts();

          return (
                    <main className="mx-auto max-w-5xl px-4 py-8">
                              {/* Header Katalog */}
                              <div className="mb-6 flex items-center justify-between gap-4">
                                        <h1 className="text-2xl font-bold">Katalog Produk</h1>
                                        <Link
                                                  href="/products/new"
                                                  className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition"
                                        >
                                                  Tambah Produk
                                        </Link>
                              </div>

                              {/* Kondisi jika produk di database masih kosong */}
                              {products.length === 0 ? (
                              <p className="text-gray-500 italic">Belum ada produk yang tersedia.</p>
                              ) : (
                              /* Grid Daftar Produk */
                              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {products.map((product) => (
                                        <article
                                        key={product.id}
                                        className="flex h-full flex-col rounded-lg border p-4 shadow-sm bg-white"
                                        >
                                                  {/* Nama Produk */}
                                                  <h2 className="text-lg font-semibold text-slate-900">
                                                            {product.name}
                                                  </h2>

                                                  {/* Deskripsi */}
                                                  <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">
                                                            {product.description}
                                                  </p>

                                                  {/* Harga dengan Format Rupiah */}
                                                  <p className="mt-3 font-bold text-blue-600 text-lg">
                                                            {new Intl.NumberFormat("id-ID", {
                                                                      style: "currency",
                                                                      currency: "IDR",
                                                                      maximumFractionDigits: 0,
                                                            }).format(product.price)}
                                                  </p>

                                                  {/* Label Kategori */}
                                                  <p className="mt-1 text-xs font-medium text-gray-500 bg-gray-100 w-fit px-2 py-0.5 rounded">
                                                            Kategori: {product.category}
                                                  </p>

                                                  {/* Tombol Aksi (Ubah & Hapus) */}
                                                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                                                            <Link
                                                            href={`/products/${product.id}/edit`}
                                                            className="text-sm font-medium text-blue-600 hover:underline"
                                                            >
                                                                      Ubah produk
                                                            </Link>
                                                            
                                                            {/* Tombol hapus dimasukkan ke setiap kartu produk (Untuk Praktikum O) */}
                                                            <DeleteProductButton id={product.id} />
                                                  </div>
                                        </article>
                                        ))}
                              </div>
                              )}
                    </main>
          );
}