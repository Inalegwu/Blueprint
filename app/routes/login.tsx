import { Flex, Text } from "@radix-ui/themes";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Lock, User } from "lucide-react";
import { ValidatedForm } from "remix-validated-form";
import { Input, Submit } from "../components/form.components";
import { authenticator } from "../server/auth.server";
import { userValidator } from "../utils/validations";

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate("user-auth", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });
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
            <Text size="2">Login</Text>
          </Submit>
        </Flex>
      </ValidatedForm>
    </Flex>
  );
}
