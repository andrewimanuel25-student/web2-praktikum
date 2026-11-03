"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createProductAction } from "@/app/produk/actions";

const initialState = {
          success: false,
          message: "",
};

export default function ProductForm() {
          const [state, formAction, pending] = useActionState(
                    createProductAction,
                    initialState
          );

          // Jika produk berhasil ditambahkan, tampilkan status sukses
          if (state.success) {
                    return (
                              <div role="status" className="space-y-4">
                                        <p className="text-green-600 font-medium">{state.message}</p>
                                        <Link href="/products" className="underline text-blue-600 block">
                                                  Kembali ke katalog produk
                                        </Link>
                              </div>
                    );
          }

          return (
                    <form action={formAction} className="space-y-4">
                              {/* Input Nama Produk */}
                              <div>
                                        <label htmlFor="name" className="mb-1 block font-medium">
                                                  Nama produk
                                        </label>
                                        <input
                                                  id="name"
                                                  name="name"
                                                  type="text"
                                                  required
                                                  minLength={3}
                                                  maxLength={150}
                                                  className="w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        {state.errors?.name && (
                                                  <p className="text-sm text-red-600 mt-1">
                                                            {state.errors.name[0]}
                                                  </p>
                                        )}
                              </div>

                              {/* Input Deskripsi Produk */}
                              <div>
                                        <label htmlFor="description" className="mb-1 block font-medium">
                                                  Deskripsi
                                        </label>
                                        <textarea
                                                  id="description"
                                                  name="description"
                                                  required
                                                  minLength={10}
                                                  className="w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                                        />
                                        {state.errors?.description && (
                                                  <p className="text-sm text-red-600 mt-1">
                                                            {state.errors.description[0]}
                                                  </p>
                                        )}
                              </div>

                              {/* Input Harga Produk */}
                              <div>
                                        <label htmlFor="price" className="mb-1 block font-medium">
                                                  Harga
                                        </label>
                                        <input
                                                  id="price"
                                                  name="price"
                                                  type="number"
                                                  min="0.01"
                                                  step="0.01"
                                                  required
                                                  className="w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        {state.errors?.price && (
                                                  <p className="text-sm text-red-600 mt-1">
                                                            {state.errors.price[0]}
                                                  </p>
                                        )}
                              </div>

                              {/* Input Kategori Produk */}
                              <div>
                                        <label htmlFor="category" className="mb-1 block font-medium">
                                                  Kategori
                                        </label>
                                        <input
                                                  id="category"
                                                  name="category"
                                                  type="text"
                                                  required
                                                  minLength={2}
                                                  maxLength={100}
                                                  className="w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        {state.errors?.category && (
                                                  <p className="text-sm text-red-600 mt-1">
                                                            {state.errors.category[0]}
                                                  </p>
                                        )}
                              </div>

                              {/* Pesan Error Umum dari Server */}
                              {state.message && !state.success && (
                              <p role="status" aria-live="polite" className="text-sm text-red-600 font-medium">
                                        {state.message}
                              </p>
                              )}

                              {/* Tombol Aksi */}
                              <div className="flex gap-3 pt-2">
                                        <button
                                                  type="submit"
                                                  disabled={pending}
                                                  className="rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50 transition"
                                        >
                                                  {pending ? "Menyimpan..." : "Simpan Produk"}
                                        </button>
                                        <Link 
                                                  href="/products" 
                                                  className="rounded border px-4 py-2 font-medium hover:bg-gray-50 transition"
                                        >
                                                  Batal
                                        </Link>
                              </div>
                    </form>
          );
}