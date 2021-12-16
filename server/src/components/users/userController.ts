import { Request, Response, NextFunction } from 'express';
import userService from './userService';
import { makeResJson, userInfo } from '@/helpers/utils';
import { generateToken } from '@/helpers/utils';

class UserController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const createdUser = await userService.signUp(req.body);
      const token = generateToken(createdUser._id, createdUser.email);

      res.status(200).json(makeResJson(userInfo(createdUser, token)));
    } catch (err) {
      next(err);
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.signIn(req.body.email, req.body.password);
      const token = generateToken(user._id, user.email);
      res.status(200).json(makeResJson(userInfo(user, token)));
    } catch (err) {
      next(err);
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userProfile = await userService.userProfile(req.user.id);
      const token = generateToken(userProfile._id, userProfile.email);
      res.status(200).json(makeResJson(userInfo(userProfile, token)));
    } catch (err) {
      next(err);
    }
  }
  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedProfile = await userService.updateProfile(req.body, req.user.id);

      const token = generateToken(updatedProfile._id, updatedProfile.email);
      res.status(200).json(makeResJson(userInfo(updatedProfile, token)));
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
