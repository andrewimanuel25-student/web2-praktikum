import Link from "next/link";

export default function AksesDitolakPage() {
          return (
                    <main className="mx-auto max-w-xl px-6 py-16">
                              <h1 className="mb-3 text-2xl font-bold"> Akses Ditolak </h1>
                              <p className="mb-6 text-gray-600">Akun Anda tidak memiliki izin untuk melakukan tindakan tersebut. </p>
                              <Link href="/akun" className="inline-block rounded bg-blue-700 px-4 py-2 text-white" > Kembali ke Akun </Link>
                    </main>
          );
}