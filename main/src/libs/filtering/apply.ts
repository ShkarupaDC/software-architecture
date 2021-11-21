import { Item } from '@shared/interfaces/domain/item';
import { FilterMap } from './interfaces/filter-map';

export const applyFilters = (items: Item[], mapping: FilterMap): Item[] => {
  const fields = Object.keys(mapping) as (keyof Item)[];
  const filteredItems = items.filter((item) => {
    return fields.every((field) =>
      mapping[field]?.isSatisfiedBy(item[field] as any)
    );
  });
  return filteredItems;
};
