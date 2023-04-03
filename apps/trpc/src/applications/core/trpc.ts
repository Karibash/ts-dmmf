import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

import { prismaMiddleware } from '../middlewares/prismaMiddleware';

import type { Context } from './context';

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const procedure = t.procedure.use(prismaMiddleware);
