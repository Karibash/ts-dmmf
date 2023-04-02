import type { UserEmail } from './UserEmail';
import type { UserId } from './UserId';
import type { HashedUserPassword, UserPassword } from './UserPassword';
import type { Typed } from '@ts-dmmf/dmmf';

export type RegistableUser = Typed<'RegistableUser', {
  email: UserEmail;
  password: UserPassword;
}>;

export type RegisteredUser = Typed<'RegisteredUser', {
  id: UserId;
  email: UserEmail;
  password: HashedUserPassword;
}>;

export type User = RegistableUser | RegisteredUser;
