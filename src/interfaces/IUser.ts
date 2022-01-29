import { Types } from 'mongoose';

export interface IUser {
  username: string;
  email: string;
  password: string;
  image: string;
  role: string;
  // eslint-disable-next-line no-unused-vars
  matchPassword: (password: string) => Promise<boolean>;
}

export interface IAccessToken {
  id: string;
}

export interface IUserMode extends IUser {
  _id: Types.ObjectId;
}
