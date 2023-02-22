import { DishController } from './controllers/DishController';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
const app = express();

require('expressjs-api-explorer')(app, express);

const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const settings = {
  format: 'html',
};

let dc: DishController = new DishController();

app.get('/dishes/topthreedishes', dc.getTopThreeDishesAllTime);
app.get('/dishes/onebslfoodtoday', dc.getBestSellingFoodToday);
app.get('/dishes', dc.getAllDishes);
app.get('/dishes/:id', dc.getDishById);
app.post('/dishes/', dc.createDish);
app.put('/dishes/:id', dc.updateDish);
app.delete('/dishes/:id', dc.deleteDish);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
