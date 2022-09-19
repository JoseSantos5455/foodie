import httpRequest from '@/api/axios';

export const getProducts = () =>
  httpRequest({
    method: 'GET',
    url: '/products',
  });

export const addProduct = (product: any, token: string) =>
  httpRequest({
    method: 'POST',
    url: '/products',
    headers: { authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data'},
    data: product,
  });

export const deleteProduct = (id: string, token: string) =>
  httpRequest({
    method: 'DELETE',
    url: `/products/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });

export const uploadProductImage = (image: FormData, token: string) => {
  httpRequest({
    method: 'POST',
    url: '/upload',
    headers: { authorization: `Bearer ${token}` },
    data: image,
  });
};
