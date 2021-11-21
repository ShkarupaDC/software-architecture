import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('dishes').del();

  await knex('dishes').insert([
    {
      name: 'Chocolate Bar',
      price: 20,
      description: 'Passion fruit jam & ginger ice cream',
    },
    {
      name: 'Brown Bread Ice Cream',
      price: 20,
      description: 'Salted butter caramel, pear & malted yeast syrup',
    },
    {
      name: 'Sambocade',
      price: 22,
      description:
        'Goats milk cheesecake, elderflower, apple, spiced figs & walnuts',
    },
    {
      name: 'Hereford Ribeye',
      price: 58,
      description: 'Mushroom ketchup & triple cooked chips ',
    },
    {
      name: 'Roast Halibut & Green Sauce',
      price: 52.5,
      description: 'Braised chicory, parsley, pepper, onion & eucalyptus',
    },
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
    {
      name: 'Salamagundy',
      price: 27.5,
      description:
        'Smoked confit chicken, artichoke, marrowbone, horseradish cream & pickled walnuts',
    },
    {
      name: 'Frumenty',
      price: 29,
      description: 'Octopus, spelt, smoked sea broth, pickled dulse & lovage ',
    },
    {
      name: 'Eggs Royale',
      price: 8,
      description: 'Poached eggs, smoked salmon, muffin, hollandaise',
    },
    {
      name: 'Sette Breakfast',
      price: 20,
      description:
        'Two eggs any style, choice of pork links or maple cured bacon, choice of toast, tea or coffee',
    },
    {
      name: 'Omelette',
      price: 12,
      description:
        'Choice of three: cheddar, fontina, prosciutto cotto, spring onion, sautéed mushroom, tomato, choice of toast',
    },
  ]);
}
