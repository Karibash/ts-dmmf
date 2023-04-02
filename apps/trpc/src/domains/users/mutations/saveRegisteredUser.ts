import { createMutation } from '@ts-dmmf/dmmf';
import * as E from 'fp-ts/Either';

import type { RegisteredUser } from '../types/User';
import type { Mutation } from '@ts-dmmf/dmmf';

export type SaveRegisteredUserMutation = Mutation<RegisteredUser, E.Either<Error, RegisteredUser>>;

export const saveRegisteredUserMutation: SaveRegisteredUserMutation = createMutation((user) => {
  // TODO: Save to database
  return E.right(user);
});
