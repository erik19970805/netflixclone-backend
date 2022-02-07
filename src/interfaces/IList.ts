import { Types } from 'mongoose';

export interface IList {
  title: string;
  type: string;
  genre: string;
  content: Array<Types.ObjectId>;
}
