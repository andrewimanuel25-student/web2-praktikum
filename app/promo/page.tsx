// app/promo/page.tsx
// Tanpa export const revalidate dan tanpa force-dynamic = SSG Murni!

export default function PromoPage() {
  const buildTime = new Date().toLocaleTimeString("id-ID");

  return (
    <main className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md border border-amber-200">
        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          SSG Murni
        </span>
        <h1 className="text-2xl font-bold text-gray-900 mt-3">Halaman Promo Spesial Hoki 🌟</h1>
        <p className="text-gray-600 text-sm mt-2">
          Halaman ini di-pra-render sepenuhnya saat proses kompilasi awal (*build time*).
        </p>
        
        <div className="mt-6 p-4 bg-amber-50 rounded-lg text-left border border-dashed border-amber-300">
          <p className="text-xs text-amber-700 font-medium">Waktu Pembuatan Halaman Statis:</p>
          <p className="text-lg font-mono font-bold text-amber-900">{buildTime}</p>
          <p className="text-[10px] text-gray-400 mt-1">
            *Waktu di atas tidak akan pernah berubah saat di-refresh di browser produksi.
          </p>
        </div>
      </div>
    </main>
  );
}