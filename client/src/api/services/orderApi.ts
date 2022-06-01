import httpRequest from '../axios';
import { IOrder } from '../../types/types';

export const addOrder = (order: IOrder, token: string) =>
  httpRequest({
    method: 'POST',
    url: '/orders',
    headers: { authorization: `Bearer ${token}` },
    data: order,
  });

export const getOrders = (token: string) =>
  httpRequest({
    method: 'GET',
    url: '/orders',
    headers: { authorization: `Bearer ${token}` },
  });

export const adminGetOrders = (token: string) =>
  httpRequest({
    method: 'GET',
    url: '/orders/admin',
    headers: { authorization: `Bearer ${token}` },
  });

export const updateOrderStatus = (id: string, token: string) =>
  httpRequest({
    method: 'PATCH',
    url: `/orders/admin/order-status/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });
