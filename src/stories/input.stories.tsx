import type { Meta, StoryObj } from "@storybook/react";
import Input from "../Components/Input";

const meta = {
  title: "Component/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { defaultValue: "placeholder text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallInput: Story = {
  args: {
    size: "small",
    value: "",
    fontSize: "15px",
    fontColor: "black",
  },
};

export const MediumInput: Story = {
  args: {
    size: "medium",
    value: "",
    fontSize: "18px",
    fontColor: "black",
  },
};

export const LargeInput: Story = {
  args: {
    size: "large",
    value: "",
    fontSize: "22px",
    fontColor: "black",
  },
};

export const InputWithLabel: Story = {
  args: {
    size: "large",
    value: "",
    label: "Please Input Text",
    fontSize: "22px",
    fontColor: "blue",
  },
};
