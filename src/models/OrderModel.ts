import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/order';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  } 

  public async show(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `SELECT o.id, o.userId
        FROM Trybesmith.Orders as o
        JOIN Trybesmith.Products as p
        ON o.id = p.orderId
        GROUP BY o.id;;`,
    );
 
    return result as IOrder[];
  }
}
