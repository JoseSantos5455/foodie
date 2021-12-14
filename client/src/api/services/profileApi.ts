import httpRequest from '../axios';

export const getProfile = (token: string) =>
  httpRequest({
    method: 'GET',
    url: '/users/profile',
    headers: { authorization: `Bearer ${token}` },
  });
