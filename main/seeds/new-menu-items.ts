import { Knex } from 'knex';

import { config } from '../src/config/config';
import * as generator from '../../shared/libs/db/data-generator';

const { numRecords } = config.app;

export async function seed(knex: Knex): Promise<void> {
  await knex('menu_items').delete();
  await knex('menus').delete();
  await knex('items').delete();

  const [menuId] = await knex('menus').insert([{}]).returning<number[]>('id');

  const items = Array.from({ length: numRecords }, () => ({
    name: generator.randomUuid(),
    description: generator.randomString(5, 25),
  }));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const itemIds = await knex.batchInsert('items', items).returning('id');

  const menuItems = Array.from({ length: numRecords }, (_, idx) => ({
    menu_id: menuId,
    item_id: itemIds[idx],
    price: generator.randomFloat(5, 200),
  }));

  await knex.batchInsert('menu_items', menuItems);
}
