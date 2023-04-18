import type { Meta, StoryObj } from '@storybook/react';

import { ActorsList } from '../entities/ActorsList';

const meta = {
  title: 'Example/ActorsList',
  component: ActorsList,
  tags: ['autodocs'],
  args: {
    actors: [
      {
        id: '21',
        name: 'Франсуа Клюзе',
        foto: 'https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/120x144/?q=60',
        films: [],
      },
      {
        id: '22',
        name: 'Омар Си ++',
        foto: 'https://thumbs.dfs.ivi.ru/storage29/contents/d/9/9dc20058cee0713134c2c0f00aebea.jpg/1920x1080/?q=60',
        films: [],
      },
      {
        id: '23',
        name: 'Анн Ле Ни-ни',
        foto: 'https://thumbs.dfs.ivi.ru/storage29/contents/4/6/15390a4eb071847bb4a5ea1b0aa6ac.jpg/120x144/?q=60',
        films: [],
      },
      {
        id: '24',
        name: 'Одри Флеро',
        foto: '',
        films: [],
      },
    ],
    reiting: '9,0',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActorsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restrictions: Story = {};
