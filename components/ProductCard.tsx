"use client";
import { Product } from "@/types/product";

type ProductCardProps = {
          product: Product;
          onAddToCart?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
          return (
                    <div className="border rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">Rp{product.price.toLocaleString("id-ID")}</p>
                    <button
                    onClick={() => onAddToCart?.(product)}
                    className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
                    >
                    Tambah ke Keranjang
                    </button>
                    </div>
          );
}