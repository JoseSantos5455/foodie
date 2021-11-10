import { isAdmin, isAuthenticated } from '@/middlewares/auth.middleware';
import { Router } from 'express';
import orderController from './orderController';

const router = Router();

router.route('/').get(isAuthenticated, orderController.getUserOrders).post(isAuthenticated, orderController.addOrder);

router.route('/:id').get(isAuthenticated, orderController.getOrderById);

router.route('/admin').get(isAuthenticated, isAdmin, orderController.getAllOrders);
router.route('/admin/:id').delete(isAuthenticated, isAdmin, orderController.deleteOrder);

router.route('/admin/order-status/:id').patch(isAuthenticated, isAdmin, orderController.updateOrderStatus);
router.route('/admin/paid/:id').patch(isAuthenticated, isAdmin, orderController.updateOrderPayment);

export default router;
