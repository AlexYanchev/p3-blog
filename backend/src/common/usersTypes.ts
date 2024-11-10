export type User = {
  id: string;
  login: string;
  name: string;
  email: string;
  password: string;
};

export type RegistrationUserData = Omit<User, 'id'>;
export type LoginUserData = Pick<User, 'login' | 'password'>;

export enum RequiredLoginDataFields {
  login = 'login',
  password = 'password',
}

export enum RequiredRegistrationDataFields {
  login = 'login',
  name = 'name',
  email = 'email',
  password = 'password',
}
