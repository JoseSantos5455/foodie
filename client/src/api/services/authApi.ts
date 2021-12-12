import { IUser } from 'types/types';
import httpRequest from '../axios';

export const signUp = (user: IUser) =>
  httpRequest({
    method: 'POST',
    url: '/users/signup',
    data: user,
  });

export const login = (user: IUser) =>
  httpRequest({
    method: 'POST',
    url: '/users/signin',
    data: user,
  });
