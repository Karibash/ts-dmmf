import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { z } from 'zod';

import { toUserEmail } from '../../domains/users/types/UserEmail';
import { toUserPassword } from '../../domains/users/types/UserPassword';
import { registerUserWorkflow } from '../../domains/users/workflows/registerUserWorkflow';

import type { RegisterUserWorkflowInput , RegisterUserWorkflowOutput } from '../../domains/users/workflows/registerUserWorkflow';

export const registerUserUseCaseInput = z.object({
  email: z.string(),
  password: z.string(),
});

export type RegisterUserUseCaseInput = z.infer<typeof registerUserUseCaseInput>;

export const registerUserUseCaseOutput = z.object({
  id: z.string(),
  email: z.string(),
});

export type RegisterUserUseCaseOutput = z.infer<typeof registerUserUseCaseOutput>;

const toWorkflowInput = (input: RegisterUserUseCaseInput): RegisterUserWorkflowInput => {
  return {
    user: {
      type: 'RegistableUser',
      email: toUserEmail(input.email),
      password: toUserPassword(input.password),
    },
  };
};

const unwrapWorkflowOutput = (output: RegisterUserWorkflowOutput): RegisterUserUseCaseOutput => {
  if (E.isRight(output)) {
    return {
      id: output.right.id,
      email: output.right.email,
    };
  }

  throw output.left;
};

export const registerUserUseCase = (input: RegisterUserUseCaseInput): RegisterUserUseCaseOutput => {
  return pipe(
    input,
    toWorkflowInput,
    registerUserWorkflow,
    unwrapWorkflowOutput,
  );
};
