import { z } from "zod";
import { publicProcedure, router } from "@/server/trpc";
import { getProducts, addProductToStore } from "@/lib/products";
import { productSchema } from "@/lib/product-schema";

export const productRouter = router({
  getAll: publicProcedure.query(() => getProducts()),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const products = await getProducts();
      return products.find((p) => p.id === input.id) ?? null;
    }),
  addProduct: publicProcedure
    .input(productSchema)
    .mutation(({ input }) => addProductToStore(input.name, input.price)),
});

export type AppRouter = typeof productRouter;
