import { stringify } from 'querystring';

export const getQueryUrl = (baseUrl: string, query: any) =>
  `${baseUrl}?${stringify(query)}`;
