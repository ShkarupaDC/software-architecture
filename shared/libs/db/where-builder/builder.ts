import { Knex } from 'knex';

export class Builder {
  constructor(private query: Knex.QueryBuilder) {}

  min(field: string, value?: number): Builder {
    if (value) this.query = this.query.where(field, '>=', value);
    return this;
  }

  max(field: string, value?: number): Builder {
    if (value) this.query = this.query.where(field, '<=', value);
    return this;
  }

  contains(field: string, value?: string): Builder {
    if (value) this.query = this.query.where(field, 'ilike', `%${value}%`);
    return this;
  }

  getQuery(): string {
    return this.query.toQuery();
  }
}
