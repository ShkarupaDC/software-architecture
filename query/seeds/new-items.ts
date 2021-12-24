import { Knex } from 'knex';

import { config } from '../src/config/config';
import * as generator from '../../shared/libs/db/data-generator';

const { numRecords } = config.app;

export async function seed(knex: Knex): Promise<void> {
  await knex('items').delete();

  const items = Array.from({ length: numRecords }, () => ({
    name: generator.randomUuid(),
    price: generator.randomFloat(5, 200),
    description: generator.randomString(5, 25),
  }));

  await knex.batchInsert('items', items);
}
