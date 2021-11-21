import { NumberQueryParams } from '@shared/interfaces/search/number-query-params';
import { StringQueryParams } from '@shared/interfaces/search/string-query-params';

export type ParamType = keyof (NumberQueryParams & StringQueryParams);
