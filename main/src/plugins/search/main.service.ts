import { schedule } from 'node-cron';

import { config } from '@config/config';
import { AllService } from '@plugins/search/all.service';
import { MainDao } from '@plugins/search/dao';
import { QueryService } from '@plugins/search/query.service';
import { buildFilters } from '@lib/filtering/build-filters';
import { applyFilters } from '@lib/filtering/apply-filters';
import { getCronTime } from '@lib/utils/cron';
import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@shared/interfaces/search/search-query';

const { timezone } = config.app;

export class MainService {
  constructor(
    private dao: MainDao,
    private allService: AllService,
    private queryService: QueryService
  ) {}

  async getItemsByQuery(query: SearchQuery): Promise<{ items: Item[] }> {
    const mainItems = await this.dao.getItemsByQuery(query);

    const allItems = await this.allService.getPriceList();
    const queryItems = await this.queryService.getPriceList();

    const filters = buildFilters(query);
    const items = mainItems
      .concat(applyFilters(allItems, filters))
      .concat(applyFilters(queryItems, filters));
    return { items };
  }

  async updateCache(): Promise<void> {
    await this.allService.updateCache();
    await this.queryService.updateCache();
  }

  scheduleUpdate(): void {
    const time = getCronTime(0, 0);
    schedule(time, async () => await this.updateCache(), { timezone });
  }

  // async getItemsByQuery(query: SearchQuery): Promise<{ items: Item[] }> {
  //   const mainItems = await this.dao.getItemsByQuery(query);
  //   const allItems = await this.allService.getItemsByQuery(query);
  //   const queryItems = await this.queryService.getItemsByQuery(query);
  //   const items = mainItems.concat(allItems).concat(queryItems);
  //   return { items };
  // }
}
