export abstract class Specification<T> {
  abstract isSatisfiedBy(value: T): boolean;

  and(other: Specification<T>): Specification<T> {
    return new AndSpecification(this, other);
  }
}

export class AndSpecification<T> extends Specification<T> {
  constructor(private self: Specification<T>, private other: Specification<T>) {
    super();
  }

  isSatisfiedBy(value: T): boolean {
    return this.self.isSatisfiedBy(value) && this.other.isSatisfiedBy(value);
  }
}
