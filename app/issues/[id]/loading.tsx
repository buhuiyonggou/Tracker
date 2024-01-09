import { Flex, Card } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";
import React from "react";

const LoadingDetailPage = () => {
  return (
    <div>
      <Skeleton className="max-w-xl" />
      <Flex gap={"3"} my={"3"}>
        <Skeleton width="5rem" />
        <Skeleton width="5rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default LoadingDetailPage;
