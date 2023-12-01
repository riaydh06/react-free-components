import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TablePrimary from "./TablePrimary";

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
  title: "TablePrimary",
  component: TablePrimary,
  decorators: [
    (Story) => (
      <div style={{ width: "95vw" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TablePrimary<DataProps>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    columns: [
      {
        label: "Id",
        key: "id",
      },
      {
        key: "first_name",
        renderHeader: <div style={{ color: "red" }}>Full Name</div>,
        renderData: (data: any) => (
          <div>{data.first_name + " " + data.last_name}</div>
        ),
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
        renderData: (data: any) => {
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
                    borderRadius: "1rem",
                    padding: "0.25rem 1rem",
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
        first_name: "John",
        last_name: "Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        id: "2",
        first_name: "Jim",
        last_name: "Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        id: "3",
        first_name: "Joe",
        last_name: "Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ],
  },
};
