import { SearchQuery } from '@shared/interfaces/search/search-query';
import { ParamType } from '@lib/filtering/interfaces/param-type';
import { ContainsSpecification } from '@lib/filtering/specification/contains.specification';
import { MaxSpecification } from '@lib/filtering/specification/max.specification';
import { MinSpecification } from '@lib/filtering/specification/min.specification';
import { FilterMap } from '@lib/filtering/interfaces/filter-map';
import { SpecificationMap } from '@lib/filtering/interfaces/specification-map';
import { Specification } from '@lib/filtering/specification/model/specification';

const mapping: SpecificationMap = {
  min: MinSpecification,
  max: MaxSpecification,
  contains: ContainsSpecification,
};

type Param = [ParamType, string | number];

export const buildFilters = (query: SearchQuery): FilterMap => {
  const queryEntries = Object.entries(query);

  const filtersEntries = queryEntries.map(([field, params]) => {
    const paramsEntries = Object.entries(params) as Param[];

    const specification = paramsEntries
      .map(([param, value]) => {
        return new mapping[param](value as never) as Specification<unknown>;
      })
      .reduce((accumulator, specification) => accumulator.and(specification));
    return [field, specification];
  });
  return Object.fromEntries(filtersEntries);
};
