import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import route from './routers';

const app = express();
app.use(express.json());

app.use('/products', route.productRouter);
app.use('/users', route.userRouter);
app.use('/orders', route.orderRouter);

app.use(httpErrorMiddleware);
export default app;