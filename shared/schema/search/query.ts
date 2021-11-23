import { numberQueryParamsSchema } from './number-query-params';
import { stringQueryParamsSchema } from './string-query-params';

export const querySchema = {
  type: 'object',
  properties: {
    name: stringQueryParamsSchema,
    price: numberQueryParamsSchema,
    description: stringQueryParamsSchema,
  },
  additionalProperties: false,
};
