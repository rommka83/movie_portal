import type { Meta, StoryObj } from '@storybook/react';
import { ActorsList } from '../entities/ActorsList';
import film from './testOneFilm.json';

const meta = {
  title: 'Example/ActorsList',
  component: ActorsList,
  tags: ['autodocs'],
  args: {
    actors: film.persons,
    reiting: 9.0,
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActorsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restrictions: Story = {};
