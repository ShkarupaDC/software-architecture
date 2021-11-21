export const detailedItem = {
  type: 'object',
  properties: {
    id: { type: 'integer', minimum: 0 },
    name: { type: 'string', minLength: 1 },
    price: { type: 'number', minimum: 0 },
    description: { type: 'string' },
  },
  requied: ['id', 'name', 'price', 'description'],
  additionalProperties: false,
};
