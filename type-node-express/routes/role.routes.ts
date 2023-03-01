import { RoleController } from './../controllers/role.controller';
import express from 'express';
import { authRole, isAuth } from '../middlewares/isAuth.middleware';

const router = express.Router();

let rc: RoleController = new RoleController();

router.get('/roles', isAuth, authRole('admin'), rc.getAllRoles);
router.get('/roles/:id', isAuth, authRole('admin'), rc.getRoleByID);
router.post('/roles/', isAuth, authRole('admin'), rc.createRole);
router.delete('/roles/:id', isAuth, authRole('admin'), rc.deleteRole);
router.put('/roles/:id', isAuth, authRole('admin'), rc.updateRole);

module.exports = router;

// app.get('/employees', ec.getAllEmployees);
// app.get('/employees/:id', ec.getEmployeeByID);
// app.post('/employees/', ec.createEmployee);
// app.delete('/employees/:id', ec.deleteEmployee);
// app.put('/employees/:id', ec.updateEmployee);
