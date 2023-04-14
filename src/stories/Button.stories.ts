import type { Meta, StoryObj } from '@storybook/react';

import ButtonOrLink from 'shared/ui/ButtonOrLink';
import '../app/styles/index.css';
import '../app/styles/vars.css';

const meta = {
  title: 'Example/Button',
  component: ButtonOrLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonOrLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};
