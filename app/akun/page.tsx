import { requireUser } from "@/lib/auth-guard";
import LogoutButton from "@/components/LogoutButton";

export default async function AkunPage() {
          const session = await requireUser();
          
          return (
                    <main className="mx-auto max-w-2xl px-6 py-12">
                              <h1 className="mb-6 text-2xl font-bold"> Akun Pengguna </h1>
                              <div className="space-y-2 rounded border p-5">
                                        <p>
                                                  <strong>Nama:</strong>
                                                  
                                                  {" "} {session.user.name ?? "-"}
                                        </p>
                                        
                                        <p>
                                                  <strong>Email:</strong>
                                                  {" "} {session.user.email ?? "-"}
                                        </p>

                                        <p>
                                                  <strong>Peran:</strong>
                                                  {" "} {session.user.role}
                                        </p>
                              </div>
                              
                              {session.user.role === "admin" && (
                                        <p className="my-4"> Anda memiliki hak untuk mengelola produk. </p>
                              )}

                              <div className="mt-6">
                                        <LogoutButton />
                              </div>
                    </main>
          );
}