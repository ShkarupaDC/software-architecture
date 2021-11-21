import { NumberQueryParams, StringQueryParams } from './query-params';
import { Item } from '@shared/interfaces/domain/item';

export type SearchQuery = {
  [key in keyof Item]: StringQueryParams | NumberQueryParams;
};
