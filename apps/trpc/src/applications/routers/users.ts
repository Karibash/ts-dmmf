import {
  registerUserUseCase,
  registerUserUseCaseInput,
  registerUserUseCaseOutput,
} from '../../usecases/users/registerUserUseCase';
import { procedure, t } from '../core/trpc';

export const usersRouter = t.router({
  register: procedure
    .input(registerUserUseCaseInput)
    .output(registerUserUseCaseOutput)
    .mutation(({ input }) => registerUserUseCase(input)),
});
