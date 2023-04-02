import { createId } from '@paralleldrive/cuid2';
import { createStep } from '@ts-dmmf/dmmf';
import * as E from 'fp-ts/Either';

import { toUserId } from '../types/UserId';
import { toHashedUserPassword } from '../types/UserPassword';

import type { RegistableUser, RegisteredUser } from '../types/User';
import type { Step } from '@ts-dmmf/dmmf';

export type RegisterUserStep = Step<RegistableUser, E.Either<Error, RegisteredUser>>;

export const registerUserStep: RegisterUserStep = createStep((input) => {
  return E.right({
    type: 'RegisteredUser',
    id: toUserId(createId()),
    email: input.email,
    password: toHashedUserPassword(input.password),
  });
}, {});
