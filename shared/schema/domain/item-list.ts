import { detailedItemSchema } from './detailed-item';

export const itemListSchema = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: detailedItemSchema,
      uniqueItems: true,
    },
  },
  required: ['items'],
};
