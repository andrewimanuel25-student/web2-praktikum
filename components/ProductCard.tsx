// import type { Product } from "@/types/product";

// type ProductCardProps = 
// {
//           product: Product;
// };

// export default function ProductCard({product,}: ProductCardProps)
// {
//           const formattedPrice = new Intl.NumberFormat(
//                     "id-ID",
//                     {
//                               style: "currency",
//                               currency: "IDR",
//                               maximumFractionDigits: 0,
//                     }
//           ).format(product.price);

//           return (
//                     <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5
//                     shadow-sm transition hover:-translate-y-1 hover:shadow-md">

//                               <span className="mb-3 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-
//                               blue-700">
//                               {product.category}
//                               </span>

//                               <h3 className="text-lg font-semibold text-slate-900">
//                               {product.name}
//                               </h3>

//                               <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
//                               {product.description}
//                               </p>

//                               <p className="mt-5 border-t border-slate-100 pt-4 text-lg font-bold text-blue-700">
//                               {formattedPrice}
//                               </p>
//                     </article>
//           );
// }

import Link from "next/link";
import type { Product } from "@/lib/product-store";

export default function ProductCard({product,}: {product: Product;})
{
          return (
                    <article className="rounded-lg border p-4">
                              <h2 className="text-lg font-bold">
                                        {product.name}
                              </h2>

                              <p className="my-2 text-sm text-gray-600">
                                        {product.description}
                              </p>

                              <p className="font-semibold">
                                        {product.price.toLocaleString("id-ID", {
                                                  style: "currency",
                                                  currency: "IDR",
                                                  maximumFractionDigits: 0,
                                        })}
                              </p>

                              <p className="mt-1 text-sm">
                                        Kategori: {product.category}
                              </p>

                              <Link
                              href={`/produk/${product.id}`}
                              className="mt-3 inline-block text-blue-700 underline"
                              >
                                        Lihat detail
                              </Link>
                    </article>
          );
}