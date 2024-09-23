import { withZod } from "@rvf/zod";
import { z } from "zod";

const user = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

export const userValidator = withZod(user);
