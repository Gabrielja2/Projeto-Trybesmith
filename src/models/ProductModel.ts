import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/product';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(newProduct: IProduct): Promise<IProduct> {
    const { name, amount } = newProduct;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    // console.log('result', result.insertId);
    return { id: insertId, ...newProduct };
  }

  public async show(): Promise<IProduct[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    console.log('result', result);   
    return result as IProduct[];
  }
}