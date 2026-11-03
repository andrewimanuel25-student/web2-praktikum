import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
          const categories = [
                    {
                              name: "Elektronik",
                              products: [
                                        {
                                                  name: "Mouse Wireless",
                                                  description: "Mouse nirkabel untuk kebutuhan sehari-hari.",
                                                  price: "125000.00",
                                        },
                                        {
                                                  name: "Keyboard USB",
                                                  description: "Keyboard USB untuk komputer dan laptop.",
                                                  price: "175000.00",
                                        },
                              ],
                    },

                    {
                              name: "Aksesori",
                              products: [
                                        {
                                                  name: "Tas Laptop",
                                                  description: "Tas laptop untuk kebutuhan kerja dan kuliah.",
                                                  price: "220000.00",
                                        },
                              ],
                    },
          ];

          for (const item of categories) {
                    const category = await prisma.category.upsert({
                              where: { name: item.name },
                              update: {},
                              create: { name: item.name },
                    });

                    for (const product of item.products) {
                              const existing = await prisma.product.findFirst({
                                        where: {
                                                  categoryId: category.id,
                                                  name: product.name,
                                        },
                              });

                              if (!existing) {
                                        await prisma.product.create({
                                                  data: {
                                                            name: product.name,
                                                            description: product.description,
                                                            price: product.price,
                                                            categoryId: category.id,
                                                  },
                                        });
                              }
                    }
          }
}

main()
          .catch((error) => {
                    console.error(error);
                    process.exitCode = 1;
          })
          .finally(async () => {
                    await prisma.$disconnect();
          });