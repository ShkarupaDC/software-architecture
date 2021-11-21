import { SearchQuery } from '@shared/interfaces/search/search-query';
import { ParamType } from '../interfaces/param-type';
import { ContainsSpecification } from '../specification/contains.specification';
import { MaxSpecification } from '../specification/max.specification';
import { MinSpecification } from '../specification/min.specification';
import { FilterMap } from '../interfaces/filter-map';
import { SpecificationMap } from '../interfaces/specification-map';
import { Specification } from '../specification/model/specification';

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
