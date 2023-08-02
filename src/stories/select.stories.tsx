import type { Meta, StoryObj } from "@storybook/react";
import Select from "../Components/Select";
import { Option } from "../Components/Select";

const options: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta = {
  title: "Component/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: { options },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    options: options,
    width: "200px",
    fontSize: "1rem",
    color: "black",
  },
};

export const Medium: Story = {
  args: {
    options: options,
    width: "400px",
    fontSize: "2rem",
    color: "black",
  },
};

export const Large: Story = {
  args: {
    options: options,
    width: "600px",
    fontSize: "3rem",
    color: "blue",
  },
};
