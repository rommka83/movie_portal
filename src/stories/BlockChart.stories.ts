import type { Meta, StoryObj } from '@storybook/react';

import { BlockChart } from '../shared/bisnes/BlockChart';

const meta = {
  title: 'Example/BlockChart',
  component: BlockChart,
  tags: ['autodocs'],
  args: { spectacularity: 50, actors: 50, plot: 50, directing: 50, width: 40 },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BlockChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restrictions: Story = {};
