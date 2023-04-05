import { createYoga } from 'graphql-yoga';

import { builder } from './core/builder';

import './resolvers/users';

export type CreateServerOptions = Omit<Parameters<typeof createYoga>[0], 'schema'>;

export const createServer = (options: CreateServerOptions) => createYoga({
  ...options,
  schema: builder.toSchema(),
});
