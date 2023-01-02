import jwt = require('jsonwebtoken');
import UserModel from '../models/UserModel';
import { INewUser } from '../interface/user.interface';
// import generateToken from '../middlewares/generateToken';

const SECRET_KEY = process.env.SECRET || 'secret';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(user: INewUser): Promise<string> {
    await this.model.create(user);
    // const token = generateToken(username, id);

    const token = jwt.sign({ user }, SECRET_KEY);
    return token;
  }
}