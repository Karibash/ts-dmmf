import { createTRPCMsw } from 'msw-trpc';
import superjson from 'superjson';

import type { AppRouter } from '@ts-dmmf/trpc';

export const trpcMsw = createTRPCMsw<AppRouter>({
  transformer: {
    input: superjson,
    output: superjson,
  },
});
