// app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-400 tracking-wide">
          BIODATA MAHASISWA
        </h1>
        
        <div className="space-y-4 text-slate-300">
          <div className="border-b border-slate-700 pb-2">
            <span className="text-xs uppercase text-slate-500 font-bold block tracking-wider">Nama</span>
            <span className="text-lg font-medium text-white">Andrew Imanuel Wizan Maramis</span>
          </div>

          <div className="border-b border-slate-700 pb-2">
            <span className="text-xs uppercase text-slate-500 font-bold block tracking-wider">NIM</span>
            <span className="text-lg font-mono text-emerald-400">52024003</span> {/* Ganti dengan NIM asli */}
          </div>

          <div>
            <span className="text-xs uppercase text-slate-500 font-bold block tracking-wider">Motivasi di Pemrograman Web 2</span>
            <p className="text-sm leading-relaxed mt-1 text-slate-300 italic">
              "Hanya untuk mau mengatahui bagaimana rasa dan sudut pandang dari sisi pengembang pemrograman web."
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-blue-500/20"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
