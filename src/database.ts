/* eslint-disable no-console */
import { connect, connection } from 'mongoose';
import { mongodbUrl } from '@src/config/env';

connect(mongodbUrl);

connection.once('open', () => {
  console.log('Mongodb Connection established');
});

connection.on('error', (err) => {
  console.log('Mongodb connection error:', err);
  process.exit();
});
