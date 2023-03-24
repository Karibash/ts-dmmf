import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

it('Render Hello World !', () => {
  render(<Default />);

  expect(screen.getByText('Hello')).toBeInTheDocument();
  expect(screen.getByText('World !')).toBeInTheDocument();
});
