import { Flex, Heading } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Blueprint" },
    {
      name: "description",
      content: "The best way to get a remix project started",
    },
  ];
};

export default function Index() {
  return (
    <Flex direction="column" className="font-sans bg-zinc-50 w-full h-screen">
      <Heading>Blueprint</Heading>
    </Flex>
  );
}
