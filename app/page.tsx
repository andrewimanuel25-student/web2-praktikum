// import SiteHeader from "@/components/siteHeader";
// import ProductCatalog from "@/components/ProductCatalog";

// export default function Home() {
//           return (
//                     <main className="min-h-screen bg-slate-50">
//                               <SiteHeader />
//                                         <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
//                                         <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
//                                                   <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
//                                                             Dukung produk lokal
//                                                   </p>

//                                                   <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
//                                                             Temukan Produk Pilihan dari UMKM Lokal
//                                                   </h1>

//                                                   <p className="mt-5 max-w-2xl leading-7 text-blue-50">
//                                                             Jelajahi berbagai produk pilihan dari pelaku usaha lokal
//                                                             melalui katalog digital yang praktis dan mudah digunakan.
//                                                   </p>

//                                                   <a
//                                                   href="#katalog"
//                                                   className="mt-7 inline-block rounded-lg bg-white px-5 py-3 text-sm font-semibold
//                                                   text-blue-700 transition hover:bg-blue-50"
//                                                   >
//                                                             Jelajahi Katalog
//                                                   </a>
//                                         </div>
//                                         </section>

//                                         <div className="mx-auto max-w-6xl px-6">
//                                                   <ProductCatalog />
//                                         </div>

//                                         <footer className="mt-10 border-t border-slate-200 bg-white">
//                                                   <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
//                                                             UMKM Digital Store — Proyek Praktikum Pemrograman Web 2
//                                                   </div>
//                                         </footer>
//                     </main>
//           );
// }

import Link from "next/link";

export default function HomePage() {
          return (
                    <main className="mx-auto max-w-5xl p-6">
                              <h1 className="text-4xl font-bold">
                                        UMKM Digital Store
                              </h1>

                              <p className="my-4">
                                        Temukan produk makanan, minuman, dan produk lokal
                                        dari pelaku UMKM.
                              </p>

                              <Link
                              href="/produk"
                              className="inline-block rounded bg-blue-700 px-4 py-2 text-white"
                              >
                                        Jelajahi produk
                              </Link>
                    </main>
          );
}