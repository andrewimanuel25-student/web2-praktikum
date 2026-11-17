// import "server-only";
// import { redirect } from "next/navigation";
// import { auth } from "@/auth";
// import type { AppRole } from "@/lib/roles";

// export async function getCurrentSession() {
//   return auth();
// }

// export async function requireAuth(redirectTo?: string) {
//   const session = await auth();
//   if (!session?.user) {
//     const callbackUrl = redirectTo
//       ? `?callbackUrl=${encodeURIComponent(redirectTo)}`
//       : "";
//     redirect(`/login${callbackUrl}`);
//   }
//   return session;
// }

// export async function requireRole(
//   allowedRoles: readonly AppRole[],
//   redirectTo?: string
// ) {
//   const session = await requireAuth(redirectTo);
//   if (!allowedRoles.includes(session.user.role)) {
//     redirect("/forbidden");
//   }
//   return session;
// }


import "server-only";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function requireUser() {
          const session = await auth();
          
          if (!session?.user) {
                    redirect("/login");
          }
                    
          return session;
}

export async function requireAdmin() {
          const session = await requireUser();
          
          if (session.user.role !== "admin") {
                    redirect("/akses-ditolak");
          }
          return session;
}