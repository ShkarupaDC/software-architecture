import { ContainsSpecification } from '../specification/contains.specification';
import { MinSpecification } from '../specification/min.specification';
import { MaxSpecification } from '../specification/max.specification';

export type SpecificationOptions =
  | typeof MinSpecification
  | typeof MaxSpecification
  | typeof ContainsSpecification;
