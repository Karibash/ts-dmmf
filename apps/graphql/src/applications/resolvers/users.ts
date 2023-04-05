import { builder } from '../core/builder';

export const User = builder.simpleObject('User', {
  fields: t => ({
    id: t.id(),
    email: t.string(),
  }),
});

builder.queryType({
  fields: t => ({
    users: t.field({
      type: [User],
      resolve: () => [{ id: '', email: '' }],
    }),
  }),
});

builder.mutationType({
  fields: t => ({
    registerUser: t.field({
      type: User,
      resolve: () => ({ id: '', email: '' }),
    }),
  }),
});
