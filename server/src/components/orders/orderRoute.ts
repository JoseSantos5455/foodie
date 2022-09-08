import { isAdmin, isAuthenticated } from '@/middlewares/auth.middleware';
import { Routes } from '@/types/routes.interface';
import { Router } from 'express';
import orderController from './orderController';

class OrderRoute implements Routes {
  public path = '/orders/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route(`${this.path}admin`).get(isAuthenticated, isAdmin, orderController.getAllOrders);
    this.router
      .route(this.path)
      .get(isAuthenticated, orderController.getUserOrders)
      .post(isAuthenticated, orderController.addOrder);
    this.router.route(`${this.path}:id`).get(isAuthenticated, orderController.getOrderById);

    this.router
      .route(`${this.path}admin/:id`)
      .get(isAuthenticated, isAdmin, orderController.getOrderById)
      .delete(isAuthenticated, isAdmin, orderController.deleteOrder);

    this.router
      .route(`${this.path}admin/order-status/:id`)
      .patch(isAuthenticated, isAdmin, orderController.updateOrderStatus);
    this.router.route(`${this.path}admin/paid/:id`).patch(isAuthenticated, isAdmin, orderController.updateOrderPayment);
  }
}

export default OrderRoute;
