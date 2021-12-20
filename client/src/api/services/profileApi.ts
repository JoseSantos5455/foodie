import httpRequest from '../axios';
import { IUser } from 'types/types';

export const getProfile = (token: string) =>
  httpRequest({
    method: 'GET',
    url: '/users/profile',
    headers: { authorization: `Bearer ${token}` },
  });

export const updateProfile = (token: string, updates: Partial<IUser>) =>
  httpRequest({
    method: 'PATCH',
    url: '/users/profile',
    headers: { authorization: `Bearer ${token}` },
    data: updates,
  });
