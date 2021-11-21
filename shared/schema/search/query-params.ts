export const queryParams = {
  type: 'object',
  properties: {
    min: { type: 'number', minimum: 0 },
    max: { type: 'number' },
    contains: { type: 'string' },
  },
  additionalProperties: false,
};
