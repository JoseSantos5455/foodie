import { makeResJson } from '@/helpers/utils';
import { NextFunction, Request, Response } from 'express';
import adminService from './adminService';

class AdminController {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await adminService.getUsers();
      res.status(200).json(makeResJson(users));
    } catch (err) {
      next(err);
    }
  }
  async getUserByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await adminService.getUserByEmail(req.params.email);
      res.status(200).json(makeResJson(user));
    } catch (err) {
      next(err);
    }
  }
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const delUserEmail = await adminService.deleteUser(req.params.email);
      res.status(200).json(makeResJson(delUserEmail));
    } catch (err) {
      next(err);
    }
  }
}

export default new AdminController();
