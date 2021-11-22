import { detailedItem } from './detailed-item';

export const itemList = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: detailedItem,
      uniqueItems: true,
    },
  },
  required: ['items'],
};
