import { HttpError } from 'http-errors';

export interface ErrorMap {
  [key: string]: typeof HttpError;
}
