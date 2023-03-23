import TopPage from './index';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: TopPage,
  tags: [
    'autodocs',
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof TopPage>;

type Story = StoryObj<typeof TopPage>;

export const Default: Story = {
};
