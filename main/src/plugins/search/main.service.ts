import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { AllService } from './all.service';
import { MainDao } from './dao';
import { QueryService } from './query.service';

export class MainService {
  constructor(
    private dao: MainDao,
    private allService: AllService,
    private queryService: QueryService
  ) {}

  async getItemsByQuery(query: SearchQuery): Promise<{ items: Item[] }> {
    const mainItems = await this.dao.getItemsByQuery(query);
    const allItems = await this.allService.getItemsByQuery(query);
    const queryItems = await this.queryService.getItemsByQuery(query);
    const items = mainItems.concat(allItems).concat(queryItems);
    return { items };
  }
}
