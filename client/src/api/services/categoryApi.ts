import httpRequest from 'api/axios';
import { ICategory } from 'types/types';

export const addCategory = (category: ICategory) =>
  httpRequest({
    method: 'POST',
    url: '/category',
    data: category,
  });
