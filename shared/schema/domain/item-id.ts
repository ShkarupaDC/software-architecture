export const itemIdSchema = {
  type: 'object',
  properties: {
    id: { type: 'number', minimum: 0 },
  },
  required: ['id'],
  additionalProperties: false,
};
