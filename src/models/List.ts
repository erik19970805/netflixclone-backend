import { Schema, model } from 'mongoose';
import { IList } from '@src/interfaces/IList';

const listSchema = new Schema<IList>(
  {
    title: { type: String, required: true, unique: true },
    type: String,
    genre: String,
    content: Array,
  },
  { timestamps: true },
);

export default model('List', listSchema);
