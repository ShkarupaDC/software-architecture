import 'dotenv/config';

import { ServerConfig } from '@shared/interfaces/config/server';
import { DBConfig } from '@shared/interfaces/config/db';
import { SuppliersConfig } from '@config/interfaces/suppliers.config';
import { AppConfig } from './interfaces/app.config';

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
  suppliers: {
    allPriceListUrl: process.env.ALL_PRICE_LIST_URL,
    querySearchUrl: process.env.QUERY_SEARCH_URL,
    queryPriceListUrl: process.env.QUERY_PRICE_LIST_URL,
  } as SuppliersConfig,
  app: {
    timezone: process.env.TIMEZONE,
    numRecords: parseInt(process.env.NUM_RECORDS ?? '', 10),
  } as AppConfig,
};
