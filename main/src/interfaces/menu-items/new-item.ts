import { MenuItem } from '@interfaces/menu-items/item';

export type NewMenuItem = Omit<MenuItem, 'id'>;
