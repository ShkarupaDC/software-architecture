import { DBConfig } from '../../interfaces/config/db';
import { Knex } from 'knex';

export const getKnexConfig = (dbConfig: DBConfig): Knex.Config => {
  return {
    client: 'pg',
    connection: dbConfig,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  } as Knex.Config;
};
