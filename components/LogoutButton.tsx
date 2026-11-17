import { logoutAction } from "@/app/akun/actions";

export default function LogoutButton() {
          return (
                    <form action={logoutAction}>
                              <button type="submit" className="rounded bg-gray-800 px-4 py-2 text-white" > Logout </button>
                    </form>
          );
}