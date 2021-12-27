import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('reservations', (table: Knex.TableBuilder) => {
    table.increments('id');
    table.integer('table_id').notNullable();
    table.timestamp('start_time').notNullable();
    table.timestamp('end_time').notNullable();
    table.string('phone', 24).notNullable();
  });
  await knex.schema.createTable('suppliers', (table: Knex.TableBuilder) => {
    table.increments('id');
    table.string('company_name', 60).notNullable().unique();
    table.string('contact_name', 60).notNullable();
    table.string('phone', 24).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('reservations');
  await knex.schema.dropTable('suppliers');
}
