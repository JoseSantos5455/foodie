import User from '@/components/users/user';
import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from './error.middleware';
import jwt from 'jsonwebtoken';

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) return next(new ErrorHandler(400, 'no headers where provided'));
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    if (!token) {
      return next(new ErrorHandler(401, 'no token'));
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const payload = typeof decoded !== 'string' && decoded;

    const user = await User.findById(payload.user_id).select('-password');
    if (!user) {
      return next(new ErrorHandler(401, 'unothorized'));
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return next(new ErrorHandler(401, 'unautorized as an admin'));
  }
};

export { isAuthenticated, isAdmin };
