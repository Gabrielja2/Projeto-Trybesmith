import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public orders = async (req: Request, res: Response) => {
    const allOrders = await this.service.showOrders();

    res.status(200).json(allOrders);
  };
}