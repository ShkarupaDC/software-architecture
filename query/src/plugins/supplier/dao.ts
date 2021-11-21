import { DBConnection } from '@shared/interfaces/db/connection';
import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@src/interfaces/domain/search-query';
import { Builder } from '@libs/db/builder';
import { Director } from '@src/libs/db/director';

export class ItemDao {
  constructor(private db: DBConnection) {}

  private buildQuery(query: SearchQuery): string {
    const baseQuery = this.db.select().table('items');

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
