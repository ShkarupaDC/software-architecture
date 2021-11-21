import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('items', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('name', 60).unique().notNullable();
    table.decimal('price', 15, 4).notNullable();
    table.text('description');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('items');
}
