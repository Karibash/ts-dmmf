import App from '../src/pages/_app';

import type { PageComponent } from '../src/pages/_app';
import type { Preview } from '@storybook/react';

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
  },
  decorators: [
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
};

export default preview;
