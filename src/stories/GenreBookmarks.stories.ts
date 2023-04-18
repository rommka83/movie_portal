import type { Meta, StoryObj } from '@storybook/react';

import { GenreBookmarks } from '../shared/bisnes/GenreBookmarks';

const meta = {
  title: 'Example/GenreBookmarks',
  component: GenreBookmarks,
  tags: ['autodocs'],
  args: { ganre: ['Сериалы', 'Ужасы', 'Комедии', 'Боевики'] },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GenreBookmarks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bookmarks: Story = {};
