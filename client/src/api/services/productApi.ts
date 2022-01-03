import httpRequest from 'api/axios';
import { IProduct } from 'types/types';

export const getProducts = () =>
  httpRequest({
    method: 'GET',
    url: '/products',
  });

export const addProduct = (product: IProduct, token: string) =>
  httpRequest({
    method: 'POST',
    url: '/products',
    headers: { authorization: `Bearer ${token}` },
    data: product,
  });
