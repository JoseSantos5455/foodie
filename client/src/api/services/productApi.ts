import httpRequest from '@/api/axios';
import { IProduct } from '@/types/types';

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

export const deleteProduct = (id: string, token: string) =>
  httpRequest({
    method: 'DELETE',
    url: `/products/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });

export const uploadProductImage = (image: File, token: string) => {
  httpRequest({
    method: 'POST',
    url: '/upload',
    headers: { authorization: `Bearer ${token}` },
    data: image,
  });
};
