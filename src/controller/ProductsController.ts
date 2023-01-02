import { Request, Response } from 'express';
import { INewProduct, IProduct } from '../interface/product.interface';
import ProductService from '../services/ProductService';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }
  
  create = async (req: Request, res: Response) => {
    const { name, amount }: INewProduct = req.body;
    const product: IProduct = await this.service.create({ name, amount });
    return res.status(201).json(product);
  };

  getProducts = async (req: Request, res: Response) => {
    const products: IProduct[] = await this.service.getProducts();
    if (!products) return res.status(404).json({ message: 'Not found' });
    return res.status(200).json(products);
  };
}