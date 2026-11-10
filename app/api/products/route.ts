import { NextResponse } from "next/server";
import { getProducts, addProductToStore } from "@/lib/products";
import { productSchema } from "@/lib/product-schema";

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Body harus berupa JSON yang valid" },
      { status: 400 }
    );
  }

  const parsed = productSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const newProduct = await addProductToStore(parsed.data.name, parsed.data.price);
  return NextResponse.json(newProduct, { status: 201 });
}
