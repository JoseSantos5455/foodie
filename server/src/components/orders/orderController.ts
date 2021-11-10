import { makeResJson } from '@/helpers/utils';
import { Request, Response, NextFunction } from 'express';
import orderService from './orderService';

class OrderController {
  async addOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const createdOrder = await orderService.addOrder(req.body, req.user._id);
      res.status(200).json(makeResJson(createdOrder));
    } catch (err) {
      return next(err);
    }
  }
  async getUserOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await orderService.getUserOrders(req.user._id);
      res.status(200).json(makeResJson(orders));
    } catch (err) {
      return next(err);
    }
  }

  async getAllOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await orderService.getAllOrders();
      res.status(200).json(makeResJson(orders));
    } catch (err) {
      return next(err);
    }
  }

  async getOrderById(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      res.status(200).json(makeResJson(order));
    } catch (err) {
      return next(err);
    }
  }

  async updateOrderStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const orderStatus = await orderService.updateOrderStatus(req.body.orderStatus, req.params.id);
      res.status(200).json(makeResJson(orderStatus));
    } catch (err) {
      return next(err);
    }
  }

  async updateOrderPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const isPaid = await orderService.updateOrderPayment(req.body.isPaid, req.params.id);
      res.status(200).json(makeResJson(isPaid));
    } catch (err) {
      return next(err);
    }
  }

  async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const deletedOrderId = await orderService.deleteOrder(req.params.id);
      res.status(200).json(makeResJson(deletedOrderId));
    } catch (err) {
      return next(err);
    }
  }
}

export default new OrderController();
