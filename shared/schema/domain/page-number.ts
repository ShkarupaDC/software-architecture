export const pageNumberSchema = {
  type: 'object',
  properties: {
    page: { type: 'integer', minimum: 1 },
  },
  required: ['page'],
  additionalProperties: false,
};
