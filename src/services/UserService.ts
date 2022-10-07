import { IUser } from '../interfaces/user';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import generateToken from '../helpers/tokenGenerate';

export default class ProdService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createNewUser(user: IUser): Promise<string> {
    await this.model.create(user);

    const token = await generateToken({ ...user });
    return token;
  }  
}