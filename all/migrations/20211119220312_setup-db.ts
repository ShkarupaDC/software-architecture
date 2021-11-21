import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('dishes', (table: Knex.TableBuilder) => {
    table.increments();
    table.string('name', 60).unique().notNullable();
    table.decimal('price', 15, 4).notNullable();
    table.text('description');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('dishes');
}
