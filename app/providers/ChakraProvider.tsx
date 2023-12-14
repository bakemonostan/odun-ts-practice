"use client";
import { ChakraProvider } from "@chakra-ui/react";

export function ChakraAppProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
