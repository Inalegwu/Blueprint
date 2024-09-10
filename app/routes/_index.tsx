import { Flex, Heading, Text } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Studioso" },
    {
      name: "description",
      content: "Create,Edit and Collaborate on PDF Files with Ease",
    },
  ];
};

export default function Index() {
  return (
    <Flex direction="column" className="font-sans bg-zinc-50 w-full h-screen">
      <Flex className="px-3 py-3" align="center" justify="between">
        <Link to="/">
          <Text size="3" weight="medium">
            Studioso
          </Text>
        </Link>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Heading size="8">Studioso</Heading>
      </Flex>
    </Flex>
  );
}
