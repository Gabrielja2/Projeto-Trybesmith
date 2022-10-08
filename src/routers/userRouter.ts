import { Router } from 'express';
import UserController from '../controllers/UserController';
import userMiddleware, { levelMiddleware } from '../middlewares/middlewareUser';

const router = Router();
const userController = new UserController();

router.post('/', levelMiddleware, userMiddleware, userController.newUser);

export default router;