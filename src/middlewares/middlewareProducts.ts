import 'express-async-errors';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../helpers/CustomError';
import productSchema from '../schemas/productSchema';

function productsMiddleware(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  const { error } = productSchema.validate({ name, amount });

  if (error?.details[0].type === 'string.min') {
    throw new CustomError(422, error.message);
  }

  if (error?.details[0].type === 'string.base') {
    throw new CustomError(422, error.message);
  }

  if (error) {
    throw new CustomError(400, error.message);
  }
  
  next(); 
}

export default productsMiddleware;