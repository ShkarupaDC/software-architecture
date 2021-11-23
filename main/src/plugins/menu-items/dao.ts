import { DBConnection } from '@shared/interfaces/db/connection';
import { MenuItem } from '@src/interfaces/menu-items/item';
import { NewMenuItem } from '@src/interfaces/menu-items/new-item';

export class ItemDao {
  constructor(private db: DBConnection) {}

  async getById(id: number): Promise<MenuItem | undefined> {
    const record = await this.db<MenuItem>('items')
      .select('*')
      .where({ id })
      .first();
    return record;
  }

  async deleteById(id: number): Promise<void> {
    await this.db('items').where({ id }).delete();
  }

  async add(item: NewMenuItem): Promise<void> {
    await this.db('items').insert(item);
  }

  async update(id: number, item: NewMenuItem): Promise<void> {
    await this.db('items').where({ id }).update(item);
  }
}
