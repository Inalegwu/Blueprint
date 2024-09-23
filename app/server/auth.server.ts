import bcrypt from "bcrypt";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import prisma from "./db.server";
import { sessionStorage } from "./session.server";

export const authenticator = new Authenticator<User>(sessionStorage, {
  throwOnError: true,
});

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();

    if (!email || !password) {
      console.log("failed validation check");
      throw new Error("Please Enter an Email/Password");
    }

    console.log({ email, password });

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      console.log("failed user chechk");
      throw new Error("Invalid User Email");
    }

    console.log({ user });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const passwordsMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordsMatch) {
      console.log("failed pass check");
      throw new Error("Invalid Password");
    }

    return user;
  }),
  "user-auth",
);
