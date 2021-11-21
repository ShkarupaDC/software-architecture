import { Specification } from './model/specification';

export class ContainsSpecification extends Specification<string> {
  constructor(private pattern: string) {
    super();
  }

  isSatisfiedBy(value: string): boolean {
    return value.toLowerCase().includes(this.pattern.toLowerCase());
  }
}
