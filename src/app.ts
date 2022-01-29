import express, { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoute from '@src/routes/auth.routes';
import { port } from '@src/config/env';
// Import Routers

// Initializations
const app: Application = express();

// Settings
app.set('port', port);

// Middlewares
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

// Routers
app.use('/api/auth', authRoute);

export default app;
