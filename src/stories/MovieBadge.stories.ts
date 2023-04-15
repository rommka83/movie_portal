import type { Meta, StoryObj } from '@storybook/react';

import { MovieBadge } from '../entries/MovieBadge';

const meta = {
  title: 'Example/MovieBadge',
  component: MovieBadge,
  tags: ['autodocs'],
  // args: { size: 'big', color: 'black' },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MovieBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {};
