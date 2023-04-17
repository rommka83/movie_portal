import type { Meta, StoryObj } from '@storybook/react';

import { BannerHover } from '../entities/BannerHover';

const meta = {
  title: 'Example/BannerHover',
  component: BannerHover,
  tags: ['autodocs'],
  args: {
    grade: '5,5',
    spectacularity: 50,
    actors: 50,
    plot: 50,
    directing: 50,
    year: '2222',
    country: 'Узбекистан',
    genre: 'Триллер',
    duration: '400 сезонов',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BannerHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hover: Story = {};
