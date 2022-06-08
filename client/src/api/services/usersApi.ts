import httpRequest from '../axios';

export const getUsers = (token: string) =>
  httpRequest({
    method: 'GET',
    url: '/users',
    headers: { authorization: `Bearer ${token}` },
  });
