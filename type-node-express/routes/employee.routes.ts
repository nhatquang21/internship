import express from 'express';
import { authRole, isAuth } from '../middlewares/isAuth.middleware';
import { EmployeeController } from '../controllers/employee.controller';
const router = express.Router();

let ec: EmployeeController = new EmployeeController();

router.get('/employees', isAuth, authRole('admin'), ec.getAllEmployees);
router.get('/employees/:id', isAuth, authRole('admin'), ec.getEmployeeByID);
router.post('/employees/', isAuth, authRole('admin'), ec.createEmployee);
router.delete('/employees/:id', isAuth, authRole('admin'), ec.deleteEmployee);
router.put('/employees/:id', isAuth, authRole('admin'), ec.updateEmployee);

module.exports = router;

// app.get('/employees', ec.getAllEmployees);
// app.get('/employees/:id', ec.getEmployeeByID);
// app.post('/employees/', ec.createEmployee);
// app.delete('/employees/:id', ec.deleteEmployee);
// app.put('/employees/:id', ec.updateEmployee);
