import Button from "../Components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    backgroundColor: "Red",
    size: "small",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    backgroundColor: "Blue",
    size: "small",
  },
};

export const PrimaryFullWidth: Story = {
  args: {
    label: "Button",
    backgroundColor: "Red",
    size: "large",
  },
};

export const SecondaryFullWidth: Story = {
  args: {
    label: "Button",
    backgroundColor: "Blue",
    size: "large",
  },
};
