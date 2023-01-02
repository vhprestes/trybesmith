import { Pool } from 'mysql2/promise';
import connection from './connection';
import { IOrder } from '../interface/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const QUERY = `
    SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) as productsIds
    FROM Trybesmith.Orders as ord
    INNER JOIN Trybesmith.Products as prod
    ON ord.id = prod.orderId
    GROUP BY ord.id
    ORDER BY ord.userId
    `;
    const [orders] = await this.connection.execute(QUERY);

    return orders as IOrder[];
  }
}