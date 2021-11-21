export abstract class CustomError extends Error {
  protected constructor(message: string) {
    super(message);
    this.name = new.target.name;
  }
}

export class EntityNotFound extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

export class IncorrectInput extends CustomError {
  constructor(message: string) {
    super(message);
  }
}
