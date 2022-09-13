import User, { IUser } from './user';
import { ErrorHandler } from '@/middlewares/error.middleware';
import bcrypt from 'bcryptjs';


class UserService{
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

      if (user) {
        if (await bcrypt.compare(password, user.password)) return user;
        else throw new ErrorHandler(400, 'incorrect password');
      } else {
        throw new ErrorHandler(400, 'incorrect email');
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
  async updateProfile(updates: Partial<IUser>, id: string): Promise<IUser> {
    try {
      const user = await User.findById(id);
      if (user) {
        if (updates.email) {
          if (!updates.password) throw new ErrorHandler(400, 'password is needed to update email');
          const emailExists = await User.findOne({ email: updates.email });
          if (emailExists) throw new ErrorHandler(400, 'email already exists');
          if (await user.matchPassword(updates?.password)) {
            user.email = updates.email || user.email;
          } else {
            throw new ErrorHandler(400, 'password is incorrect');
          }
        }
        user.fullName = updates.fullName || user.fullName;
        user.city = updates.city || user.city;
        user.address = updates.address || user.address;
        user.zipCode = updates.zipCode || user.zipCode;
        user.avatar = updates.avatar || user.avatar;
        user.phone = updates.phone || user.phone;
        user.isPhoneValidated = updates.isPhoneValidated || user.isPhoneValidated;
      }
      const updatedUser = await user.save();
      return updatedUser;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }
}

export default new UserService();
