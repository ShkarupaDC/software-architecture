import 'dotenv/config';

import { ServerConfig } from '@shared/interfaces/config/server';
import { DBConfig } from '@shared/interfaces/config/db';

export const config = {
  server: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT ?? '', 10),
    logger: true,
  } as ServerConfig,
  db: {
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT ?? '', 10),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
  } as DBConfig,
};