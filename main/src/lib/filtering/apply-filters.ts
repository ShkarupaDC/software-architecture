import { Item } from '@shared/interfaces/domain/item';
import { FilterMap } from '@lib/filtering/interfaces/filter-map';

export const applyFilters = (items: Item[], filters: FilterMap): Item[] => {
  const fields = Object.keys(filters) as (keyof Item)[];
  const filteredItems = items.filter((item) => {
    return fields.every(
      (field) =>
        field in item &&
        filters[field]?.isSatisfiedBy(item[field] as string | number)
    );
  });
  return filteredItems;
};
