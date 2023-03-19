import { t } from './core/trpc';

export type { Context } from './core/context';

export const appRouter = t.router({});

export type AppRouter = typeof appRouter;
