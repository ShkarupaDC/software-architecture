export const numberQueryParamsSchema = {
  type: 'object',
  properties: {
    min: { type: 'number', minimum: 0 },
    max: { type: 'number', minimum: 0 },
  },
  additionalProperties: false,
};
