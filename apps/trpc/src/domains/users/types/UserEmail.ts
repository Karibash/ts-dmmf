import { createNominal } from '@ts-dmmf/dmmf';
import { z } from 'zod';

import type { Nominal } from '@ts-dmmf/dmmf';

export type UserEmail = Nominal<'UserEmail', string>;

export const toUserEmail = (value: string): UserEmail => {
  return createNominal('UserEmail', z.string().email().parse(value));
};
