import { Item } from '@shared/interfaces/domain/item';

export type PriceListItem = Omit<Item, 'description'>;
