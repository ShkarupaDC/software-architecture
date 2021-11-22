import { Item } from '@shared/interfaces/domain/item';
import { EntityNotFound } from '@shared/libs/errors/custom-errors';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { ItemDao } from './dao';

export class ItemService {
  constructor(private dao: ItemDao) {}

  async getItemsByQuery(query: SearchQuery): Promise<{ items: Item[] }> {
    const items = await this.dao.getItemsByQuery(query);
    return { items };
  }
}
