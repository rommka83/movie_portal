import type { Meta, StoryObj } from '@storybook/react';

import { BannerHover } from '../entities/BannerHover';
import obj from '../temp/DB/testOneFilm.json';

const meta = {
  title: 'Example/BannerHover',
  component: BannerHover,
  tags: ['autodocs'],
  args: { film: obj },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BannerHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hover: Story = {};
