import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};
