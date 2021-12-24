import { Specification } from './model/specification';

export class MaxSpecification extends Specification<number> {
  constructor(private maxValue: number) {
    super();
  }

  isSatisfiedBy(value: number): boolean {
    return value <= this.maxValue;
  }
}
