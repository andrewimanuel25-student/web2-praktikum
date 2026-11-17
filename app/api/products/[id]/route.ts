import { NextResponse } from "next/server";
import { requireApiAdmin } from "@/lib/api-auth";
import { updateProduct, deleteProduct } from "@/lib/products";
import { productSchema } from "@/lib/product-schema";

const updateProductSchema = productSchema.partial();

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const denied = await requireApiAdmin();
  if (denied) {
    return denied;
  }

  const { id } = await context.params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Body harus berupa JSON yang valid" },
      { status: 400 }
    );
  }

  const parsed = updateProductSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const updated = await updateProduct(id, parsed.data);
  if (!updated) {
    return NextResponse.json(
      { error: "Produk tidak ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json(updated);
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const denied = await requireApiAdmin();
  if (denied) {
    return denied;
  }

  const { id } = await context.params;
  const deleted = await deleteProduct(id);

  if (!deleted) {
    return NextResponse.json(
      { error: "Produk tidak ditemukan" },
      { status: 404 }
    );
  }

  return new Response(null, { status: 204 });
}
