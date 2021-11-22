import { Item } from '@shared/interfaces/domain/item';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { config } from '@src/config/config';
import { fetchData } from '@src/libs/utils/fetch-data';
import { stringify } from 'qs';

const { queryUrl } = config.suppliers;

export class QueryService {
  async getItemsByQuery(query: SearchQuery): Promise<Item[]> {
    const querystring = stringify(query);
    const url = `${queryUrl}?${querystring}`;
    const { items } = await fetchData<{ items: Item[] }>(url);
    return items;
  }
}
