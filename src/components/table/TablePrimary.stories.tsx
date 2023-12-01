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
      <div style={{ width: "90vw" }}>
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
        label: "First Name",
        key: "first_name",
      },
      {
        label: "Last Name",
        key: "last_name",
      },
      {
        key: "first_name",
        renderHeader: <div style={{ color: "red" }}>Full Name</div>,
        renderData: (data: any) => (
          <div style={{ whiteSpace: "nowrap" }}>
            {data.first_name + " " + data.last_name}
          </div>
        ),
      },
      {
        label: "Age",
        key: "age",
      },
      {
        label: "Address",
        key: "address",
        renderData: (data: any) => (
          <div style={{ whiteSpace: "nowrap" }}>{data.address}</div>
        ),
      },
      {
        label: "Phone",
        key: "phone",
        renderData: (data: any) => (
          <div style={{ whiteSpace: "nowrap" }}>{data.phone}</div>
        ),
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
        phone: "000 222 3333 444",
        tags: [
          "nice",
          "developer",
          "loser",
          "cool",
          "teacher",
          "nice",
          "developer",
          "loser",
          "cool",
          "teacher",
        ],
      },
      {
        id: "2",
        first_name: "Jim",
        last_name: "Green",
        age: 42,
        address: "London No. 1 Lake Park",
        phone: "000 222 3333 444",
        tags: ["loser"],
      },
      {
        id: "3",
        first_name: "Joe",
        last_name: "Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        phone: "000 222 3333 444",
        tags: ["cool", "teacher"],
      },
    ],
  },
};
