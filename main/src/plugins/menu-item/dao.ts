import { DBConnection } from '@shared/interfaces/db/connection';
import { MenuItem } from '@plugins/menu-item/interfaces/item';
import { NewMenuItem } from '@plugins/menu-item/interfaces/new-item';
import { UpdateMenuItem } from '@plugins/menu-item/interfaces/update-item';

export class ItemDao {
  constructor(private db: DBConnection) {}

  async getById(id: number): Promise<MenuItem | undefined> {
    const record = await this.db<MenuItem>('items')
      .select('*')
      .where({ id })
      .first();
    return record;
  }

  async deleteById(id: number): Promise<MenuItem> {
    const [record] = await this.db('items')
      .where({ id })
      .delete()
      .returning('*');
    return record;
  }

  async add(item: NewMenuItem): Promise<MenuItem> {
    const [record] = await this.db<MenuItem>('items')
      .insert(item)
      .returning('*');
    return record;
  }

  async update(id: number, item: UpdateMenuItem): Promise<MenuItem> {
    const [record] = await this.db('items')
      .where({ id })
      .update(item)
      .returning('*');
    return record;
  }
}
