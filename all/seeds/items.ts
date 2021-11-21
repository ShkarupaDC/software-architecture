import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('items').del();

  await knex('items').insert([
    {
      name: 'Duck & Turnip',
      price: 50,
      description: 'Buttered black turnip, turnip cream, truffle',
    },
    {
      name: 'Black Foot Pork Chop',
      price: 54.5,
      description: 'Barley, mushroom, apple & Robert sauce',
    },
    {
      name: 'Fillet of Hereford Beef',
      price: 62,
      description: 'Mushroom ketchup & triple cooked chips',
    },
    {
      name: 'British Cheese',
      price: 22,
      description:
        'Apple & plum chutney, fig & perry cheese, oat cakes & seeded crackers',
    },
    {
      name: 'Rice and Flesh',
      price: 26.5,
      description: 'Saffron, beef cheek & red wine',
    },
  ]);
}
