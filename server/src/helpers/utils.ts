import jwt from 'jsonwebtoken';
import { IUser } from '../components/users/user';

interface IResponseStatus {
  status_code: number;
  success: boolean;
  data: any;
  error: any;
}

const initStatus: IResponseStatus = {
  status_code: 404,
  success: false,
  data: null,
  error: null,
};

const makeResJson = (data: any, success = true): IResponseStatus => {
  return {
    ...initStatus,
    status_code: 200,
    success,
    data,
  };
};

const generateToken = (user_id: IUser['_id'], email: string) => {
  return jwt.sign({ user_id, email }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
};

const userInfo = (user: IUser, token: string) => ({
  id: user._id,
  fullName: user.fullName,
  email: user.email,
  city: user.city || '',
  address: user.address || '',
  zipCode: user.zipCode || '',
  avatar: user.avatar || '',
  phone: user.phone || '',
  isPhoneValidated: user.isPhoneValidated,
  role: user.role,
  token,
});

const refFromURL = (URL) => decodeURIComponent(URL.split('/').pop().split('?')[0])

export { makeResJson, generateToken, userInfo, refFromURL };
