import { BASE_URL } from './constant';

export const fetchUrl = (url: string): string => {
  const baseUrl: string = `${BASE_URL}${url}`;
  return baseUrl;
};