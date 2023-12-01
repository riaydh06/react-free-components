import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Table from "./TablePrimary";

interface DataProps {
  id: string;
  name?: string;
  age?: number;
  address?: string;
  tags?: string[];
  roles?: string;
  date?: string;
  permissions?: string[];
}

const meta: any = {
  title: "Atoms/Table",
  component: Table,
  decorators: [
    (Story) => (
      <div style={{ width: "95vw" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table<DataProps>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    columns: [
      {
        label: "Name",
        key: "name",
      },
      {
        label: "Age",
        key: "age",
      },
      {
        label: "Address",
        key: "address",
      },
      {
        label: "Tags",
        key: "tags",
        render: (data: any) => {
          console.log(data);
          return (
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              {data?.tags?.map((item: string) => (
                <div
                  style={{
                    background: "red",
                    border: "1px solid black",
                    borderRadius: "0.5rem",
                    padding: "0.25rem",
                    color: "white",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          );
        },
      },
    ],
    rows: [
      {
        id: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        id: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        id: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ],
  },
};
