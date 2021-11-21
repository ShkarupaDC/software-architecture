import { DBConnection } from '@shared/interfaces/db/connection';
import { Item } from '@shared/interfaces/domain/item';
import { PriceListItem } from '@interfaces/domain/price-list-item';

export class ItemDao {
  constructor(private db: DBConnection) {}

  async getItem(id: number): Promise<Item | undefined> {
    const record = await this.db
      .table<Item>('dishes')
      .select('*')
      .where({ id })
      .first();
    return record;
  }

  async getPriceList(): Promise<PriceListItem[]> {
    const records = await this.db
      .table<PriceListItem>('dishes')
      .select('id', 'name', 'price');
    return records;
  }
}
