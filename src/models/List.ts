import { Schema, model, Types } from 'mongoose';
import { IList } from '@src/interfaces/IList';

const listSchema = new Schema<IList>(
  {
    title: { type: String, required: true, unique: true },
    type: String,
    genre: String,
    content: [{ type: Types.ObjectId, ref: 'Movie' }],
  },
  { timestamps: true },
);

export default model('List', listSchema);
