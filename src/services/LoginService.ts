import CustomError from '../helpers/CustomError';
import generateToken from '../helpers/tokenGenerate';
import { ILogin } from '../interfaces/login';
// import { IUser } from '../interfaces/user';
import connection from '../models/connection';
import LoginModel from '../models/LoginModel';

export default class LoginService {
  private model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(login: ILogin): Promise<string> {
    const [user] = await this.model.login(login);
    console.log('user', user);

    if (!user) throw new CustomError(401, 'Username or password invalid');

    const token = await generateToken(user);
    return token;
  }
}