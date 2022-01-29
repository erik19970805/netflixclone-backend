/* eslint-disable no-console */
/* eslint-disable import/first */
/* eslint-disable import/order */
import https, { ServerOptions } from 'https';
import { config } from 'dotenv';
import path from 'path';
import fs from 'fs';

config();

import app from '@src/app';
import '@src/database';

function main() {
  const pathCert = path.resolve(__dirname, '../cert/');
  const options: ServerOptions = {
    cert: fs.readFileSync(path.resolve(pathCert, 'cert.pem')),
    key: fs.readFileSync(path.resolve(pathCert, 'key.pem')),
  };
  const server = https.createServer(options, app);
  server.listen(app.get('port'));
  console.log('Server on port: ', app.get('port'), `url: https://localhost:${app.get('port')}`);
}

main();
