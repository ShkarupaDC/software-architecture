import { Knex } from 'knex';

import { DBConfig } from '../../interfaces/config/db';
import { camelCaseToSnakeCase, objectToCamelCase } from '../utils/case';

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
    wrapIdentifier: (value) => camelCaseToSnakeCase(value),
    postProcessResponse: (result) => objectToCamelCase(result),
  } as Knex.Config;
};
