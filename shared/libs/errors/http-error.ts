export class HttpError<T> extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public data: T
  ) {
    super(message);
  }
}
