"use client";
import Spinner from "@/app/components/Spinner";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = ({ IssueId }: { IssueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteIssue = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/issues/${IssueId}`);
      router.push("/issues/list");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Do you want to delete this issue? This action cannot be undone.
          </AlertDialog.Description>
          <Flex className="mt-4" gap="4">
            <AlertDialog.Cancel>
              <Button variant="soft">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action color="red">
              <Button disabled={isDeleting} onClick={deleteIssue}>
                Delete
                {isDeleting && <Spinner />}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            Something went wrong.
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            onClick={() => setError(false)}
            className="mt-4"
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
