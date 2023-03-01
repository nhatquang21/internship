import { DishController } from '../controllers/dish.controller';
import express from 'express';
import { authRole, isAuth } from '../middlewares/isAuth.middleware';
const router = express.Router();

let dc: DishController = new DishController();

router.get('/dishes/features/topthreedishes', dc.getTopThreeDishesAllTime);
router.get('/dishes/features/onebslfoodtoday', dc.getBestSellingFoodToday);
router.get('/dishes', dc.getAllDishes);
router.get('/dishes/:id', dc.getDishById);
router.post('/dishes', isAuth, authRole(['admin', 'employee']), dc.createDish);
router.put(
  '/dishes/:id',
  isAuth,
  authRole(['admin', 'employee']),
  dc.updateDish
);
router.delete(
  '/dishes/:id',
  isAuth,
  authRole(['admin', 'employee']),
  dc.deleteDish
);

module.exports = router;

// let dc: DishController = new DishController();

// app.get('/dishes/features/topthreedishes', dc.getTopThreeDishesAllTime);
// app.get('/dishes/features/onebslfoodtoday', dc.getBestSellingFoodToday);
// app.get('/dishes', dc.getAllDishes);
// app.get('/dishes/:id', dc.getDishById);
// app.post('/dishes/', isAuth, authRole(['admin', 'employee']), dc.createDish);
// app.put('/dishes/:id', isAuth, authRole(['admin', 'employee']), dc.updateDish);
// app.delete(
//   '/dishes/:id',
//   isAuth,
//   authRole(['admin', 'employee']),
//   dc.deleteDish
// );
