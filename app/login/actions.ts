"use server";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export async function loginAction(formData: FormData) {
          const emailValue = formData.get("email");
          const passwordValue = formData.get("password");

          if (
                    typeof emailValue !== "string" ||
                    typeof passwordValue !== "string" ||
                    !emailValue.trim() || !passwordValue
          ) {
                    redirect("/login?error=invalid");
          }
          
          try {
                    await signIn("credentials", {
                              email: emailValue.trim(),
                              password: passwordValue,
                              redirectTo: "/akun",
                    });
          } catch (error) {
                    if (error instanceof AuthError) {
                              redirect("/login?error=invalid");
                    } throw error;
          }
}