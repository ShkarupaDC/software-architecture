import { config } from '@config/config';
import { ItemDao } from '@plugins/supplier/dao';
import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { ItemPage } from '@shared/interfaces/domain/item-page';

const { pageSize } = config.app.search;
export class ItemService {
  constructor(private dao: ItemDao) {}

  async getByQuery(query: SearchQuery): Promise<{ items: Item[] }> {
    const items = await this.dao.getByQuery(query);
    return { items };
  }

  async getPage(page: number): Promise<ItemPage> {
    const items = await this.dao.getPage(page, pageSize);
    const lastPage = items.length < pageSize;
    return { items, lastPage };
  }
}
