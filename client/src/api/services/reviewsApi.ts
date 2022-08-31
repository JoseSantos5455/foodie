import { IReview } from '@/types/types';
import httpRequest from '../axios';

export const addReview = (slug: string | undefined, review: IReview, token: string) =>
  httpRequest({
    method: 'POST',
    url: `/reviews/${slug}`,
    headers: { authorization: `Bearer ${token}` },
    data: review,
  });
