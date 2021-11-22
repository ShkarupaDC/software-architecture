import { request } from 'undici';
import { STATUS_CODES } from 'http';
import { HttpError } from '@shared/libs/errors/http-error';

export const fetchData = async <T>(url: string): Promise<T> => {
  const { body, statusCode } = await request(url);
  const data = await body.json();
  if (statusCode >= 200 && statusCode < 300) {
    return data;
  }
  const message = STATUS_CODES[statusCode] as string;
  throw new HttpError(statusCode, message, data);
};
