import dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

dotenv.config();

const generateToken = async ({ id, username }: Omit<IUser, 'password'>) => {
  const KEY_SECRET = 'secret';

  const payload = {
    id,
    username,
    
  };

  const jwtconfig = {
    expiresIn: '15d',
  };

  const token = sign(payload, KEY_SECRET, jwtconfig);

  return token;
};

export default generateToken;