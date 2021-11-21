import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('menu_items').del();
  await knex('menus').del();
  await knex('items').del();

  await knex('menus').insert([{}]);
  await knex('items').insert([
    {
      name: 'Walleye Milanese',
      description: 'Mashed potatoes, marinated tomatoes',
    },
    {
      name: 'Basic Blue',
      description:
        'Romaine, croutons, tomato, local bacon, red onion, blue cheese dressing',
    },
    {
      name: 'Margherita',
      description: 'Housemade mozzarella, basil, extra virgin olive oil',
    },
    {
      name: 'Cheeseburger',
      description:
        'Choice of local cheddar, fontina, Gruyere, mozzarella or blue cheesebutter lettuce, local tomato',
    },
    {
      name: 'Wood Grilled Filet Mignon',
      description: 'Roasted onion, ciabatta, horseradish aioli',
    },
  ]);
  await knex('menu_items').insert([
    { menu_id: 1, item_id: 1, price: 21.95 },
    { menu_id: 1, item_id: 2, price: 13.95 },
    { menu_id: 1, item_id: 3, price: 14.95 },
    { menu_id: 1, item_id: 4, price: 15.95 },
    { menu_id: 1, item_id: 5, price: 20.95 },
  ]);
}
