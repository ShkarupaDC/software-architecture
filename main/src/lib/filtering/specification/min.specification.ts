import { Specification } from './model/specification';

export class MinSpecification extends Specification<number> {
  constructor(private minValue: number) {
    super();
  }

  isSatisfiedBy(value: number): boolean {
    return value >= this.minValue;
  }
}
