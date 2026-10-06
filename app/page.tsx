import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-black mb-4 tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Selamat Datang di Web Praktikum 2
        </h1>
        <p className="text-slate-400 mb-8">
          Proyek web ini dibangun menggunakan Next.js dan Tailwind CSS sebagai bagian dari tugas mata kuliah.
        </p>
        
        <Link 
          href="/about" 
          className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-blue-900/40"
        >
          Lihat Halaman About →
        </Link>
      </div>
    </div>
  );
}
