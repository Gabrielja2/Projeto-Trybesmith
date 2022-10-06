import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import productRouter from './routers/productRouter';

const app = express();
app.use(express.json());

app.use('/products', productRouter);
app.use(httpErrorMiddleware);

export default app;