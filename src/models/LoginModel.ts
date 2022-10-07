import { Pool } from 'mysql2/promise';
import { ILogin } from '../interfaces/login';
import { IUser } from '../interfaces/user';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login({ username, password }: ILogin): Promise<IUser[]> {
    const [user] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    return user as IUser[];
  }
}
