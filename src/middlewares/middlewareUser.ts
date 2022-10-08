import { Request, Response, NextFunction } from 'express';
import CustomError from '../helpers/CustomError';
import userSchema from '../schemas/userSchema';

function userMiddleware(req: Request, res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body;
  const { error } = userSchema.validate(
    { username, classe, level, password },
  );

  if (error?.details[0].type === 'string.min') {
    throw new CustomError(422, error.message);
  }

  if (error?.details[0].type === 'string.base') {
    throw new CustomError(422, error.message);
  }

  if (error?.details[0].type === 'number.greater') {
    throw new CustomError(422, error.message);
  }

  if (error) {
    throw new CustomError(400, error.message);
  }
  
  next(); 
}

export function levelMiddleware(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;  
  
  if (level === undefined) {
    throw new CustomError(400, '"level" is required');
  }
  
  if (typeof level !== 'number') {
    throw new CustomError(422, '"level" must be a number');
  }
    
  next(); 
}

export default userMiddleware;