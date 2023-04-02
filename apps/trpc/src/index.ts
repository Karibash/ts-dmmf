import { t } from './applications/core/trpc';
import { usersRouter } from './applications/routers/users';

export type { Context } from './applications/core/context';

export const appRouter = t.router({
  usersRouter,
});

export type AppRouter = typeof appRouter;
