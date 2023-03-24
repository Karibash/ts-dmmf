import { drop } from '@mswjs/data';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { db } from '../src/mocks/data';
import { seed } from '../src/mocks/data/seeds';
import { handlers } from '../src/mocks/handlers';
import App from '../src/pages/_app';

import type { PageComponent } from '../src/pages/_app';
import type { Preview } from '@storybook/react';

initialize();

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers,
    },
  },
  decorators: [
    mswDecorator,
    (story, { component }) => {
      const page: PageComponent = story;
      if (component && 'getLayout' in component) {
        page.getLayout = component.getLayout as PageComponent['getLayout'];
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <App Component={page} pageProps={{}} />;
    },
  ],
  loaders: [
    // eslint-disable-next-line @typescript-eslint/require-await
    async () => {
      drop(db);
      seed(db);
      return {};
    },
  ],
};

export default preview;
