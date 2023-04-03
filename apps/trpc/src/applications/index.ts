import { t } from './core/trpc';
import { usersRouter } from './routers/users';

export type { Context } from './core/context';

export const appRouter = t.router({
  usersRouter,
});

export type AppRouter = typeof appRouter;
