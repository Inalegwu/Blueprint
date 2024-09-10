import { Flex } from "@radix-ui/themes";
import { Outlet } from "@remix-run/react";

export default function EditorPage() {
  return (
    <Flex className="w-full h-screen bg-zinc-50">
      editor
      <Outlet />
    </Flex>
  );
}
