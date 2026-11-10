import TrpcProductList from "@/components/TrpcProductList";

export default function TrpcDemoPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Produk (tRPC)</h1>
      <TrpcProductList />
    </main>
  );
}
