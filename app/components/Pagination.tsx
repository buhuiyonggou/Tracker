"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  TotalItems: number;
  PageSize: number;
  CurrentPage: number;
}

const Pagination = ({ TotalItems, PageSize, CurrentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(TotalItems / PageSize);

  if (totalPages === 1) return null;

  const changePage = (page: number) => {
    // like a string builder
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {CurrentPage} of {totalPages}
      </Text>
      <Button
        color="gray"
        variant="soft"
        disabled={CurrentPage === 1}
        onClick={() => changePage(1)}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={CurrentPage === 1}
        onClick={() => changePage(CurrentPage - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={CurrentPage === totalPages}
        onClick={() => changePage(CurrentPage + 1)}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={CurrentPage === totalPages}
        onClick={() => changePage(totalPages)}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
