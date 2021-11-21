import { Builder } from './builder';

import { NumberQueryParams } from '../../../interfaces/search/number-query-params';
import { StringQueryParams } from '../../../interfaces/search/string-query-params';

export class Director {
  constructor(private builder: Builder) {}

  buildStringQuery(field: string, params: StringQueryParams) {
    this.builder.contains(field, params.contains);
  }

  buildNumberQuery(field: string, params: NumberQueryParams) {
    this.builder.min(field, params.min).max(field, params.max);
  }

  buildQuery(field: string, params: NumberQueryParams | StringQueryParams) {
    const handler =
      'contains' in params ? this.buildStringQuery : this.buildNumberQuery;
    handler.bind(this)(field, params);
  }
}
