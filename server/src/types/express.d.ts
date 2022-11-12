import { IUser } from '@/types/user.interface';

declare module 'express' {
  export interface Request {
    user?: IUser;
  }
}
