import { Schema, model } from 'mongoose';
import { IMovie } from '@src/interfaces/IMovie';

const movieSchema = new Schema<IMovie>(
  {
    title: { type: String, required: true, unique: true },
    description: String,
    image: String,
    imageTitle: String,
    imageSmall: String,
    trailer: String,
    video: String,
    year: String,
    limit: Number,
    genre: String,
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default model('Movie', movieSchema);
