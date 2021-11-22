import { Item } from '@shared/interfaces/domain/item';
import { FilterMap } from '@libs/filtering/interfaces/filter-map';

export const applyFilters = (items: Item[], filters: FilterMap): Item[] => {
  const fields = Object.keys(filters) as (keyof Item)[];
  const filteredItems = items.filter((item) => {
    return fields.every((field) =>
      filters[field]?.isSatisfiedBy(item[field] as any)
    );
  });
  return filteredItems;
};
