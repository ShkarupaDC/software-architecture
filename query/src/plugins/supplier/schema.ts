const query = {
  type: 'object',
  properties: {
    min: { type: 'number' },
    max: { type: 'number' },
    contains: { type: 'string' },
  },
  additionalProperties: false,
};

export const querystring = {
  type: 'object',
  properties: {
    id: query,
    name: query,
    price: query,
    description: query,
  },
  additionalProperties: false,
};
