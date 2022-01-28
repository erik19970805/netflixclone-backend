import { config } from 'dotenv';
import https, { ServerOptions } from 'https';
import fs from 'fs';
import path from 'path';

config();

import app from './app';

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
