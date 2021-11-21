import { Item } from '@shared/interfaces/domain/item';
import { PriceListItem } from '@interfaces/domain/price-list-item';
import {
  EntityNotFound,
  IncorrectInput,
} from '@shared/libs/errors/custom-errors';
import { ItemDao } from './dao';

export class ItemService {
  constructor(private dao: ItemDao) {}

  async getPriceList(): Promise<{ priceList: PriceListItem[] }> {
    const priceList = await this.dao.getPriceList();
    return { priceList };
  }

  async getItem(id: number): Promise<Item> {
    if (!id) {
      throw new IncorrectInput('"Id" is not provided');
    }
    const item = await this.dao.getItem(id);
    if (!item) {
      throw new EntityNotFound(`Item with id=${id} does not exists`);
    }
    return item;
  }
}
