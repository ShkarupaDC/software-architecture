import { numberQueryParams } from '@shared/schema/search/number-query-params';
import { stringQueryParams } from '@shared/schema/search/string-query-params';

export const query = {
  type: 'object',
  properties: {
    name: stringQueryParams,
    price: numberQueryParams,
    description: stringQueryParams,
  },
  additionalProperties: false,
};
