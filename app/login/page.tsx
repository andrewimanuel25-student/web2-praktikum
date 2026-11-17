import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { loginAction } from "./actions";

type LoginPageProps = {
          searchParams: Promise<{
                    error?: string;
          }>;
};

export default async function LoginPage({
          searchParams,
}: LoginPageProps) {
          const session = await auth();
          
          if (session?.user) {
                    redirect("/akun");
          }
          
          const params = await searchParams;
          const hasError = params.error === "invalid";

          return (
                    <main className="mx-auto max-w-md px-6 py-12">
                              <h1 className="mb-2 text-2xl font-bold"> Login UMKM Digital Store </h1>
                              <p className="mb-6 text-sm text-gray-600"> Masuk untuk mengakses akun Anda. </p>
                              
                              {hasError && (
                                        <p role="alert" className="mb-4 rounded border border-red-300 p-3 text-sm text-red-700" > Login gagal. Periksa email dan password Anda. </p>
                              )}
                              
                              <form action={loginAction} className="space-y-4">
                                        <div>
                                                  <label htmlFor="email" className="mb-1 block font-medium" > Email </label>
                                                  <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className="w-full rounded border px-3 py-2" />
                                        </div>
                                        
                                        <div>
                                                  <label htmlFor="password" className="mb-1 block font-medium" > Password </label>
                                                  <input id="password" name="password" type="password" autoComplete="current-password" required maxLength={128} className="w-full rounded border px-3 py-2" />
                                        </div>
                                        
                                        <button type="submit" className="w-full rounded bg-blue-700 px-4 py-2 font-medium text-white" > Login </button>
                              </form>
                    </main>
          );
}