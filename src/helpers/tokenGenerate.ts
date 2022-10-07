import dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

dotenv.config();

const generateToken = async (user: Omit<IUser, 'password'>) => {
  const KEY_SECRET: string = process.env.JWT_SECRET || 'secret';

  const payload = {
    user,
  };

  const jwtconfig = {
    expiresIn: '15d',
  };

  const token = sign(payload, KEY_SECRET, jwtconfig);

  return token;
};

export default generateToken;