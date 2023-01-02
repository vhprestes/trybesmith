import { INewProduct, IProduct } from '../interface/product.interface';
import ProductModel from '../models/ProductModel';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  async create(product: INewProduct) {
    const newProduct: IProduct = await this.model.create(product);
    return newProduct;
  }

  async getProducts(): Promise<IProduct[]> {
    const products: IProduct[] = await this.model.getProducts();
    return products;
  }
}