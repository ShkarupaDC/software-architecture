import { itemSchema } from '@shared/schema/domain/item';

export const priceListSchema = {
  type: 'object',
  properties: {
    priceList: {
      type: 'array',
      items: itemSchema,
      uniqueItems: true,
    },
  },
  required: ['priceList'],
};
