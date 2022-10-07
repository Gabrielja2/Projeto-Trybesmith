import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const token = await this.service.login(req.body);

    res.status(200).json({ token });
  };
}