import { IUser } from '@/components/users/user';

declare module 'express' {
  export interface Request {
    user?: IUser;
  }
}
