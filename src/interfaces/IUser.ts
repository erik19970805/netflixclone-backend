export interface IUser {
  username: string;
  email: string;
  password: string;
  image: string;
  role: string;
  // eslint-disable-next-line no-unused-vars
  matchPassword: (password: string) => Promise<boolean>;
}
