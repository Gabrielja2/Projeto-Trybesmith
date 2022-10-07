import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class ProductController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public newUser = async (req: Request, res: Response) => {
    const token = await this.service.createNewUser(req.body);

    res.status(201).json({ token });
  };  
}