import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/middlewareError';
import loginMiddleware from './middlewares/middlewareLogin';
import route from './routers';

const app = express();
app.use(express.json());

app.use('/products', route.productRouter);
app.use('/users', route.userRouter);
app.use('/orders', route.orderRouter);
app.use('/login', loginMiddleware, route.loginRouter);

app.use(errorHandler);
export default app;