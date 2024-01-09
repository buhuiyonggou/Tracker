import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  return (
    // legacyBehavior is required to prevent a warning in the console
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
