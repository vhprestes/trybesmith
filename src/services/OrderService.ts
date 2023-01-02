import OrderModel from '../models/OrderModel';
import { IOrder } from '../interface/order.interface';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  async getOrders(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}