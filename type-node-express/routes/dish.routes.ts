import { DishController } from '../controllers/dish.controller';
import express from 'express';
const router = express.Router();

let dc: DishController = new DishController();

router.get('/features/topthreedishes', dc.getTopThreeDishesAllTime);
router.get('/features/onebslfoodtoday', dc.getBestSellingFoodToday);
router.get('', dc.getAllDishes);
router.get('/:id', dc.getDishById);
router.post('', dc.createDish);
router.put('/:id', dc.updateDish);
router.delete('/:id', dc.deleteDish);

module.exports = router;
