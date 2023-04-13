import type { Meta, StoryObj } from '@storybook/react';

import { RightArrow } from '../shared/ui/RightArrow';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/RightArrow',
  component: RightArrow,
  tags: ['autodocs'],
  // argTypes: {
  //   size: 'big',
  // },
} satisfies Meta<typeof RightArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Big: Story = {
  args: { size: 'big' },
};

export const Small: Story = {
  args: { size: 'small' },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
