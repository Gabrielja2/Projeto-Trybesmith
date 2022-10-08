import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import productsMiddleware from '../middlewares/middlewareProducts';

const router = Router();
const productController = new ProductController();

router.post('/', productsMiddleware, productController.newProduct);
router.get('/', productController.products);

export default router;
