import { StringQueryParams } from './string-query-params';
import { NumberQueryParams } from './number-query-params';
import { Item } from '../domain/item';

export type SearchQuery = {
  [key in keyof Omit<Item, 'id'>]: StringQueryParams | NumberQueryParams;
};
