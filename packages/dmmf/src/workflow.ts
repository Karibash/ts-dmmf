import { depend } from 'velona';

import { createNominal } from './nominal';

import type { AnyMutation } from './mutation';
import type { Nominal } from './nominal';
import type { AnyQuery } from './query';
import type { AnyStep } from './step';
import type { Injectable } from 'velona';

export type WorkflowDeps = Record<string, AnyStep | AnyQuery | AnyMutation>;

export type Workflow<
  Input,
  Output,
  Deps extends WorkflowDeps = Record<string, never>,
> = Nominal<'Workflow', Injectable<Deps, [Input], Output>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyWorkflow = Workflow<any, any, any>;

export const createWorkflow = <Input, Output, Deps extends WorkflowDeps>(
  callback: (input: Input, deps: Deps) => Output,
  defaultDeps: Deps,
): Workflow<Input, Output, Deps> => {
  return createNominal('Workflow', depend(defaultDeps, (deps, input) => callback(input, deps)));
};
