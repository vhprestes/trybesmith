import { Pool, ResultSetHeader } from 'mysql2/promise';
import { INewProduct, IProduct } from '../interface/product.interface';
import connection from './connection';

export default class ProductModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(product: INewProduct): Promise<IProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    return {
      id: insertId,
      name,
      amount,
    };
  }

  async getProducts(): Promise<IProduct[]> {
    const QUERY = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(QUERY);
    return products as IProduct[];
  }
}