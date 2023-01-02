import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  getOrders = async (req: Request, res: Response) => {
    const orders = await this.service.getOrders();
    return res.status(200).json(orders);
  };
}