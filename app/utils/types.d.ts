import type { User as DBUser } from "@prisma/client";

declare global {
  type User = Omit<Omit<DBUser, "createdAt">, "updatedAt">;
}
