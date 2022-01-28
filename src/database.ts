import { connect, connection } from 'mongoose';
import { mongodbUrl } from './config/env';

connect(mongodbUrl);

connection.once('open', () => {
  console.log('Mongodb Connection established');
});

connection.on('error', (err) => {
  console.log('Mongodb connection error:', err);
  process.exit();
});
