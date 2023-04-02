import { depend } from 'velona';

import { createNominal } from './nominal';

import type { Nominal } from './nominal';
import type { AnyQuery } from './query';
import type { Injectable } from 'velona';

export type StepDeps = Record<string, AnyStep | AnyQuery>;

export type Step<
  Input,
  Output,
  Deps extends StepDeps = Record<string, never>,
> = Nominal<'Step', Injectable<Deps, [Input], Output>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyStep = Step<any, any, any>;

export const createStep = <Input, Output, Deps extends StepDeps>(
  callback: (input: Input, deps: Deps) => Output,
  defaultDeps: Deps,
): Step<Input, Output, Deps> => {
  return createNominal('Step', depend(defaultDeps, (deps, input) => callback(input, deps)));
};
