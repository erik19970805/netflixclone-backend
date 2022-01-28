import express, { Application } from 'express';
import { port } from './config/env';

const app: Application = express();
app.set('port', port);

export default app;
