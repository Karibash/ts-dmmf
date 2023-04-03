import { PrismaClient, runInScope, runInTransactionScope } from '@ts-dmmf/database';

import { t } from '../core/trpc';

const client = new PrismaClient();

export const prismaMiddleware = t.middleware(async ({ next, type }) => {
  if (type === 'mutation') {
    return await runInTransactionScope(client, () => next());
  }
  return runInScope(client, () => next());
});
