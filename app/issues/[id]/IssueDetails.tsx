import { IssueStatusBadge } from "@/app/components";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import ReactMarkDown from "react-markdown";
import React from "react";
import { Issue } from "@prisma/client";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading as="h2">{issue.title}</Heading>
      <Flex gap={"3"} my={"3"}>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="4">
        <ReactMarkDown>{issue.description}</ReactMarkDown>
      </Card>
    </>
  );
};

export default IssueDetails;
