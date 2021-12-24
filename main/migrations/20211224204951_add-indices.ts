import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE EXTENSION pg_trgm;
    CREATE EXTENSION btree_gin;
  `);
  await knex.schema.table('items', (table) => {
    table.index('name', 'index_item_name', 'GIN');
    table.index('description', 'index_item_description', 'GIN');
  });
  await knex.schema.table('menu_items', (table) => {
    table.index('item_id', 'index_menu_item_id', 'GIN');
    table.index('price', 'index_menu_item_index', 'GIN');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('items', (table) => {
    table.dropIndex('name', 'index_item_name');
    table.dropIndex('description', 'index_item_description');
  });
  await knex.schema.table('menu_items', (table) => {
    table.dropIndex('item_id', 'index_menu_item_id');
    table.dropIndex('price', 'index_menu_item_index');
  });
  await knex.raw(`
    DROP EXTENSION pg_trgm;
    DROP EXTENSION btree_gin;
  `);
}
