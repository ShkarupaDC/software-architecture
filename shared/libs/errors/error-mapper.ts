import { NotFound, HttpError, BadRequest } from 'http-errors';

import { IncorrectInput, EntityNotFound } from './custom-errors';
import { ErrorMap } from './interfaces/error-map';

const errorMap: ErrorMap = {
  [EntityNotFound.name]: NotFound,
  [IncorrectInput.name]: BadRequest,
};

export const mapError = (error: Error): HttpError => {
  const { name, message } = error;
  return name in errorMap ? new errorMap[name](message) : (error as HttpError);
};
