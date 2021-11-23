import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('units', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('name', 20).unique().notNullable();
  });
  await knex.schema.createTable('items', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('name', 60).unique().notNullable();
    table.text('description');
  });
  await knex.schema.createTable('menus', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table
      .date('date')
      .defaultTo(knex.raw('current_date'))
      .unique()
      .notNullable();
  });
  await knex.schema.createTable('products', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('name', 60).unique().notNullable();
    table.integer('units_id').notNullable().references('units.id');
    table.decimal('units_in_stock').notNullable();
  });
  await knex.schema.createTable('item_products', (table: Knex.TableBuilder) => {
    table
      .integer('item_id')
      .notNullable()
      .references('items.id')
      .onDelete('cascade');
    table
      .integer('product_id')
      .notNullable()
      .references('products.id')
      .onDelete('cascade');
    table.decimal('quantity').notNullable();
    table.primary(['item_id', 'product_id']);
  });
  await knex.schema.createTable('menu_items', (table: Knex.TableBuilder) => {
    table
      .integer('menu_id')
      .notNullable()
      .references('menus.id')
      .onDelete('cascade');
    table
      .integer('item_id')
      .notNullable()
      .references('items.id')
      .onDelete('cascade');
    table.decimal('price', 15, 4).notNullable();
    table.primary(['menu_id', 'item_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('menu_items');
  await knex.schema.dropTable('item_products');
  await knex.schema.dropTable('products');
  await knex.schema.dropTable('menus');
  await knex.schema.dropTable('items');
  await knex.schema.dropTable('units');
}
