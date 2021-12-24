export class Cache<T> {
  private data: T[] = [];

  constructor() {
    this.clear();
  }

  set(values: T[]): void {
    this.data = values;
  }

  push(values: T[]): void {
    this.data.push(...values);
  }

  get(): T[] {
    return this.data;
  }

  isEmpty(): boolean {
    return this.data.length == 0;
  }

  clear(): void {
    this.data = [];
  }
}
