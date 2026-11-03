"use client";

import { useActionState } from "react";
import Link from "next/link";
import { updateProductAction, type ProductActionState, } from "@/app/produk/actions";
import type { Product } from "@/lib/product-store";

const initialState: ProductActionState = {
          success: false, message: "",
};

export default function ProductEditForm({ product, }: { product: Product; }) {
          const action = updateProductAction.bind(null, product.id);
          const [state, formAction, pending] = useActionState( action, initialState, );
          
          if (state.success) {
                    return (
                              <div role="status" className="space-y-4">
                                        <p>{state.message}</p>
                                        <Link href="/products" className="underline">
                                                  Kembali ke katalog produk
                                        </Link>
                              </div>
                    );
          }
          
          return (
                    <form action={formAction} className="space-y-4">
                              <div>
                                        <label htmlFor="name" className="mb-1 block"> Nama produk </label>
                                        <input
                                                  id="name"
                                                  name="name"
                                                  required
                                                  minLength={3}
                                                  maxLength={150}
                                                  defaultValue={product.name}
                                                  className="w-full
                                                  rounded border p-2" />
                                                  
                                                  <p className="text-sm text-red-600"> {state.errors?.name?.[0]} </p>
                              </div>
                              
                              <div>
                                        <label htmlFor="description" className="mb-1 block"> Deskripsi </label>
                                        <textarea
                                                  id="description"
                                                  name="description"
                                                  required
                                                  minLength={10}
                                                  defaultValue={product.description}
                                                  className="w-full
                                                  rounded border p-2" />
                                        
                                        <p className="text-sm text-red-600"> {state.errors?.description?.[0]} </p>
                              </div>
                              
                              <div>
                                        <label htmlFor="price" className="mb-1 block"> Harga </label>
                                        <input
                                                  id="price"
                                                  name="price"
                                                  type="number"
                                                  min="0.01"
                                                  step="0.01"
                                                  required
                                                  defaultValue={product.price}
                                                  className="w-full
                                                  rounded border p-2" />
                                        <p className="text-sm text-red-600"> {state.errors?.price?.[0]} </p>
                              </div>
                              
                              <div>
                                        <label htmlFor="category" className="mb-1 block"> Kategori </label>
                                        <input
                                                  id="category"
                                                  name="category"
                                                  required
                                                  minLength={2}
                                                  maxLength={100}
                                                  defaultValue={product.category}
                                                  className="w-full
                                                  rounded border p-2" />
                                        <p className="text-sm text-red-600"> {state.errors?.category?.[0]} </p>
                              </div>
                              
                              <p role="status" aria-live="polite"> {state.message} </p>
                              
                              <div className="flex gap-3">
                                        <button
                                                  type="submit" disabled={pending}
                                                  className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
                                        >
                                                            {pending ? "Menyimpan..." : "Simpan Perubahan"}
                                        </button>
                                        
                                        <Link href="/products" className="rounded border px-4 py-2"> Batal </Link>
                                        
                              </div>
                    </form>
          );
}