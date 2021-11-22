import { numberQueryParams } from './number-query-params';
import { stringQueryParams } from './string-query-params';

export const query = {
  type: 'object',
  properties: {
    name: stringQueryParams,
    price: numberQueryParams,
    description: stringQueryParams,
  },
  additionalProperties: false,
};
