export interface IProductsOrder {
  productsIds: number[];
}

export interface IUserOrder {
  userId: number;
}

export interface INewOrder extends IProductsOrder, IUserOrder {}

export interface IBaseOrder extends IUserOrder {
  id: number;
}

export interface IDatabaseOrder extends IBaseOrder {
  productId: number;
}

export interface IOrder extends IBaseOrder, IProductsOrder {}