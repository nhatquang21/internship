import express from 'express';
import { authRole, isAuth } from '../middlewares/isAuth.middleware';
import { AuthController } from '../controllers/auth.controller';
const router = express.Router();

let uc: AuthController = new AuthController();

router.get('/auth/find', isAuth, authRole('admin'), uc.findUsername);
router.post('/auth/login', uc.loginAccount);
router.get('/auth', isAuth, authRole('admin'), uc.getAllUsers);
router.get('/auth/:id', isAuth, authRole('admin'), uc.getUserByID);
router.post('/auth', isAuth, authRole('admin'), uc.createUser);
router.put('/auth/:id', isAuth, authRole(['admin', 'employee']), uc.updatePwd);
router.delete('/auth/:id', isAuth, authRole('admin'), uc.deleteUser);
module.exports = router;

///let uc: AuthController = new AuthController();
// app.post('/auth/find', uc.findUsername);
// app.post('/auth/login', uc.loginAccount);
// app.get('/auth', uc.getAllUsers);
// app.get('/auth/:id', uc.getUserByID);
// app.post('/auth', uc.createUser);
// app.put('/auth/:id', uc.updatePwd);
