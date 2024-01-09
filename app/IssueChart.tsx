"use client";

import { Card } from "@radix-ui/themes";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface Props {
  open: number;
  in_progress: number;
  closed: number;
}

const IssueChart = ({ open, in_progress, closed }: Props) => {
  const data = [
    { name: "Open", value: open },
    { name: "In Progress", value: in_progress },
    { name: "Closed", value: closed },
  ];

  return (
    <Card mt="4">
      <ResponsiveContainer width="90%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="value"
            style={{ fill: "var(--mauve-a9)" }}
            barSize={60}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
