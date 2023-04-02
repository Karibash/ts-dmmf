import { createNominal } from './nominal';

import type { Nominal } from './nominal';

export type Mutation<Input, Output> = Nominal<'Mutation', (input: Input) => Output>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyMutation = Mutation<any, any>;

export const createMutation = <Input, Output>(
  callback: (input: Input) => Output,
): Mutation<Input, Output> => {
  return createNominal('Mutation', callback);
};
