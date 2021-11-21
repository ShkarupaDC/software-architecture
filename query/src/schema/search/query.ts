import { queryParams } from '@shared/schema/search/query-params';

export const query = {
  type: 'object',
  properties: {
    id: queryParams,
    name: queryParams,
    price: queryParams,
    description: queryParams,
  },
  additionalProperties: false,
};
