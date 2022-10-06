import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/product';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(newProduct: IProduct): Promise<IProduct> {
    const { name, amount } = newProduct;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    console.log('result', result.insertId);
    return { id: result.insertId, ...newProduct };
  }
}