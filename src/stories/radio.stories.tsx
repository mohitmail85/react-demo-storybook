import type { Meta, StoryObj } from "@storybook/react";
import Radio from "../Components/Radio";
import { Option } from "../Components/Radio";

const options: Option[] = [
  { value: "1", label: "Yes" },
  { value: "0", label: "No" },
];

const meta = {
  title: "Component/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: { options },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    options: options,
  },
};

// export const Medium: Story = {
//   args: {
//     options: options,
//     width: "400px",
//     fontSize: "2rem",
//     color: "black",
//   },
// };

// export const Large: Story = {
//   args: {
//     options: options,
//     width: "600px",
//     fontSize: "3rem",
//     color: "blue",
//   },
// };
