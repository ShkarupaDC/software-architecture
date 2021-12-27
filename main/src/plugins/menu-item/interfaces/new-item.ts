import { MenuItem } from '@plugins/menu-item/interfaces/item';

export type NewMenuItem = Omit<MenuItem, 'id'>;
