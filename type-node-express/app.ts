require('dotenv').config();
import { AuthController } from './controllers/auth.controller';
import { EmployeeController } from './controllers/employee.controller';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 3000;

const dishRoutes = require('./routes/dish.routes');
const orderRoutes = require('./routes/order.routes');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api', dishRoutes);
app.use('/api', orderRoutes);
require('expressjs-api-explorer')(app, express);
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

// let oc: OrderController = new OrderController();
// app.get('/orders', isAuth, authRole(['admin', 'employee']), oc.getAllOrders);
// app.get(
//   '/orders/:id',
//   isAuth,
//   authRole(['admin', 'employee']),
//   oc.getOrderByID
// );
// app.post('/orders/', isAuth, authRole(['admin', 'employee']), oc.createOrder);
// app.delete(
//   '/orders/:id',
//   isAuth,
//   authRole(['admin', 'employee']),
//   oc.deleteOrder
// );
// app.put('/orders/:id', isAuth, authRole(['admin', 'employee']), oc.updateOrder);
// app.get(
//   '/orders/features/mostvaluableorder',
//   isAuth,
//   authRole(['admin', 'employee']),
//   oc.getTheMostValuableOrderToday
// );
// app.get(
//   '/orders/features/profitFromDate',
//   isAuth,
//   authRole(['admin', 'employee']),
//   oc.getProfitBetweenDate
// );
// app.get(
//   '/orders/features/calculateProfitOneDay',
//   isAuth,
//   authRole(['admin', 'employee']),
//   oc.getProfitOneSpecificDate
// );

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
