import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';

import type { AppRouter } from '@ts-dmmf/trpc';

export const trpc = createTRPCNext<AppRouter>({
  ssr: false,
  config: () => {
    return {
      transformer: superjson,
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      },
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    };
  },
});
