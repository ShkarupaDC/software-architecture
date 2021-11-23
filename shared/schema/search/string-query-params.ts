export const stringQueryParamsSchema = {
  type: 'object',
  properties: {
    contains: { type: 'string' },
  },
  additionalProperties: false,
};
