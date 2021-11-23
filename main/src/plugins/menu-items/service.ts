import { ItemDao } from './dao';
import { EntityNotFound } from '@shared/libs/errors/custom-errors';
import { MenuItem } from '@src/interfaces/menu-items/item';
import { NewMenuItem } from '@src/interfaces/menu-items/new-item';

export class ItemService {
  constructor(private dao: ItemDao) {}

  async getItem(id: number): Promise<MenuItem> {
    const item = await this.dao.getById(id);
    if (!item) {
      throw new EntityNotFound(`Item with id=${id} is not found`);
    }
    return item;
  }

  async deleteItem(id: number): Promise<void> {
    await this.dao.deleteById(id);
  }

  async addItem(item: NewMenuItem): Promise<void> {
    await this.dao.add(item);
  }

  async updateItem(id: number, item: NewMenuItem): Promise<void> {
    await this.dao.update(id, item);
  }
}
