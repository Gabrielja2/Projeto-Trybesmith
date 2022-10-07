import { IOrder } from '../interfaces/order';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class ProdService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async showOrders(): Promise<IOrder[]> {
    const orders = await this.model.show();

    return orders;
  }
}