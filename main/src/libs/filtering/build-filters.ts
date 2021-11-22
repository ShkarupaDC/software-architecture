import { SearchQuery } from '@shared/interfaces/search/search-query';
import { ParamType } from '@libs/filtering/interfaces/param-type';
import { ContainsSpecification } from '@libs/filtering/specification/contains.specification';
import { MaxSpecification } from '@libs/filtering/specification/max.specification';
import { MinSpecification } from '@libs/filtering/specification/min.specification';
import { FilterMap } from '@libs/filtering/interfaces/filter-map';
import { SpecificationMap } from '@libs/filtering/interfaces/specification-map';
import { Specification } from '@libs/filtering/specification/model/specification';

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
