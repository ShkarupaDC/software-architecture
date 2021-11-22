import { DBConnection } from '@shared/interfaces/db/connection';
import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { Builder } from '@shared/libs/db/where-builder/builder';
import { Director } from '@shared/libs/db/where-builder/director';
import { Knex } from 'knex';

export class MainDao {
  constructor(private db: DBConnection) {}

  private getBaseQuery(): Knex.QueryBuilder {
    const subQuery = this.db
      .select(
        'items.id as id',
        'items.name as name',
        'items.description as description',
        'menu_items.price as price'
      )
      .from('items')
      .join('menu_items', 'items.id', 'menu_items.item_id')
      .join('menus', 'menu_items.menu_id', 'menus.id')
      .where('menus.date', '=', this.db.raw('current_date'))
      .as('items');
    const baseQuery = this.db.select().from(subQuery);
    return baseQuery;
  }

  private buildQuery(query: SearchQuery): string {
    const baseQuery = this.getBaseQuery();

    const builder = new Builder(baseQuery);
    const director = new Director(builder);

    for (const [name, params] of Object.entries(query)) {
      director.buildQuery(name, params);
    }
    return builder.getQuery();
  }

  async getItemsByQuery(query: SearchQuery): Promise<Item[]> {
    const rawQuery = this.buildQuery(query);
    const result = await this.db.raw<{ rows: Item[] }>(rawQuery);
    return result.rows;
  }
}
