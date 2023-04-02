import { createNominal } from '@ts-dmmf/dmmf';
import { z } from 'zod';

import type { Nominal } from '@ts-dmmf/dmmf';

export type UserId = Nominal<'UserId', string>;

export const toUserId = (value: string): UserId => {
  return createNominal('UserId', z.string().cuid2().parse(value));
};
