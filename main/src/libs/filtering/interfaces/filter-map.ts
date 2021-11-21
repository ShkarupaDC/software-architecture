import { Item } from '@shared/interfaces/domain/item';
import { Specification } from '../specification/model/specification';

export type FilterMap = Record<keyof Item, Specification<number | string>>;
