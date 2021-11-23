export const itemSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer', minimum: 0 },
    name: { type: 'string', minLength: 1 },
    description: { type: 'string' },
  },
  requied: ['name', 'description'],
  additionalProperties: false,
};
