import express, { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { port } from '@src/config/env';

// Import Routers
import authRoute from '@src/routes/auth.routes';
import userRoute from '@src/routes/user.routes';

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
app.use('/api/user', userRoute);

export default app;
