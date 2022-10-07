import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/user';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(newUser: IUser): Promise<IUser> {
    const { username, classe, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password ) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return { id: insertId, ...newUser };
  }  
}