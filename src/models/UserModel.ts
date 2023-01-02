import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUserId, INewUser } from '../interface/user.interface';
import connection from './connection';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(user: INewUser): Promise<IUserId> {
    const { username, classe, level, password } = user;
    const QUERY = `
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)
    `;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      QUERY,
      [username, classe, level, password],
    );

    return {
      id: insertId,
      username,
      classe,
      level,
      password,
    };
  }
}
