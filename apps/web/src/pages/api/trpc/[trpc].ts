import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@ts-dmmf/trpc';

import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { Context } from '@ts-dmmf/trpc';

const createContext = (_: CreateNextContextOptions): Context => {
  return {};
};

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  batching: {
    enabled: true,
  },
});
