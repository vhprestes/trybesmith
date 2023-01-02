import { Request, Response } from 'express';
import { INewUser } from '../interface/user.interface';
import UserService from '../services/UserService';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  create = async (req: Request, res: Response) => {
    const { username, classe, level, password }: INewUser = req.body;
    const token = await this.service.create({ username, classe, level, password });
    return res.status(201).json({ token });
  };
}
