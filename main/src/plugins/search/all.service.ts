import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { config } from '@src/config/config';
import { applyFilters } from '@src/libs/filtering/apply-filters';
import { buildFilters } from '@src/libs/filtering/build-filters';
import { fetchData } from '@libs/utils/fetch-data';

const { allUrl } = config.suppliers;

export class AllService {
  async getItemsByQuery(query: SearchQuery): Promise<Item[]> {
    const { priceList } = await fetchData<{ priceList: Item[] }>(allUrl);
    const filters = buildFilters(query);
    const filteredItems = applyFilters(priceList, filters);
    return filteredItems;
  }
}
