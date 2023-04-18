import type { Meta, StoryObj } from '@storybook/react';

import { ShortDescription } from '../shared/bisnes/ShortDescription';

const meta = {
  title: 'Example/ShortDescription',
  component: ShortDescription,
  tags: ['autodocs'],
  args: {
    year: '2222',
    country: 'Россия',
    genre: 'Фэнтези',
    duration: '90 минут',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ShortDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description: Story = {};
