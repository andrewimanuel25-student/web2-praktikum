import "server-only";
import { auth } from "@/auth";

export async function requireApiAdmin(): Promise<Response | null> {
          const session = await auth();
          
          if (!session?.user) {
                    return Response.json(
                              {
                                        error: {
                                                  code: "UNAUTHENTICATED",
                                                  message: "Anda harus login untuk melakukan tindakan ini.",
                                        },
                              },
                              {
                                        status: 401
                              }
                    );
          }
          
          if (session.user.role !== "admin") {
                    return Response.json(
                              {
                                        error: {
                                                  code: "FORBIDDEN",
                                                  message: "Anda tidak memiliki izin untuk tindakan ini.",
                                        },
                              },
                              {
                                        status: 403
                              }
                    );
          }
          return null;
}