import { ItemDao } from '@plugins/menu-item/dao';
import { MenuItem } from '@plugins/menu-item/interfaces/item';
import { NewMenuItem } from '@plugins/menu-item/interfaces/new-item';
import { UpdateMenuItem } from '@plugins/menu-item/interfaces/update-item';

export class ItemService {
  constructor(private dao: ItemDao) {}

  async getItem(id: number): Promise<MenuItem | undefined> {
    return await this.dao.getById(id);
  }

  async deleteItem(id: number): Promise<MenuItem> {
    return await this.dao.deleteById(id);
  }

  async addItem(item: NewMenuItem): Promise<MenuItem> {
    return await this.dao.add(item);
  }

  async updateItem(id: number, item: UpdateMenuItem): Promise<MenuItem> {
    return await this.dao.update(id, item);
  }
}
