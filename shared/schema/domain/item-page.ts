import { detailedItemSchema } from './detailed-item';

export const itemPageSchema = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: detailedItemSchema,
      uniqueItems: true,
    },
    lastPage: { type: 'boolean' },
  },
  required: ['items', 'lastPage'],
  additionalProperties: false,
};
