import { createNominal } from './nominal';

import type { Nominal } from './nominal';

export type Query<Input, Output> = Nominal<'Query', (input: Input) => Output>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyQuery = Query<any, any>;

export const createQuery = <Input, Output>(
  callback: (input: Input) => Output,
): Query<Input, Output> => {
  return createNominal('Query', callback);
};
