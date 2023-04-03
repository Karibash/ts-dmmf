import { AsyncLocalStorage } from 'async_hooks';

import type { PrismaClient as NativePrismaClient } from '@prisma/client';

export * from '@prisma/client';

type PrismaClient = Omit<NativePrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>;

const storage = new AsyncLocalStorage<PrismaClient>();

export const getClient = (): PrismaClient => {
  const client = storage.getStore();
  if (client) return client;

  throw Error('');
};

export const runInScope = <T>(client: NativePrismaClient, callback: () => T): T => {
  return storage.run(client, callback);
};

export const runInTransactionScope = async <T>(client: NativePrismaClient, callback: () => Promise<T>): Promise<T> => {
  return await client.$transaction(async connection => {
    return await storage.run(connection, callback);
  });
};
