import { getKnexConfig } from '../shared/libs/db/init-knex';
import { config } from './src/config/config';

export const knexConfig = getKnexConfig(config.db);
export default knexConfig;
