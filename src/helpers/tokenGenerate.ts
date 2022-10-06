import { Secret, sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/user';

dotenv.config();

const generateToken = async (user: Omit<IUser, 'password'>) => 
  sign(user, process.env.JWT_SECRET as Secret);

export default generateToken;