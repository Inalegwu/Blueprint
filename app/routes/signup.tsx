import { Flex, Text } from "@radix-ui/themes";
import { type ActionFunctionArgs, redirect } from "@remix-run/node";
import bcrypt from "bcrypt";
import { Lock, User } from "lucide-react";
import { ValidatedForm } from "remix-validated-form";
import { Input, Submit } from "../components/form.components";
import prisma from "../server/db.server";
import { userValidator } from "../utils/validations";

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();

  const email = form.get("email")?.toString();
  const password = form.get("password")?.toString();

  if (!password || !email) throw new Error("No Email or Password sent");

  console.log({ email, password });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      email,
      hashedPassword,
    },
  });

  console.log({ user });

  throw redirect("/login");
}

export default function Component() {
  return (
    <Flex
      align="center"
      justify="center"
      className="w-full h-screen bg-slate-50 flex items-center justify-center"
    >
      <ValidatedForm
        validator={userValidator}
        method="post"
        className="w-4/6 h-4/6 rounded-md bg-white"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="3"
          className="w-full h-full"
        >
          <Input
            className="outline-none w-3/6"
            label="Email"
            name="email"
            slot={() => <User size={10} />}
          />
          <Input
            className="outline-none w-3/6"
            label="Password"
            name="password"
            type="password"
            slot={() => <Lock size={10} />}
          />
          <Submit className="cursor-pointer w-3/6">
            <Text size="2">Sign Up</Text>
          </Submit>
        </Flex>
      </ValidatedForm>
    </Flex>
  );
}
