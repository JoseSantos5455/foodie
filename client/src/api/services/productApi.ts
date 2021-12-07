import httpRequest from 'api/axios';

export const getProducts = () =>
  httpRequest({
    method: 'GET',
    url: '/products',
  });
