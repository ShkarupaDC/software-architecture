import { FastifyRequest } from 'fastify';
import { mapError } from './error-mapper';

export const handleError = async (
  error: Error,
  request: FastifyRequest
): Promise<void> => {
  const mappedError = mapError(error);

  const message = 'Something went wrong';
  const { statusCode } = mappedError;

  if (statusCode >= 400 && statusCode < 500) {
    request.log.info(mappedError, message);
  } else {
    request.log.error(mappedError, message);
  }
  throw mappedError;
};
