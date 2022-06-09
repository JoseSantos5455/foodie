import httpRequest from '../axios';

export const getUsers = (token: string) =>
  httpRequest({
    method: 'GET',
    url: '/users',
    headers: { authorization: `Bearer ${token}` },
  });

export const deleteUser = (userEmail: string, token: string) =>
  httpRequest({
    method: 'DELETE',
    url: `/users/${userEmail}`,
    headers: { authorization: `Bearer ${token}` },
  });
