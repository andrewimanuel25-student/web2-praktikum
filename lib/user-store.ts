import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { AppRole } from "./roles";

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: AppRole;
}

const usersFile = path.join(process.cwd(), "data", "users.json");

export async function getUsers(): Promise<StoredUser[]> {
  try {
    const raw = await readFile(usersFile, "utf8");
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is StoredUser =>
        typeof item?.id === "string" &&
        typeof item?.name === "string" &&
        typeof item?.email === "string" &&
        typeof item?.passwordHash === "string" &&
        (item?.role === "admin" || item?.role === "customer")
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function findUserByEmail(
  email: string
): Promise<StoredUser | undefined> {
  const normalized = email.trim().toLowerCase();
  const users = await getUsers();
  return users.find((user) => user.email === normalized);
}
