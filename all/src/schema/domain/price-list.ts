import { item } from '@shared/schema/domain/item';

export const priceList = {
  type: 'object',
  properties: {
    priceList: {
      type: 'array',
      items: item,
      uniqueItems: true,
    },
  },
  required: ['priceList'],
};
