"use client";

import { trpc } from "@/lib/trpc";

export default function TrpcProductList() {
  const { data, isLoading } = trpc.getAll.useQuery();

  if (isLoading) return <p>Memuat...</p>;

  return (
    <ul>
      {data?.map((p) => (
        <li key={p.id}>
          {p.name} — Rp{p.price.toLocaleString("id-ID")}
        </li>
      ))}
    </ul>
  );
}
