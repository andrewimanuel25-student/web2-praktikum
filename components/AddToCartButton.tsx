//"use client";
import { useState } from "react";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
          const [added, setAdded] = useState(false);
          return (
                    <button
                              onClick={() => setAdded(true)}
                              className={`mt-2 px-3 py-1 rounded text-white ${added ? "bg-green-600" : "bg-blue-600"}`}
                    >
                              
                    {added ? "✓ Ditambahkan" : "Tambah ke Keranjang"}
                    </button>
          );
}