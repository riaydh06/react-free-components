import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import Text from ".";
import theme from "../theme";
import React from "react";
import { ColorsType, ShadesType } from "../theme/types";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme()}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    color: ColorsType.blue,
    shade: ShadesType.base,
  },
};
export const Secondary: Story = {
  args: {
    color: ColorsType.green,
    shade: ShadesType.base,
  },
};
