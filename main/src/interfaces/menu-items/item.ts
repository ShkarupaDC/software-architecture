import { Item } from '@shared/interfaces/domain/item';

export type MenuItem = Omit<Item, 'price'>;
