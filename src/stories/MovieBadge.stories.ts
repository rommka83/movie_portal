import type { Meta, StoryObj } from '@storybook/react';

import { MovieBadge } from '../entities/MovieBadge';
import obj from '../temp/DB/testOneFilm.json';

const meta = {
  title: 'Example/MovieBadge',
  component: MovieBadge,
  tags: ['autodocs'],
  args: {
    width: 100,
    film: obj,
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MovieBadge>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Big: Story = {};
