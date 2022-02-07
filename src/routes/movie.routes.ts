import {
  createMovie,
  deleteMovie,
  getMovie,
  getMovieRandom,
  getMovies,
  updateMovie,
} from '@src/controllers/movie.controller';
import { admin, verify } from '@src/utils/verifyToken';
import { Router } from 'express';

const router = Router();

router.route('/').all(verify).get(getMovies).post(admin, createMovie);
router.route('/random').get(verify, getMovieRandom);
router.route('/:id').all(verify).get(getMovie).all(admin).put(updateMovie).delete(deleteMovie);

export default router;
