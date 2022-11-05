import { ErrorHandler } from '@/middlewares/error.middleware';
import User from './user';
import { IUser } from '@/types/user.interface';
interface IAdminService {
  getUsers: () => Promise<IUser[]>;
  getUserByEmail: (id: IUser['_id']) => Promise<IUser>;
  deleteUser: (email: string) => Promise<string>;
}

class AdminService implements IAdminService {
  async getUsers(): Promise<IUser[]> {
    try {
      const users = await User.find({}).select('-password');
      if (!users) {
        throw new ErrorHandler(404, 'no user was found');
      }
      return users;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async getUserByEmail(email: string): Promise<IUser> {
    try {
      const user = await User.findOne({ email }).select('-password');
      if (!user) {
        throw new ErrorHandler(404, 'user with this email does not exist');
      }
      return user;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async deleteUser(email: string): Promise<string> {
    try {
      const user = await User.findOneAndDelete({ email }).select('-password');
      if (!user) {
        throw new ErrorHandler(404, 'user with this email does not exist');
      }
      return user.email;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }
}

export default new AdminService();
