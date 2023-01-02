import { Request, Response, NextFunction } from 'express';
import { INewProduct } from '../interface/product.interface';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } : INewProduct = req.body;
  if (!name || !amount) {
    return res.status(400).json({ message: 'Missing name or amount' });
  }
  next();
};

export default validateProduct;