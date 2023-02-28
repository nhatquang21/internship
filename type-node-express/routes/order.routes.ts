import express from 'express';
import { authRole, isAuth } from '../middlewares/isAuth.middleware';
import { OrderController } from '../controllers/order.controller';
const router = express.Router();

let oc: OrderController = new OrderController();

router.get('/orders', isAuth, authRole(['admin', 'employee']), oc.getAllOrders);
router.get(
  '/orders/:id',
  isAuth,
  authRole(['admin', 'employee']),
  oc.getOrderByID
);
router.post(
  '/orders/',
  isAuth,
  authRole(['admin', 'employee']),
  oc.createOrder
);
router.put(
  '/orders/:id',
  isAuth,
  authRole(['admin', 'employee']),
  oc.updateOrder
);
router.delete(
  '/orders/:id',
  isAuth,
  authRole(['admin', 'employee']),
  oc.deleteOrder
);
router.get(
  '/orders/features/mostvaluableorder',
  isAuth,
  authRole(['admin', 'employee']),
  oc.getTheMostValuableOrderToday
);
router.get(
  '/orders/features/profitFromDate',
  isAuth,
  authRole(['admin', 'employee']),
  oc.getProfitBetweenDate
);
router.get(
  '/orders/features/calculateProfitOneDay',
  isAuth,
  authRole(['admin', 'employee']),
  oc.getProfitOneSpecificDate
);

module.exports = router;
