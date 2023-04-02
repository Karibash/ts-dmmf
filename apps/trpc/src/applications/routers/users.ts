import {
  registerUserUseCase,
  registerUserUseCaseInput,
  registerUserUseCaseOutput,
} from '../../usecases/users/registerUserUseCase';
import { t } from '../core/trpc';

export const usersRouter = t.router({
  register: t.procedure
    .input(registerUserUseCaseInput)
    .output(registerUserUseCaseOutput)
    .mutation(({ input }) => registerUserUseCase(input)),
});
