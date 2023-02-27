require('dotenv').config();
import { AuthController } from './controllers/auth.controller';
import { EmployeeController } from './controllers/employee.controller';
import { OrderController } from './controllers/order.controller';
import { DishController } from './controllers/dish.controller';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import isAuth from './middlewares/isAuth.middleware';
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

app.get('/dishes/features/topthreedishes', dc.getTopThreeDishesAllTime);
app.get('/dishes/features/onebslfoodtoday', dc.getBestSellingFoodToday);
app.get('/dishes', isAuth, dc.getAllDishes);
app.get('/dishes/:id', dc.getDishById);
app.post('/dishes/', dc.createDish);
app.put('/dishes/:id', dc.updateDish);
app.delete('/dishes/:id', dc.deleteDish);

let oc: OrderController = new OrderController();
app.get('/orders', oc.getAllOrders);
app.get('/orders/:id', oc.getOrderByID);
app.post('/orders/', oc.createOrder);
app.delete('/orders/:id', oc.deleteOrder);
app.put('/orders/:id', oc.updateOrder);
app.get('/orders/features/mostvaluableorder', oc.getTheMostValuableOrderToday);
app.get('/orders/features/profitFromDate', oc.getProfitBetweenDate);
app.get('/orders/features/calculateProfitOneDay', oc.getProfitOneSpecificDate);

let ec: EmployeeController = new EmployeeController();
app.get('/employees', ec.getAllEmployees);
app.get('/employees/:id', ec.getEmployeeByID);
app.post('/employees/', ec.createEmployee);
app.delete('/employees/:id', ec.deleteEmployee);
app.put('/employees/:id', ec.updateEmployee);

let uc: AuthController = new AuthController();
app.post('/auth/find', uc.findUsername);
app.post('/auth/login', uc.loginAccount);
app.get('/auth', uc.getAllUsers);
app.get('/auth/:id', uc.getUserByID);
app.post('/auth', uc.createUser);
app.put('/auth/:id', uc.updatePwd);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
