import type { Meta, StoryObj } from '@storybook/react';

import { MovieBadge } from '../entities/MovieBadge';

const meta = {
  title: 'Example/MovieBadge',
  component: MovieBadge,
  tags: ['autodocs'],
  args: {
    id: 'hbhbhb',
    width: 100,
    name: { ru: 'Правосудие', en: 'Justice' },
    img: 'https://thumbs.dfs.ivi.ru/storage29/contents/e/5/146ec3d64b497632c03c2bd5a72167.jpg/234x360/?q=85',
    price: true,
    ageRestrictions: 22,
    year: '2222',
    country: 'Таджикистан',
    duration: '400 сезонов',
    genre: { ru: ['string'], en: ['string'] },
    reiting: {
      grade: '9,2',
      spectacularity: 30,
      actors: 10,
      plot: 50,
      directing: 80,
    },
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MovieBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {};
