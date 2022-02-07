import { IMovie } from '@src/interfaces/IMovie';
import Movie from '@src/models/Movie';
import { Request, Response } from 'express';

export const getMovie = async (req: Request, res: Response) => {
  try {
    const movie = await Movie.findById(req.params.id);
    return res.json({ movie });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const getMovieRandom = async (req: Request, res: Response) => {
  try {
    const { type } = req.query;
    let isSeries = false;
    if (type === 'series') isSeries = true;
    const movie = await Movie.aggregate([{ $match: { isSeries } }, { $sample: { size: 1 } }]);
    return res.json({ movie });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    return res.json(movies.reverse());
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const movie: IMovie = req.body;
    const newMovie = new Movie(movie);
    await newMovie.save();
    return res.json({ movie: newMovie });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const movie: IMovie = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: movie }, { new: true });
    return res.json({ movie: updatedMovie });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    return res.json({ message: 'The movie has been deleted' });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};
