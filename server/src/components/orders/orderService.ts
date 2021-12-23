import { ErrorHandler } from '@/middlewares/error.middleware';
import User, { IUser } from '../users/user';
import Order, { IOrder } from './order';

interface IOrderService {
  addOrder: (order: IOrder, userId: IUser['_id']) => Promise<IOrder>;
  getUserOrders: (userId: IUser['_id']) => Promise<IOrder[]>;
  getAllOrders: () => Promise<IOrder[]>;
  getOrderById: (orderId: IOrder['_id']) => Promise<IOrder>;
  updateOrderStatus: (orderStatus: string, orderId: IOrder['_id']) => Promise<string>;
  deleteOrder: (orderId: IOrder['_id']) => Promise<IOrder['_id']>;
  updateOrderPayment: (isPaid: boolean, orderId: IOrder['_id']) => Promise<boolean>;
}

class OrderService implements IOrderService {
  async addOrder(order: IOrder, userId: IUser['_id']): Promise<IOrder> {
    try {
      // if (!order.shippingInfo.isPhoneValidated) {
      //   throw new ErrorHandler(400, 'phone number must be valideted');
      // }
      if (!order.orderItems) throw new ErrorHandler(400, 'you must order something');
      order.user = userId;
      const createdOrder = await Order.create(order);
      return createdOrder;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async getUserOrders(userId: IUser['_id']): Promise<IOrder[]> {
    try {
      const orders = await Order.find({ user: userId });
      if (!orders) {
        throw new ErrorHandler(404, 'no order was found');
      }
      return orders;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async getAllOrders(): Promise<IOrder[]> {
    try {
      const orders = await Order.find({});
      if (!orders) {
        throw new ErrorHandler(404, 'no orders where found');
      }

      return orders;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async getOrderById(orderId: IOrder['_id']): Promise<IOrder> {
    try {
      const order = await Order.findById(orderId);
      if (!order) {
        throw new ErrorHandler(404, 'order not found');
      }

      return order;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async updateOrderStatus(orderStatus: string, orderId: IOrder['_id']): Promise<string> {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(orderId, { orderStatus }, { new: true });
      if (!updatedOrder) {
        throw new ErrorHandler(404, 'no order was found');
      }
      if (orderStatus === 'delivered') {
        const user = await User.findById(updatedOrder.user);
        if (!user) throw new ErrorHandler(404, 'user does not exist');

        const orderedProducts = [...user.orders];
        const newOrder = updatedOrder.orderItems.map((item) => item.productId);

        orderedProducts.unshift(...newOrder);
        user.orders = orderedProducts;
        await user.save();
      }
      return updatedOrder.orderStatus;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async deleteOrder(orderId: IOrder['_id']): Promise<IOrder['_id']> {
    try {
      const deletedOrder = await Order.findByIdAndDelete(orderId);
      if (!deletedOrder) {
        throw new ErrorHandler(404, 'no order was found');
      }
      return deletedOrder._id;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async updateOrderPayment(isPaid: boolean, orderId: IOrder['_id']): Promise<boolean> {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(orderId, { isPaid }, { new: true });
      if (!updatedOrder) {
        throw new ErrorHandler(404, 'no order was found');
      }
      return updatedOrder.isPaid;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }
}

export default new OrderService();
