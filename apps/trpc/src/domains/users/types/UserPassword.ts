import { createNominal } from '@ts-dmmf/dmmf';
import { hashSync } from 'bcrypt';
import { z } from 'zod';

import type { Nominal } from '@ts-dmmf/dmmf';

export type UserPassword = Nominal<'UserPassword', string>;

export const toUserPassword = (value: string): UserPassword => {
  return createNominal(
    'UserPassword',
    z.string()
      .min(8)
      .regex(/.*[A-Z].*/)
      .regex(/.*[a-z].*/)
      .regex(/.*\\d.*/)
      .parse(value),
  );
};

export type HashedUserPassword = Nominal<'HashedUserPassword', string>;

export const toHashedUserPassword = (value: UserPassword): HashedUserPassword => {
  return createNominal('HashedUserPassword', hashSync(value, 12));
};
