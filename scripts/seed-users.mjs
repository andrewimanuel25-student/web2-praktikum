import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const adminPassword = process.env.ADMIN_PASSWORD;
const customerPassword = process.env.CUSTOMER_PASSWORD;

if (!adminPassword || !customerPassword) {
  throw new Error(
    "ADMIN_PASSWORD dan CUSTOMER_PASSWORD wajib diisi."
  );
}

if (adminPassword.length < 12 || customerPassword.length < 12) {
  throw new Error("Gunakan password minimal 12 karakter.");
}

const adminEmail = (
  process.env.ADMIN_EMAIL ?? "admin@umkm.local"
).trim().toLowerCase();

const customerEmail = (
  process.env.CUSTOMER_EMAIL ?? "customer@umkm.local"
).trim().toLowerCase();

if (adminEmail === customerEmail) {
  throw new Error("Email admin dan customer harus berbeda.");
}

const users = [
  {
    id: randomUUID(),
    name: "Administrator",
    email: adminEmail,
    passwordHash: await bcrypt.hash(adminPassword, 12),
    role: "admin",
  },
  {
    id: randomUUID(),
    name: "Pelanggan Demo",
    email: customerEmail,
    passwordHash: await bcrypt.hash(customerPassword, 12),
    role: "customer",
  },
];

const dataDirectory = path.join(process.cwd(), "data");
const usersFile = path.join(dataDirectory, "users.json");

await mkdir(dataDirectory, { recursive: true });

try {
  await writeFile(
    usersFile,
    JSON.stringify(users, null, 2) + "\n",
    { encoding: "utf8", flag: "wx" }
  );
} catch (error) {
  if (error.code === "EEXIST") {
    throw new Error(
      "data/users.json sudah ada. Proses dibatalkan agar data pengguna tidak tertimpa."
    );
  }
  throw error;
}

console.log("Data pengguna berhasil dibuat.");
console.log(`Email admin: ${adminEmail}`);
console.log(`Email customer: ${customerEmail}`);
console.log("Password tidak dicetak ke terminal.");
