import User, { IUser } from './user';
import { ErrorHandler } from '@/middlewares/error.middleware';
import bcrypt from 'bcryptjs';

interface IUserService {
  signUp: (user: IUser) => Promise<IUser>;
  signIn: (email: string, password: string) => Promise<IUser>;
}

class UserService implements IUserService {
  async signUp(user: IUser): Promise<IUser> {
    try {
      const userExists = await User.findOne({ email: user.email });

      if (userExists) {
        throw new ErrorHandler(400, 'User with this email already exists');
      }
      const createdUser = User.create(user);

      return createdUser;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async signIn(email: string, password: string): Promise<IUser> {
    try {
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        return user;
      } else {
        throw new ErrorHandler(400, 'incorrect email or password');
      }
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async userProfile(id: string): Promise<IUser> {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new ErrorHandler(404, 'user not found');
      }
      return user;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }
}

export default new UserService();
