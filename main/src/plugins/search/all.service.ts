import { config } from '@config/config';
import { applyFilters } from '@lib/filtering/apply-filters';
import { buildFilters } from '@lib/filtering/build-filters';
import { fetchData } from '@lib/utils/fetch-data';
import { Cache } from '@lib/cache/cache';
import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@shared/interfaces/search/search-query';

interface PriceList {
  priceList: Item[];
}

const { allPriceListUrl: priceListUrl } = config.suppliers;

export class AllService {
  private cache: Cache<Item> = new Cache();

  private async storePriceList(): Promise<void> {
    const { priceList } = await fetchData<PriceList>(priceListUrl);
    this.cache.set(priceList);
  }

  async getPriceList(): Promise<Item[]> {
    if (this.cache.isEmpty()) {
      await this.storePriceList();
    }
    return this.cache.get();
  }

  async updateCache(): Promise<void> {
    this.cache.clear();
    await this.storePriceList();
  }

  async getItemsByQuery(query: SearchQuery): Promise<Item[]> {
    const { priceList } = await fetchData<PriceList>(priceListUrl);
    const filters = buildFilters(query);
    const filteredItems = applyFilters(priceList, filters);
    return filteredItems;
  }
}
