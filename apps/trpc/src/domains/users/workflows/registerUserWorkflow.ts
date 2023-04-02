import { createWorkflow } from '@ts-dmmf/dmmf';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

import { saveRegisteredUserMutation } from '../mutations/saveRegisteredUser';
import { registerUserStep } from '../steps/registerUser';

import type { SaveRegisteredUserMutation } from '../mutations/saveRegisteredUser';
import type { RegisterUserStep } from '../steps/registerUser';
import type { RegistableUser, RegisteredUser } from '../types/User';
import type { Workflow } from '@ts-dmmf/dmmf';

export type RegisterUserWorkflowInput = {
  user: RegistableUser;
};

export type RegisterUserWorkflowOutput = E.Either<Error, RegisteredUser>;

export type RegisterUserWorkflowDeps = {
  saveRegisteredUserMutation: SaveRegisteredUserMutation;
  registerUserStep: RegisterUserStep;
};

const deps: RegisterUserWorkflowDeps = {
  saveRegisteredUserMutation,
  registerUserStep,
};

export type RegisterUserWorkflow = Workflow<RegisterUserWorkflowInput, RegisterUserWorkflowOutput, RegisterUserWorkflowDeps>;

export const registerUserWorkflow: RegisterUserWorkflow = createWorkflow((input, {
  saveRegisteredUserMutation,
  registerUserStep,
}) => {
  // TODO: Check for duplicate email.
  return pipe(
    input.user,
    registerUserStep,
    E.chain(saveRegisteredUserMutation),
  );
}, deps);
