export const dynamic = "force-dynamic"; // selalu SSR, tidak di-cache

export default function DashboardPage() {
          const now = new Date().toLocaleTimeString("id-ID");
          return (
                    <main className="p-8">
                    <h1 className="text-xl font-bold">Dashboard (SSR)</h1>
                    <p>Waktu server saat permintaan ini diproses: {now}</p>
                    <p className="text-xs text-gray-400">Refresh halaman — waktu akan selalu berubah.</p>
                    </main>
          );
}