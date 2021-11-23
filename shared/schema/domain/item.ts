export const itemSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer', minimum: 0 },
    name: { type: 'string', minLength: 1 },
    price: { type: 'number', minimum: 0 },
  },
  requied: ['id', 'name', 'price'],
  additionalProperties: false,
};
