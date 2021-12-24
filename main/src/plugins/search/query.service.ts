import { config } from '@config/config';
import { fetchData } from '@lib/utils/fetch-data';
import { Cache } from '@lib/cache/cache';
import { getQueryUrl } from '@lib/utils/url';
import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { ItemPage } from '@shared/interfaces/domain/item-page';
interface Items {
  items: Item[];
}

const { querySearchUrl: searchUrl, queryPriceListUrl: priceListUrl } =
  config.suppliers;

export class QueryService {
  private cache: Cache<Item> = new Cache();

  private async storePriceList(): Promise<void> {
    const getUrl = (page: number): string =>
      getQueryUrl(priceListUrl, { page });

    for (let pageNum = 1; ; ++pageNum) {
      const url = getUrl(pageNum);
      const page = await fetchData<ItemPage>(url);

      this.cache.push(page.items);
      if (page.lastPage) break;
    }
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
    const url = getQueryUrl(searchUrl, query);
    const { items } = await fetchData<Items>(url);
    return items;
  }
}
